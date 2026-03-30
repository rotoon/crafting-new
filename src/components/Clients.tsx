"use client";
import FadeIn from "./FadeIn";

export default function Clients() {
  const placeholders = Array.from({ length: 8 });

  return (
    <section className="clients-section" id="clients">
      <FadeIn delayMs={0}>
        <h2 className="section-title clients-title">OUR CLIENTS</h2>
      </FadeIn>
      <div className="clients-rows">
        <div className="clients-marquee" id="clients-row-1">
          <div className="clients-marquee-track">
            <div className="clients-marquee-content">
              {placeholders.map((_, i) => <div key={`r1-o-${i}`} className="client-logo-placeholder"></div>)}
            </div>
            <div className="clients-marquee-content" aria-hidden="true">
              {placeholders.map((_, i) => <div key={`r1-d-${i}`} className="client-logo-placeholder"></div>)}
            </div>
          </div>
        </div>
        <div className="clients-marquee clients-marquee-reverse" id="clients-row-2">
          <div className="clients-marquee-track">
            <div className="clients-marquee-content">
              {placeholders.map((_, i) => <div key={`r2-o-${i}`} className="client-logo-placeholder"></div>)}
            </div>
            <div className="clients-marquee-content" aria-hidden="true">
              {placeholders.map((_, i) => <div key={`r2-d-${i}`} className="client-logo-placeholder"></div>)}
            </div>
          </div>
        </div>
        <div className="clients-marquee" id="clients-row-3">
          <div className="clients-marquee-track">
            <div className="clients-marquee-content">
              {placeholders.map((_, i) => <div key={`r3-o-${i}`} className="client-logo-placeholder"></div>)}
            </div>
            <div className="clients-marquee-content" aria-hidden="true">
              {placeholders.map((_, i) => <div key={`r3-d-${i}`} className="client-logo-placeholder"></div>)}
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn-view-more" id="btn-view-more">
        View All
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
      </a>
    </section>
  );
}
