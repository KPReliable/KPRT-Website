"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/app/constant/header.constants";
import { ChevronDownIcon } from "@/app/components/icons/HeaderIcons";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="mobile-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <nav>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isExpanded = expandedItem === item.label;

            return (
              <div key={item.href} className="mobile-nav-item">
                {hasDropdown ? (
                  <button
                    className={`mobile-nav-link mobile-nav-btn${isActive ? " mobile-nav-link--active" : ""}`}
                    onClick={() => toggleExpand(item.label)}
                    aria-expanded={isExpanded}
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`mobile-chevron${isExpanded ? " mobile-chevron--open" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`mobile-nav-link${isActive ? " mobile-nav-link--active" : ""}`}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )}

                {hasDropdown && isExpanded && item.dropdown && (
                  <div className="mobile-dropdown">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="mobile-dropdown-link"
                        onClick={onClose}
                      >
                        <span className="dropdown-dot" aria-hidden="true" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mobile-cta">
          <Link href="/quote" className="mobile-cta-btn" onClick={onClose}>
            Get a Quote
          </Link>
          <Link href="/contact" className="mobile-cta-btn-outline" onClick={onClose}>
            Book an Inspection
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNav;