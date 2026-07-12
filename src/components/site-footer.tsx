import { SocialLinks } from "./social-links";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <span className="text-lg font-extrabold tracking-tight">
          <span className="text-white">south</span>
          <span className="text-neutral-500">devs</span>
        </span>
        <p className="font-mono text-xs text-neutral-500">
          © {year} SouthDevs. All rights reserved.
        </p>
        <SocialLinks iconClassName="h-4 w-4 text-neutral-500" hoverClassName="hover:text-white" />
      </div>
    </footer>
  );
}
