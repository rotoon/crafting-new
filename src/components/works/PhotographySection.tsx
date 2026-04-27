"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { PHOTO_CATEGORIES, PHOTO_FAN, PHOTO_SLIDES } from "./data";
import WorksArrow from "./WorksArrow";

export default function PhotographySection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const totalSlides = PHOTO_SLIDES.length;
  const sectionRef = useRef<HTMLElement>(null);
  const fanRef = useRef<HTMLDivElement>(null);
  const hasNavigated = useRef(false);
  const hasEntered = useRef(false);

  // Init image visibility — GSAP owns opacity, not React
  useEffect(() => {
    const fan = fanRef.current;
    if (!fan) return;
    PHOTO_SLIDES.forEach((_, slideIdx) => {
      const imgs = fan.querySelectorAll<HTMLElement>(
        `[data-slide="${slideIdx}"]`,
      );
      gsap.set(imgs, { opacity: slideIdx === 0 ? 1 : 0 });
    });
  }, []);

  // Scroll-triggered entrance
  useEffect(() => {
    const section = sectionRef.current;
    const fan = fanRef.current;
    if (!section || !fan) return;

    const cards = fan.querySelectorAll<HTMLElement>(".wk-ph-card");
    gsap.set(cards, { opacity: 0 });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasEntered.current) {
          hasEntered.current = true;
          gsap.to(cards, {
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
            delay: 0.15,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const slideIndexRef = useRef(0);

  const navigate = (d: "next" | "prev") => {
    hasNavigated.current = true;
    setDir(d);

    const el = fanRef.current;
    if (!el) return;

    const currentImgs = el.querySelectorAll<HTMLElement>(
      `[data-slide="${slideIndexRef.current}"]`,
    );

    const cards = el.querySelectorAll<HTMLElement>(".wk-ph-card");

    gsap.to(cards, {
      opacity: 0,
      duration: 0.15,
      ease: "power2.in",
      onComplete: () => {
        const nextIdx =
          d === "next"
            ? (slideIndexRef.current + 1) % totalSlides
            : (slideIndexRef.current - 1 + totalSlides) % totalSlides;
        slideIndexRef.current = nextIdx;
        setSlideIndex(nextIdx);

        // swap images instantly while cards are invisible
        PHOTO_SLIDES.forEach((_, slideIdx) => {
          const imgs = el.querySelectorAll<HTMLElement>(
            `[data-slide="${slideIdx}"]`,
          );
          gsap.set(imgs, { opacity: slideIdx === nextIdx ? 1 : 0 });
        });
        const section = sectionRef.current;
        if (section) section.style.overflow = "visible";
        gsap.fromTo(
          cards,
          { x: 70000, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.16,
            ease: "elastic.out(0.5, 0.4)",
          },
        );
      },
    });
  };

  return (
    <>
      <section ref={sectionRef} className="wk-ph-section">
        <div className="wk-ph-title-wrap" aria-hidden="true">
          <span className="wk-ph-title">PHOTOGRAPHY</span>
        </div>

        <div ref={fanRef} className="wk-ph-fan">
          {PHOTO_FAN.map((fan, cardIdx) => {
            const distanceFromCenter = Math.abs(cardIdx - 2);
            return (
              <div
                key={cardIdx}
                className="wk-ph-card"
                style={{
                  transform: `rotate(${fan.rotate}deg) translateY(${fan.yOffset}px)`,
                  zIndex: PHOTO_FAN.length - distanceFromCenter,
                }}
              >
                <div className="wk-ph-card-inner">
                  {PHOTO_SLIDES.map((slide, slideIdx) => {
                    return (
                      <div
                        key={slide[cardIdx].id}
                        data-slide={slideIdx}
                        style={{ position: "absolute", inset: 0 }}
                      >
                        <Image
                          src={slide[cardIdx].image}
                          alt={slide[cardIdx].alt}
                          fill
                          sizes="220px"
                          style={{ objectFit: "cover" }}
                          priority={slideIdx === 0}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <div className="wk-ph-footer">
            <button
              className="wk-vp-arrow wk-vp-arrow--prev"
              onClick={() => navigate("prev")}
              aria-label="Previous"
              type="button"
            >
              <WorksArrow direction="left" />
            </button>
            <div className="wk-ph-cat-wrap">
              <div className="wk-ph-cat-mask">
                <div
                  key={slideIndex}
                  className={`wk-ph-cat-track${hasNavigated.current ? ` wk-ph-cat-track--${dir}` : ""}`}
                >
                  {[-1, 0, 1].map((delta) => {
                    const idx =
                      (slideIndex + delta + totalSlides) % totalSlides;
                    return (
                      <span
                        key={delta}
                        className={`wk-ph-cat ${delta === 0 ? "wk-ph-cat--active" : "wk-ph-cat--dim"}`}
                      >
                        {PHOTO_CATEGORIES[idx]}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <button
              className="wk-vp-arrow wk-vp-arrow--next"
              onClick={() => navigate("next")}
              aria-label="Next"
              type="button"
            >
              <WorksArrow direction="right" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
