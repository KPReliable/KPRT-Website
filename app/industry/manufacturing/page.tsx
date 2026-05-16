"use client";
import React from 'react';
import Image from 'next/image';

// --- Sub-Component 1: Industry Hero ---
const IndustryHero: React.FC = () => {
  return (
    <section className="relative w-full h-[700px] flex flex-col justify-end pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0"> 
        <Image
          src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778654634/RAJ46_ydfry2.svg" 
          alt="Modern Manufacturing Facility"
          fill
          className="object-cover" 
          priority
        />
      </div>

      {/* Blue Brand Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#003366]/10 via-[#003366]/75 to-[#003366]"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <p className="text-[#fb9d05] font-semibold text-xl tracking-widest uppercase mb-2">
            Industrial Integrity
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Empowering Smart <br /> Manufacturing Quality
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            From precision engineering to large-scale production lines, we provide comprehensive technical audits that ensure your manufacturing output is flawless and compliant.
          </p>
          
          <div className="flex items-center gap-6">
            <button className="group relative flex items-center gap-3 bg-[#fb9d05] text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-white hover:text-[#003366] transition-all duration-300 shadow-xl">
              Optimize Your Quality Gate
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component 2: Career Stats / Collage ---
const CareerStats: React.FC = () => {
  return (
    <section className="relative w-full py-24 flex items-center justify-center min-h-[600px] bg-[#003366]">
      <div className="relative z-20 w-full max-w-[90rem] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Image Collage Container */}
        <div className="flex flex-col lg:flex-row gap-4 items-start justify-center w-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 w-full lg:w-[25%]">
            <div className="relative w-full aspect-[4/5] overflow-hidden shadow-2xl">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777446170/Raj21_ezpzoe.svg" alt="Factory Audit" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-video overflow-hidden shadow-2xl">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777361414/Raj7_lsnump.svg" alt="Technical Layout" fill className="object-cover" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 w-full lg:w-[20%] lg:mt-24">
            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl border border-white/10">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777280768/Ram99_uzbsd1.svg" alt="Manufacturing Line" fill className="object-cover" />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 w-full lg:w-[35%]">
            <div className="relative w-full aspect-[16/10] overflow-hidden shadow-2xl">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776681034/SURFACE_TREATMENT_vlng1j.svg" alt="Operational Excellence" fill className="object-cover" />
            </div>
            <div className="flex flex-row gap-4 w-full">
              <div className="relative w-[45%] aspect-[4/3] overflow-hidden shadow-2xl">
                <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776189683/Ram34_ymldjn.svg" alt="Inventory Check" fill className="object-cover" />
              </div>
              <div className="relative w-[55%] aspect-[3/4] overflow-hidden shadow-2xl">
                <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776100684/1_flyfoy.svg" alt="Precision Tools" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 w-full lg:w-[20%] lg:mt-12">
            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl border border-white/10">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776189683/Ram34_ymldjn.svg" alt="Industrial Compliance" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="mt-16 md:mt-24 text-center max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mastering Industrial Standards
          </h3>
          <p className="text-blue-100/80 text-lg md:text-xl leading-relaxed">
            KP Reliable Technique India stands at the intersection of traditional manufacturing and modern quality control. Our TPI experts conduct thorough plant assessments, machinery calibrations, and batch testing to ensure that your factory operates at peak compliance. We reduce downtime by identifying defects before they halt your production.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component 3: Growth / Pipeline Section ---
const GrowthSection: React.FC = () => {
  return (
    <section className="w-full bg-[#ffffff] text-[#1c1c1c] py-24 px-6 md:p-10 flex items-center justify-center">
      <div className="max-w-[1200px] w-full mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight">
            Elevating Production<br />The Manufacturing Lifecycle
          </h2>
          <p className="max-w-[380px] text-lg font-medium text-neutral-600 leading-relaxed lg:pb-2">
            Our specialized TPI solutions are engineered to ensure quality from raw material to finished product.
          </p>
        </header>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Card 1: Supplier Audits */}
          <div className="bg-[#aebcb0] aspect-[4/5] p-8 flex flex-col justify-between relative overflow-hidden rounded-sm">
            <div>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                <rect x="5" y="35" width="10" height="25" rx="3" fill="#8d9e90"/>
                <rect x="20" y="20" width="10" height="40" rx="3" fill="#1c1c1c"/>
                <rect x="35" y="28" width="10" height="32" rx="3" fill="#8d9e90"/>
                <rect x="50" y="15" width="10" height="45" rx="3" fill="#1c1c1c"/>
              </svg>
            </div>
            <span className="text-[1.1rem] font-bold tracking-tight text-[#1c1c1c]">Supplier & Vendor Auditing</span>
          </div>

          {/* Card 2: Industrial Image */}
          <div 
            className="bg-cover bg-center aspect-[4/5] rounded-sm shadow-inner grayscale hover:grayscale-0 transition-all duration-500"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dinnmia6e/image/upload/v1776681014/CASTING_dwrrkq.svg')" }}
          ></div>

          {/* Card 3: Line Verification */}
          <div className="bg-[#ded7c7] aspect-[4/5] p-8 flex flex-col justify-between relative overflow-hidden rounded-sm">
            <div>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                <rect x="5" y="15" width="50" height="22" rx="11" fill="#1c1c1c"/>
                <circle cx="18" cy="26" r="8" fill="#a49f91"/>
                <rect x="5" y="42" width="50" height="22" rx="11" fill="#c3bcac"/>
                <circle cx="42" cy="53" r="8" fill="#1c1c1c"/>
              </svg>
            </div>
            <span className="text-[1.1rem] font-bold tracking-tight text-[#1c1c1c]">In-Process Line Verification</span>
          </div>

          {/* Card 4: Safety & Standards */}
          <div className="bg-[#fb9d05] aspect-[4/5] p-8 flex flex-col justify-between relative overflow-hidden rounded-sm">
            <div>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="5" fill="#1c1c1c"/>
                <circle cx="35" cy="18" r="4.5" fill="#1c1c1c"/>
                <circle cx="52" cy="35" r="4.5" fill="#1c1c1c"/>
                <circle cx="35" cy="52" r="4.5" fill="#1c1c1c"/>
                <circle cx="18" cy="35" r="4.5" fill="#1c1c1c"/>
                <circle cx="23" cy="23" r="4.5" fill="#827a83"/>
                <circle cx="47" cy="23" r="4.5" fill="#827a83"/>
                <circle cx="47" cy="47" r="4.5" fill="#1c1c1c"/>
                <circle cx="23" cy="47" r="4.5" fill="#827a83"/>
              </svg>
            </div>
            <span className="text-[1.1rem] font-bold tracking-tight text-[#1c1c1c]">EHS & Safety Compliance</span>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Main Page Component ---
export default function ManufacturingPage() {
  return (
    <main className="w-full">
      <IndustryHero />
      <CareerStats />
      <GrowthSection />
    </main>
  );
}