import { useSelector } from 'react-redux';

export const useCalendarStore = () => {

    // Usamos el selector para obtener el state de calendar
    const { events, activeEvent } = useSelector(state => state.calendar);


    // Retornamos el state de calendar
    return {
        // * Propiedades
        events,
        activeEvent,

        // * Metodos
    }
}