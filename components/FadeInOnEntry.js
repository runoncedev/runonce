import { useEffect, useRef, useState } from "react";

export default function FadeInOnEntry({ children }) {
  const wrapperRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(wrapperRef.current);
        }
      });
    };

    const observer = new IntersectionObserver(callback);

    observer.observe(wrapperRef.current);

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
