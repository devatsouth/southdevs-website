import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./social-links";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full items-center justify-between px-4 py-4 sm:px-6">
      <Link href="/" className="flex items-center gap-1 text-xl font-extrabold tracking-tight sm:text-2xl">
        <Image
          src="/images/logo-standard.png"
          alt="SouthDevs"
          width={100}
          height={100}
          priority
          className="h-8 w-8 sm:h-8 sm:w-8"
        />
        <span>
          <span className="font-extrabold text-[#000000]">south</span>
          <span className="font-extrabold text-[#808080]">devs</span>
        </span>
      </Link>
      <SocialLinks iconClassName="h-5 w-5 text-[#808080] sm:h-5 sm:w-5" />
    </header>
  );
}
