import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at SouthDevs — no open positions right now, but we'd love to hear from you.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">{"// Careers"}</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] text-black sm:text-5xl">
          Join our team.
        </h1>
        <p className="mt-5 max-w-md text-sm text-neutral-500 sm:text-base">
          We don&apos;t have any open positions right now, but we&apos;re always growing. Check
          back soon, or reach out if you think you&apos;d be a great fit.
        </p>
        <Link
          href="/contact-us"
          className="mt-8 inline-flex items-center justify-center gap-2 bg-primary px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-shade"
        >
          Reach out anyway
        </Link>
      </main>

      <SiteFooter />
    </div>
  );
}
