import { ArrowRightIcon } from "@/components/icons";
import { RotatingServices } from "@/components/rotating-services";
import { SiteBackground } from "@/components/site-background";
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
      <SiteBackground />
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start justify-center px-4 py-10 sm:px-6 sm:py-16">
        <h1 className="max-w-3xl text-[3.125rem] font-extrabold leading-[1.1] text-black sm:text-[3.643rem]">
          <span>We build</span>{" "}
          <RotatingServices />
          <br />
          <span>
            to help your
            <br />
            business grow
          </span>
        </h1>

        <a
          href="/contact-us"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-primary px-4 py-4 font-mono text-sm font-bold text-white transition-colors hover:bg-primary-shade sm:w-fit sm:justify-start"
        >
          Book a free consultation
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </main>

      <SiteFooter />
    </div>
  );
}
