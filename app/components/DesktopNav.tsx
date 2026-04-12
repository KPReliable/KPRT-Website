"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SERVICES_DATA } from "@/app/constant/header.constants";
import { ChevronDownIcon } from "@/app/components/icons/HeaderIcons";

interface DesktopNavProps {
  scrolled?: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ scrolled = false }) => {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <nav className="flex items-center h-full" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        const isOpen = openItem === item.href;
        const hasMega = item.isMega;

        return (
          <div
            key={item.href}
            className="relative group"
            onMouseEnter={() => hasMega && setOpenItem(item.href)}
            onMouseLeave={() => setOpenItem(null)}
          >
            {/* NAV LINK */}
            <Link
              href={item.href}
              className={[
                "flex items-center gap-1 text-[12px] tracking-wide px-4 py-4 transition-colors duration-200 font-normal",
                scrolled
                  ? isActive
                    ? "text-[#284c87] font-medium"
                    : "text-gray-700 hover:text-[#284c87]"
                  : isActive
                  ? "text-white font-medium"
                  : "text-white/80 hover:text-white",
              ].join(" ")}
            >
              {item.label}
              {hasMega && (
                <ChevronDownIcon
                  className={[
                    "w-3 h-3 opacity-60 transition-transform duration-200",
                    isOpen ? "rotate-180" : "",
                  ].join(" ")}
                />
              )}
            </Link>

            {/* ACTIVE UNDERLINE */}
            {/* {isActive && (
              <span
                className={[
                  "absolute bottom-0 left-0 right-0 h-[2px]",
                  scrolled ? "bg-[#284c87]" : "bg-white",
                ].join(" ")}
              />
            )} */}

            {/* MEGA MENU */}
            {hasMega && isOpen && (
              <div className="absolute left-0 right-0 top-full w-screen bg-white border-t border-gray-100 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">
                  {SERVICES_DATA.map((service) => (
                    <Link
                      key={service.category}
                      href={`/services/${service.category.toLowerCase().replace(/ /g, "-")}`}
                      className="group/item flex flex-col gap-2 p-4 rounded-xl hover:bg-gray-50 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                        <h4 className="text-[13px] font-bold text-[var(--color-primary-dark)] group-hover/item:text-[var(--color-secondary)]">
                          {service.category}
                        </h4>
                      </div>

                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-1">
                        <span className="text-[9px] font-semibold text-[var(--color-primary)]/50 uppercase tracking-wider italic">
                          Audit: {service.points}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* BOTTOM BAR */}
                <div className="bg-gray-50 py-4 px-10 border-t border-gray-100">
                  <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <p className="text-[11px] text-gray-400">
                      Trusted quality inspection across 28 states in India.
                    </p>
                    <Link
                      href="/services"
                      className="text-[11px] font-bold text-[var(--color-secondary)] hover:underline"
                    >
                      Explore All Services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default DesktopNav;