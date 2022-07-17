import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
    reducer: {
        // ... your reducer
        ui: uiSlice.reducer,
    }
})