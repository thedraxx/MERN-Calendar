import { useSelector, useDispatch } from 'react-redux';
import { onCloseDateModal, onOpenDateModal } from '../store/ui/uiSlice';

export const useUiStore = () => {

    // Usamos dispatch para acceder al store
    const dispatch = useDispatch();

    // Usamos el useSelector para obtener el estado de la UI
    const { isDateModalOpen } = useSelector(state => state.ui);

    // Esta funcion se llama cuando la persona quiere abrir el modal
    const openDateModal = () => {
        // Usamos dispatch para ejecutar la accion que se encarga de abrir el modal
        // Esta accion se encuentra en uiSlice.js
        dispatch(onOpenDateModal());
    }

    const closeDateModal = () => {
        // Usamos dispatch para ejecutar la accion que se encarga de cerrar el modal
        // Esta accion se encuentra en uiSlice.js
        dispatch(onCloseDateModal());
    }

    // Retornamos el estado de la UI
    return {
        //* Propiedades 
        isDateModalOpen,
        openDateModal,
        closeDateModal,
        //* Metodos
    }

}