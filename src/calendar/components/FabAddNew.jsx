import { addHours } from "date-fns";
import React from "react";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {
  // Uso el custom hook para acceder al store de UI
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  // Se activa cuando se hace click en el boton
  const handleClickNew = () => {
    // Manipulamos el setActive para que se ponga el evento vacio
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Fernando",
      },
    });

    // Cuando se hace click, se abre el modal
    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
