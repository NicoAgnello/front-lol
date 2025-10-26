import RoleBadge from "./RoleBadge";

export default function ChampionCard({ c }) {
  const imgUrl = `${import.meta.env.VITE_API_BASE_URL}${c.imagen_url}`;
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md transition">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imgUrl}
          alt={c.nombre}
          onError={(e) => {
            if (e.currentTarget.dataset.fallback === "1") return;
            e.currentTarget.dataset.fallback = "1";

            e.currentTarget.src = `${
              import.meta.env.VITE_API_BASE_URL
            }/public/img/campeones/placeholder.avif`;
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{c.nombre}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {c.descripcion}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(c.roles || []).map((r, i) => (
            <RoleBadge key={i} role={r} />
          ))}
        </div>
      </div>
    </div>
  );
}
