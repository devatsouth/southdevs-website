import Link from "next/link";
import { ArrowRightIcon } from "./icons";

export function CtaSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-black py-24 text-center sm:py-32"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">Ready to start?</p>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
          Let&apos;s build your next big thing.
        </h2>
        <p className="mt-4 max-w-md text-sm text-neutral-400 sm:text-base">
          Book a free, no-commitment consultation with our team and let&apos;s explore how we can
          help your business grow digitally.
        </p>
        <Link
          href="/contact-us"
          className="mt-8 inline-flex items-center gap-2 bg-white px-5 py-3.5 text-sm font-bold text-black transition-colors hover:bg-neutral-200"
        >
          Let&apos;s discuss your business
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
