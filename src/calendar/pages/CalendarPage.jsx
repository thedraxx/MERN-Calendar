import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from "date-fns/locale/en-US";
import { addHours, parse, startOfWeek, getDay, format } from "date-fns";
import { Navbar } from "../";

// Configuracion del calendario, BIG CALENDAR
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "All Day Event",
    notes: "hay que comprar pan",
    start: new Date(2020, 3, 0),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "juan",
    },
  },
];

export const CalendarPage = () => {
  return (
    <>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
      />
    </>
  );
};
