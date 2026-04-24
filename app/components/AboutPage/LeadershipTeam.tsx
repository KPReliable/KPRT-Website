'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

// Data array: Now every card has its own image, title, and hover message!
const designations = [
  {
    title: "Managing Director",
    subtitle: "Executive Leadership",
    description: "Our top-tier management drives the long-term strategic vision, shaping the operational frameworks that empower our 650+ engineers nationwide.",
    cards: [
      { 
        title: "Strategic Growth", 
        hoverMessage: "Driving 5-year expansion plans and market dominance.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Process Optimization", 
        hoverMessage: "Streamlining nationwide operations for peak efficiency.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Pan-India Execution", 
        hoverMessage: "Executing high-level strategies across all 9 branch locations.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Global Outreach", 
        hoverMessage: "Expanding KPRT's standard of excellence beyond borders.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      }
    ]
  },
  {
    title: "Vice President",
    subtitle: "Strategic Operations",
    description: "Aligning departmental goals with executive strategy, our VPs remove operational roadblocks to ensure seamless execution across all corporate levels.",
    cards: [
      { 
        title: "Goal Alignment", 
        hoverMessage: "Bridging the gap between executive vision and daily operations.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Risk Mitigation", 
        hoverMessage: "Proactively identifying and neutralizing operational risks.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Executive Synergy", 
        hoverMessage: "Fostering collaboration between all department heads.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Performance Metrics", 
        hoverMessage: "Tracking and elevating company-wide KPIs.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      }
    ]
  },
  {
    title: "General Manager",
    subtitle: "Regional & HR Leadership",
    description: "Driving business expansion, overseeing talent acquisition, and ensuring smooth, uninterrupted operations across our vast pan-India network.",
    cards: [
      { 
        title: "Talent Acquisition", 
        hoverMessage: "Recruiting top-tier engineering talent to join our 650+ workforce.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Resource Allocation", 
        hoverMessage: "Ensuring every project has the exact manpower it requires.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Market Expansion", 
        hoverMessage: "Opening new avenues for KPRT's inspection services.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Employee Retention", 
        hoverMessage: "Cultivating a culture of excellence and loyalty.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      }
    ]
  },
  {
    title: "Finance Director",
    subtitle: "Fiscal Management",
    description: "Overseeing strict financial planning, risk management, and corporate investments to ensure sustainable, long-term corporate growth.",
    cards: [
      { 
        title: "Capital Allocation", 
        hoverMessage: "Directing funds to high-ROI projects and infrastructure.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Risk Auditing", 
        hoverMessage: "Maintaining strict financial compliance and internal audits.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Sustainable Yield", 
        hoverMessage: "Ensuring long-term profitability and corporate health.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Investment Strategy", 
        hoverMessage: "Funding technological advancements like the SUNRAY Ecosystem.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      }
    ]
  },
  {
    title: "Head of Department",
    subtitle: "Quality & Development",
    description: "Enforcing strict quality control protocols and leading new product development (NPD) to bridge the gap between engineering and manufacturing.",
    cards: [
      { 
        title: "TPI Standards", 
        hoverMessage: "Enforcing rigorous Third-Party Inspection protocols.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Innovation Pipeline", 
        hoverMessage: "Driving research and development for new manufacturing solutions.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Defect Prevention", 
        hoverMessage: "Utilizing root cause analysis to eliminate manufacturing errors.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Compliance Checking", 
        hoverMessage: "Guaranteeing 100% adherence to ISO 9001:2015 standards.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      }
    ]
  },
  {
    title: "Project Coordinator",
    subtitle: "On-Ground Execution",
    description: "Managing day-to-day project workflows, facilitating client communications, and ensuring absolute precision in ground-level delivery.",
    cards: [
      { 
        title: "Workflow Tracking", 
        hoverMessage: "Monitoring daily progress and minimizing reaction time.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Client Relations", 
        hoverMessage: "Acting as the primary liaison for our 100+ active clients.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Rapid Deployment", 
        hoverMessage: "Dispatching inspection teams immediately upon client request.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      },
      { 
        title: "Data Reporting", 
        hoverMessage: "Delivering real-time analytics and dashboard updates.", 
        image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776853795/Ram71_zuqevb.svg" 
      }
    ]
  }
];

export default function LeadershipShowcase() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('translate-y-12', 'opacity-0');
            entry.target.classList.add('translate-y-0', 'opacity-100');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      revealRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // Pre-defined Tailwind delay classes to ensure they compile correctly
  const delayClasses = ['delay-[300ms]', 'delay-[400ms]', 'delay-[500ms]', 'delay-[600ms]'];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {designations.map((role, index) => {
          // Check if the current row is even or odd to alternate the layout
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="w-full">
              
              {/* --- Alternating Header Section --- */}
              <div 
                className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-8 ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Main Designation Heading */}
                <h2 
                  ref={addToRefs}
                  className={`text-4xl md:text-5xl lg:text-[4rem] font-bold text-gray-900 leading-[1.1] tracking-tight transition-all duration-1000 ease-out transform translate-y-12 opacity-0 w-full md:w-1/2 ${
                    isEven ? 'text-left' : 'text-left md:text-right'
                  }`}
                >
                  {role.title} <br />
                  <span className="text-gray-500">{role.subtitle}</span>
                </h2>
                
                {/* Subheading Description */}
                <p 
                  ref={addToRefs}
                  className={`w-full md:w-1/2 max-w-md text-base md:text-lg text-gray-700 font-medium leading-relaxed transition-all duration-1000 delay-200 ease-out transform translate-y-12 opacity-0 ${
                    isEven ? 'text-left md:text-right' : 'text-left'
                  }`}
                >
                  {role.description}
                </p>
              </div>

              {/* --- 4-Column Image Grid --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto lg:h-[400px] gap-3">
                
                {role.cards.map((card, cardIndex) => (
                  <div 
                    key={cardIndex}
                    ref={addToRefs}
                    className={`relative min-h-[300px] lg:min-h-full bg-gray-200 overflow-hidden transition-all duration-1000 ${delayClasses[cardIndex]} ease-out transform translate-y-12 opacity-0 group rounded-sm`}
                  >
                    {/* Background Image */}
                    <Image 
                      src={card.image} 
                      alt={card.title}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient overlay so the bottom title is always readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Dark overlay & Hover Message (Fades in on hover) */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                      <p className="text-white text-base md:text-lg font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        "{card.hoverMessage}"
                      </p>
                    </div>

                    {/* Static Title at the bottom */}
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <span className="text-white font-semibold tracking-wide uppercase text-sm md:text-base">
                        {card.title}
                      </span>
                    </div>

                  </div>
                ))}

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}