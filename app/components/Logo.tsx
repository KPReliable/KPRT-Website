"use client";

import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "@/app/components/icons/HeaderIcons";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="logo" aria-label="QualityInspect Home">
      <div className="logo-mark">
        <CheckmarkIcon className="logo-mark-icon" />
      </div>
      <div className="logo-text">
        <span className="logo-name">QualityInspect</span>
        <span className="logo-sub">Inspection &amp; Quality Services</span>
      </div>
    </Link>
  );
};

export default Logo;