import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/uiSlice";

// Configuracion del Store de Redux
export const store = configureStore({
    reducer: {
        // ... your reducer
        ui: uiSlice.reducer,
    }
})