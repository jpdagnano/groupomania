import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../components/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Route to="/" />;
  }
  return children;
};
