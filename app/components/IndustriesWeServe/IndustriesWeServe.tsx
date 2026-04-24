"use client";

import React, { useState } from "react";
// import Link from "next/link";
import Image from "next/image"; // 1. Added next/image import
import { INDUSTRIES } from "@/app/constant/industries.constants";
import IndustryCard from "@/app/components/IndustriesWeServe/IndustryCard";
import KprtianCards from "@/app/components/IndustriesWeServe/KprtianCards";
// import Banner from "@/app/components/IndustriesWeServe/Banner";
// import ModernizationSection from '@/app/components/IndustriesWeServe/ModernizationSection'

const FILTERS = ["All", "Automotive", "Electronics", "Heavy Machinery", "Consumer Goods", "Others"];

const IndustriesWeServe: React.FC = () => {


  return (
    // 2. Wrapped everything in a <main> tag
    <main> 
      
     {/* ---- Hero Banner Section ---- */}
      {/* Added marginBottom to create space so the overlapping image doesn't cover your industries grid */}
      <section className="hero-banner" aria-label="Page Banner" style={{ marginBottom: "220px" }}>
        
        {/* Main Banner Background Wrapper */}
        <div style={{ position: "relative", width: "100%", height: "82vh", minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          
          {/* Your main background image */}
          <Image 
            src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776245735/Ram35_hd1whb.svg"
            alt="Industries We Serve Banner"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority 
          />

          {/* Optional: Dark overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }}></div>

          {/* Banner Text (Optional, if you still want normal text here) */}
          <h1 style={{ position: "relative", color: "#ffffff", fontSize: "3rem", zIndex: 1 }}>
            Industries We Serve
          </h1>

          {/* ---- THE OVERLAPPING IMAGE ---- */}
          <div style={{ 
            position: "absolute", 
            bottom: "0", /* Pins it to the bottom edge of the banner */
            left: "50%", /* Moves it to the center horizontally */
            transform: "translate(-50%, 50%)", /* Pulls it exactly half-way down and perfectly centers it */
             width: "73vw", /* Width of your overlapping image (adjust as needed) */
            maxWidth: "1750px", /* Prevents it from getting too wide on huge screens */
             /* Give it a fixed height or adjust based on your image */
            zIndex: 10, /* Ensures it sits on top of everything else */
            height:"510px"
          }}>
            <Image 
              src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776270834/Ram36_oghi4s.svg" /* <-- Put your custom text image URL here */
              alt="Ready to streamline with a KPRTian edge"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }} /* Contain ensures the whole image is visible without cropping */
            />
          </div>

        </div>
      </section>

      {/* ---- Existing Industries Section ---- */}
      <section className="industries" aria-label="Industries We Serve">
        <div className="industries-inner">

          {/* ---- Section header ---- */}
          <div className="section-header">
          
            <h2 className="section-title">Experience the KPRTIAN difference in every dimension</h2>
            <p className="section-subtitle">
              Deep domain knowledge across India&apos;s core manufacturing sectors —
              delivering quality solutions that match the unique demands of each industry.
            </p>
          </div>
          <KprtianCards />
          
          {/* ---- Filter tabs ---- */}
        
        
          {/* <div className="ind-cta-strip">
            <div className="ind-cta-strip-content">
              <div>
                <p className="ind-cta-strip-title">Don&apos;t see your industry?</p>
                <p className="ind-cta-strip-sub">
                  We work across all manufacturing sectors. Talk to us about your specific requirements.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Discuss Your Industry
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div> */}

        </div>
      </section>
    </main>
  );
};

export default IndustriesWeServe;