"use client";
import FadeIn from "./FadeIn";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: "strategy",
      number: "01",
      titleTop: "STRATEGY",
      titleBottom: "&MARKETING",
      img: "/assets/services/service-strategy.png",
      desc: "Explore and analyze target audiences, products, and both direct and indirect competitors to develop strategic plans and define a clear brand positioning. We provide business consultation and operational planning, while summarizing and analyzing performance results to refine strategies and guide the next stage of execution.",
      tags: [
        "Research",
        "Strategy",
        "Consulting",
        "Planning",
        "KPI Analysis",
        "Report",
        "Marketing",
      ],
      showDivider: true,
      hasLinesDecoration: true,
    },
    {
      id: "branding",
      number: "02",
      titleTop: "BRANDING",
      titleBottom: "&DESIGN",
      img: "/assets/services/service-branding.png",
      desc: "Develop and strengthen brand identity through thoughtful design, while establishing clear marketing communication guidelines. This ensures the brand maintains a distinct image and effectively connects with its target audience.",
      tags: [
        "Branding",
        "Offline Media",
        "Digital Media",
        "Creative",
        "Consult",
      ],
      showDivider: true,
      hasLinesDecoration: false,
    },
    {
      id: "production",
      number: "03",
      titleTop: "PRODUCTION",
      titleBottom: "&VIDEO",
      img: "/assets/services/service-production.png",
      desc: "Produce photography and video content for marketing communications, creating visual content that reflects the brand's identity and captures the attention of the target audience.",
      tags: [
        "Photography",
        "Video Production",
        "Motion Graphic",
        "Post Production",
        "Animation",
      ],
      showDivider: false,
      hasLinesDecoration: false,
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span className="services-bg-text services-bg-we">WE</span>
        <FadeIn delayMs={0} className="services-header-center">
          <h2 className="section-title">OUR SERVICES</h2>
          <p className="services-subtitle">
            We provide online marketing services by a team of experienced
            people.
            <br />
            Build a strong brand in the online business world. through
            creativity Content
            <br />
            and data analytics by using marketing strategies that are specific
            to your business
          </p>
        </FadeIn>
        <span className="services-bg-text services-bg-do">DO</span>
      </div>

      <div className="services-content">
        {services.map((svc, idx) => (
          <div key={svc.id}>
            <FadeIn delayMs={idx * 150} className="service-row">
              <div className="service-number">{svc.number}</div>
              <div className="service-title">
                <span className="green">{svc.titleTop}</span>
                <br />
                <span className="green">{svc.titleBottom}</span>
              </div>
              <div className="service-illustration">
                <Image
                  src={svc.img}
                  alt={`${svc.titleTop} illustration`}
                  width={280}
                  height={200}
                />
              </div>
              <div className="service-details">
                <p className="service-description">{svc.desc}</p>
                <div className="service-tags">
                  {svc.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {svc.showDivider && <div className="service-divider"></div>}
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
}
