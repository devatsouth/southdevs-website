"use client";

import { useState } from "react";
import { CloseIcon } from "./icons";

export function HeroBadge({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 py-1.5 pl-3 pr-2 text-xs text-neutral-500">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
      <span>{children}</span>
      <button
        type="button"
        aria-label="Close badge"
        onClick={() => setVisible(false)}
        className="ml-1 flex h-4 w-4 items-center justify-center text-neutral-300 transition-colors hover:text-black"
      >
        <CloseIcon className="h-3 w-3" />
      </button>
    </div>
  );
}
