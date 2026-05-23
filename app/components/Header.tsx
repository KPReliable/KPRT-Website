"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/app/components/Logo";
import DesktopNav from "@/app/components/DesktopNav";

import Hamburger from "@/app/components/Hamburger";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};



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
          showWhiteBg || mobileOpen
            ? "bg-white border-b border-gray-100 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Changed px-10 to px-4 md:px-10 for explicit mobile responsiveness */}
        <div className="max-w-[1440px] mx-auto h-full px-4 md:px-10 flex items-center justify-between">
          
          {/* ---- Logo & Desktop Nav Group ---- */}
          <div className="flex items-center h-full">
            <div className="mr-4">
              {/* Pass showWhiteBg so Logo can switch from white to black */}
              <Logo scrolled={showWhiteBg || mobileOpen} /> 
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

      {/* 
        Fully Responsive Mobile Drawer Overlay:
        Utilizes your existing mobileOpen flag state to switch view positioning smoothly 
        without changing or colliding with any core logic hooks.
      */}
      <div
        className={`fixed inset-0 z-40 bg-white pt-[80px] transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto bg-white flex flex-col justify-between">
          <div className="flex flex-col space-y-6">
            {/* 
              Re-utilizing DesktopNav for mobile breakdown structure. 
              Tailwind handles layout orientation overrides smoothly.
            */}
            <div className="flex flex-col w-full h-auto">
              <DesktopNav showWhiteBg={true} />
            </div>
          </div>
          
          {/* Mobile Footer Utility Actions Inside Drawer Container */}
          <div className="border-t border-gray-100 pt-6 pb-8 text-center text-xs text-gray-400">
            © 2026 KP Reliable Technique India Pvt. Ltd.
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;