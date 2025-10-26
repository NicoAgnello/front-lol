export default function RoleBadge({ role }) {
  const color = {
    TOP:"bg-amber-100 text-amber-800",
    MID:"bg-indigo-100 text-indigo-800",
    ADC:"bg-emerald-100 text-emerald-800",
    JUNGLA:"bg-teal-100 text-teal-800",
    SUPPORT:"bg-sky-100 text-sky-800",
  }[role] || "bg-gray-100 text-gray-800";
  return <span className={`px-2 py-0.5 rounded-full text-xs ${color}`}>{role}</span>;
}
