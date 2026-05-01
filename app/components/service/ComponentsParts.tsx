"use client";

import React, { useState } from 'react';

const AllServices = () => {
  const [isVisible, setIsVisible] = useState(true);

  const services = [
    "accelerated quality & test engineering", "digital insights", "low code",
    "application managed services", "digital supply chain", "mainframe & legacy",
    "api & integration excellence", "ecm & portals", "mobility solutions",
    "ar/vr/3d & animation", "ecodigital engineering", "process consulting",
    "atlassian", "embedded systems", "product engineering",
    "blockchain", "enterprise agile", "product studio",
    "business excellence & transformation consulting", "enterprise architecture consulting", "quantum computing",
    "cloud", "erp", "resilience engineering",
    "crm", "finops", "servicenow",
    "customer data platforms", "ginger ai", "site reliability engineering",
    "cybersecurity", "human capital & workforce management", "trainings",
    "design studio", "innovation", "transformation & modernization",
    "devops", "intelligent bpm", "technical communication"
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