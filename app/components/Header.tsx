"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/app/components/Logo";
import DesktopNav from "@/app/components/DesktopNav";
import MobileNav from "@/app/components/MobileNav";
import Hamburger from "@/app/components/Hamburger";
import { UserIcon } from "@/app/components/icons/HeaderIcons";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 h-12 w-full transition-all header-custom duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm"
            : "bg-transparent border-b border-white/10",
        ].join(" ")}
      >
        <div className="max-w-300 mx-auto h-full px-8 grid grid-cols-[1fr_auto_1fr] items-center">

          {/* ---- Logo ---- */}
          <div className="flex items-center">
            <Logo scrolled={scrolled} />
          </div>

          {/* ---- Desktop Nav — centred ---- */}
          <div className="hidden lg:flex items-center">
            <DesktopNav scrolled={scrolled} />
          </div>

          {/* ---- Actions — right ---- */}
          <div className="flex items-center justify-end gap-1">

            {/* Contact link */}
            <Link
              href="/contact"
              className={[
                "hidden lg:inline-flex items-center text-[12px] font-normal tracking-wide px-3 py-2 transition-colors duration-200",
                scrolled
                  ? "text-gray-500 hover:text-[#284c87]"
                  : "text-white/75 hover:text-white",
              ].join(" ")}
            >
              Contact
            </Link>

            {/* Divider */}
            <span
              className={[
                "hidden lg:block w-px h-4 mx-1",
                scrolled ? "bg-gray-200" : "bg-white/20",
              ].join(" ")}
            />

            {/* Login button */}
            <Link
              href="/login"
              className={[
                "hidden lg:inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wide px-4 py-1.5 transition-all duration-200",
                scrolled
                  ? "bg-[#284c87] text-white hover:bg-[#00a2e9]"
                  : "border border-white/50 text-white hover:bg-white/10 bg-white/5",
              ].join(" ")}
            >
              <UserIcon className="w-3 h-3" />
              <span>Login</span>
            </Link>

            {/* Mobile hamburger */}
            <div className="lg:hidden">
              <Hamburger
                isOpen={mobileOpen}
                onClick={() => setMobileOpen((p) => !p)}
              />
            </div>

          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Header;