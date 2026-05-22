import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden pt-16 lg:pt-20 pb-24 font-sans text-black flex items-center">
      
      {/* Subtle Dark Blue Background Grid Pattern - KEPT SAME */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e40af 1px, transparent 1px),
            linear-gradient(to bottom, #1e40af 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px', // Adjust size of the grid squares here
        }}
      />

      {/* Container adjusted to standard max-w-7xl to match most Navbars */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        {/* Massive Typography Headers for Quality Assurance - KEPT SAME */}
        <div className="flex flex-col mb-8 sm:mb-12 md:mb-16 w-full select-none">
          <h1 className="text-[clamp(3rem,11vw,12rem)] leading-[0.9] font-light uppercase tracking-tighter text-left">
            Quality
          </h1>
          {/* Added the dark blue accent color to the bottom word to tie the design together */}
          <h2 className="text-[clamp(2rem,6vw,7rem)] leading-[0.9] font-light uppercase tracking-tighter text-right mt-2 md:-mt-2 w-full text-[#1e40af]">
            Assurance
          </h2>
        </div>

        {/* Overlapping Layout: Text Box (Left) & Image (Right) */}
        {/* CHANGED: Replaced md breakpoint with lg to give grid columns breathing room on medium viewports */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center mt-6 sm:mt-10 lg:mt-20 gap-y-6 lg:gap-y-0 relative">
          
          {/* Left Content Box (Overlaps the image on desktop) */}
          {/* CHANGED: Columns and rows are scaled specifically for responsive devices */}
          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1 z-20 relative bg-white/95 backdrop-blur-md p-5 sm:p-8 md:p-12 shadow-2xl rounded-2xl border border-gray-100 order-2 lg:order-1 text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-black tracking-tight">
              KP RELIABLE TECHNIQUE INDIA PVT LTD
            </h3>
            <p className="text-[10px] sm:text-xs md:text-base text-[#1e40af] font-semibold mb-6 tracking-wide uppercase leading-snug">
              (FORMERLY KNOWN AS RELIABLE AUTOMOTIVE ENGINEERING SERVICES)
            </p>
            
            <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium">
              <p>
                We are a fast-growing medium-sized Quality Assurance Company and we are committed to being a leading quality control service provider in India.
              </p>
              <p>
                We have a well-spread-out network in India; it is represented nationally by more than 09 Locations (Delhi, Rajasthan, UP, UK, Haryana, Punjab, Gujarat, Maharashtra, Tamil Nadu) and has 650+ highly qualified engineers and professionals associated with us. All of them have extensive technical knowledge.
              </p>
              <p>
                Our teams of specialists are engaged in optimizing technology, systems and know-how, and thus act as process partners, enhancing the competitive strength of our customers throughout the world.
              </p>
            </div>
          </div>

          {/* Right Image (Sits underneath the text box on the left edge) */}
          {/* CHANGED: Scaled image block height fluidly (`h-[240px] sm:h-[380px] lg:h-[650px]`) */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 z-10 relative h-[240px] sm:h-[380px] md:h-[450px] lg:h-[650px] w-full overflow-hidden rounded-2xl shadow-lg order-1 lg:order-2">
            <Image 
              src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" // Placeholder image
              alt="KP Reliable Technique professionals at work"
              fill
              sizes="(max-w-1024px) 100vw, 55vw"
              className="object-cover object-center"
              priority // Loads this large image faster
            />
          </div>

        </div>
      </div>
    </section>
  );
}