import { useNavigate } from "react-router-dom";
import { clearToken } from "../utils/auth";
import { clearDbChoice } from "../utils/dbChoice";

export default function LogoutButton({ className = "" }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    clearDbChoice();
    navigate("/db", { replace: true }); // obligás a elegir DB de nuevo
  };

  return (
    <button
      onClick={handleLogout}
      className={
        className ||
        "px-3 py-1.5 rounded-md bg-red-600 text-white text-sm hover:bg-red-700 transition"
      }
    >
      Cerrar sesión
    </button>
  );
}
