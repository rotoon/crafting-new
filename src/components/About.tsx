"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

function Counter({ targetValue }: { targetValue: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
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
      { threshold: 0.5 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [targetValue]);

  return <span ref={ref} className="stat-value">{count}</span>;
}

export default function About() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-bg-text about-bg-we">WE</div>
        <div className="about-bg-text about-bg-are">ARE</div>
        <div className="about-inner">
          <div className="about-content">
            <FadeIn>
              <h2 className="section-title">ABOUT US</h2>
            </FadeIn>
            <FadeIn delayMs={100}>
              <div className="about-text">
                <p>In today's fast-moving digital world, brands that move with clarity and strategic direction are the ones that stay ahead.</p>
                <p>With over 6 years of experience in branding and digital media design, we combine creativity with precision to deliver measurable, sustainable growth.</p>
                <p>Because <span className="green">true success</span> is not about racing to the finish line<br />it is about building the strength to lead consistently<br />over time.</p>
              </div>
            </FadeIn>
            <FadeIn delayMs={200}>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">
                    <Counter targetValue={50} />
                    <span className="stat-plus">+</span>
                  </div>
                  <div className="stat-label">CLIENTS<br />WORK WITH</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <Counter targetValue={7} />
                    <span className="stat-plus">+</span>
                  </div>
                  <div className="stat-label">YEAR OF<br />EXPERIENCE</div>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="right" delayMs={300} className="about-image">
            <Image src="/assets/hero-bg.png" alt="Crafting Lab Team Photo" width={600} height={500} className="about-photo" />
          </FadeIn>
        </div>
      </section>

      <section className="photo-band" id="photo-band">
        <div className="photo-band-curve photo-band-curve-top"></div>
        <div className="photo-band-image">
          <Image src="/assets/hero-bg.png" alt="Crafting Lab Studio" width={1440} height={580} className="photo-band-img" />
        </div>
        <div className="photo-band-curve photo-band-curve-bottom"></div>
      </section>
    </>
  );
}
