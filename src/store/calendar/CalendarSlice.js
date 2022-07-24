import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';


const tempEvent = {
    _id: new Date().getTime(),
    title: "Fiesta de cumpelanos",
    notes: "hay que comprar pan",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
        _id: "123",
        name: "Fernando",
    },
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent,
        ],
        activeEvent: null,
    },
    reducers: {
        // Cambiamos el estado del evento activo y lo guardamos en el estado
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        // Agregamos un evento al calendario
        onAddNewEvent: (state, { payload }) => {
            // El payload seria la nueva nota y lo insertamos en el state
            state.events.push(payload);
            // Limpiamos el evento activo
            state.activeEvent = null;
        },
        // Actulizamos la nota activa
        onUpdateEvent: (state, { payload }) => {
            // Toamos los eventos que estan el el initialState y los guardamos en una variable
            state.events = state.events.map(event => {
                // Si el evento es el mismo que el activo
                if (event._id === payload._id) {
                    return payload
                }
                return event
            })
        },

        // Eliminamos un evento del calendario
        onDeleteEvent: (state) => {
            // sI TENEMOS UNA NOTA ACTIVE HACE ESTO
            if (state.activeEvent) {
                // Regresamos todos los eventos cuyo id sea diferente al de la nota active
                state.events = state.events.filter(event => event._id !== state.activeEvent._id);
                state.act9iveEvent = null;
            }
            // SINO HAY UNA NOTA ACTIVE NO HACE NADA
        },
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;