"use client";

import React from "react";
import Link from "next/link";
import { NavDropdownItem } from "@/app/types/header.types";

interface NavDropdownProps {
  items: NavDropdownItem[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ items }) => {
  return (
    <div className="dropdown" role="menu">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="dropdown-link" role="menuitem">
          <span className="dropdown-dot" aria-hidden="true" />
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavDropdown;