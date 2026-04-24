'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutKPRT() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  // Setup the Intersection Observer for smooth scroll-reveal
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
    <section className="py-24 bg-white font-sans overflow-hidden relative">
      
      {/* Optional: Subtle geometric background pattern to match the screenshot's right side */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gray-50 to-transparent opacity-50 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT COLUMN: Images --- */}
          <div 
            ref={addToRefs}
            className="relative w-full max-w-lg mx-auto lg:mx-0 transition-all duration-1000 ease-out transform translate-y-12 opacity-0"
          >
            {/* The offset gray square background */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 rounded-sm -z-10"></div>
            
            {/* Main Large Image */}
            <div className="relative h-[350px] sm:h-[450px] w-full rounded-sm overflow-hidden shadow-xl">
              <Image 
                src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" // Replace with your main engineers image
                alt="Engineers working at KP Reliable"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* The 3 Overlapping Circular Images at the bottom */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center w-[110%]">
              
              {/* Circle 1: Left */}
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-white overflow-hidden relative shadow-lg z-10 translate-x-4">
                <Image 
                  src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" // Replace with clipboard/inspection image
                  alt="Inspection Process"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Circle 2: Center (Logo) */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white bg-white overflow-hidden relative shadow-xl z-20">
                <Image 
                  src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" // Replace with KPReliable Q Logo
                  alt="KP Reliable Logo"
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Circle 3: Right */}
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-white overflow-hidden relative shadow-lg z-10 -translate-x-4">
                <Image 
                  src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" // Replace with team image
                  alt="KPRT Team"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>

          {/* --- RIGHT COLUMN: Text Content --- */}
          <div className="flex flex-col justify-center mt-16 lg:mt-0">
            
            {/* Subtitle with blue lines */}
            <div 
              ref={addToRefs}
              className="flex items-center gap-4 mb-4 transition-all duration-1000 delay-100 ease-out transform translate-y-12 opacity-0"
            >
              <div className="h-[2px] w-8 md:w-12 bg-[#38bdf8]"></div>
              <span className="text-black font-bold tracking-wide text-sm md:text-base">
                100% Independent and Reliable
              </span>
              <div className="h-[2px] w-8 md:w-12 bg-[#38bdf8]"></div>
            </div>

            {/* Main Title */}
            <h2 
              ref={addToRefs}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-8 leading-[1.2] tracking-tight transition-all duration-1000 delay-200 ease-out transform translate-y-12 opacity-0"
            >
              About KP RELIABLE TECHNIQUE INDIA PVT LTD
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base font-medium">
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