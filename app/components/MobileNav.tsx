"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/app/constant/header.constants";
import { ServicesMobileAccordion } from "@/app/components/ServiceMegaMenu";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 z-50 h-full w-[300px] bg-[#0f2347] flex flex-col shadow-2xl overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08]">
          <span className="text-white font-semibold text-[15px] tracking-wide">
            Menu
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors rounded"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-2">
          {NAV_ITEMS.map((item) => {
            // Services gets the full mega accordion
            if (item.label === "Services") {
              return (
                <ServicesMobileAccordion key="services" onClose={onClose} />
              );
            }

            const isActive = pathname === item.href;

            return (
              <div key={item.href} className="border-b border-white/[0.08]">
                <Link
                  href={item.href}
                  className={[
                    "flex items-center px-5 py-4 text-[15px] transition-colors no-underline",
                    isActive
                      ? "text-white font-medium border-l-2 border-[#00a2e9] pl-[calc(1.25rem-2px)]"
                      : "text-white/70 hover:text-white",
                  ].join(" ")}
                  onClick={onClose}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* CTA buttons */}
        <div className="p-5 flex flex-col gap-3 border-t border-white/[0.08]">
          <Link
            href="/quote"
            className="w-full flex items-center justify-center gap-2 bg-[#00a2e9] hover:bg-[#0090d0] text-white text-[13px] font-semibold py-3 transition-colors no-underline"
            onClick={onClose}
          >
            Get a Quote
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M8 3l5 5-5 5" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:border-white/50 text-white text-[13px] font-semibold py-3 transition-colors no-underline"
            onClick={onClose}
          >
            Book an Inspection
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNav;