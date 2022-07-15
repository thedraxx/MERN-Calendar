import { parse, startOfWeek, getDay, format } from "date-fns";
import { dateFnsLocalizer } from "react-big-calendar";
import esES from 'date-fns/locale/es';

// Configuracion del calendario, localizaciones, formatado, etc... BIG CALENDAR
const locales = {
    "es": esES,
};

export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
