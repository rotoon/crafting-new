"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      if (!isHome) return;

      // determine active section (only on home page)
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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToHash = (hash: string) => {
    const target = document.querySelector<HTMLElement>(hash);
    if (!target) return;

    const navbarHeight = document.getElementById("navbar")?.offsetHeight ?? 65;
    const top =
      hash === "#hero"
        ? 0
        : Math.max(
            target.getBoundingClientRect().top +
              window.scrollY -
              navbarHeight -
              16,
            0,
          );

    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    e.preventDefault();
    setMenuActive(false);

    if (isHome) {
      // On home page → smooth scroll
      scrollToHash(hash);
    } else {
      // On other pages → navigate to home + hash
      router.push(`/${hash}`);
    }
  };

  const handleServiceNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuActive(false);
    if (pathname === "/services") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/services");
    }
  };

  const handleWorksNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuActive(false);
    if (pathname === "/works") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/works");
    }
  };

  // Determine which nav link is active
  const getActiveClass = (link: string) => {
    if (!isHome) {
      if (link === "services" && pathname === "/services") return "active";
      if (link === "works" && pathname === "/works") return "active";
      return "";
    }
    return activeHash === `#${link}` ? "active" : "";
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${menuActive ? "menu-open" : ""}`}
      id="navbar"
    >
      <div className="navbar-inner">
        <a
          href="/"
          className="logo"
          onClick={(e) => handleNav(e, "#hero")}
        >
          <Image
            src="/assets/brand/logo-icon.svg"
            alt="Crafting Lab Icon"
            width={20}
            height={27}
            className="logo-icon"
          />
          <Image
            src="/assets/brand/logo-text.webp"
            alt="CRAFTINGLAB"
            width={150}
            height={25}
            className="logo-text"
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </a>
        <div className={`nav-menu ${menuActive ? "active" : ""}`} id="nav-menu">
          <a
            href="/"
            className={`nav-link ${getActiveClass("hero")}`}
            onClick={(e) => handleNav(e, "#hero")}
          >
            Home
          </a>
          <a
            href="/services"
            className={`nav-link ${getActiveClass("services")}`}
            onClick={handleServiceNav}
          >
            Services
          </a>
          <a
            href="/works"
            className={`nav-link ${getActiveClass("works")}`}
            onClick={handleWorksNav}
          >
            Works
          </a>
        </div>
        <a
          href="/#contact"
          className="btn-contact"
          id="btn-contact"
          onClick={(e) => handleNav(e, "#contact")}
        >
          Contact Us
        </a>
        <button
          className={`nav-toggle ${menuActive ? "active" : ""}`}
          id="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuActive}
          aria-controls="nav-menu"
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
