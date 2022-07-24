import { useSelector, useDispatch } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from '../store';


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

    // Funcion que inicia el proceso de grabacion
    const startSavingEvent = async (calendarEvent) => {
        //TODO llegar al backen

        // TODO: todo sale BIEN
        if (calendarEvent._id) {
            // Estoy actualizando
            dispatch(onUpdateEvent({ ...calendarEvent }));
        } else {
            // Estoy creando
            // Agarramos el evento y le agregamos el ID
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
        }
    }

    // Retornamos el state de calendar
    return {
        // * Propiedades
        events,
        activeEvent,

        // * Metodos
        setActiveEvent,
        startSavingEvent,
    }
}