import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { hasDbChoice } from "../utils/dbChoice"; // 👈

export default function ProtectedRoute({ children }) {
  if (!hasDbChoice()) return <Navigate to="/db" replace />; // 👈 primero elegís DB
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
}
