"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SERVICES_DATA } from "@/app/constant/header.constants";
import { ChevronDownIcon } from "@/app/components/icons/HeaderIcons";

interface DesktopNavProps {
  scrolled?: boolean;
}

/* ============================================================
   ICONS
   ============================================================ */
const ArrowIcon = () => (
  <svg viewBox="0 0 14 14" width="11" height="11" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 7h10M7 2l5 5-5 5" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 12 12" width="11" height="11" fill="none"
    stroke="#00a2e9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6l2.5 2.5L10 3" />
  </svg>
);

/* ============================================================
   COLUMN 3 — Detail panel (shown on service hover)
   ============================================================ */
interface ServiceDetail {
  category: string;
  desc: string;
  points: string;
}

const DetailPanel: React.FC<{ service: ServiceDetail | null }> = ({ service }) => {
  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-2 text-center">
        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
          <svg viewBox="0 0 16 16" width="18" height="18" fill="none"
            stroke="#00a2e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="8" r="6" />
            <path d="M8 5v3l2 2" />
          </svg>
        </div>
        <p className="text-[12px] text-black/30">Hover a service to see details</p>
      </div>
    );
  }

  const points = service.points.split(", ");

  return (
    <div className="flex flex-col gap-5 animate-detail-in">
      {/* Title */}
      <div>
        <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#00a2e9] mb-1">
          Service detail
        </p>
        <h4 className="text-[18px] font-semibold text-[#0f2347] leading-tight">
          {service.category}
        </h4>
      </div>

      {/* Description */}
      <p className="text-[13px] text-black/50 leading-relaxed max-w-sm">
        {service.desc}
      </p>

      <div className="h-px bg-black/[0.06]" />

      {/* Checkpoints */}
      <div>
        <p className="text-[10px] font-semibold tracking-[0.13em] uppercase text-black/[0.28] mb-3">
          Quality checkpoints
        </p>
        <ul className="flex flex-col gap-2.5">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2.5">
              <span className="w-[22px] h-[22px] flex-shrink-0 flex items-center justify-center rounded bg-[#00a2e9]/10 mt-px">
                <CheckIcon />
              </span>
              <span className="text-[12.5px] text-black/55 leading-snug">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Link
        href={`/services/${service.category.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-")}`}
        className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#00a2e9] hover:text-[#0f2347] transition-colors no-underline mt-1"
      >
        Explore {service.category} <ArrowIcon />
      </Link>
    </div>
  );
};

/* ============================================================
   MEGA MENU
   ============================================================ */
const MegaMenu: React.FC<{ isClosing: boolean }> = ({ isClosing }) => {
  const [hoveredService, setHoveredService] =
    useState<typeof SERVICES_DATA[0] | null>(SERVICES_DATA[0]);

  return (
    <div
      className={[
        "fixed top-[var(--navbar-height,56px)] left-1/2 -translate-x-1/2 w-full max-w-6xl z-50",
        "bg-white border border-black/[0.06] shadow-2xl rounded-xl overflow-hidden",
        "grid grid-cols-[240px_200px_1fr]",
        isClosing ? "animate-dropdown-out" : "animate-dropdown",
      ].join(" ")}
    >

      {/* ================= SECTION 1: TEXT ================= */}
      <div className="bg-[#0f2347] px-6 py-7 flex flex-col justify-between">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--color-secondary)] mb-3">
            Our Expertise
          </p>

          <h3 className="text-[18px] font-semibold text-white leading-snug mb-3">
            Quality assurance across every process
          </h3>

          <p className="text-[12px] text-white/50 leading-relaxed">
            From raw material to finished product — we embed quality at every
            stage of your supply chain with certified on-site inspection teams.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white bg-[var(--color-secondary)] px-4 py-2.5 mt-6 hover:bg-[var(--color-secondary-light)] transition-colors"
          >
            Get a free audit →
          </Link>
        </div>

        <p className="text-[11px] text-white/25 mt-6">
          12 service categories · Pan-India coverage
        </p>
      </div>

      {/* ================= SECTION 2: LIST ================= */}
      <div className="border-r border-black/[0.06] py-4 bg-[#f8fafc] overflow-y-auto">

        <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-black/[0.3] px-5 mb-3">
          All services
        </p>

        {SERVICES_DATA.map((service) => {
          const isActive =
            hoveredService?.category === service.category;

          return (
            <button
              key={service.category}
              onMouseEnter={() => setHoveredService(service)}
              className={[
                "w-full flex items-center justify-between px-5 py-2.5 text-left text-[13px]",
                "border-l-2 transition-all duration-150",
                isActive
                  ? "border-[var(--color-secondary)] bg-white text-[var(--color-primary-dark)] font-medium"
                  : "border-transparent text-black/60 hover:text-[var(--color-primary-dark)] hover:bg-white",
              ].join(" ")}
            >
              {service.category}

              <span
                className={[
                  "text-[var(--color-secondary)] text-xs transition-opacity",
                  isActive ? "opacity-100" : "opacity-0",
                ].join(" ")}
              >
                →
              </span>
            </button>
          );
        })}
      </div>

      {/* ================= SECTION 3: DETAILS ================= */}
      <div className="p-8 max-w-[520px]">

        {hoveredService && (
          <>
            <h3 className="text-[18px] font-semibold text-[var(--color-primary-dark)] mb-3">
              {hoveredService.category}
            </h3>

            <p className="text-[13px] text-black/60 mb-6 leading-relaxed">
              {hoveredService.desc}
            </p>

            {/* AUDIT POINTS */}
            <div className="flex flex-wrap gap-2 mb-6">
              {hoveredService.points.split(";").map((point, i) => (
                <span
                  key={i}
                  className="text-[11px] bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] px-3 py-1 rounded-full"
                >
                  {point.trim()}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/services/${hoveredService.category
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`}
              className="text-[12px] font-semibold text-[var(--color-secondary)] hover:underline"
            >
              Learn more →
            </Link>
          </>
        )}

      </div>
    </div>
  );
};
/* ============================================================
   DESKTOP NAV
   ============================================================ */
const DesktopNav: React.FC<DesktopNavProps> = ({ scrolled = false }) => {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = (href: string) => {
    setIsClosing(false);
    setOpenItem(href);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setOpenItem(null);
    }, 150);
  };

  return (
    <nav className="flex items-center h-full" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        const isOpen = openItem === item.href;
        const hasMega = item.isMega;

        return (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => hasMega && handleOpen(item.href)}
            onMouseLeave={() => hasMega && handleClose()}
          >
            {/* NAV LINK */}
            <Link
              href={item.href}
              className={[
                "flex items-center gap-1 text-[12px] tracking-wide px-4 py-4 transition-colors duration-200 font-normal border-b-2",
                scrolled
                  ? isActive
                    ? "text-[#284c87] font-medium border-[#284c87]"
                    : "text-gray-700 hover:text-[#284c87] border-transparent"
                  : isActive || isOpen
                  ? "text-white font-medium border-[#00a2e9]"
                  : "text-white/80 hover:text-white border-transparent",
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

            {/* MEGA MENU */}
            {hasMega && (isOpen || isClosing) && (
              <MegaMenu isClosing={isClosing} />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default DesktopNav;