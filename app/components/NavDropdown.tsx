"use client";

import React from "react";
import Link from "next/link";

interface NavDropdownProps {
  title: string;
  links: { label: string; href: string }[];
  onClose: () => void;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ title, links, onClose }) => {
  return (
    /* 
      Responsive Adjustments:
      - Adapts positioning seamlessly: fluid relative blocks on mobile devices, 
        switching back to absolute drop cards on desktops (`lg:absolute`).
      - Strips shadow boxes and rigid borders on mobile screens to integrate cleanly inside flyout overlays.
    */
    <div className="relative lg:absolute lg:top-full lg:left-0 w-full lg:w-64 mt-1 lg:mt-2 bg-transparent lg:bg-white shadow-none lg:shadow-2xl rounded-lg py-2 lg:py-4 border-0 lg:border lg:border-gray-100 z-[100] animate-in lg:zoom-in-95 duration-200">
      <p className="px-4 lg:px-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
        {title}
      </p>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="block px-6 lg:px-6 py-2.5 lg:py-2 text-sm text-gray-600 lg:text-gray-600 hover:text-[#1e1b4b] hover:bg-gray-50 transition-colors capitalize rounded-md lg:rounded-none"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavDropdown;