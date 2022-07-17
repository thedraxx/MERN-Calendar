import { createSlice } from '@reduxjs/toolkit';

// Slice de Redux para el manejo de la UI
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
    },
    reducers: {
        // Se llama cuando la persona quiere abrir el modal
        onOpenDateModal: (state) => {
            state.isDateModalOpen = true;
        },
        // Se llama cuando la persona quiere cerrar el modal
        onCloseDateModal: (state) => {
            state.isDateModalOpen = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;