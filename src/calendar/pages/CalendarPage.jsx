import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { Navbar, CalendarEvent, CalendarModal } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";
import { useCalendarStore, useUiStore } from "../../hooks";

export const CalendarPage = () => {
  // Uso el custom hook para acceder al store de UI
  const { openDateModal } = useUiStore();
  // use el custom hook para acceder al store de calendar
  const { events, setActiveEvent } = useCalendarStore();

  // Buscamos en el localStorage el ultimo lugar visitado
  const [lastView, setLastView] = useState(
    // Si no existe el ultimo lugar visitado,  agarramos por defecto que vaya al month
    localStorage.getItem("lastView") || "month"
  );

  // se activa cuando hay un cambio en el calendario
  const eventStyleGetter = () => {
    const style = {
      backgroundColor: "#347cf7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  // se activa cuando se hace dobleclick en un evento
  const onDoubleClick = (event) => {
    // console.log({ DoubleClick: event });
    // Cuando se hace dobleclick, se abre el modal
    openDateModal();
  };
  // Se activa cuando se hace click en un evento
  const onSelect = (event) => {
    // console.log({ Click: event });
    // Le enviamos el evento que estamos haciendo click al custom hook para acceder al store de calendar
    setActiveEvent(event);
  };

  // Se dipara cuando se cambia el tipo de vista (mes,dia,semana,agenda)
  const onViewChanged = (event) => {
    // Se guarda en el localStorage el ultimo lugar visitado
    // El evento es el que tiene los datos de donde estamos situados
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Aca esta el Calendario */}
      {/* Tambien esta la configuracion del calendario */}
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        // Por defecto inicia en agenda
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        // Que muestre todo en spanish
        messages={getMessagesES()}
        // se activa cuando hay un cambio en el calendario
        eventPropGetter={eventStyleGetter}
        // Eventos que se muestran en el calendario
        components={{
          event: CalendarEvent,
        }}
        // Se activa cuando se hace doble click en un evento
        onDoubleClickEvent={onDoubleClick}
        // Se activa cuando se hace click en un evento
        onSelectEvent={onSelect}
        // Se activa cuando se cambia el tipo de vista (mes,dia,semana,agenda)
        onView={onViewChanged}
      />

      {/* Aca esta el modal */}
      <CalendarModal />
    </>
  );
};
