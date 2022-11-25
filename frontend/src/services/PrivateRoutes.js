import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
};

const useAuth = async () => {
  await fetch("http://localhost:3001/check-token", {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
  }).then((response) =>
    response.json().then((data) => {
      if (data.userId) {
        return true;
      } else {
        return false;
      }
    })
  );
};

export default ProtectedRoutes;
