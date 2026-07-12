import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Legal",
  description: "Business registration and legal information for SouthDevs.",
  alternates: {
    canonical: "/legal",
  },
};

const REGISTRATION_DETAILS = [
  {
    label: "Business Name",
    value: "SouthDevs Software Development Services (Pocketdevs Website & Application Services)",
  },
  { label: "Registration Date", value: "February 8, 2024" },
  { label: "Business Name Number", value: "5759186" },
  { label: "Status", value: "DTI-Registered" },
];

export default function LegalPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">{"// Legal"}</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] text-black sm:text-5xl">
          Business Registration.
        </h1>
        <p className="mt-5 text-sm text-neutral-500 sm:text-base">
          SouthDevs is a registered business under the Philippine Department of Trade and
          Industry (DTI).
        </p>

        <dl className="mt-10 divide-y divide-black/10 border border-black/10">
          {REGISTRATION_DETAILS.map((item) => (
            <div key={item.label} className="grid grid-cols-1 gap-1.5 p-5 sm:grid-cols-3 sm:gap-4">
              <dt className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                {item.label}
              </dt>
              <dd className="text-sm font-medium text-black sm:col-span-2">{item.value}</dd>
            </div>
          ))}
        </dl>
      </main>

      <SiteFooter />
    </div>
  );
}
