import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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
      <SiteBackground />
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-[1152px] flex-1 flex-col items-start justify-center px-4 py-10 sm:px-6 sm:py-16">
        <h1 className="text-[3.125rem] font-extrabold leading-[1.1] text-black sm:text-[3.643rem]">
          Contact{" "}
          <span className="relative inline-block text-primary">
            Us
            <span
              aria-hidden
              className="absolute inset-x-0 top-[0.9em] h-1 border-b border-t border-current"
            />
          </span>
        </h1>

        <ContactForm />
      </main>

      <SiteFooter />
    </div>
  );
}
