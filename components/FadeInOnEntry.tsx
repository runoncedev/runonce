import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function FadeInOnEntry({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(element);
        }
      });
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={
        "transition delay-75 duration-500 print:opacity-100 " +
        (isIntersecting
          ? "translate-x-0 opacity-100"
          : "translate-y-8 opacity-0")
      }
    >
      {children}
    </div>
  );
}
