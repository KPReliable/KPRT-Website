"use client";

import React from "react";
import Image from "next/image";

const KPRTIAN_VALUES = [
  {
    id: 1,
    title: "100% Independent & Reliable",
    imageSrc: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776681034/SURFACE_TREATMENT_vlng1j.svg",
  },
  {
    id: 2,
    title: "Real-Time Accountability",
    imageSrc: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776681013/5_w5ffqc.svg",
  },
  {
    id: 3,
    title: "Trained & Industry-Ready Workforce",
    imageSrc: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776681013/FORGING_nckqz8.svg",
  },
  {
    id: 4,
    title: "24×7 Technical Support",
    imageSrc: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776681005/CONSUMABALES_fltaux.svg",
  }
];

const SuccessStoryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
      {KPRTIAN_VALUES.map((item) => (
        <div 
          key={item.id} 
          className="bg-white flex flex-col group cursor-pointer"
        >
          {/* Image Container */}
          <div className="relative w-full h-[200px] overflow-hidden ">
            <Image 
              src={item.imageSrc} 
              alt={item.title} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Text Content - Title Only */}
          <div className="pt-4 pb-2">
            <h3 className="text-[17px] md:text-[18px] leading-[1.3] font-medium text-[#1e375a] transition-colors group-hover:text-blue-600">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuccessStoryCards;