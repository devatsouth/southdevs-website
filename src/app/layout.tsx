import type { Metadata } from "next";
import { Montserrat, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://southdevs.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SouthDevs | Websites, Mobile Apps & Software to Grow Your Business",
    template: "%s | SouthDevs",
  },
  description:
    "SouthDevs builds websites, mobile apps, software, and systems to help your business grow. Book a free consultation with our development team today.",
  keywords: [
    "SouthDevs",
    "web development",
    "mobile app development",
    "software development",
    "custom systems",
    "software agency",
  ],
  authors: [{ name: "SouthDevs" }],
  creator: "SouthDevs",
  publisher: "SouthDevs",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SouthDevs",
    title: "SouthDevs | Websites, Mobile Apps & Software to Grow Your Business",
    description:
      "SouthDevs builds websites, mobile apps, software, and systems to help your business grow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SouthDevs | Websites, Mobile Apps & Software to Grow Your Business",
    description:
      "SouthDevs builds websites, mobile apps, software, and systems to help your business grow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${sourceCodePro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900 font-sans">
        {children}
      </body>
    </html>
  );
}
