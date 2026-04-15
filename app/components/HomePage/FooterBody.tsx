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
    <footer className="w-full bg-[#020617] border-t border-white/10 pt-20 pb-10 px-6 font-sans text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* --- Brand Column --- */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#00a2e9] flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(0,162,233,0.4)] group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">KP Reliable</h2>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#33b8ff]">Inspection & Quality Services</p>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed max-w-md">
              India&apos;s trusted partner for supplier quality management, pre-dispatch inspections, 
              process audits, and quality training — serving 20+ industries across all 28 states.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {['Facebook', 'LinkedIn', 'Twitter'].map((platform) => (
                <Link
                  key={platform}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:border-[#00a2e9] hover:text-[#00a2e9] transition-all duration-300"
                >
                  <span className="sr-only">{platform}</span>
                  {/* Simplified Icon Placeholder */}
                  <div className="w-2 h-2 bg-current rounded-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* --- Contact & Newsletter Column --- */}
          <div className="space-y-10">
            {/* Quick Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="tel:+919876543210" className="group block">
                <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-1">Call Us</p>
                <p className="text-lg font-medium group-hover:text-[#00a2e9] transition-colors">+91 98765 43210</p>
              </a>
              <a href="mailto:info@qualityinspect.in" className="group block">
                <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-1">Email Us</p>
                <p className="text-lg font-medium group-hover:text-[#00a2e9] transition-colors">info@qualityinspect.in</p>
              </a>
            </div>

            {/* Newsletter UI - Styled like your previous components */}
            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a2e9] opacity-5 blur-[60px]" />
              
              <h4 className="text-lg font-semibold mb-2">Join our Newsletter</h4>
              <p className="text-sm text-gray-400 mb-6">Get quality insights and checklists straight to your inbox.</p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-[#10b981] font-medium animate-pulse">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="18" height="18">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Subscription Active
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-white/[0.05] border border-white/10 px-5 py-4 rounded-xl focus:outline-none focus:border-[#00a2e9] transition-colors pr-32 text-sm"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 bg-[#284c87] hover:bg-[#00a2e9] text-white px-5 py-2 rounded-lg text-xs font-bold transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} KP Reliable. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBody 