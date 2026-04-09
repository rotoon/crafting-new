"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setMenuActive(false);

    if (isHome) {
      // On home page → smooth scroll
      window.scrollTo({ top: 0, behavior: "smooth" });
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

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${menuActive ? "menu-open" : ""}`}
      id="navbar"
    >
      <div className="navbar-inner">
        <Link href="/" className="logo" onClick={(e) => handleNav(e, "#hero")}>
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
          />
        </Link>
        <div className={`nav-menu ${menuActive ? "active" : ""}`} id="nav-menu">
          <Link
            href="/"
            className={`nav-link`}
            onClick={(e) => handleNav(e, "#hero")}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`nav-link`}
            onClick={handleServiceNav}
          >
            Services
          </Link>
          <Link href="/works" className={`nav-link`} onClick={handleWorksNav}>
            Works
          </Link>
        </div>
        <Link
          href="/#contact"
          className="btn-contact"
          id="btn-contact"
          onClick={(e) => handleNav(e, "#contact")}
        >
          Contact Us
        </Link>
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
