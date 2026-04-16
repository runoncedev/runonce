import Image from "next/image";
import { useMemo, useState } from "react";

import profilePic from "../public/profilePic.jpg";
import Strong from "./Strong";

const DEFAULT_RING_COUNT = 10;
const RING_ANIMATION_DURATION_MS = 32000;

export default function Header() {
  const [ringCount] = useState(DEFAULT_RING_COUNT);

  const ringStyles = useMemo(() => {
    const safeRingCount = Math.max(1, ringCount);

    console.log("safeRingCount", safeRingCount);

    const delayStepMs = RING_ANIMATION_DURATION_MS / safeRingCount;

    return Array.from({ length: safeRingCount }, (_, index) => {
      const delayMs = index === 0 ? 0 : index * delayStepMs;
      return {
        animationDuration: `${RING_ANIMATION_DURATION_MS}ms, ${RING_ANIMATION_DURATION_MS}ms`,
        animationDelay: `${delayMs}ms, ${delayMs}ms`,
        // WebkitBackfaceVisibility: "hidden",
      };
    });
  }, [ringCount]);

  return (
    <div className="relative mx-auto flex max-w-(--breakpoint-md) print:max-w-none flex-col items-center  gap-8 px-4 py-10 print:block print:p-0 sm:py-16">
      {/* <button
        aria-label="Terminal mode"
        className="h-32 w-32 overflow-hidden rounded-[64px] transition-[border-radius] duration-300 print:hidden"
      > */}
      <div className="relative">
        <Image
          src={profilePic}
          alt="Using an old MSX-like computer"
          priority
          className="h-32 w-32 overflow-hidden rounded-full print:hidden"
        />
        <svg
          className="absolute top-0 left-0 -z-10 overflow-visible"
          viewBox="0 0 20 20"
        >
          {ringStyles.map((style, index) => (
            <circle
              key={`ring-${index}`}
              cx="10"
              cy="10"
              r="10"
              opacity="0.25"
              className="transform-fill origin-center fill-none stroke-slate-300 dark:stroke-slate-600 stroke-1 animate-ring"
              style={style}
            />
          ))}
        </svg>
      </div>
      {/* </button> */}
      <div className="max-w-(--breakpoint-md) print:flex print:max-w-none print:flex-row print:justify-between">
        <div className="flex break-inside-avoid flex-col gap-4 text-center print:pt-0 print:text-left">
          <div className="flex flex-col gap-3 print:mt-4">
            <h1 className="text-4xl font-bold tracking-wide">Camilo Rivera</h1>
            <p className="text-2xl font-thin tracking-wide">Web developer</p>
          </div>
          <p className="text-xl text-slate-300 text-balance terminal:text-orange-500 dark:text-slate-400">
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
