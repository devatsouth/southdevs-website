import { CodeIcon, DatabaseIcon, MonitorIcon, SmartphoneIcon } from "./icons";

const SERVICES = [
  {
    Icon: MonitorIcon,
    title: "Web Development",
    description:
      "From landing pages to full-stack web apps — fast, responsive, and built for results.",
  },
  {
    Icon: SmartphoneIcon,
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps that deliver seamless experiences on iOS and Android.",
  },
  {
    Icon: CodeIcon,
    title: "Custom Software",
    description:
      "Tailored software engineered to solve complex business problems and streamline operations.",
  },
  {
    Icon: DatabaseIcon,
    title: "Business Systems",
    description:
      "POS, inventory, HR, and ERP systems that bring structure and efficiency to your business.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">What we do</p>
      <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight text-black sm:text-4xl">
        Services built for modern businesses.
      </h2>

      <div className="mt-12 grid grid-cols-1 border-l border-t border-black/10 sm:grid-cols-2">
        {SERVICES.map(({ Icon, title, description }) => (
          <div key={title} className="border-b border-r border-black/10 p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-700">
              <Icon />
            </div>
            <h3 className="mt-4 text-lg font-bold text-black">{title}</h3>
            <p className="mt-2 text-sm text-neutral-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
