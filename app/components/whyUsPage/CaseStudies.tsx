"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WorkflowSection = () => {
  // Certification items for the moving strip
  const certifications = [
    "ISO 9001 CERTIFIED",
    "ISO 27001 CERTIFIED",
    "GDPR COMPLIANT",
    "SOC2 TYPE II",
    "ISO 9001 CERTIFIED",
    "ISO 27001 CERTIFIED",
    "GDPR COMPLIANT",
    "SOC2 TYPE II",
  ];

  // Custom Flower/Cross Icon component based on your screenshot
  const FlowerIcon = () => (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-black/80"
    >
      <path 
        d="M12 2C13.1046 2 14 2.89543 14 4V8H18C19.1046 8 20 8.89543 20 10C20 11.1046 19.1046 12 18 12H14V16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16V12H6C4.89543 12 4 11.1046 4 10C4 8.89543 4.89543 8 6 8H10V4C10 2.89543 10.8954 2 12 2Z" 
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );

  return (
    <section className="bg-white py-24 flex flex-col items-center overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Top Heading */}
        <h4 className="text-gray-800 text-xl md:text-2xl font-mono mb-8 tracking-tight">
          How we ship controlled creative systems
        </h4>

        {/* Feature Pill / Badge */}
        <div className="inline-block relative px-10 py-4 mb-20">
          <div className="absolute left-0 top-0 bottom-0 w-4 border-l-2 border-t-2 border-b-2 border-blue-200 rounded-l-2xl" />
          <div className="absolute right-0 top-0 bottom-0 w-4 border-r-2 border-t-2 border-b-2 border-blue-200 rounded-r-2xl" />
          
          <p className="text-gray-700 text-sm md:text-base">
            Style checks, bias/safety screens, factuality passes, human review.
          </p>
        </div>

        {/* The Workflow Process */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-4xl md:text-6xl font-normal text-black mb-32">
          <span>Discover</span>
          <span className="text-gray-400">→</span>
          <span>Calibrate</span>
          <span className="text-gray-400">→</span>
          <span>Generate</span>
          <span className="text-gray-400">→</span>
          <span>QA</span>
          <span className="text-gray-400">→</span>
          <span>Deliver</span>
        </div>
      </div>

      {/* Updated Moving Certification Strip with Dark Orange background */}
      <div className="w-full py-6 bg-[#d97706] relative overflow-hidden border-y border-black/10">
        <div className="flex">
          <motion.div 
            className="flex whitespace-nowrap gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              duration: 25, 
              ease: "linear" 
            }}
          >
            {/* Duplicated list for seamless looping */}
            {[...certifications, ...certifications].map((text, index) => (
              <div key={index} className="flex items-center gap-12">
                <span className="text-black font-bold tracking-widest text-sm md:text-base uppercase">
                  {text}
                </span>
                <FlowerIcon />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;