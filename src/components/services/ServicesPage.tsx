"use client";
import ServiceHeader from "./ServiceHeader";
import ServiceBlock from "./ServiceBlock";
import { SERVICES } from "./data";
import BackToTop from "../BackToTop";

export default function ServicesPage() {
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

      <BackToTop />
    </div>
  );
}
