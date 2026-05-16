"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ============================================================
   SHARED UTILS & DATA
   ============================================================ */
const NagarroArrow = () => (
  <svg width="42" height="12" viewBox="0 0 24 12" fill="none" className="inline-block ml-2">
    <path d="M0 11C6 11 10 11 22 11M22 11L14 1M22 11L14 11" stroke="#ffb300" strokeWidth="2" />
    <path d="M2 11C6 11 10 11 20 11" stroke="#ffb300" strokeWidth="2" opacity="0.5" />
  </svg>
);

// DATA FOR "WHAT WE DO" (Services)
const ACTUAL_SERVICES_GROUPS = [
  {
    title: "Consultant",
    href: "/service/consultant"
  },
  
   
  
  {
    title: "Pre-Dispatch",
     href: "/service/predispatch"
   
  },{
    title: "Product Process Inspection",
     href: "/service/processinspection"
   
  },{
    title: "Final Inspection",
     href: "/service/finalinspection"
    
  }
];

// DATA FOR "CONTACT US" (Dropdown)
const CONTACT_GROUPS = [
  {
    title: "contacts",
    links: [
      { label: "press", href: "/press" },
      { label: "investor relations", href: "/investors" },
      { label: "website", href: "/support" }
    ]
  },
  {
    title: "locations",
    links: [
      { label: "americas", href: "/locations/americas" },
      { label: "emea", href: "/locations/emea" },
      { label: "asia-pacific", href: "/locations/apac" }
    ]
  },
  {
    title: "follow us",
    links: [
      { label: "linkedin", href: "https://linkedin.com" },
      { label: "facebook", href: "https://facebook.com" },
      { label: "instagram", href: "https://instagram.com" }
    ]
  }
];

const INDUSTRY_LINKS = [
  { label: "Automotive", href: "/industry/automotive" },
  { label: "Manufacturing", href: "/industry/manufacturing" },
  { label: "Locomotive", href: "/industry/locomotive" },
  { label: "Civil & Constructions", href: "/industry/civilandconstruction" },
  { label: "Training & SkillUP", href: "/industry/trainingandskillup" },
  
];
/* ============================================================
/* ============================================================
   SERVICES MEGA MENU (Desktop) - FIXED VERSION
   ============================================================ */
export const ServicesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed top-[80px] left-0 w-full bg-white z-[100] border-t border-gray-100 shadow-xl animate-in fade-in duration-300">
      {/* FIXED: Changed max-w-[100px] to max-w-7xl and fixed the gap/text typo */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-12 gap-10 text-left">
        
        {/* Left Sidebar Branding */}
        <div className="col-span-4 pr-10 border-r border-gray-200 text-black">
          <h2 className="text-3xl font-normal text-gray-800 mb-6 tracking-tight leading-tight">
            We Are Not a <br /> Manpower Supplier.
          </h2>
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-[#1e1b4b] mb-4 leading-tight">
              We Are Your Quality <br /> Control System.
            </h3>
            <p className="text-gray-500 text-base">
              Independent. Fast. Reliable.
            </p>
          </div>
          <Link 
            href="/contact" 
            onClick={onClose} 
            className="group text-base font-medium text-gray-900 hover:text-[#1e1b4b] transition-colors flex items-center gap-2"
          >
            Built to reduce defects—not just provide inspectors.
            <NagarroArrow />
          </Link>
        </div>

        {/* Right Side Services Grid */}
        <div className="col-span-8 grid grid-cols-3 gap-x-8 gap-y-10">
          {ACTUAL_SERVICES_GROUPS.map((group) => (
            <div key={group.title}>
              <Link href={group.href} className="text-sm font-bold text-gray-400 mb-6 tracking-widest uppercase">
                {group.title}
              </Link>
              {/* <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      onClick={onClose} 
                      className="text-gray-600 text-base hover:text-[#1e1b4b] transition-colors tracking-wide block leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   INDUSTRIES MEGA MENU (As per Screenshot 2026-05-03 202446.png)
   ============================================================ */
export const IndustriesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed top-[80px] left-0 w-full bg-white z-[100] border-t border-gray-100 shadow-xl animate-in fade-in duration-300">
      <div className="max-w-[1400px] mx-auto px-10 py-16 grid grid-cols-12 gap-10 text-left text-black">
        
        <div className="col-span-4 pr-10 border-r border-gray-200">
          <h2 className="text-4xl font-normal text-gray-800 mb-10 tracking-tight">we are </h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">independent third-party inspection partner</h3>
              <p className="text-gray-600 text-sm leading-relaxed"> From Quality Consultancy to India’s Trusted Third-Party Inspection Partner</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Enterprise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Trusted by Leading Manufacturers & OEMs</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Defined quality ownership</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Minimum reaction time 
Prevention-driven model </p>
            </div>
          </div>
          
        </div>

        <div className="col-span-8 pl-4">
          <h2 className="text-4xl font-normal text-gray-800 mb-10 tracking-tight">industries</h2>
          <div className="grid grid-cols-3 gap-y-4 gap-x-8">
            {INDUSTRY_LINKS.map((item) => (
              <Link key={item.label} href={item.href} onClick={onClose} className="text-gray-600 text-[15px] hover:text-[#1e1b4b] transition-colors tracking-wide block capitalize">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/industries" onClick={onClose} className="group text-lg font-medium text-gray-900 transition-colors inline-block">
              <span className="border-b-2 border-[#ffb300] pb-1"></span>
              <NagarroArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


/* ============================================================
   NAV ITEM WRAPPERS
   ============================================================ */
export const ServicesNavItem: React.FC<{ showWhiteBg: boolean }> = ({ showWhiteBg }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="h-full flex items-center" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link 
  href="/services" 
  className={`text-[15px] font-medium px-4 tracking-tight h-full flex items-center transition-colors ${
    showWhiteBg 
      ? (open || pathname.startsWith("/services") ? "text-[#ffb300] font-bold" : "text-gray-600 hover:text-[#ffb300]") 
      : "text-white hover:text-[#ffb300]"
  }`}
>
  Services
</Link>
      {open && <ServicesMegaMenu onClose={() => setOpen(false)} />}
    </div>
  );
};

export const IndustriesNavItem: React.FC<{ showWhiteBg: boolean }> = ({ showWhiteBg }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="h-full flex items-center" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link href="/industries" className={`text-[15px] font-medium px-4 tracking-tight h-full flex items-center transition-colors ${showWhiteBg ? (open || pathname.startsWith("/industries") ? "text-gray-900 font-bold" : "text-gray-600 hover:text-gray-900") : "text-white/90 hover:text-white"}`}>
        industries
      </Link>
      {open && <IndustriesMegaMenu onClose={() => setOpen(false)} />}
    </div>
  );
};

/* ============================================================
   MOBILE ACCORDION
   ============================================================ */
export const ServicesMobileAccordion: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-white/[0.08]">
      <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center justify-between px-6 py-5 text-white/80 hover:text-white transition-colors">
        <span className="text-[15px] font-medium tracking-wide uppercase">what we do</span>
        <span className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {/* {expanded && (
        <div className="bg-black/20 pb-4">
          {ACTUAL_SERVICES_GROUPS.flatMap(g => g.links).map((link) => (
            <Link key={link.label} href={link.href} onClick={onClose} className="block px-10 py-3 text-sm text-white/60 hover:text-[#00d5a0]">{link.label}</Link>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default ServicesNavItem;