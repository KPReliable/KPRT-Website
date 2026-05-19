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
          src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777530237/Raj36_cpwsca.svg" 
          alt="Locomotive Engineering and Railway Systems"
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
            Rolling Stock Excellence
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Precision Inspection for <br /> Modern Rail Networks
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Ensuring the structural integrity and operational safety of locomotives through specialized third-party audits of bogies, braking systems, and powertrain components.
          </p>
          
          <div className="flex items-center gap-6">
            <button className="group relative flex items-center gap-3 bg-[#fb9d05] text-white font-bold text-lg px-10 py-4  hover:bg-white hover:text-[#003366] transition-all duration-300 shadow-xl">
              Consult a Rail Expert
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
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778664572/Raj54_la17ye.svg" alt="Heavy Component Inspection" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-video overflow-hidden shadow-2xl">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778664674/Raj55_hzdkot.svg" alt="Engine Block Quality" fill className="object-cover" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 w-full lg:w-[20%] lg:mt-24">
            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl border border-white/10">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778664765/Raj56_le1tt8.svg" alt="Trackside Audit" fill className="object-cover" />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 w-full lg:w-[35%]">
            <div className="relative w-full aspect-[16/10] overflow-hidden shadow-2xl">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778664854/Raj57_lhy2ld.svg" alt="Locomotive Assembly Audit" fill className="object-cover" />
            </div>
            <div className="flex flex-row gap-4 w-full">
              <div className="relative w-[45%] aspect-[4/3] overflow-hidden shadow-2xl">
                <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778665119/Raj58_u6gsaz.svg" alt="Weld Testing" fill className="object-cover" />
              </div>
              <div className="relative w-[55%] aspect-[3/4] overflow-hidden shadow-2xl">
                <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778665639/Raj60_c0kkl9.svg" alt="Precision Gauging" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 w-full lg:w-[20%] lg:mt-12">
            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl border border-white/10">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778664674/Raj55_hzdkot.svg" alt="Rail Compliance Review" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="mt-16 md:mt-24 text-center max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Upholding Global Railway Standards
          </h3>
          <p className="text-blue-100/80 text-lg md:text-xl leading-relaxed">
            At KP Reliable Technique India, we understand that locomotive components face extreme stress and must meet rigorous safety regulations. Our **Locomotive Inspection** vertical provides certified auditors for NDT testing, dimension verification of critical engine parts, and system-wide audits for rolling stock manufacturers, ensuring every unit is track-ready.
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
            The Rail Lifecycle<br />From Casting to Commissioning
          </h2>
          <p className="max-w-[380px] text-lg font-medium text-neutral-600 leading-relaxed lg:pb-2">
            We provide specialized technical eyes for every phase of heavy engineering in the rail sector.
          </p>
        </header>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Card 1: Casting & Forging */}
          <div className="bg-[#aebcb0] aspect-[4/5] p-8 flex flex-col justify-between relative overflow-hidden rounded-sm">
            <div>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                <rect x="5" y="35" width="10" height="25" rx="3" fill="#8d9e90"/>
                <rect x="20" y="20" width="10" height="40" rx="3" fill="#1c1c1c"/>
                <rect x="35" y="28" width="10" height="32" rx="3" fill="#8d9e90"/>
                <rect x="50" y="15" width="10" height="45" rx="3" fill="#1c1c1c"/>
              </svg>
            </div>
            <span className="text-[1.1rem] font-bold tracking-tight text-[#1c1c1c]">Casting & Forging Inspection</span>
          </div>

          {/* Card 2: Industry Image */}
          <div 
            className="bg-cover bg-center aspect-[4/5] rounded-sm shadow-inner grayscale hover:grayscale-0 transition-all duration-500"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dinnmia6e/image/upload/v1777533306/Raj37_q174fw.svg')" }}
          ></div>

          {/* Card 3: System Testing */}
          <div className="bg-[#ded7c7] aspect-[4/5] p-8 flex flex-col justify-between relative overflow-hidden rounded-sm">
            <div>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                <rect x="5" y="15" width="50" height="22" rx="11" fill="#1c1c1c"/>
                <circle cx="18" cy="26" r="8" fill="#a49f91"/>
                <rect x="5" y="42" width="50" height="22" rx="11" fill="#c3bcac"/>
                <circle cx="42" cy="53" r="8" fill="#1c1c1c"/>
              </svg>
            </div>
            <span className="text-[1.1rem] font-bold tracking-tight text-[#1c1c1c]">Braking & Powertrain Testing</span>
          </div>

          {/* Card 4: Final Certification */}
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
            <span className="text-[1.1rem] font-bold tracking-tight text-[#1c1c1c]">Pre-Dispatch Certification</span>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Main Page Component ---
export default function LocomotiveIndustryPage() {
  return (
    <main className="w-full">
      <IndustryHero />
      <CareerStats />
      <GrowthSection />
    </main>
  );
}