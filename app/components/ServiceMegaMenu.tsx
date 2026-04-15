"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ============================================================
   DATA
   ============================================================ */
const SERVICES_DATA = [
  { category: "Plastic Moulding", slug: "plastic-moulding", desc: "Injection, blow, or compression moulding processes with full traceability.", points: ["Material traceability", "Mould maintenance", "Process parameters"] },
  { category: "Rubber Components", slug: "rubber-components", desc: "Compression, transfer, or injection moulding of rubber parts.", points: ["Compound control", "Hardness testing", "Curing parameters"] },
  { category: "Sheet Metal", slug: "sheet-metal", desc: "Cutting, bending, and forming using press machines.", points: ["Die maintenance", "Burr control", "Dimensional checks"] },
  { category: "Casting", slug: "casting", desc: "Molten metal poured into complex moulds for intricate geometries.", points: ["Raw material control", "Porosity defects", "Heat treatment"] },
  { category: "Forging", slug: "forging", desc: "Shaping metal under compressive forces for enhanced strength.", points: ["Billet quality", "Temperature control", "Grain flow"] },
  { category: "Machining", slug: "machining", desc: "Precision CNC and conventional machining for tight tolerances.", points: ["Calibration", "Tool wear", "SPC control"] },
  { category: "Fabrication & Welding", slug: "fabrication-welding", desc: "Assembly using qualified welding processes and certified joiners.", points: ["WPS adherence", "Visual inspection", "NDT"] },
  { category: "Surface Treatment", slug: "surface-treatment", desc: "Painting, plating, and anodizing for protection and finish quality.", points: ["Coating thickness", "Adhesion test", "Bath control"] },
  { category: "Electrical & Electronics", slug: "electrical-electronics", desc: "Electrical components and assemblies with full functional testing.", points: ["ESD control", "Functional testing", "Soldering quality"] },
  { category: "Consumables", slug: "consumables", desc: "Lubricants, adhesives, and coolants with safety compliance.", points: ["MSDS compliance", "Shelf life", "Safety compliance"] },
  { category: "Tooling & Fixtures", slug: "tooling-fixtures", desc: "Dies, molds, jigs, and fixtures with design validation.", points: ["Design validation", "Tool life", "Accuracy check"] },
  { category: "Packaging", slug: "packaging", desc: "Packing and transportation materials for damage-free delivery.", points: ["Damage prevention", "Labeling", "FIFO"] },
];

/* ============================================================
   ICONS
   ============================================================ */
const CheckIcon = () => (
  <svg viewBox="0 0 14 14" width="12" height="12" fill="none"
    stroke="#00a2e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 7l3.5 3.5L12 3" />
  </svg>
);

const ArrowIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M8 3l5 5-5 5" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 16 16" width="12" height="12" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
  >
    <path d="M4 6l4 4 4-4" />
  </svg>
);

/* ============================================================
   MEGA MENU PANEL
   ============================================================ */
const ServicesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES_DATA[activeIndex];

  return (
    <div
      className="absolute left-0 right-0 top-full z-50 bg-white shadow-2xl border-t border-black/[0.06]"
      style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.14)" }}
    >
      <div className="flex" style={{ minHeight: "420px" }}>

        {/* ---- Sidebar ---- */}
        <div className="w-56 flex-shrink-0 bg-[#f7f9fc] border-r border-black/[0.07] py-5">
          <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-black/30 px-5 mb-3">
            All Services
          </p>
          {SERVICES_DATA.map((s, i) => (
            <button
              key={s.slug}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
              className={[
                "w-full flex items-center gap-2.5 px-5 py-2 text-left text-[13px] transition-all duration-100 border-l-2",
                i === activeIndex
                  ? "border-[#00a2e9] bg-white text-[#0f2347] font-medium"
                  : "border-transparent text-black/55 hover:text-[#0f2347] hover:bg-[#00a2e9]/[0.04]",
              ].join(" ")}
            >
              <span
                className={[
                  "w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-100",
                  i === activeIndex ? "bg-[#00a2e9]" : "bg-current opacity-40",
                ].join(" ")}
              />
              {s.category}
            </button>
          ))}
        </div>

        {/* ---- Content ---- */}
        <div className="flex-1 p-7 flex flex-col gap-5">

          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-black/[0.07]">
            <div>
              <h3 className="text-[18px] font-semibold text-[#0f2347] mb-1">
                {active.category}
              </h3>
              <p className="text-[13px] text-black/45 max-w-md leading-relaxed">
                {active.desc}
              </p>
            </div>
            <Link
              href={`/services/${active.slug}`}
              onClick={onClose}
              className="text-[12px] text-[#00a2e9] font-medium flex items-center gap-1.5 hover:text-[#0f2347] transition-colors no-underline mt-1 flex-shrink-0"
            >
              View all cases <ArrowIcon size={12} />
            </Link>
          </div>

          {/* Quality checkpoints */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-black/28 mb-3">
              Quality Checkpoints
            </p>
            <div className="grid grid-cols-3 gap-2.5">
              {active.points.map((point) => (
                <div
                  key={point}
                  className="bg-[#f7f9fc] border border-black/[0.07] rounded-md px-3.5 py-3 flex items-start gap-2.5"
                >
                  <span className="mt-0.5 w-[26px] h-[26px] rounded bg-[#00a2e9]/10 flex items-center justify-center flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-[12px] text-black/55 leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2.5 mt-auto">
            <Link
              href={`/services/${active.slug}`}
              onClick={onClose}
              className="text-[12px] font-medium text-[#0f2347] bg-white border border-black/15 px-4 py-2 rounded-sm hover:border-[#00a2e9] hover:text-[#00a2e9] transition-colors no-underline"
            >
              Learn more
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="text-[12px] font-medium text-white bg-[#00a2e9] px-4 py-2 rounded-sm hover:bg-[#0090d0] transition-colors no-underline flex items-center gap-1.5"
            >
              Request Inspection <ArrowIcon size={11} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="flex items-center justify-between bg-[#f7f9fc] border-t border-black/[0.07] px-7 py-3">
        <span className="text-[12px] text-black/40">
          Not sure which service fits your needs?
        </span>
        <Link
          href="/contact"
          onClick={onClose}
          className="text-[12px] font-medium text-white bg-[#0f2347] px-4 py-2 rounded-sm hover:bg-[#00a2e9] transition-colors no-underline flex items-center gap-1.5"
        >
          Talk to an expert <ArrowIcon size={11} />
        </Link>
      </div>
    </div>
  );
};

/* ============================================================
   NAV ITEM — with mega menu trigger
   ============================================================ */
export const ServicesNavItem: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isActive = pathname?.startsWith("/services");

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={[
          "flex items-center gap-1.5 h-full px-4 text-[13px] transition-colors duration-150 border-b-2",
          isActive || open
            ? "text-white border-[#00a2e9]"
            : "text-white/55 border-transparent hover:text-white",
        ].join(" ")}
      >
        Services
        <ChevronIcon open={open} />
      </button>

      {open && <ServicesMegaMenu onClose={() => setOpen(false)} />}
    </div>
  );
};

/* ============================================================
   MOBILE VERSION — accordion inside MobileNav
   ============================================================ */
export const ServicesMobileAccordion: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-white/[0.08]">
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="w-full flex items-center justify-between px-5 py-4 text-[15px] text-white/80 hover:text-white transition-colors"
      >
        Services
        <ChevronIcon open={expanded} />
      </button>

      {expanded && (
        <div className="pb-3">
          {SERVICES_DATA.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              onClick={onClose}
              className="flex items-center gap-3 px-7 py-2.5 text-[13px] text-white/55 hover:text-white transition-colors no-underline"
            >
              <span className="w-1 h-1 rounded-full bg-[#00a2e9] flex-shrink-0" />
              {s.category}
            </Link>
          ))}
          <Link
            href="/services"
            onClick={onClose}
            className="flex items-center gap-2 mx-7 mt-3 text-[12px] font-medium text-[#00a2e9] hover:text-white transition-colors no-underline"
          >
            View all services <ArrowIcon size={11} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServicesNavItem;