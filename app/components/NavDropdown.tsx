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
    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-lg py-4 border border-gray-100 z-[100] animate-in zoom-in-95 duration-200">
      <p className="px-12 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{title}</p>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="block px-6 py-2 text-sm text-gray-600 hover:text-[#1e1b4b] hover:bg-gray-50 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavDropdown;