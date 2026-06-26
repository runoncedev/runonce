import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import profilePic from "../public/profilePic.jpg";
import Strong from "./Strong";

const MAX_RINGS = 6;
const RING_ANIMATION_DURATION_MS = 10000;
const SPAWN_INTERVAL_MS = RING_ANIMATION_DURATION_MS / MAX_RINGS;

export default function Header() {
  const [enabled, setEnabled] = useState(false);
  const [rings, setRings] = useState([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const intervalRef = useRef(null);
  const counterRef = useRef(0);

  const spawnRing = useCallback(() => {
    const id = counterRef.current++;
    setRings((prev) => [...prev, id]);
  }, []);

  const removeRing = useCallback((id) => {
    setRings((prev) => prev.filter((r) => r !== id));
  }, []);

  useEffect(() => {
    if (enabled && !prefersReducedMotion) {
      spawnRing();
    }
    intervalRef.current = setInterval(() => {
      if (enabled && !prefersReducedMotion) {
        spawnRing();
      }
    }, SPAWN_INTERVAL_MS);

    return () => clearInterval(intervalRef.current);
  }, [enabled, prefersReducedMotion, spawnRing]);

  return (
    <div className="relative mx-auto flex max-w-(--breakpoint-md) print:max-w-none flex-col items-center  gap-8 px-4 py-10 print:block print:p-0 sm:py-16">
      <div className="relative">
        <button
          onClick={() => setEnabled((e) => !e)}
          className="group rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          aria-label={
            enabled ? "Disable ring animation" : "Enable ring animation"
          }
          aria-pressed={enabled}
        >
          <Image
            src={profilePic}
            alt="Using an old MSX-like computer"
            priority
            className="h-32 w-32 overflow-hidden rounded-full print:hidden transition-all duration-150 group-active:opacity-95 cursor-pointer"
          />
        </button>
        <svg
          className="absolute top-0 left-0 -z-10 overflow-visible"
          viewBox="0 0 20 20"
        >
          {rings.map((id) => (
            <circle
              key={id}
              cx="10"
              cy="10"
              r="9"
              opacity="0.25"
              className="fill-none stroke-slate-400 dark:stroke-slate-600 animate-grow"
              style={{ animationDuration: `${RING_ANIMATION_DURATION_MS}ms` }}
              onAnimationEnd={(e) =>
                e.animationName === "grow-r" && removeRing(id)
              }
            />
          ))}
        </svg>
      </div>
      <div className="max-w-(--breakpoint-md) print:flex print:max-w-none print:flex-row print:justify-between">
        <div className="flex break-inside-avoid flex-col gap-4 text-center print:pt-0 print:text-left">
          <div className="flex flex-col gap-3 print:mt-4">
            <h1 className="text-4xl font-bold tracking-wide">Camilo Rivera</h1>
            <p className="text-2xl font-thin tracking-wide">Web developer</p>
          </div>
          <p className="text-xl text-slate-400 text-balance">
            <Strong>React</Strong>, <Strong>TypeScript</Strong>,{" "}
            <Strong>Node.js</Strong>
          </p>
        </div>
        <a href="https://runonce.dev/resume" className="hidden print:block">
          <Image
            src="/qr.png"
            width="200"
            height="200"
            alt="QR code"
            className="h-[200px] w-[200px]"
          />
        </a>
      </div>
    </div>
  );
}
