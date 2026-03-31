"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // determine active section
      const sections = ["hero", "services", "works", "contact"];
      let current = "hero";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 200;
          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });
      setActiveHash(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setMenuActive(false);
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      id="navbar"
    >
      <div className="navbar-inner">
        <a href="#hero" className="logo" onClick={(e) => handleSmoothScroll(e, "#hero")}>
          <Image src="/assets/brand/logo-icon.svg" alt="Crafting Lab Icon" width={20} height={27} className="logo-icon" />
          <Image
            src="/assets/brand/logo-text.png"
            alt="CRAFTINGLAB" 
            width={150} 
            height={25} 
            className="logo-text" 
            priority
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>
        <div className={`nav-menu ${menuActive ? "active" : ""}`} id="nav-menu">
          <a
            href="#hero"
            className={`nav-link ${activeHash === "#hero" ? "active" : ""}`}
            onClick={(e) => handleSmoothScroll(e, "#hero")}
          >
            Home
          </a>
          <a
            href="#services"
            className={`nav-link ${activeHash === "#services" ? "active" : ""}`}
            onClick={(e) => handleSmoothScroll(e, "#services")}
          >
            Services
          </a>
          <a
            href="#works"
            className={`nav-link ${activeHash === "#works" ? "active" : ""}`}
            onClick={(e) => handleSmoothScroll(e, "#works")}
          >
            Works
          </a>
        </div>
        <a
          href="#contact"
          className="btn-contact"
          id="btn-contact"
          onClick={(e) => handleSmoothScroll(e, "#contact")}
        >
          Contact Us
        </a>
        <button
          className={`nav-toggle ${menuActive ? "active" : ""}`}
          id="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuActive(!menuActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
