"use client";

import React, { useState } from "react";
import Link from "next/link";

// Mocking the constant since I don't have access to your local file
const SERVICES = [
  {
    id: "engineering",
    title: "Supplier Quality Management",
    label: "Engineering",
    description: "End-to-end supplier evaluation, qualification, and ongoing quality monitoring to keep your supply chain compliant.",
    img:"https://res.cloudinary.com/dinnmia6e/image/upload/v1776008547/Ram12_qltzov.svg",
    href: "/services/engineering"
  },
  {
    id: "technology",
    title: "Pre-Dispatch Inspection",
    label: "Technology",
    description: "On-site inspection of finished goods before dispatch — ensuring every shipment meets your specifications.",
    img:"https://res.cloudinary.com/dinnmia6e/image/upload/v1776008547/Ram11_q6kq3a.svg",
    href: "/services/technology"
  },
  {
    id: "enterprise",
    title: "Quality & Process Audits",
    label: "Enterprise",
    description: "Systematic audits of manufacturing processes, quality systems, and compliance standards across facilities.",
    img:"https://res.cloudinary.com/dinnmia6e/image/upload/v1776008547/Ram11_q6kq3a.svg",
    href: "/services/enterprise"
  },
  {
    id: "enterprise",
    title: "Quality Training Programs",
    label: "Enterprise",
    description: "Customised training workshops on quality tools, standards, and best practices for your teams",
    img:"https://res.cloudinary.com/dinnmia6e/image/upload/v1776008547/Ram11_q6kq3a.svg",
    href: "/services/enterprise"
  }
];

const KeyServices: React.FC = () => {
  return (
    <section className="w-full expert-cta py-24 px-6 font-sans text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* ---- Header Section ---- */}
        <div className="mb-20 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
           The Four Pillars of Quality Assurance
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            Integrating specialized inspection talent with robust management systems to eliminate friction and maintain a fluid, compliant manufacturing flow.
          </p>
        </div>

        {/* ---- Grid Layout ---- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {SERVICES.map((service, i) => (
            <div key={service.id} className="group flex flex-col items-start">
              
              {/* Abstract Glowing Icon Container */}
              <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#00a2e9] opacity-20 blur-[40px]  group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* 3D-ish Decorative Image/Icon */}
                <img 
                  src={service.img} 
                  alt={service.label}
                  className="w-30 h-30 object-cover  z-10  grayscale-0 group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Orbiting Ring Effect (CSS only) */}
                {/* <div className="absolute inset-0 border border-[#00a2e9]/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-2 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" /> */}
              </div>

              {/* Label */}
              <span className="text-[#33b8ff] text-sm font-medium mb-3 uppercase tracking-widest">
                {service.label}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-[#00a2e9] transition-colors duration-300">
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