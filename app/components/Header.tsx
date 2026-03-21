"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import TopBar from "@/app/components/TopBar";
import Logo from "@/app/components/Logo";
import DesktopNav from "@/app/components/DesktopNav";
import MobileNav from "@/app/components/MobileNav";
import Hamburger from "@/app/components/Hamburger";
import { UserIcon } from "@/app/components/icons/HeaderIcons";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for elevated shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* <TopBar /> */}

      <header className={`main-header${scrolled ? " main-header--scrolled" : ""}`}>
        <div className="header-inner">
          <Logo />
          <DesktopNav />

          <div className="header-actions">
            {/* Desktop CTA */}
            <Link href="/login" className="cta-btn" aria-label="Get a Quote">
              <UserIcon className="cta-icon" />
              <span>Login</span>
            </Link>

            {/* Mobile hamburger */}
            <Hamburger
              isOpen={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            />
          </div>
        </div>

        {/* Accent line */}
        <div className="header-accent" aria-hidden="true" />
      </header>

      <MobileNav isOpen={mobileOpen} onClose={closeMobile} />
    </>
  );
};

export default Header;