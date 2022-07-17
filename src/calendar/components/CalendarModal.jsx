import { addHours, differenceInSeconds } from "date-fns";
import React, { useMemo, useState } from "react";
import Modal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useUiStore } from "../../hooks";

registerLocale("es", es);
// Modal Que se superpone en la pantalla del calendario
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  //* Uso del hook para acceder al store de UI
  const { isDateModalOpen, closeDateModal } = useUiStore();

  // Cambia el estado true o false cuando se envia el formulario
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Formulario
  const [formValues, setFormValues] = useState({
    title: "FERNANDO",
    notes: "gerrando",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  // Usamos useMemo para memorizar el valor, solo va a cambiar el valor cuando el titulo cambie o formSubmited cambia
  const titleClass = useMemo(() => {
    // Si formSubmitted no se dispara, entonces mandamos un campo vacio
    if (!formSubmitted) return "";
    // Si se disparo el formulario, entonces mandamos un campo con una clase
    // Si el titulo es vacio, entonces mandamos un campo con una clase is invalid
    return formValues.title.length > 0 ? "" : "is-invalid";
  }, [formValues.title, formSubmitted]);

  // Manejo de los campos del formulario
  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  // Manejo de la fecha
  const onDateChange = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  //  Una vez dentro del modal, este se cierra al hacer un click fuera
  const onCloseModal = () => {
    // console.log("cerrando modal");
    // CloseDateModal viene del hook useUiStore
    closeDateModal();
  };

  // Se ejectua cuando se presiona el boton de guardar
  const onSubmit = (event) => {
    event.preventDefault();
    // Obtenemos la distancia entre las fechas de inicio y fin
    const difference = differenceInSeconds(formValues.end, formValues.start);
    // Seteamos el formSubmitted a true
    setFormSubmitted(true);

    // Validacion si la fecha de fin e inicio es NaN o sila fecha de fin es menor que la de inicio
    // O si la diferencia entre las fechas es menor a 0
    if (isNaN(difference) || difference <= 0) {
      Swal.fire("Fechas incorrectas", "Revisar fechas ingresadas", "error");
      return;
    }
    // Si el titulo esta vacio
    if (formValues.title.length <= 0) return;

    // Si todo sale bien
    console.log(formValues);
  };

  return (
    // Modal que se superpone en la pantalla del calendario
    <Modal
      // Si isDateModalOpen es true, entonces se muestra el modal
      isOpen={isDateModalOpen}
      // Cierra el modal cuando se hace click fuera del modal
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName={"modal-fondo"}
      closeTimeoutMS={200}
    >
      {/* Contenido del modal */}
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={formValues.start}
            className="form-control"
            onChange={(event) => onDateChange(event, "start")}
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            minDate={formValues.start}
            selected={formValues.end}
            className="form-control"
            onChange={(event) => onDateChange(event, "end")}
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${titleClass}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
