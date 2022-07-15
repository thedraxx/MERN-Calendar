import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

export const AppRouter = () => {
  const authStatus = "not-authenticated";

  return (
    <div>
      <Routes>
        {/* Si no estas autenticado te manda al LoginPage */}
        {authStatus === "not-authenticated" ? (
          <Route path="/auth/*" element={<LoginPage />} />
        ) : (
          // Si estas autenticado te manda al CalendarPage
          <Route path="/calendar" element={<CalendarPage />} />
        )}
        {/* Si no estas autenticado y poner cualquier cosa te redirige a auth/login */}
        <Route path="/*" element={<Navigate to="./auth/login" />} />
      </Routes>
    </div>
  );
};
