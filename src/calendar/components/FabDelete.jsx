import React from "react";
import { useCalendarStore } from "../../hooks";

export const FabDelete = () => {
  // Uso el custom hook para acceder al store de UI
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  // Se activa cuando se hace click en el boton de eliminar
  const handleDelete = () => {
    startDeletingEvent();
  };

  return (
    // Si hay un evento seleccionado, se muestra el boton de eliminar, sino no
    <button
      className="btn btn-danger fab-danger"
      onClick={handleDelete}
      style={{ display: hasEventSelected ? "" : "none" }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
