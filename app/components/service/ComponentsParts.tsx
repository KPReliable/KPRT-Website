"use client";

import React, { useState } from 'react';

const AllServices = () => {
  const [isVisible, setIsVisible] = useState(true);

  const services = [
    "Sheet Metal Fabrication", "Plastic Injection Molding", "Pressure Die Casting",
    "Precision CNC Machining", "Hot & Cold Forging", "Heavy Structural Fabrication",
    "Surface Treatment & Finishing", "Tool & Die Design", "Jigs & Fixtures Development",
    "Heat Treatment Services", "Powder Coating & Painting", "Investment Casting",
    "Rapid Prototyping", "Product Design & Development", "Value Engineering",
    "Quality Assurance & Metrology", "Reverse Engineering", "Material Testing",
    "Laser & Plasma Cutting", "Stamping & Punching", "Electroplating & Anodizing",
    "Mold Flow Analysis", "Component Assembly", "Supply Chain Localization",
    "Contract Manufacturing", "CAD/CAM Services", "Design for Manufacturing (DFM)",
    "Hardening & Tempering", "Welding & Brazing", "Plastic Extrusion",
    "Sand Blasting & Shot Peening", "Rubber Molding", "Gear Manufacturing",
    "Gravity Die Casting", "Sheet Metal Bending", "Corrosion Protection",
    "Prototyping & Sampling", "Vendor Development", "Technical Inspection"
];

  if (!isVisible) return null;

  return (
    /* The outer container provides the "outer" spacing (the padding from left and right).
       The bg-color is applied only to the inner max-w container.
    */
    <div className="w-full  px-6 md:px-10 lg:px-12 transition-all duration-500">
      
      <div className="max-w-[1400px] mx-auto bg-[#1c355e] text-white p-8 md:p-12 lg:p-16  shadow-xl">
        
        {/* Header Section */}
        <div className="border-b border-white/10 pb-6 mb-12">
          <h2 className="text-[#ffb300] text-2xl md:text-3xl font-medium">
           Components we are dealing with 
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <span className="text-[17px] font-light text-gray-200 group-hover:text-[#ffb300] transition-colors duration-200 block capitalize">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;