import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import profilePic from "../public/profilePic.jpg";
import Strong from "./Strong";

const MAX_RINGS = 10;
const SPAWN_INTERVAL_MS = 1000;
const RING_ANIMATION_DURATION_MS = SPAWN_INTERVAL_MS * MAX_RINGS;
const QUEUE_MAX = 2;
const METER_THRESHOLD = 10;

export default function Header() {
  const [rings, setRings] = useState([]);
  const [streaming, setStreaming] = useState(false);
  const [meter, setMeter] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const intervalRef = useRef(null);
  const drainTimeoutRef = useRef(null);
  const counterRef = useRef(0);
  const pendingRef = useRef(0);
  const drainingRef = useRef(false);
  const streamingRef = useRef(false);
  const meterRef = useRef(0);

  const spawnRing = useCallback(() => {
    const id = counterRef.current++;
    setRings((prev) => [...prev, id]);
  }, []);

  const removeRing = useCallback((id) => {
    setRings((prev) => prev.filter((r) => r !== id));
  }, []);

  const drainQueue = useCallback(() => {
    if (pendingRef.current <= 0) {
      drainingRef.current = false;
      return;
    }

    pendingRef.current -= 1;
    spawnRing();

    const newMeter = meterRef.current + 1;
    meterRef.current = newMeter;
    if (newMeter >= METER_THRESHOLD) {
      drainingRef.current = false;
      pendingRef.current = 0;
      streamingRef.current = true;
      setStreaming(true);
      meterRef.current = 0;
      setMeter(0);
      intervalRef.current = setInterval(spawnRing, SPAWN_INTERVAL_MS);
    } else {
      setMeter(newMeter);
      drainTimeoutRef.current = setTimeout(drainQueue, SPAWN_INTERVAL_MS);
    }
  }, [spawnRing]);

  const stopStream = useCallback(() => {
    streamingRef.current = false;
    setStreaming(false);
    clearInterval(intervalRef.current);
  }, []);

  useEffect(
    () => () => {
      clearInterval(intervalRef.current);
      clearTimeout(drainTimeoutRef.current);
    },
    [],
  );

  const handleClick = useCallback(() => {
    if (prefersReducedMotion) return;

    if (streamingRef.current) {
      stopStream();
      return;
    }

    if (pendingRef.current >= QUEUE_MAX) return;

    pendingRef.current += 1;

    if (!drainingRef.current) {
      drainingRef.current = true;
      drainQueue();
    }
  }, [prefersReducedMotion, drainQueue, stopStream]);

  return (
    <div className="relative mx-auto flex max-w-(--breakpoint-md) print:max-w-none flex-col items-center  gap-8 px-4 py-10 print:block print:p-0 sm:py-16">
      <div className="relative">
        <button
          onClick={handleClick}
          className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          aria-label={streaming ? "Stop ring animation" : "Spawn ring"}
          aria-pressed={streaming}
        >
          <Image
            src={profilePic}
            alt="Using an old MSX-like computer"
            priority
            className="h-32 w-32 overflow-hidden rounded-full print:hidden"
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
