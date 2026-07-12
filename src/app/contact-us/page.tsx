import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialLinks } from "@/components/social-links";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free consultation with SouthDevs. Tell us about your website, mobile app, or software project and we'll get back to you.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full max-w-md">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            {"// Get in touch"}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] text-black sm:text-5xl">
            Let&apos;s build
            <br />
            something
            <br />
            together.
          </h1>
          <p className="mt-5 text-sm text-neutral-500 sm:text-base">
            Tell us about your project and we&apos;ll get back to you within 24 hours with a free
            consultation.
          </p>

          <SocialLinks className="mt-6" iconClassName="flex h-9 w-9 items-center justify-center border border-black/10 p-2 text-neutral-400" />

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-xs text-neutral-500">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-green-400" />
            avg. response time: &lt; 24hrs
          </div>
        </div>

        <ContactForm />
      </main>

      <SiteFooter />
    </div>
  );
}
