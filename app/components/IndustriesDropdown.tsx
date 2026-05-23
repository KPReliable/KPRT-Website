"use client";

import React from "react";
import Link from "next/link";

const NagarroArrow = () => (
  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="inline-block ml-2">
    <path d="M0 11C6 11 10 11 22 11M22 11L14 1M22 11L14 11" stroke="#00d5a0" strokeWidth="2" />
    <path d="M2 11C6 11 10 11 20 11" stroke="#00d5a0" strokeWidth="2" opacity="0.5" />
  </svg>
);

const INDUSTRY_LINKS = [
  { label: "Automotive", href: "/industry/automotive" },
  { label: "Manufacturing", href: "/industry/manufacturing" },
  { label: "Locomotive", href: "/industry/locomotive" },
  { label: "Civil & Constructions", href: "/industry/civilandconstruction" },
  { label: "Training & SkillUP", href: "/industry/trainingandskillup" },
  
];

export const IndustriesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    /* 
      Responsive Adjustments:
      - Changed top spacing alignment safely for mobile drops.
      - Added max-height limits along with automated vertical tracking (`overflow-y-auto`) 
        so menu items remain fully scrollable on small mobile screens.
    */
    <div className="fixed top-[80px] left-0 w-full bg-white z-[100] border-t border-gray-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto animate-in fade-in duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 text-left text-black">
        
        {/* Left Sidebar - Services Description */}
       
        {/* Right Content - Industries Grid */}
        {/* Shifted responsive tracking from a strict col-span-8 to flex columns on mobile panels */}
        <div className="col-span-1 lg:col-span-8 lg:pl-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 lg:mb-10 tracking-tight lowercase">
            industries
          </h2>
          
          {/* Adjusted menu grid columns: blocks transform into 1 column on mobile, 2 columns on tablets, and 3 columns on desktops */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3.5 sm:gap-y-4 gap-x-6 sm:gap-x-8">
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
            <Link 
              href="/industries" 
              onClick={onClose} 
              className="group text-base sm:text-lg font-medium text-gray-900 hover:text-[#1e1b4b] transition-colors inline-block"
            >
              <span className="border-b-2 border-[#ffb300] pb-1">All Industries</span>
              <NagarroArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesMegaMenu;