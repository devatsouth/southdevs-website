import Image from "next/image";
import Link from "next/link";

const CLIENTS = [
  {
    name: "Print2Go",
    logo: { src: "/images/clients/print2go-trimmed.png", width: 2302, height: 1858 },
    quote: "SouthDevs delivered exactly what we needed, on time and without the back-and-forth.",
  },
  {
    name: "SmartDent",
    logo: { src: "/images/clients/smartdent.png", width: 450, height: 453 },
    quote: "Our booking system just works now. Patients notice, and so do we.",
  },
  {
    name: "JP Romero Dental Group",
    logo: { src: "/images/clients/jpromero2-trimmed.png", width: 2229, height: 999 },
    quote: "Professional, responsive, and easy to work with from kickoff to launch.",
  },
];

export function ClientsSection() {
  return (
    <section id="clients" className="mx-auto w-full max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
      <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">Trusted by</p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-black sm:text-4xl">
        Companies that trusted us
      </h2>
      <p className="mx-auto mt-4 max-w-md text-sm text-neutral-500">
        We&apos;ve had the privilege of partnering with great businesses. Hover on a logo to see
        what they say.
      </p>

      <div className="mx-auto mt-12 flex max-w-2xl flex-col divide-y divide-black/10 border border-black/10 sm:flex-row sm:divide-x sm:divide-y-0">
        {CLIENTS.map((client) => (
          <div
            key={client.name}
            className="group relative flex flex-1 flex-col items-center justify-center gap-3 overflow-hidden px-8 py-10 transition-colors hover:bg-neutral-50"
          >
            <div className="flex h-16 items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
              <Image
                src={client.logo.src}
                alt={client.name}
                width={client.logo.width}
                height={client.logo.height}
                className="h-full w-auto object-contain"
              />
            </div>

            <p className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center text-sm italic text-neutral-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              &ldquo;{client.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-neutral-500">
        Join these companies —{" "}
        <Link href="/contact-us" className="font-medium text-black underline underline-offset-2">
          let&apos;s build something great together
        </Link>
        .
      </p>
    </section>
  );
}
