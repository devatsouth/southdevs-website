import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./icons";

const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/southdevsph", Icon: FacebookIcon },
  { name: "Instagram", href: "https://www.instagram.com/southdevs", Icon: InstagramIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/southdevelopers/", Icon: LinkedInIcon },
];

export function SocialLinks({
  className = "",
  iconClassName = "",
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={`flex items-center justify-center transition-colors hover:text-primary ${iconClassName}`}
        >
          <Icon className="h-full w-full" />
        </a>
      ))}
    </div>
  );
}
