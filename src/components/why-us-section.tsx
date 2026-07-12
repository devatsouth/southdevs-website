import Link from "next/link";
import { ArrowRightIcon } from "./icons";

const REASONS = [
  {
    title: "Built from the South",
    description:
      "Proudly based in Southern Philippines, we bring world-class quality with a deep understanding of local business needs.",
  },
  {
    title: "End-to-End Delivery",
    description:
      "From concept to deployment — we handle design, development, testing, and support all in one place.",
  },
  {
    title: "Transparent Communication",
    description:
      "No black boxes. We keep you in the loop every step of the way with regular updates and honest timelines.",
  },
  {
    title: "Scalable Solutions",
    description:
      "We build with growth in mind. Whether you're a startup or scaling fast, our systems grow with you.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="w-full bg-neutral-50">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">Why SouthDevs</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-black sm:text-4xl">
            A partner you can trust &amp; rely on.
          </h2>
          <p className="mt-4 max-w-md text-sm text-neutral-500">
            We&apos;re not just a dev shop — we&apos;re a dedicated partner invested in your
            success. Every project we take on is treated with the same care we&apos;d give our
            own.
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-black hover:underline"
          >
            Let&apos;s talk about your project
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="divide-y divide-black/10">
          {REASONS.map((reason, i) => (
            <div key={reason.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
              <span className="mt-1 w-6 shrink-0 font-mono text-xs text-neutral-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-black">{reason.title}</h3>
                <p className="mt-1 text-sm text-neutral-500">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
