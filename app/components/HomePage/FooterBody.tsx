"use client";

import React, { useState } from "react";
import Link from "next/link";

const FooterBody = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#020617] border-t border-white/10 pt-12 sm:pt-20 pb-10 px-4 sm:px-6 font-sans text-white">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-32 items-start text-left">
          
          {/* --- Brand Column --- */}
          <div className="space-y-6 sm:space-y-8 w-full">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#00a2e9] flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(0,162,233,0.4)] group-hover:scale-110 transition-transform flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold tracking-tight">KP Reliable</h2>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#33b8ff]">Inspection & Quality Services</p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md font-normal">
              India&apos;s trusted partner for supplier quality management, pre-dispatch inspections, 
              process audits, and quality training — serving 20+ industries across all 28 states.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-1">
              {['Facebook', 'LinkedIn', 'Twitter'].map((platform) => (
                <Link
                  key={platform}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:border-[#00a2e9] hover:text-[#00a2e9] transition-all duration-300 flex-shrink-0"
                >
                  <span className="sr-only">{platform}</span>
                  {/* Simplified Icon Placeholder */}
                  <div className="w-2 h-2 bg-current rounded-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* --- Contact & Newsletter Column --- */}
          <div className="space-y-8 sm:space-y-10 w-full">
            {/* Quick Contact links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <a href="tel:+919876543210" className="group block overflow-hidden">
                <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-1 font-bold">Call Us</p>
                <p className="text-base sm:text-lg font-medium group-hover:text-[#00a2e9] transition-colors truncate">+91 98765 43210</p>
              </a>
              <a href="mailto:info@qualityinspect.in" className="group block overflow-hidden">
                <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-1 font-bold">Email Us</p>
                <p className="text-base sm:text-lg font-medium group-hover:text-[#00a2e9] transition-colors truncate">info@qualityinspect.in</p>
              </a>
            </div>

            {/* Newsletter UI */}
            <div className="bg-white/[0.03] border border-white/10 p-5 sm:p-8 rounded-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a2e9] opacity-5 blur-[60px] pointer-events-none" />
              
              <h4 className="text-base sm:text-lg font-semibold mb-1.5">Join our Newsletter</h4>
              <p className="text-xs sm:text-sm text-gray-400 mb-6 font-normal">Get quality insights and checklists straight to your inbox.</p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-[#ffb300] font-medium animate-pulse text-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="18" height="18" className="flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Subscription Active
                </div>
              ) : (
                /* Newsletter Input Form Block */
                /* CHANGED: Swapped absolute layout with an adaptive column-to-row wrapper pattern */
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 sm:relative w-full overflow-hidden">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-white/[0.05] border border-white/10 px-4 sm:px-5 py-3 sm:py-4 rounded-xl focus:outline-none focus:border-[#00a2e9] transition-colors sm:pr-32 text-xs sm:text-sm text-white placeholder-gray-500"
                  />
                  <button 
                    type="submit"
                    className="bg-[#ffb300] hover:bg-[#e6a100] text-slate-900 sm:absolute sm:right-2 px-5 py-2.5 sm:py-2 rounded-xl sm:rounded-lg text-xs font-bold transition-all shrink-0 shadow-sm shadow-[#ffb300]/10 active:scale-[0.99]"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        {/* CHANGED: Clean alignment rules snap flawlessly between grid columns across devices */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 border-t border-white/5 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[11px] sm:text-xs text-gray-500 font-normal">
            &copy; {new Date().getFullYear()} KP Reliable. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 sm:gap-x-8 gap-y-2 text-[11px] sm:text-xs text-gray-500 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBody;