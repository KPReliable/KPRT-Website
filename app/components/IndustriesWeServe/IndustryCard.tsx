"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CASE_STUDIES = 
 [
  {
    "id": 1,
    "title": "Precision-driven quality inspection for the automotive value chain",
    "description": "Implementing rigorous vehicle component audits and assembly line inspections to ensure zero-defect manufacturing for global OEMs.",
    "imageUrl": "https://res.cloudinary.com/dinnmia6e/image/upload/v1776186082/Ram27_rhjitx.svg"
  },
  {
    "id": 2,
    "title": "Scaling manufacturing excellence through NDT and technical audits",
    "description": "Providing comprehensive Non-Destructive Testing (NDT) and multi-tier quality assurance for heavy industrial manufacturing plants.",
    "imageUrl": "https://res.cloudinary.com/dinnmia6e/image/upload/v1776189684/Ram33_pok5jk.svg"
  },
  {
    "id": 3,
    "title": "Safety-critical inspection services for modern Locomotive infrastructure",
    "description": "Ensuring track integrity and rolling stock reliability with specialized quality assessments tailored for national railway networks.",
    "imageUrl": "https://res.cloudinary.com/dinnmia6e/image/upload/v1777533306/Raj37_q174fw.svg"
  },
  {
    "id": 4,
    "title": "Structural integrity verification for civil and construction projects",
    "description": "On-site material testing and structural quality control to uphold safety standards in large-scale commercial and residential developments.",
    "imageUrl": "https://res.cloudinary.com/dinnmia6e/image/upload/v1777528740/Raj35_r6drfn.png"
  }
]
const CaseStudySlider = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Mouse move handler for the 'Drag' circle
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      className="relative w-full bg-[#ffffff] py-20 overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Custom 'Drag' Follower */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 bg-indigo-700 rounded-full flex items-center justify-center text-white text-xs font-bold pointer-events-none z-50 shadow-2xl"
        animate={{
          x: mousePos.x - 32,
          y: mousePos.y - 32,
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
      >
        Drag
      </motion.div>

      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-10">
          {CASE_STUDIES.map((study) => (
            <motion.div
              key={study.id}
              className="relative min-w-[320px] md:min-w-[400px] h-[600px] group flex-shrink-0 cursor-pointer overflow-hidden"
              whileHover={{ scale: 0.98 }}
            >
              {/* Background Image */}
              <img
                src={study.imageUrl}
                alt={study.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay (The Secret to the Look) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3b] via-[#0a1e3b]/60 to-transparent opacity-90" />

              {/* Text Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight mb-6">
                  {study.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
                  {study.description}
                </p>
              </div>

              {/* Hover highlight border */}
              <div className="absolute inset-0 border-r border-white/10" />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CaseStudySlider;