import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar/CalendarSlice";
import { uiSlice } from "./ui/uiSlice";

// Configuracion del Store de Redux
export const store = configureStore({
    reducer: {
        // ... your reducer
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer,
    }
})