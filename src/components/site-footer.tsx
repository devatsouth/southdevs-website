import Link from "next/link";
import { SocialLinks } from "./social-links";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <span className="text-lg font-extrabold tracking-tight">
          <span className="text-white">south</span>
          <span className="text-neutral-500">devs</span>
        </span>

        <nav className="flex items-center gap-6 text-xs text-neutral-500">
          <Link href="/legal" className="transition-colors hover:text-white">
            Legal
          </Link>
          <Link href="/careers" className="transition-colors hover:text-white">
            Careers
          </Link>
        </nav>

        <SocialLinks iconClassName="h-4 w-4 text-neutral-500" hoverClassName="hover:text-white" />
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center sm:px-6">
        <p className="font-mono text-xs text-neutral-500">
          © {year} SouthDevs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
