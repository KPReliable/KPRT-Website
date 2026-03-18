"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/app/constant/header.constants";
import { ChevronDownIcon } from "@/app/components/icons/HeaderIcons";
import NavDropdown from "@/app/components/NavDropdown";

const DesktopNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="desktop-nav" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        const hasDropdown = item.dropdown && item.dropdown.length > 0;

        return (
          <div key={item.href} className="nav-item">
            <Link
              href={item.href}
              className={`nav-link${isActive ? " nav-link--active" : ""}`}
              aria-current={isActive ? "page" : undefined}
              aria-haspopup={hasDropdown ? "true" : undefined}
            >
              {item.label}
              {hasDropdown && (
                <ChevronDownIcon className="nav-chevron" aria-hidden="true" />
              )}
            </Link>
            {hasDropdown && item.dropdown && (
              <NavDropdown items={item.dropdown} />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default DesktopNav;