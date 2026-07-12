const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

export function StatsRow() {
  return (
    <div className="mt-16 grid w-full max-w-3xl grid-cols-3 divide-x divide-black/10 border-t border-black/10 pt-8">
      {STATS.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-2xl font-extrabold text-black sm:text-3xl">{stat.value}</p>
          <p className="mt-1 text-xs text-neutral-500 sm:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
