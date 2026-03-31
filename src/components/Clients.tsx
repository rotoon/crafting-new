"use client";
import FadeIn from "./FadeIn";

export default function Clients() {
  const placeholders = Array.from({ length: 8 });

  return (
    <>
      <section className="clients-section" id="clients">
        <div className="clients-taglines">
          <FadeIn delayMs={0}>
            <h2 className="section-title clients-title">OUR CLIENTS</h2>
          </FadeIn>
        </div>
        <div className="clients-rows">
          <div className="clients-marquee" id="clients-row-1">
            <div className="clients-marquee-track">
              <div className="clients-marquee-content">
                {placeholders.map((_, i) => (
                  <div
                    key={`r1-o-${i}`}
                    className="client-logo-placeholder"
                  ></div>
                ))}
              </div>
              <div className="clients-marquee-content" aria-hidden="true">
                {placeholders.map((_, i) => (
                  <div
                    key={`r1-d-${i}`}
                    className="client-logo-placeholder"
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="clients-marquee clients-marquee-reverse"
            id="clients-row-2"
          >
            <div className="clients-marquee-track">
              <div className="clients-marquee-content">
                {placeholders.map((_, i) => (
                  <div
                    key={`r2-o-${i}`}
                    className="client-logo-placeholder"
                  ></div>
                ))}
              </div>
              <div className="clients-marquee-content" aria-hidden="true">
                {placeholders.map((_, i) => (
                  <div
                    key={`r2-d-${i}`}
                    className="client-logo-placeholder"
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="clients-marquee" id="clients-row-3">
            <div className="clients-marquee-track">
              <div className="clients-marquee-content">
                {placeholders.map((_, i) => (
                  <div
                    key={`r3-o-${i}`}
                    className="client-logo-placeholder"
                  ></div>
                ))}
              </div>
              <div className="clients-marquee-content" aria-hidden="true">
                {placeholders.map((_, i) => (
                  <div
                    key={`r3-d-${i}`}
                    className="client-logo-placeholder"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </button>
    </>
  );
}
