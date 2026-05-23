"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ============================================================
   SHARED UTILS & DATA
   ============================================================ */
const NagarroArrow = () => (
  <svg width="42" height="12" viewBox="0 0 24 12" fill="none" className="inline-block ml-2 shrink-0">
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
    title: "Pre-Production Inspection",
     href: "/service/Pre-ProductionInspection"
   
  },{
    title: "Product Process Inspection",
     href: "/service/ProductProcessInspection"
   
  },{
    title: "Final Inspection",
     href: "/service/finalinspection"
    
  },
  {
    title: "Process Upgradation",
     href: "/service/ProcessUpgradation"
    
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
   SERVICES MEGA MENU (Desktop / Mobile Tablet Fluid Overlay)
   ============================================================ */
export const ServicesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed top-[80px] left-0 w-full bg-white z-[100] border-t border-gray-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 text-left">
        
        {/* Left Sidebar Branding */}
        <div className="col-span-1 lg:col-span-4 pr-0 lg:pr-10 border-r-0 lg:border-r border-gray-200 text-black">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-800 mb-4 lg:mb-6 tracking-tight leading-tight">
            We Are Not a <br className="hidden sm:inline" /> Manpower Supplier.
          </h2>
          <div className="mb-6 lg:mb-10">
            <h3 className="text-lg sm:text-xl font-semibold text-[#1e1b4b] mb-2 sm:mb-4 leading-tight">
              We Are Your Quality <br className="hidden sm:inline" /> Control System.
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              Independent. Fast. Reliable.
            </p>
          </div>
          <Link 
            href="/contact" 
            onClick={onClose} 
            className="group text-sm sm:text-base font-medium text-gray-900 hover:text-[#1e1b4b] transition-colors flex items-center justify-between lg:justify-start gap-2 border-t sm:border-t-0 pt-4 sm:pt-0"
          >
            <span className="leading-snug">Built to reduce defects—not just provide inspectors.</span>
            <NagarroArrow />
          </Link>
        </div>

        {/* Right Side Services Grid */}
        <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-10 border-t border-gray-100 lg:border-t-0 pt-6 lg:pt-0">
          {ACTUAL_SERVICES_GROUPS.map((group) => (
            <div key={group.title} className="group-item">
              <Link 
                href={group.href} 
                onClick={onClose}
                className="text-xs sm:text-sm font-bold text-gray-400 hover:text-[#ffb300] transition-colors tracking-widest uppercase block py-1.5"
              >
                {group.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   INDUSTRIES MEGA MENU
   ============================================================ */
export const IndustriesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed top-[80px] left-0 w-full bg-white z-[100] border-t border-gray-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto animate-in fade-in duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 text-left text-black">
        
        {/* Left Sidebar */}
        <div className="col-span-1 lg:col-span-4 pr-0 lg:pr-10 border-r-0 lg:border-r border-gray-200">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 lg:mb-10 tracking-tight lowercase">we are </h2>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 capitalize">independent third-party inspection partner</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed"> From Quality Consultancy to India’s Trusted Third-Party Inspection Partner</p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 capitalize">Intelligent Enterprise</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Trusted by Leading Manufacturers & OEMs</p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 capitalize">Defined quality ownership</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Minimum reaction time Prevention-driven model </p>
            </div>
          </div>
        </div>

        {/* Right Side Links Layout */}
        <div className="col-span-1 lg:col-span-8 lg:pl-4 border-t border-gray-100 lg:border-t-0 pt-6 lg:pt-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 lg:mb-10 tracking-tight lowercase">industries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
            {INDUSTRY_LINKS.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                onClick={onClose} 
                className="text-gray-600 text-sm sm:text-[15px] hover:text-[#1e1b4b] transition-colors tracking-wide block capitalize py-1 sm:py-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 lg:mt-12">
            <Link href="/industries" onClick={onClose} className="group text-base sm:text-lg font-medium text-gray-900 transition-colors inline-flex items-center">
              <span className="border-b-2 border-[#ffb300] pb-1">All Industries</span>
              <NagarroArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


/* ============================================================
   NAV ITEM WRAPPERS (Unchanged Desktop triggers)
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
   MOBILE ACCORDION (Enhanced Link Routing Fallback Layout)
   ============================================================ */
export const ServicesMobileAccordion: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-white/[0.08] w-full">
      <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center justify-between px-6 py-5 text-white/80 hover:text-white transition-colors text-left outline-none">
        <span className="text-[15px] font-medium tracking-wide uppercase">what we do</span>
        <span className={`transition-transform duration-200 transform text-xs ${expanded ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {expanded && (
        <div className="bg-black/10 pb-4 flex flex-col space-y-1 w-full animate-in slide-in-from-top-2 duration-200">
          {ACTUAL_SERVICES_GROUPS.map((link) => (
            <Link 
              key={link.title} 
              href={link.href} 
              onClick={onClose} 
              className="block px-10 py-2.5 text-sm text-white/70 hover:text-[#ffb300] transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesNavItem;