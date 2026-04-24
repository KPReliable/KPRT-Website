"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Sample logo data
const partners = [
  { name: "GENERAL TRANSPORT", logo: "https://res.cloudinary.com/dinnmia6e/image/upload/v1775544379/com10_ig4zt7.svg" },
  { name: "IDI SOFTWARE", logo: "https://res.cloudinary.com/dinnmia6e/image/upload/v1775544380/com8_kfuxoc.svg" },
  { name: "IMOGEN CARS", logo: "https://res.cloudinary.com/dinnmia6e/image/upload/v1775544378/com14_s0gs7h.svg" },
  { name: "TRI-NEX", logo: "https://res.cloudinary.com/dinnmia6e/image/upload/v1775544382/com2_z1rz2z.svg" },
];

const PartnersSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Reduced parallax range for a more subtle movement in the shorter section
  const yLogos = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={targetRef}
      className="relative w-full py-12 px-6 md:px-12 lg:px-24 flex items-center bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content - Static/Sticky Feel */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative pl-8 border-l border-gray-200"
        >
          {/* Vertical line indicator - Darker for visibility on white */}
          <div className="absolute left-0 top-0 w-1 h-10 bg-black" />
          
          <span className="text-gray-500 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
            Industry
          </span>
          
          <h2 className="text-black text-3xl md:text-4xl font-medium mb-6 leading-tight">
            Our <br /> Partners
          </h2>
          
          <p className="text-gray-600 text-base max-w-md leading-relaxed">
            Click here to add your own content and customize the text. This is a great place to tell a story about your company and users.
          </p>
          
          <button className="mt-6 text-black border-b border-black/20 pb-1 hover:border-black transition-all text-sm font-semibold uppercase tracking-wider">
            View All
          </button>
        </motion.div>

        {/* Right Content - Parallax Logos */}
        <motion.div 
          style={{ y: yLogos, opacity }}
          className="grid grid-cols-2 gap-6 md:gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center justify-center space-y-3 group"
            >
              {/* Reduced Height Logo Container */}
              <div className="w-full h-32 md:h-40 flex items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
              
              {/* Partner Name - Dark text */}
              <span className="text-gray-800 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-center opacity-60 group-hover:opacity-100 transition-opacity">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PartnersSection;