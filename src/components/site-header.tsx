"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SocialLinks } from "./social-links";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Clients", href: "/#clients" },
];

const SCROLL_THRESHOLD = 24;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 border-b transition-all duration-300 ${
        scrolled
          ? "border-black/5 bg-white/80 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
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

        <div className="flex items-center gap-7">
          <SocialLinks className="hidden sm:flex" iconClassName="h-4 w-4 text-neutral-400" />
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center bg-primary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-shade"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
