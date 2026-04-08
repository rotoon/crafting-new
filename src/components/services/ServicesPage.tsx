"use client";
import { useCallback } from "react";
import ServiceHeader from "./ServiceHeader";
import ServiceBlock from "./ServiceBlock";
import { SERVICES } from "./data";

export default function ServicesPage() {
  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="sp-page">
      <div className="sp-glow sp-glow-1"></div>
      <div className="sp-glow sp-glow-2"></div>
      <div className="sp-glow sp-glow-3"></div>

      <section className="sp-section" id="services">
        <ServiceHeader />
        <div className="sp-content">
          {SERVICES.map((svc, idx) => (
            <ServiceBlock key={svc.id} svc={svc} index={idx} />
          ))}
        </div>
      </section>

      <button className="back-to-top" onClick={handleBackToTop}>
        Back to top
      </button>
    </div>
  );
}
