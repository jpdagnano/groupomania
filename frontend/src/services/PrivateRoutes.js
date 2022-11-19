import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  fetch("http://localhost:3001/check-token", {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
  });
  return true;
};

const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
