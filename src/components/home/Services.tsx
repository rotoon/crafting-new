import FadeIn from "../FadeIn";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: "strategy",
      number: "01",
      titleTop: "STRATEGY",
      titleBottom: "&MARKETING",
      img: "/assets/services/icon-research.webp",
      imgWidth: 276,
      imgHeight: 182,
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
      img: "/assets/services/icon-branding.webp",
      imgWidth: 337,
      imgHeight: 125,
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
      img: "/assets/services/icon-production.webp",
      imgWidth: 271,
      imgHeight: 152,
      desc: "Produce photography and video content for marketing communications, creating visual content that reflects the brand's identity and captures the attention of the target audience.",
      tags: [
        "Photography",
        "Video Production",
        "Motion Graphic",
        "Post Production",
        "Animation",
      ],
      showDivider: true,
      hasLinesDecoration: false,
    },
  ];

  const subtitleLines = [
    "We provide online marketing services by a team of experienced people.",
    "Build a strong brand in the online business world through creativity, content,",
    "and data analytics by using marketing strategies that are specific to your business.",
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <FadeIn
          direction="left"
          delayMs={0}
          className="services-bg-text services-bg-we"
        >
          WE
        </FadeIn>
        <div className="services-header-center">
          <FadeIn direction="down" delayMs={100}>
            <h2 className="section-title">OUR SERVICES</h2>
          </FadeIn>
          <FadeIn direction="up" delayMs={200}>
            <p className="services-subtitle">
              {subtitleLines.map((line) => (
                <span key={line} className="services-subtitle-line">
                  {line}
                </span>
              ))}
            </p>
          </FadeIn>
        </div>
        <FadeIn
          direction="right"
          delayMs={0}
          className="services-bg-text services-bg-do"
        >
          DO
        </FadeIn>
      </div>

      <div className="services-content">
        {services.map((svc, idx) => (
          <FadeIn
            key={svc.id}
            direction="left"
            delayMs={idx * 150}
            className="service-row-wrapper"
          >
            <div className="service-row">
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
                  width={svc.imgWidth}
                  height={svc.imgHeight}
                  style={{ width: "auto", height: "auto" }}
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
            </div>
            {svc.showDivider && <div className="service-divider"></div>}
          </FadeIn>
        ))}
        <div className="services-view-more-center">
          <a href="/services" className="btn-view-more">
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
