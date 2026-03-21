"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="logo-container" aria-label="KPReilable Home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '12px' }}>
      {/* Individual Logo Image without the circular wrapper class */}
      <Image 
        src="/assets/homeimages/logo-minimal.svg" 
        alt="KPReilable Logo" 
        width={70} 
        height={40} 
        priority 
        style={{ objectFit: "contain" }}
      />
      
      <div className="logo-text" style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="logo-name" style={{ fontWeight: 'bold', fontSize: '1.2rem', lineHeight: '1.2' }}>
          KPReilable
        </span>
        <span className="logo-sub" style={{ fontSize: '0.75rem', opacity: 0.8 }}>
          Inspection &amp; Quality Services
        </span>
      </div>
    </Link>
  );
};

export default Logo;