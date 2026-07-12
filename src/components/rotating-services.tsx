"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = ["websites", "mobile apps", "software", "systems"];

const SLIDE_DELAY = 3000;
const FADE_MS = 300;

export function RotatingServices() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      timeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % SERVICES.length);
        setVisible(true);
      }, FADE_MS);
    }, SLIDE_DELAY);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <span
      className="inline-block align-bottom text-black underline decoration-gray-300 underline-offset-4 transition-opacity"
      style={{ opacity: visible ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
    >
      {SERVICES[index]}
    </span>
  );
}
