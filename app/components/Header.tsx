"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/app/components/Logo";
import DesktopNav from "@/app/components/DesktopNav";
import MobileNav from "@/app/components/MobileNav";
import Hamburger from "@/app/components/Hamburger";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNavTyped = MobileNav as React.ComponentType<MobileNavProps>;

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Determine if the header should show the white background
  const showWhiteBg = scrolled || isHovered;

  return (
    <>
      <header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0 right-0 z-50 h-[80px] w-full transition-all duration-500 ease-in-out ${
          showWhiteBg
            ? "bg-white border-b border-gray-100 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto h-full px-10 flex items-center justify-between">
          
          {/* ---- Logo & Desktop Nav Group ---- */}
          <div className="flex items-center h-full">
            <div className="mr-4">
              {/* Pass showWhiteBg so Logo can switch from white to black */}
              <Logo scrolled={showWhiteBg} /> 
            </div>
            
            <div className="h-px w-16 bg-gray-200 hidden lg:block mx-4 opacity-30" />

            <div className="hidden lg:flex items-center h-full">
              {/* Pass the state to DesktopNav to avoid logic collision */}
              <DesktopNav showWhiteBg={showWhiteBg} />
            </div>
          </div>

          {/* ---- Mobile Controls ---- */}
          <div className="lg:hidden flex items-center">
            <Hamburger
              isOpen={mobileOpen}
              onClick={() => setMobileOpen((p) => !p)}
            />
          </div>
        </div>
      </header>

      <MobileNavTyped isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Header;