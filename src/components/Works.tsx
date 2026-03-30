"use client";
import FadeIn from "./FadeIn";
import Image from "next/image";

export default function Works() {
  return (
    <>
      <section className="works-section" id="works">
        <div className="works-header">
          <h2 className="section-title">OUR WORKS</h2>
          <a href="#" className="see-all-link">
            See All
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
          </a>
        </div>

        <div className="works-category">
          <div className="category-indicator">
            <div className="category-bar"></div>
            <span className="category-name">Showcases</span>
          </div>
        </div>

        <FadeIn className="works-carousel">
          <div className="carousel-track">
            <div className="carousel-slide carousel-slide-main">
              <Image src="/assets/carousel-1.png" alt="Go Green by Kanya - Showcase 1" width={800} height={540} />
            </div>
            <button className="carousel-slide carousel-slide-secondary">
              <Image src="/assets/carousel-2.png" alt="Showcase 2" width={400} height={540} />
            </button>
            <button className="carousel-slide carousel-slide-peek">
              <Image src="/assets/carousel-3.png" alt="Showcase 3" width={200} height={540} />
            </button>
          </div>
          <div className="carousel-info">
            <div className="carousel-info-left">
              <h3 className="carousel-title">Go Green by Kanya</h3>
              <p className="carousel-description">Crafting Lab เริ่มตั้งแต่วาง Concept Branding ไปจนถึงการช่วย ออกแบบร้านกว่า 13 สาขา ต่อยอดทั้ง Online + Offline ให้ร้านเป็นที่รู้จัก ปรับเปลี่ยนการสื่อสารให้ถูกต้องตามข้อกฏหมายให้เป็น GoGreen Consult Center</p>
            </div>
            <div className="carousel-counter">
              <span className="current-count">01 /</span>
              <span className="total-count"> 03</span>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="production-showcase" id="production-showcase">
        <FadeIn direction="left" className="production-left">
          <div className="production-category">
            <div className="category-indicator">
              <div className="category-bar"></div>
              <span className="category-name">Production</span>
            </div>
          </div>
          <div className="production-info">
            <h3 className="production-title">Go Green by Kanya</h3>
            <p className="production-type">Short Video Viral</p>
          </div>
          <a href="#" className="see-all-link production-link">
            See All
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
          </a>
        </FadeIn>
        
        <FadeIn className="production-center">
          <div className="production-video-card">
            <Image src="/assets/video-1.png" alt="Production video showcase" width={381} height={676} />
            <div className="video-overlay">
              <span className="video-text-top green">PRODU</span>
              <span className="video-thai-text">ทีมโปรดักชั่น</span>
              <span className="video-text-bottom green">UCTION</span>
              <div className="video-controls">
                <button className="video-control" aria-label="Pause">❚❚</button>
                <button className="video-control" aria-label="Previous">⏮</button>
                <button className="video-control" aria-label="Next">⏭</button>
                <button className="video-control" aria-label="Mute">🔊</button>
                <div className="video-progress">
                  <div className="video-progress-bar"></div>
                </div>
                <button className="video-control" aria-label="Fullscreen">⛶</button>
              </div>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn direction="right" className="production-right">
          <div className="video-thumb-grid">
            <div className="video-thumb"><Image src="/assets/video-2.png" alt="Video thumbnail" width={187} height={120} /></div>
            <div className="video-thumb"><Image src="/assets/video-3.png" alt="Video thumbnail" width={125} height={80} /></div>
            <div className="video-thumb"><Image src="/assets/video-4.png" alt="Video thumbnail" width={187} height={120} /></div>
            <div className="video-thumb"><Image src="/assets/video-5.png" alt="Video thumbnail" width={125} height={80} /></div>
          </div>
        </FadeIn>
      </section>

      <section className="cta-section" id="cta-section">
        <div className="cta-bg">
          <div className="cta-gradient-left"></div>
          <div className="cta-gradient-right"></div>
          <div className="cta-gradient-bottom"></div>
        </div>
      </section>
    </>
  );
}
