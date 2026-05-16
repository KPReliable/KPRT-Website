'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

// Data array updated: Every card now accepts an explicit 'name' field separate from the 'designation' field.
const designations = [
  {
    title: "Mind behind the KP Reliable Technique India Private Limited",
    subtitle: "Executive Leadership",
    description: "Our top-tier management drives the long-term strategic vision, shaping the operational frameworks that empower our 650+ engineers nationwide.",
    cards: [
      { 
        name: "Mr. Kailash Joshi ", // Added explicit name
        designation: "General Manager-HR", 
        hoverMessage: "Driving 5-year expansion plans and market dominance.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1778912517/Raj70_psn9vu.svg" 
      },
      { 
        name: "Raman Sharma", // Added explicit name
        designation: "Process Optimization", 
        hoverMessage: "Streamlining nationwide operations for peak efficiency.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        name: "Amit Patel", // Added explicit name
        designation: "Pan-India Execution", 
        hoverMessage: "Executing high-level strategies across all 9 branch locations.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        name: "Vikram Singh", // Added explicit name
        designation: "Global Outreach", 
        hoverMessage: "Expanding KPRT's standard of excellence beyond borders.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      }
    ]
  },
]

export default function LeadershipShowcase() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

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

  const delayClasses = ['delay-[300ms]', 'delay-[400ms]', 'delay-[500ms]', 'delay-[600ms]'];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {designations.map((role, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="w-full">
              
              {/* --- Alternating Header Section --- */}
              <div 
                className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-8 ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                <h2 
                  ref={addToRefs}
                  className={`text-4xl md:text-5xl lg:text-[4rem] font-bold text-gray-900 leading-[1.1] tracking-tight transition-all duration-1000 ease-out transform translate-y-12 opacity-0 w-full md:w-1/2 ${
                    isEven ? 'text-left' : 'text-left md:text-right'
                  }`}
                >
                  {role.title} <br />
                  <span className="text-gray-500">{role.subtitle}</span>
                </h2>
                
                <p 
                  ref={addToRefs}
                  className={`w-full md:w-1/2 max-w-md text-base md:text-lg text-gray-700 font-medium leading-relaxed transition-all duration-1000 delay-200 ease-out transform translate-y-12 opacity-0 ${
                    isEven ? 'text-left md:text-right' : 'text-left'
                  }`}
                >
                  {role.description}
                </p>
              </div>

              {/* --- 4-Column Card Grid Container --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {role.cards.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    ref={addToRefs}
                    className={`flex flex-col gap-3 transition-all duration-1000 ${delayClasses[cardIndex]} ease-out transform translate-y-12 opacity-0 group`}
                  >
                    {/* Image Container Block */}
                    <div className="relative h-[300px] w-full bg-gray-200 overflow-hidden rounded-sm">
                      {/* Background Image */}
                      <Image 
                        src={card.image} 
                        alt={card.name} // Accessibility matching the person's name
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Dark overlay & Hover Message (Fades in on hover) */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm z-10">
                        <p className="text-white text-base font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          "{card.hoverMessage}"
                        </p>
                      </div>
                    </div>

                    {/* External Text Details Stacked Below the Image Block */}
                    <div className="pt-1 flex flex-col gap-0.5">
                      {/* 1. Leader's Name (Top Tier Highlight) */}
                      <span className="text-gray-900 font-bold tracking-tight text-base md:text-lg block transition-colors duration-300 group-hover:text-gray-600">
                        {card.name}
                      </span>
                      {/* 2. Leader's Designation (Subordinate Element Below Name) */}
                      <span className="text-gray-500 font-medium uppercase tracking-wide text-xs md:text-sm block">
                        {card.designation}
                      </span>
                    </div>

                  </div>
                ))}

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}