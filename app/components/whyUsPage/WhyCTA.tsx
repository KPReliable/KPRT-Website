"use client";

import React from 'react';
import { motion } from 'framer-motion';

const trainingSessions = [
  {
    title: "URBAN GRIT (HIIT)",
    image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1775544385/FINAL_PRODUCT_INSPECTION_rlr1w9.svg",
    color: "bg-blue-600"
  },
  {
    title: "FOUNDATION",
    image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1775544387/FACTORY_AUDIT_hj1ewm.svg",
    color: "bg-orange-600"
  },
  {
    title: "DYNAMIC FLOW",
    image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1775544372/HomeService5_v4ws4b.svg",
    color: "bg-blue-600"
  },
  {
    title: "PERSONAL TRAINING",
    image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1775544373/homeService1_r5flqq.svg",
    color: "bg-orange-600"
  }
];

const TrainingSection = () => {
  return (
    <section className="w-full bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {trainingSessions.map((session, index) => (
          <motion.div 
            key={index}
            className="relative h-[200px] overflow-hidden group border-r border-black/20 last:border-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Background Image with Black & White filter by default */}
            <img 
              src={session.image} 
              alt={session.title}
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            />

            {/* Color Overlay on Hover (matching the blue/orange style) */}
            <div className={`absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 ${session.color}`} />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <motion.h3 
                className="text-white text-2xl md:text-3xl font-black italic tracking-tighter leading-none uppercase"
                whileHover={{ x: 10 }}
              >
                {session.title}
              </motion.h3>
              
              {/* Optional "Explore" line that appears on hover */}
              <div className="w-0 h-1 bg-white mt-2 group-hover:w-full transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrainingSection;