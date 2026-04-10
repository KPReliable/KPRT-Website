"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/app/constant/header.constants";
import { ChevronDownIcon } from "@/app/components/icons/HeaderIcons";
import NavDropdown from "@/app/components/NavDropdown";

interface DesktopNavProps {
  scrolled?: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ scrolled = false }) => {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <nav className="flex items-center" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => {
        const isActive    = pathname === item.href;
        const hasDropdown = Boolean(item.dropdown?.length);
        const isOpen      = openItem === item.href;

        return (
          <div
            key={item.href}
            className="relative group"
            onMouseEnter={() => hasDropdown && setOpenItem(item.href)}
            onMouseLeave={() => setOpenItem(null)}
          >
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              aria-haspopup={hasDropdown ? "true" : undefined}
              className={[
                "flex items-center gap-0.5 text-[12px] tracking-wide px-3.5 py-2 transition-colors duration-200 font-normal",
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
              {hasDropdown && (
                <ChevronDownIcon
                  className={[
                    "w-3 h-3 opacity-60 transition-transform duration-200",
                    isOpen ? "rotate-180" : "",
                  ].join(" ")}
                  aria-hidden="true"
                />
              )}
            </Link>

            {/* Active underline */}
            {isActive && (
              <span
                className={[
                  "absolute bottom-0 left-3.5 right-3.5 h-[1.5px]",
                  scrolled ? "bg-[#284c87]" : "bg-white",
                ].join(" ")}
              />
            )}

            {/* Dropdown */}
            {hasDropdown && item.dropdown && isOpen && (
              <div className="absolute top-full left-0 mt-1 min-w-[200px] bg-white border border-gray-100 shadow-lg py-1 z-50">
                {item.dropdown.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="flex items-center gap-2 px-4 py-2 text-[12px] text-gray-600 hover:text-[#284c87] hover:bg-gray-50 transition-colors duration-150"
                  >
                    <span className="w-1 h-1 bg-[#00a2e9] flex-shrink-0" />
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default DesktopNav;