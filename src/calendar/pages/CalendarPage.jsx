import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { Navbar, CalendarEvent } from "../";
import { localizer, getMessagesES } from "../../helpers";

// Evento que se muestra en el calendario
const events = [
  {
    title: "Fiesta de cumpelanos",
    notes: "hay que comprar pan",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Fernando",
    },
  },
];

export const CalendarPage = () => {
  // se activa cuando hay un cambio en el calendario
  const eventStyleGetter = (event, start, end, isSelected) => {
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
      />
    </>
  );
};
