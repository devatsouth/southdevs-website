import { ArrowRightIcon } from "@/components/icons";
import { RotatingServices } from "@/components/rotating-services";
import { HeroBadge } from "@/components/hero-badge";
import { StatsRow } from "@/components/stats-row";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ClientsSection } from "@/components/clients-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const revalidate = 3600;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SouthDevs",
  url: "https://southdevs.net",
  description:
    "SouthDevs builds websites, mobile apps, software, and systems to help your business grow.",
  sameAs: [
    "https://www.facebook.com/southdevsph",
    "https://www.instagram.com/southdevs",
    "https://www.linkedin.com/company/southdevelopers/",
  ],
};

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="flex w-full flex-1 flex-col items-center">
        <section className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28">
          <HeroBadge>Quality Software Development Services</HeroBadge>

          <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1.1] text-black sm:text-6xl">
            We build <RotatingServices />
            <br />
            to help your business grow.
          </h1>

          <p className="mt-6 max-w-xl text-base text-neutral-500 sm:text-lg">
            We craft high-quality digital products tailored to your vision — from sleek websites
            to powerful enterprise systems.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="/contact-us"
              className="inline-flex w-full items-center justify-center gap-2 bg-black px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-neutral-800 sm:w-auto"
            >
              Let&apos;s discuss your business
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center border border-black/15 px-5 py-3.5 text-sm font-bold text-black transition-colors hover:bg-neutral-50 sm:w-auto"
            >
              Our Services
            </a>
          </div>

          <StatsRow />
        </section>

        <ServicesSection />
        <WhyUsSection />
        <ClientsSection />
      </main>

      <CtaSection />
      <SiteFooter />
    </div>
  );
}
