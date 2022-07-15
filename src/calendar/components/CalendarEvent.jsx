import React from "react";

export const CalendarEvent = ({ event }) => {
  // Obtenemos los datos relacionados a ese evento del calendario
  const { title, user } = event;

  return (
    <>
      <strong>{title}</strong>
      <span> - {user.name} - </span>
    </>
  );
};
