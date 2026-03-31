import Image from "next/image";

export default function SportsBanner() {
  return (
    <section className="sports-banner">
      {/* Main athlete photo */}
      <Image
        src="/assets/athlete-banner.webp"
        alt="Athlete on running track"
        fill
        className="sports-banner-img"
        sizes="100vw"
      />

      {/* Top & bottom fades */}
      <div className="sports-banner-gradient-top" />
      <div className="sports-banner-gradient-bottom" />

      {/* Side green glows */}
      <div className="sports-banner-glow-left" />
      <div className="sports-banner-glow-right" />
    </section>
  );
}
