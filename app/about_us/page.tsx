"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const AboutPage: React.FC = () => {
  // SMOOTH SCROLL LOGIC
  useEffect(() => {
    const root = document.documentElement;
    root.style.scrollBehavior = "smooth";
    return () => { root.style.scrollBehavior = "auto"; };
  }, []);

  return (
    <main className="bg-white overflow-x-hidden font-body text-brandText selection:bg-secondary selection:text-white">
      
      {/* 1. HERO SECTION: Builds immediate credibility */}
      <section className="relative h-[65vh] flex items-center justify-center bg-[#0f1f3d] overflow-hidden">
        <div className="absolute inset-0 z-10 opacity-20 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(var(--color-secondary) 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />
        
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1565034946487-077f50498bdc?auto=format&fit=crop&q=80" 
            alt="Automotive Quality Control"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center animate-slideIn">
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="h-[1px] w-8 bg-secondary"></span>
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-secondary">Industrial Integrity</span>
            <span className="h-[1px] w-8 bg-secondary"></span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter">
            KP <span className="text-transparent border-b-4 border-secondary" style={{ WebkitTextStroke: '1px white' }}>Reliable</span> Technique
          </h1>
          
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 font-light leading-relaxed italic">
            Ensuring reliability and technical precision across India's manufacturing landscape since inception.
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE: Company Background & Experience */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-secondary font-bold text-sm uppercase tracking-widest flex items-center gap-3 font-display">
                <span className="w-10 h-[2px] bg-secondary"></span> Who We Are
              </h2>
              <h3 className="font-display text-4xl md:text-5xl font-black uppercase text-primary leading-none">
                A Decade of Technical <br/> <span className="text-secondary italic font-display">Expertise</span>
              </h3>
            </div>

            <p className="text-brandMuted text-lg leading-relaxed font-light">
              Founded by a team of industry veterans with over **15+ years of frontline experience**, 
              KP Reliable Technique India Private Limited specializes in high-stakes supplier quality management. 
              Our focus remains steadfast: delivering technical audits that prevent defects before they occur.
            </p>

            <div className="grid grid-cols-2 gap-12 border-t border-slate-100 pt-10">
              <div className="group cursor-default">
                <span className="block text-5xl font-black font-display text-primary group-hover:text-secondary transition-all duration-500 tracking-tighter">15<span className="text-2xl font-display font-black text-secondary">+</span></span>
                <span className="text-[10px] text-brandMuted font-bold uppercase tracking-[0.2em] mt-2 block">Years of Quality Focus</span>
              </div>
              <div className="group cursor-default">
                <span className="block text-5xl font-black font-display text-primary group-hover:text-secondary transition-all duration-500 tracking-tighter">500<span className="text-2xl font-display font-black text-secondary">+</span></span>
                <span className="text-[10px] text-brandMuted font-bold uppercase tracking-[0.2em] mt-2 block">Clients Pan-India</span>
              </div>
            </div>
          </div>

          {/* INTERACTIVE UI: Why KP Reliable (Transparency & Tech) */}
          <div className="relative group flex justify-center">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] scale-75" />
            <div className="relative w-[300px] h-[600px] bg-[#1a1a1a] rounded-[3.5rem] p-4 border-[8px] border-[#2a2a2a] shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-[#fcfdfe] rounded-[2.5rem] flex flex-col overflow-hidden relative border border-slate-200">
                <div className="bg-primary p-6 pt-12 text-center text-white font-display uppercase tracking-widest font-bold">
                   Live Inspection Dashboard
                </div>
                <div className="flex-1 overflow-hidden relative">
                  <div className="absolute top-0 w-full p-4 space-y-4 animate-phoneScroll">
                    {[
                      { l: "Material Check", v: "Steel Hub Pune", s: "Verified" },
                      { l: "Process Audit", v: "Auto Component Ltd", s: "In Progress" },
                      { l: "PDI Inspection", v: "Transmission Unit 4", s: "Cleared" },
                      { l: "Supplier Audit", v: "Vendor Hub Chennai", s: "Verified" }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-xl border-l-4 border-secondary bg-slate-50 shadow-sm">
                        <p className="text-[8px] font-black uppercase tracking-widest text-secondary">{item.l}</p>
                        <p className="text-[11px] font-bold text-primary mt-1">{item.v}</p>
                        <p className="text-[9px] font-black mt-2 text-green-600 uppercase">{item.s}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-secondary animate-bounce-slow">
              <p className="text-[10px] font-black text-brandMuted uppercase mb-1">Our Core Pillars</p>
              <p className="text-primary font-display font-black text-xl italic uppercase">Transparency & Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION: Clear Statements */}
      <section className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="group bg-brandText/40 p-12 rounded-[2.5rem] border border-white/5 hover:border-secondary/30 transition-all duration-500">
             <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
             </div>
             <h4 className="font-display text-3xl font-black text-white uppercase italic mb-6">Our Mission</h4>
             <p className="text-slate-400 font-light text-lg leading-relaxed">
               To empower global supply chains by providing **uncompromising inspection data** that eliminates risk and ensures zero-defect delivery at the source.
             </p>
          </div>

          <div className="group bg-white p-12 rounded-[2.5rem] shadow-2xl hover:shadow-secondary/5 transition-all duration-500">
             <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z"/></svg>
             </div>
             <h4 className="font-display text-3xl font-black text-primary uppercase italic mb-6">Our Vision</h4>
             <p className="text-brandMuted font-light text-lg leading-relaxed">
               To be the **global gold standard** for quality and reliability, creating a seamless manufacturing ecosystem where every component is verified for excellence.
             </p>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP TEAM: Founder/Directors bios */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-secondary font-bold text-sm uppercase tracking-widest flex items-center gap-3 font-display">
              <span className="w-10 h-[2px] bg-secondary font-display"></span> Our Leadership
            </h2>
            <h3 className="font-display text-4xl md:text-5xl font-black uppercase text-primary leading-tight mt-4">
              The Minds Behind <span className="text-secondary font-display italic uppercase">Precision</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2].map((member) => (
              <div key={member} className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 group shadow-sm hover:shadow-xl transition-all">
                <div className="h-80 bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" alt="Leadership" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-10">
                  <h4 className="font-display text-2xl font-black text-primary uppercase leading-none">Founder & Director</h4>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mt-2 mb-4">15+ Years Industry Experience</p>
                  <p className="text-brandMuted text-sm font-light leading-relaxed">
                    A specialist in Lean Six Sigma and Automotive Quality Standards, leading the vision of technical integrity across the Indian manufacturing landscape.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS & ACCREDITATIONS */}
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-primary rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
             {/* Decorative Background Icon */}
             <svg className="absolute right-0 bottom-0 w-64 h-64 text-white opacity-5 translate-x-1/4 translate-y-1/4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
             
             <div className="relative z-10 max-w-xl">
                <h4 className="font-display text-3xl md:text-4xl font-black text-white uppercase italic leading-none">Certifications & Accreditations</h4>
                <p className="text-slate-300 mt-4 font-light">We operate under the highest international benchmarks, following ISO 9001:2015 and global IATF 16949 inspection standards.</p>
             </div>

             <div className="relative z-10 flex gap-4">
                <div className="h-24 w-24 md:h-32 md:w-32 bg-white rounded-3xl flex items-center justify-center p-4 shadow-2xl">
                   <img src="https://www.iso.org/files/live/sites/isoorg/files/about%20ISO/iso-logo.png" alt="ISO" className="w-full grayscale contrast-125" />
                </div>
                <div className="h-24 w-24 md:h-32 md:w-32 bg-secondary rounded-3xl flex items-center justify-center p-4 shadow-2xl">
                   <span className="text-white font-display font-black text-xl text-center leading-none">ISO 9001:2015</span>
                </div>
             </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;