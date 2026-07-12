"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  { label: "websites", colorClass: "text-service-website border-service-website" },
  { label: "mobile apps", colorClass: "text-service-mobile border-service-mobile" },
  { label: "softwares", colorClass: "text-service-software border-service-software" },
  { label: "system", colorClass: "text-service-system border-service-system" },
];

const SLIDE_DELAY = 3000;
const TRANSITION_MS = 300;

export function RotatingServices() {
  const items = [...SERVICES, SERVICES[0]];
  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i + 1);
    }, SLIDE_DELAY);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === items.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(0);
      }, TRANSITION_MS);
    } else if (!transitionEnabled) {
      requestAnimationFrame(() => setTransitionEnabled(true));
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <span className="services-wrapper relative inline-block h-[1.15em] w-full overflow-hidden align-bottom sm:w-auto">
      <span
        className="flex flex-col"
        style={{
          transform: `translateY(-${index * 1.15}em)`,
          transition: transitionEnabled ? `transform ${TRANSITION_MS}ms ease` : "none",
        }}
      >
        {items.map((service, i) => (
          <span
            key={i}
            className={`relative inline-block h-[1.15em] w-max shrink-0 leading-[1.15em] ${service.colorClass}`}
          >
            {service.label}
            <span
              aria-hidden
              className="absolute inset-x-0 top-[1em] h-1 border-b border-t border-current"
            />
          </span>
        ))}
      </span>
    </span>
  );
}
