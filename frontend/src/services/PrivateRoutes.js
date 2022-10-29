import React from "react";

import { Navigate, Outlet } from "react-router-dom";
const useAuth = () => {
  const user = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  if ((user, token)) {
    return true;
  } else {
    return false;
  }
};
const ProtectedRoutes = () => {
  const auth = useAuth();
  console.log(auth);
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
