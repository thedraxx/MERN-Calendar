import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';


const tempEvent = {
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

    }
});


// Action creators are generated for each case reducer function
export const { } = calendarSlice.actions;