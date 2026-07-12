import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./social-links";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Clients", href: "/#clients" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-1.5 text-xl font-extrabold tracking-tight sm:text-2xl">
          <Image
            src="/images/logo-standard.png"
            alt="SouthDevs"
            width={100}
            height={100}
            priority
            className="h-7 w-7 sm:h-8 sm:w-8"
          />
          <span>
            <span className="text-black">south</span>
            <span className="text-neutral-400">devs</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-500 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-black">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <SocialLinks className="hidden sm:flex" iconClassName="h-4 w-4 text-neutral-400" />
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center bg-black px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-neutral-800"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
