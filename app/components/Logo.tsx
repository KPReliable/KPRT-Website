"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ scrolled = false }) => {
  return (
    <Link
      href="/"
      aria-label="KP Reliable Home"
      className="flex items-center px-2 sm:px-4 gap-2 no-underline"
    >
      {/* Logo image */}
      <div className="shrink-0 w-[60px] sm:w-[80px] h-[30px] sm:h-[40px] relative">
        <Image
          src="/assets/homeImages/logo-minimal.svg"
          alt="KP Reliable Logo"
          width={80}
          height={40}
          priority
          style={{ objectFit: "contain" }}
          className="w-full h-full"
        />
      </div>

      {/* Text Wrapper */}
      {/* 
        Responsive Fix: Added a max-width constrain layer on small screens 
        to guarantee text scales elegantly without clipping layout controls on mobile viewports.
      */}
      <div className="flex flex-col leading-none max-w-[130px] sm:max-w-none">
        <span
          className={[
            "font-bold text-[11px] sm:text-[13px] tracking-widest uppercase transition-colors duration-300 whitespace-nowrap",
            scrolled ? "text-[#284c87]" : "text-white",
          ].join(" ")}
        >
          KP Reliable
        </span>
        <span className="text-[7px] sm:text-[8px] tracking-[0.18em] uppercase text-[#00a2e9] font-medium mt-[1px] break-words sm:whitespace-nowrap">
          Technique India Private Limited
        </span>
      </div>
    </Link>
  );
};

export default Logo;