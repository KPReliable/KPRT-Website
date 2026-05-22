'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutKPRT() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  // Setup the Intersection Observer for smooth scroll-reveal - KEPT EXACTLY SAME
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('translate-y-12', 'opacity-0');
            entry.target.classList.add('translate-y-0', 'opacity-100');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      revealRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-white font-sans overflow-hidden relative">
      
      {/* Optional: Subtle geometric background pattern to match the screenshot's right side */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gray-50 to-transparent opacity-50 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT COLUMN: Images --- */}
          {/* CHANGED: Added defensive mobile margin adjustment to account for lower badge overlap positioning */}
          <div 
            ref={addToRefs}
            className="relative w-full max-w-md sm:max-w-lg mx-auto lg:mx-0 mb-12 sm:mb-16 lg:mb-0 transition-all duration-1000 ease-out transform translate-y-12 opacity-0"
          >
            {/* The offset gray square background - Scaled gracefully to maintain symmetry */}
            <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 rounded-sm -z-10"></div>
            
            {/* Main Large Image */}
            {/* CHANGED: Scaled image block viewport height responsively to preserve structural aspect ratios */}
            <div className="relative h-[260px] sm:h-[380px] md:h-[450px] w-full rounded-sm overflow-hidden shadow-xl bg-gray-50">
              <Image 
                src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" // Replace with your main engineers image
                alt="Engineers working at KP Reliable"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* The 3 Overlapping Circular Images at the bottom */}
            {/* CHANGED: Secured width constraint properties inside the container layer to stop horizontal layout spill */}
            <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center w-full max-w-full gap-0">
              
              {/* Circle 1: Left */}
              <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-white overflow-hidden relative shadow-lg z-10 translate-x-3 sm:translate-x-4 flex-shrink-0 bg-white">
                <Image 
                  src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" // Replace with clipboard/inspection image
                  alt="Inspection Process"
                  fill
                  sizes="(max-w-768px) 64px, 112px"
                  className="object-cover"
                />
              </div>
              
              {/* Circle 2: Center (Logo) */}
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white bg-white overflow-hidden relative shadow-xl z-20 flex-shrink-0">
                <Image 
                  src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" // Replace with KPReliable Q Logo
                  alt="KP Reliable Logo"
                  fill
                  sizes="(max-w-768px) 80px, 128px"
                  className="object-contain p-2"
                />
              </div>

              {/* Circle 3: Right */}
              <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-white overflow-hidden relative shadow-lg z-10 -translate-x-3 sm:-translate-x-4 flex-shrink-0 bg-white">
                <Image 
                  src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" // Replace with team image
                  alt="KPRT Team"
                  fill
                  sizes="(max-w-768px) 64px, 112px"
                  className="object-cover"
                />
              </div>

            </div>
          </div>

          {/* --- RIGHT COLUMN: Text Content --- */}
          <div className="flex flex-col justify-center mt-6 sm:mt-10 lg:mt-0 text-left">
            
            {/* Subtitle with blue lines */}
            {/* CHANGED: Graphic line weights hidden on compact mobile landscape layers to avoid tracking collision */}
            <div 
              ref={addToRefs}
              className="flex items-center gap-2 sm:gap-4 mb-4 transition-all duration-1000 delay-100 ease-out transform translate-y-12 opacity-0"
            >
              <div className="h-[2px] w-6 sm:w-8 md:w-12 bg-[#38bdf8] flex-shrink-0"></div>
              <span className="text-black font-bold tracking-wide text-xs sm:text-sm md:text-base uppercase whitespace-nowrap sm:whitespace-normal">
                100% Independent and Reliable
              </span>
              <div className="h-[2px] w-6 sm:w-8 md:w-12 bg-[#38bdf8] flex-shrink-0 hidden xs:block"></div>
            </div>

            {/* Main Title */}
            {/* CHANGED: Fluid responsive header levels prevent viewport text distortion breaks */}
            <h2 
              ref={addToRefs}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 sm:mb-8 leading-[1.2] tracking-tight transition-all duration-1000 delay-200 ease-out transform translate-y-12 opacity-0"
            >
              About KP RELIABLE TECHNIQUE INDIA PVT LTD
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base font-medium">
              <p 
                ref={addToRefs}
                className="transition-all duration-1000 delay-300 ease-out transform translate-y-12 opacity-0"
              >
                KP Reliable Technique India Pvt. Ltd. (KPRT) is a premier Third-Party Inspection (TPI) company, delivering independent, impartial, and unbiased quality assurance solutions across India’s automotive, engineering, and manufacturing sectors.
              </p>
              
              <p 
                ref={addToRefs}
                className="transition-all duration-1000 delay-[400ms] ease-out transform translate-y-12 opacity-0"
              >
                KP Reliable Technique India Pvt. Ltd. (KPRT) is a trusted name in the field of Third-Party Inspection (TPI), delivering independent, impartial, and unbiased quality assurance solutions across India’s automotive, engineering, and manufacturing sectors.
              </p>
              
              <p 
                ref={addToRefs}
                className="transition-all duration-1000 delay-[500ms] ease-out transform translate-y-12 opacity-0"
              >
                The name “KP” in our brand stands for “Parental Name” LT. SHRI KHIMANAND-PARVTI, symbolizing the foundation of trust, legacy, and accountability—values we embed into every service we deliver. The word “Reliable” reflects our core identity: to be a dependable quality partner in your supply chain, ensuring that every report we issue is based solely on facts, free from external influence or conflict of interest.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}