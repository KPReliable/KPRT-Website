"use client";

import React from "react";
import Image from "next/image";
import KprtianCards from "@/app/components/IndustriesWeServe/KprtianCards";

const IndustriesWeServe: React.FC = () => {
  return (
    <main> 
      {/* ---- Hero Banner Section ---- */}
      <section className="hero-banner" aria-label="Page Banner" style={{ marginBottom: "220px" }}>
        
        <div style={{ 
          position: "relative", 
          width: "100%", 
          height: "82vh", 
          minHeight: "550px", 
          display: "flex", 
          alignItems: "center", // Keeps the text vertically centered
          justifyContent: "center", // Centers the max-width container
        }}>
          
          {/* Main Background Image */}
          <Image 
            src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776245735/Ram35_hd1whb.svg"
            alt="Industries We Serve Banner"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority 
          />

          {/* Dark overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10, 30, 59, 0.65)" }}></div>

          {/* ---- LEFT ALIGNED CONTENT WRAPPER ---- */}
          <div style={{ 
            position: "relative", 
            zIndex: 1, 
            width: "100%", 
            maxWidth: "1400px", // Matches your industries-inner max-width
            padding: "0 60px", // Side padding for the text
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Pushes content to the left
            textAlign: "left" // Aligns text rows to the left
          }}>
            <h1 style={{ 
              color: "#ffffff", 
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)", 
              fontWeight: "500",
              maxWidth: "850px",
              lineHeight: "1.0",
              textShadow: "2px 2px 10px rgba(0,0,0,0.3)"
            }}>
              Defect prevention at source 
              <span style={{ color: "#ffb300" }}>unbiased data</span> 
            </h1>
          </div>

          {/* ---- THE OVERLAPPING IMAGE (Remains Centered) ---- */}
          <div style={{ 
            position: "absolute", 
            bottom: "0", 
            left: "50%", 
            transform: "translate(-50%, 50%)", 
            width: "83vw", 
            maxWidth: "1750px", 
            zIndex: 10, 
            height:"485px"
          }}>
            <Image 
              src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776100685/2_gfcxgo.svg" 
              alt="Ready to streamline with a KPRTian edge"
              fill
              style={{ objectFit: "contain", objectPosition: "top" }} 
            />
          </div>

        </div>
      </section>

      {/* ---- Industries Section ---- */}
      <section className="industries" aria-label="Industries We Serve">
        <div className="industries-inner" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
          <div className="section-header" style={{ marginBottom: "60px" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", color: "#1e375a", marginBottom: "20px" }}>
              Experience the <span style={{ color: "#ffb300" }}>KPRTIAN</span> difference
            </h2>
            <p className="section-subtitle" style={{ color: "#666", fontSize: "1.1rem", maxWidth: "400px" }}>
              Deep domain knowledge across India&apos;s core manufacturing sectors —
              delivering quality solutions that match the unique demands of each industry.
            </p>
          </div>
          <KprtianCards />
        </div>
      </section>
    </main>
  );
};

export default IndustriesWeServe;