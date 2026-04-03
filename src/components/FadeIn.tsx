"use client";
import { useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delayMs?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function FadeIn({
  children,
  direction = "up",
  delayMs = 0,
  className = "",
  style = {},
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.1 }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  let baseClass = "fade-in";
  if (direction === "down") baseClass = "fade-in-down";
  if (direction === "left") baseClass = "fade-in-left";
  if (direction === "right") baseClass = "fade-in-right";

  return (
    <div
      ref={domRef}
      className={`${baseClass} ${isVisible ? "visible" : ""} ${className}`}
      style={{ ...style, transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
