import { SocialLinks } from "./social-links";

const FREEPIK_HREF =
  "https://www.freepik.com/free-photo/white-paper-texture-background_4489951.htm#query=folded%20paper&position=4&from_view=search&track=ais&uuid=c712a924-151f-4938-ad35-b018e0c0be02";

function FreepikCredit({ className = "" }: { className?: string }) {
  return (
    <span className={`font-mono text-xs text-[#bfbfbf] ${className}`}>
      Background image by{" "}
      <a
        href={FREEPIK_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Freepik
      </a>
    </span>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Desktop footer: fixed to the bottom of the viewport */}
      <footer className="fixed inset-x-0 bottom-0 z-10 hidden w-full sm:block">
        <div className="mx-auto flex max-w-[1152px] items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <h6 className="font-mono text-xs font-semibold text-black">
              @{year} SouthDevs
            </h6>
            {/* <FreepikCredit /> */}
          </div>
          <SocialLinks iconClassName="h-4 w-4 text-[#b3b3b3]" />
        </div>
      </footer>

      {/* Mobile footer: static, flows after the hero content */}
      <footer className="mt-16 w-full pb-6 sm:hidden">
        <div className="mx-auto flex max-w-[1152px] items-center justify-between px-4">
          <FreepikCredit />
          <SocialLinks iconClassName="h-4 w-4 text-[#b3b3b3]" />
        </div>
        <div className="mt-2 px-4 text-center">
          <h6 className="font-mono text-xs font-semibold text-black">
            @{year} SouthDevs
          </h6>
        </div>
      </footer>
    </>
  );
}
