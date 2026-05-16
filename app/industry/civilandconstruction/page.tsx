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
          src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778655547/Raj49_zqdblp.svg" 
          alt="Civil Engineering and Construction Site"
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
            Building Sustainable Foundations
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Structural Integrity & <br /> Construction Surveillance
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Ensuring safety and longevity in every build. We provide independent third-party inspections to verify material quality, structural stability, and adherence to global safety codes.
          </p>
          
          <div className="flex items-center gap-6">
            <button className="group relative flex items-center gap-3 bg-[#fb9d05] text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-white hover:text-[#003366] transition-all duration-300 shadow-xl">
              Request Project Audit
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
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778666570/Raj63_jlt4gk.svg" alt="Structural Audit" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-video overflow-hidden shadow-2xl">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778666482/Raj62_nuqlgf.svg" alt="Concrete Strength Testing" fill className="object-cover" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 w-full lg:w-[20%] lg:mt-24">
            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl border border-white/10">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778666413/Raj61_hqhtgo.svg" alt="On-site Inspection" fill className="object-cover" />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 w-full lg:w-[35%]">
            <div className="relative w-full aspect-[16/10] overflow-hidden shadow-2xl">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778666413/Raj61_hqhtgo.svg" alt="Infrastructure Development" fill className="object-cover" />
            </div>
            <div className="flex flex-row gap-4 w-full">
              <div className="relative w-[45%] aspect-[4/3] overflow-hidden shadow-2xl">
                <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778666482/Raj62_nuqlgf.svg" alt="Steel Reinforcement Check" fill className="object-cover" />
              </div>
              <div className="relative w-[55%] aspect-[3/4] overflow-hidden shadow-2xl">
                <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778666706/Raj64_vniwrz.svg" alt="Topographic Verification" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 w-full lg:w-[20%] lg:mt-12">
            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl border border-white/10">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1778666570/Raj63_jlt4gk.svg" alt="Project Safety Meeting" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="mt-16 md:mt-24 text-center max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Safeguarding Tomorrow's Infrastructure
          </h3>
          <p className="text-blue-100/80 text-lg md:text-xl leading-relaxed">
            At KP Reliable Technique India, we understand that in civil construction, there is no room for error. Our **TPI Construction** services ensure that materials—from high-grade steel to concrete—meet peak specifications. We provide independent surveillance during foundation laying, structural framing, and finishing to guarantee a secure and compliant project delivery.
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
            Constructing Quality<br />End-to-End Site Surveillance
          </h2>
          <p className="max-w-[380px] text-lg font-medium text-neutral-600 leading-relaxed lg:pb-2">
            Our specialized TPI solutions are designed to monitor safety and quality at every milestone of your construction project.
          </p>
        </header>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Card 1: Material Testing */}
          <div className="bg-[#aebcb0] aspect-[4/5] p-8 flex flex-col justify-between relative overflow-hidden rounded-sm">
            <div>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                <rect x="5" y="35" width="10" height="25" rx="3" fill="#8d9e90"/>
                <rect x="20" y="20" width="10" height="40" rx="3" fill="#1c1c1c"/>
                <rect x="35" y="28" width="10" height="32" rx="3" fill="#8d9e90"/>
                <rect x="50" y="15" width="10" height="45" rx="3" fill="#1c1c1c"/>
              </svg>
            </div>
            <span className="text-[1.1rem] font-bold tracking-tight text-[#1c1c1c]">Material Testing & Certification</span>
          </div>

          {/* Card 2: Site Image */}
          <div 
            className="bg-cover bg-center aspect-[4/5] rounded-sm shadow-inner grayscale hover:grayscale-0 transition-all duration-500"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dinnmia6e/image/upload/v1778655547/Raj49_zqdblp.svg')" }}
          ></div>

          {/* Card 3: Structural Integrity */}
          <div className="bg-[#ded7c7] aspect-[4/5] p-8 flex flex-col justify-between relative overflow-hidden rounded-sm">
            <div>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                <rect x="5" y="15" width="50" height="22" rx="11" fill="#1c1c1c"/>
                <circle cx="18" cy="26" r="8" fill="#a49f91"/>
                <rect x="5" y="42" width="50" height="22" rx="11" fill="#c3bcac"/>
                <circle cx="42" cy="53" r="8" fill="#1c1c1c"/>
              </svg>
            </div>
            <span className="text-[1.1rem] font-bold tracking-tight text-[#1c1c1c]">Structural Stability Audits</span>
          </div>

          {/* Card 4: Site Safety */}
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
            <span className="text-[1.1rem] font-bold tracking-tight text-[#1c1c1c]">EHS & Site Safety Compliance</span>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Main Page Component ---
export default function CivilConstructionPage() {
  return (
    <main className="w-full">
      <IndustryHero />
      <CareerStats />
      <GrowthSection />
    </main>
  );
}