import Image from "next/image";

export default function Marquee() {
  return (
    <div className="marquee-bar" id="marquee-bar">
      <div className="marquee-track">
        <div className="marquee-content slide-mode">
          <Image 
            src="/assets/ui/slide.svg" 
            alt="Brand Slide" 
            width={3058} 
            height={104} 
            className="marquee-slide-img"
            priority
          />
        </div>
        <div className="marquee-content slide-mode" aria-hidden="true">
          <Image 
            src="/assets/ui/slide.svg" 
            alt="Brand Slide" 
            width={3058} 
            height={104} 
            className="marquee-slide-img"
          />
        </div>
      </div>
    </div>
  );
}
