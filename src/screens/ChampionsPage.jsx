import { useEffect, useState } from "react";
import api from "../services/api";
import ChampionCard from "../components/ChampionCard";
import { clearToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function ChampionsPage() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [err,setErr] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true); setErr("");
    try {
      const { data } = await api.get("/api/lol/campeones");
      setData(data);
    } catch (e) {
      setErr(e?.response?.data?.message || "Error al cargar campeones");
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{ fetchData(); }, []);

  const logout = () => {
    clearToken();
    navigate("/login", { replace: true });
  };

  return (
    <main className="min-h-dvh bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Campeones</h1>
            <p className="text-sm text-gray-600">Listado con roles e imágenes</p>
          </div>
          <button onClick={logout} className="rounded bg-gray-900 px-3 py-2 text-sm text-white">
            Cerrar sesión
          </button>
        </div>

        {err && <div className="mb-6 rounded border border-red-300 bg-red-50 p-4 text-red-700">{err}</div>}

        {loading ? (
          <p>Cargando…</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((c)=> <ChampionCard key={c.id_campeon} c={c} />)}
          </div>
        )}
      </div>
    </main>
  );
}
