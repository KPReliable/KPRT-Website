"use client";

import React, { useState } from "react";
import Link from "next/link";

// Mocking the constant since I don't have access to your local file
const SERVICES = [
  {
    id: "engineering",
    title: "Human and AI collaboration",
    label: "Engineering",
    description: "Engineering is evolving. AI no longer just helps us write code; it shapes how we design, test, and improve systems.",
    href: "/services/engineering"
  },
  {
    id: "technology",
    title: "AI grounded in real enterprise knowledge",
    label: "Technology",
    description: "Enterprises carry years of hard-won knowledge, but it often sits in silos. Fluidic Intelligence brings it together.",
    href: "/services/technology"
  },
  {
    id: "enterprise",
    title: "Intelligence in flow across the enterprise",
    label: "Enterprise",
    description: "At the enterprise level, intelligence flows to the right models, systems, and people. Decisions move smoothly.",
    href: "/services/enterprise"
  }
];

const KeyServices: React.FC = () => {
  return (
    <section className="w-full expert-cta py-24 px-6 font-sans text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* ---- Header Section ---- */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
            Three levels at which Fluidic Intelligence operates
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We work at the intersection of engineering, technology, and the enterprise. 
            We use AI-native engineering to eliminate friction and maintain enterprise flow.
          </p>
        </div>

        {/* ---- Grid Layout ---- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((service, i) => (
            <div key={service.id} className="group flex flex-col items-start">
              
              {/* Abstract Glowing Icon Container */}
              <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#00a2e9] opacity-20 blur-[40px] rounded-full group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* 3D-ish Decorative Image/Icon */}
                <img 
                  src={`https://picsum.photos/seed/${service.id}/200`} 
                  alt={service.label}
                  className="w-20 h-20 object-cover rounded-full z-10 border border-white/20 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Orbiting Ring Effect (CSS only) */}
                <div className="absolute inset-0 border border-[#00a2e9]/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-2 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              </div>

              {/* Label */}
              <span className="text-[#33b8ff] text-sm font-medium mb-3 uppercase tracking-widest">
                {service.label}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 leading-snug group-hover:text-[#00a2e9] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Action Link */}
              <Link 
                href={service.href} 
                className="mt-auto flex items-center gap-2 text-sm font-semibold hover:text-[#00a2e9] transition-colors group"
              >
                Learn more
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* ---- Bottom CTA ---- */}
        {/* <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            Need a custom quality solution for your industry?
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#284c87] hover:bg-[#00a2e9] text-white font-bold transition-all duration-300 rounded-sm"
          >
            Talk to our experts
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default KeyServices;