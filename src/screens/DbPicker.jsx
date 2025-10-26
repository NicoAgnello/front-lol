import { setDbChoice } from "../utils/dbChoice";
import { useNavigate } from "react-router-dom";

export default function DbPicker() {
  const nav = useNavigate();
  const pick = (db) => {
    setDbChoice(db);
    nav("/login");
  };

  return (
    <main className="min-h-dvh grid place-items-center bg-gray-50">
      <div className="bg-white p-6 rounded-2xl shadow-md w-[360px] space-y-4 text-center">
        <h1 className="text-2xl font-bold text-emerald-600">Elegí la base</h1>
        <p className="text-gray-600">¿Con cuál querés trabajar?</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            className="py-3 rounded-xl border hover:bg-gray-50"
            onClick={() => pick("mysql")}
          >
            MySQL
          </button>
          <button
            className="py-3 rounded-xl border hover:bg-gray-50"
            onClick={() => pick("mongo")}
          >
            Mongo
          </button>
        </div>
        <p className="text-xs text-gray-400">
          Podés cambiarla cerrando sesión.
        </p>
      </div>
    </main>
  );
}
