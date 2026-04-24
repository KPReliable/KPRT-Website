'use client';

import React from 'react';
import Image from 'next/image';

const strengthMetrics = [
  "Our Strength",
  "Scale That Delivers Reliability",
  "1000+ Inspection Manforce",
  "100+ Active Clients",
  "20 Lakh+ Products Inspected / Month",
  "Minimum Reaction Time Deployment",
  "100% Independent & Reliable Services"
];

const pillarsData = [
  {
    category: "Pan India Presence",
    title: "Quality should be independent and Unbiased",
    description: "Delivering objective, third-party inspection (TPI) services across our extensive nationwide network to guarantee absolute transparency and strict compliance.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  },
  {
    category: "Technology",
    title: "Using a Technical Approach",
    description: "Leveraging real-time digital dashboards and data analytics to monitor production data, optimize industrial processes, and ensure precision at every checkpoint.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
        <path d="m9 11 2 2 4-4"></path>
      </svg>
    )
  },
  {
    category: "Large Trained Workforce",
    title: "Inspection should be fast & reliable",
    description: "Deploying our robust network of 650+ highly qualified engineers with minimum reaction time to keep your manufacturing flow fluid and uninterrupted.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#grad3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M9 15h6"></path>
        <path d="M9 11h6"></path>
        <path d="M9 19h2"></path>
      </svg>
    )
  },
  {
    category: "Multi-Industry Expertise",
    title: "Prevention is always better than correction",
    description: "Focusing on proactive quality assurance, rigorous process audits, and root cause analysis to eliminate defects before they ever reach the supply chain.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#grad4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    )
  }
];

export default function MissionVisionAndStrength() {
  return (
    <div className="w-full bg-[#1a3b66] font-sans text-white">
      
      {/* SVG Gradients for the Icons (Hidden from view) */}
      <svg width="0" height="0" className="hidden">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>
        </defs>
      </svg>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* --- MOVING STRIP SECTION --- */}
      <section className="w-full bg-[#d46b08] overflow-hidden py-4 border-y border-orange-400/20 shadow-lg relative z-20">
        <div className="flex w-max animate-infinite-scroll items-center">
          {[...strengthMetrics, ...strengthMetrics].map((metric, index) => (
            <div key={index} className="flex items-center whitespace-nowrap">
              <span className="text-black font-bold text-sm md:text-base tracking-widest uppercase px-6 md:px-10">
                {metric}
              </span>
              <span className="text-black font-extrabold text-xl">+</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* --- VISION SECTION (Image 1 Style) --- */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            
            {/* Left side: Vertical Line & Text */}
            <div className="w-full lg:w-1/2 pl-6 md:pl-10 border-l-2 border-white">
              {/* Changed text-blue-200 to text-orange-400 for light orange subtitle */}
              <h4 className="text-xs md:text-sm tracking-[0.3em] text-orange-400 uppercase mb-6 md:mb-10 font-semibold">
                Vision
              </h4>
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-light mb-8 text-white leading-tight tracking-wide">
                We're Changing the Way the World Thinks About <span className="font-semibold">Quality</span>
              </h2>
              <div className="space-y-6 text-blue-100/80 text-base md:text-lg leading-relaxed font-light">
                <p>
                  At KP Reliable Technique India Pvt. Ltd., our mission is to deliver unparalleled quality and innovation. We strive to create sustainable value for our clients through meticulous attention to detail and robust third-party inspection standards.
                </p>
                <p>
                  Our vision is to be the global benchmark for reliability and technical prowess, fostering an environment where innovation thrives and our dedicated teams can achieve their highest potential.
                </p>
              </div>
            </div>

            {/* Right side: Image Placeholder */}
            <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] relative rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a3b66] to-transparent z-10 hidden lg:block"></div>
              <Image 
                src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" // Replace with actual Vision image
                alt="Vision of Future Quality"
                fill
                className="object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </div>

          {/* --- FOUR PILLARS SECTION (Image 2 Style) --- */}
          <div className="pt-10 border-t border-blue-400/20">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Philosophy that Simulated with Strength
              </h2>
              <p className="text-blue-200 text-lg md:text-xl max-w-4xl font-light leading-relaxed">
                Integrating specialized inspection talent with proactive strategies to safeguard your manufacturing excellence and deliver unbiased results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {pillarsData.map((pillar, index) => (
                <div key={index} className="flex flex-col items-start group">
                  {/* Icon */}
                  <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  
                  {/* Category Label - Changed text-[#38bdf8] to text-orange-400 for light orange subtitle */}
                  <h5 className="text-orange-400 text-xs font-bold tracking-[0.15em] uppercase mb-3">
                    {pillar.category}
                  </h5>
                  
                  {/* Title */}
                  <h3 className="text-white text-xl font-bold mb-3 pr-4 leading-snug">
                    {pillar.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-blue-100/70 text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}