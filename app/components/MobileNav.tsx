"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Nagarro-style minimal arrow icon
const NagarroArrow = () => (
  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="inline-block ml-2">
    <path d="M0 11C6 11 10 11 22 11M22 11L14 1M22 11L14 11" stroke="#00d5a0" strokeWidth="2" />
    <path d="M2 11C6 11 10 11 20 11" stroke="#00d5a0" strokeWidth="2" opacity="0.5" />
  </svg>
);

const SERVICES_GROUPS = [
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
      { label: "instagram", href: "https://instagram.com" },
      { label: "youtube", href: "https://youtube.com" }
    ]
  }
];

const ServicesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed top-[80px] left-0 w-full bg-white z-[100] border-t border-gray-100 shadow-sm animate-in fade-in duration-300">
      <div className="max-w-[1400px] mx-auto px-10 py-16 grid grid-cols-12 gap-10 text-left">
        
        {/* Left Sidebar */}
        <div className="col-span-4 pr-10 border-r border-gray-200">
          <h2 className="text-4xl font-normal text-gray-800 mb-8 tracking-tight">talk to us</h2>
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-[#1e1b4b] mb-4 leading-tight">
              Welcome to digital <br /> product engineering
            </h3>
            <p className="text-gray-600 text-lg">
              Thanks for your interest. How can we help?
            </p>
          </div>
          <Link href="/contact" onClick={onClose} className="group text-lg font-medium text-gray-900 hover:text-[#1e1b4b] transition-colors">
            view contact details
            <NagarroArrow />
          </Link>
        </div>

        {/* Right Content */}
        <div className="col-span-8 grid grid-cols-3 gap-8">
          {SERVICES_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-3xl font-normal text-gray-800 mb-8 tracking-tight">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      onClick={onClose}
                      className="text-gray-600 text-lg hover:text-[#1e1b4b] transition-colors tracking-wide block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* --- EXPORT FOR MOBILE NAV --- */
export const ServicesMobileAccordion: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-white/[0.08]">
      <button 
        onClick={() => setExpanded(!expanded)} 
        className="w-full flex items-center justify-between px-5 py-4 text-white/80 hover:text-white"
      >
        
        <span className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {expanded && (
        <div className="bg-white/5 pb-4">
          {SERVICES_GROUPS.flatMap(g => g.links).map((link) => (
            <Link key={link.label} href={link.href} onClick={onClose} className="block px-8 py-2 text-sm text-white/60">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* --- MAIN EXPORT FOR DESKTOP NAV --- */
export const ServicesNavItem: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div 
      className="h-full flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/services"
        className={`text-[15px] font-medium tracking-tight px-4 transition-colors h-full flex items-center ${
          open || pathname.startsWith("/services") ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
        }`}
      >
      
      </Link>
      {open && <ServicesMegaMenu onClose={() => setOpen(false)} />}
    </div>
  );
};

export default ServicesNavItem;