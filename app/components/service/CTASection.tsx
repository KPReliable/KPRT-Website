"use client";

import React from "react";

const ServicesCards = () => {
  // Your provided data structured for the cards
  const services = [
    {
      title: "Inspection Services",
      image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777446170/Raj21_ezpzoe.svg", // Replace with actual image
      
    },
    {
      title: "Audit & Compliance",
      image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776530403/Ram46_ligbix.svg", // Replace with actual image
      
      
    },
    {
      title: "Manufacturing Support",
      image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777372735/Raj12_ih8sdj.svg", // Replace with actual image
      
  
    },
    {
      title: "Vendor Development",
      image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777446490/Raj22_enljxm.svg", // Replace with actual image
      
    
    }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading (Optional, but good for context) */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b49] mb-12">
          Explore Our Capabilities
        </h2>
        
        {/* ==== CARDS GRID ==== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {services.map((service, index) => (
            <div key={index} className="flex flex-col group cursor-pointer h-full">
              
              {/* ==== IMAGE SECTION ==== */}
              <div className="w-full aspect-[3/2] overflow-hidden mb-5 bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Image'; }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* ==== CONTENT SECTION ==== */}
              <div className="flex flex-col flex-1">
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-[#1a2b49] mb-4 leading-snug group-hover:text-[#42d09e] transition-colors duration-300">
                  {service.title}
                </h3>
                

                
                {/* Bottom Label (Matches the "Article" text in screenshot) */}
                <span className="text-[#5b6a82] text-sm font-medium mt-auto border-t border-gray-100 pt-3">
                  
                </span>
                
              </div>
              
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default ServicesCards;