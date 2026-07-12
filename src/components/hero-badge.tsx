export function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 py-1.5 px-3 text-xs text-neutral-500">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
      <span>{children}</span>
    </div>
  );
}
