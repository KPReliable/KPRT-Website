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
      className="flex items-center gap-3 no-underline"
    >
      {/* Logo image */}
      <Image
        src="/assets/homeImages/logo-minimal.svg"
        alt="KP Reliable Logo"
        width={80}
        height={40}
        priority
        style={{ objectFit: "contain" }}
      />

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className={[
            "font-bold text-[13px] tracking-widest uppercase transition-colors duration-300",
            scrolled ? "text-[#284c87]" : "text-white",
          ].join(" ")}
        >
          KP Reliable
        </span>
        <span className="text-[8px] tracking-[0.18em] uppercase text-[#00a2e9] font-medium mt-[1px]">
          Technique India Private Limited
        </span>
      </div>
    </Link>
  );
};

export default Logo;