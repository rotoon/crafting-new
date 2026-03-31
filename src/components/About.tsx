"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

function useBgTextVisible() {
  const weRef = useRef<HTMLDivElement>(null);
  const areRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (weRef.current) observer.observe(weRef.current);
    if (areRef.current) observer.observe(areRef.current);
    return () => observer.disconnect();
  }, []);

  return { weRef, areRef, visible };
}

function Counter({ targetValue }: { targetValue: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let current = 0;
          const duration = 1500;
          const step = targetValue / (duration / 16);

          const interval = setInterval(() => {
            current += step;
            if (current >= targetValue) {
              setCount(targetValue);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);

          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.5 },
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [targetValue]);

  return (
    <span ref={ref} className="stat-value">
      {count}
    </span>
  );
}

export default function About() {
  const { weRef, areRef, visible } = useBgTextVisible();

  return (
    <>
      <section className="about-section" id="about">
        <div
          ref={weRef}
          className={`about-bg-text about-bg-we${visible ? " visible" : ""}`}
        >
          WE
        </div>
        <div
          ref={areRef}
          className={`about-bg-text about-bg-are${visible ? " visible" : ""}`}
        >
          ARE
        </div>
        <div className="about-inner">
          <div className="about-content">
            <FadeIn>
              <h2 className="section-title">ABOUT US</h2>
            </FadeIn>
            <FadeIn delayMs={100}>
              <div className="about-text">
                <p>
                  In today&apos;s fast-moving digital world, brands that move
                  with clarity and strategic direction are the ones that stay
                  ahead.
                </p>
                <p>
                  With over 6 years of experience in branding and digital media
                  design, we combine creativity with precision to deliver
                  measurable, sustainable growth.
                </p>
                <p>
                  Because <span className="green">true success</span> is not
                  about racing to the finish line
                  <br />
                  it is about building the strength to lead consistently
                  <br />
                  over time.
                </p>
              </div>
            </FadeIn>
            <FadeIn delayMs={200}>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">
                    <Counter targetValue={50} />
                    <span className="stat-plus">+</span>
                  </div>
                  <div className="stat-label">
                    CLIENTS
                    <br />
                    WORK WITH
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <Counter targetValue={7} />
                    <span className="stat-plus">+</span>
                  </div>
                  <div className="stat-label">
                    YEAR OF
                    <br />
                    EXPERIENCE
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="right" delayMs={300} className="about-image">
            <Image
              src="/assets/crew-bg.png"
              alt="Crafting Lab Team Photo"
              width={800}
              height={1000}
              className="about-photo"
              priority
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
