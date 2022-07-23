import { useSelector, useDispatch } from 'react-redux';
import { onSetActiveEvent } from '../store';


export const useCalendarStore = () => {

    // Importamos el dispatch de redux
    const dispatch = useDispatch();

    // Usamos el selector para obtener el state de calendar
    const { events, activeEvent } = useSelector(state => state.calendar);

    // Funcion para cambiar el evento activo 
    const setActiveEvent = (calendarEvent) => {
        // Hacemos dispatch de la accion y le pasamos el evento al cual se hizo click
        dispatch(onSetActiveEvent(calendarEvent));
    }

    // Retornamos el state de calendar
    return {
        // * Propiedades
        events,
        activeEvent,

        // * Metodos
        setActiveEvent,
    }
}