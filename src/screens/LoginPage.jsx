import { useState } from "react";
import api from "../services/api";
import { setToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const { data } = await api.post("/login", { usuario, password }); // 👈
      setToken(data.token);
      navigate("/campeones");
    } catch (err) {
      setErr("Credenciales inválidas o usuario inactivo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-dvh grid place-items-center bg-gray-50">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow"
      >
        <h1 className="mb-4 text-xl font-semibold">Iniciar sesión</h1>

        <label className="mb-2 block text-sm font-medium">Usuario</label>
        <input
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="mb-4 w-full rounded border px-3 py-2"
          autoComplete="username"
          required
        />

        <label className="mb-2 block text-sm font-medium">Contraseña</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="mb-4 w-full rounded border px-3 py-2"
          autoComplete="current-password"
          required
        />

        {err && (
          <div className="mb-3 rounded border border-red-300 bg-red-50 p-2 text-sm text-red-700">
            {err}
          </div>
        )}

        <button
          disabled={loading}
          className="w-full rounded bg-black px-4 py-2 text-white disabled:opacity-60"
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </main>
  );
}
