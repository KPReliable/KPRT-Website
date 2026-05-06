"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ServicesNavItem, 
  ContactMegaMenu, 
  IndustriesNavItem 
} from "./ServiceMegaMenu"; 

interface DesktopNavProps {
  showWhiteBg: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ showWhiteBg }) => {
  const pathname = usePathname();
  const [contactOpen, setContactOpen] = useState(false);

  // We have moved "industries" to a specialized NavItem to handle the Mega Menu
  const SECONDARY_ITEMS = [
    { label: "about", href: "/about" },
    { label: "careers", href: "/careers" },
    { label: "contact us", href: "/contact" },
  ];

  return (
    <div className="flex items-center px-20 h-full w-full">
      {/* Primary Links Section */}
      <div className="flex items-center h-full space-x-42">
        {/* "what we do" with ServicesMegaMenu */}
        <ServicesNavItem showWhiteBg={showWhiteBg} />
        
        {/* "industries" with IndustriesMegaMenu as per Screenshot 2026-05-03 202446.png */}
        <IndustriesNavItem showWhiteBg={showWhiteBg} />
      </div>

      {/* Right Aligned Secondary Links */}
      <div className="hidden xl:flex items-center ml-auto h-full space-x-12">
        {SECONDARY_ITEMS.map((item) => {
          const isContact = item.label === "contact us";
          
          return (
            <div 
              key={item.label} 
              className="h-full flex items-center relative"
              onMouseEnter={() => isContact && setContactOpen(true)}
              onMouseLeave={() => isContact && setContactOpen(false)}
            >
              <Link
                href={item.href}
                className={`text-[15px] font-medium tracking-tight transition-colors h-full flex items-center ${
                  showWhiteBg 
                    ? (pathname === item.href ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "text-gray-600 hover:text-gray-900") 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
              
              {/* Trigger the Contact Mega Menu on Hover */}
              {isContact && contactOpen && <ContactMegaMenu onClose={() => setContactOpen(false)} />}
            </div>
          );
        })}
        
        {/* Search Icon */}
        <button className={`px-2 transition-transform hover:scale-110 ${
          showWhiteBg ? "text-gray-600" : "text-white"
        }`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DesktopNav;