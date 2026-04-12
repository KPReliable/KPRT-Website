"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", email);
  };

  const SOCIAL_LINKS = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/KP-Reliable-Technique-India-Pvt-Ltd/61580395486145/",
      icon: Facebook,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@kpreliable",
      icon: Youtube,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/accounts/login/?next=%2Fkp_reliable_official%2F&source=omni_redirect",
      icon: Instagram,
    },
  ];

  return (
    <footer className="w-full bg-white font-sans text-[#0f1f3d]">
      {/* --- Top Section: Subscription & Insights --- */}
      <div className="max-w-[1400px] mx-auto py-16 md:py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Headline */}
          <div className="lg:max-w-md">
            <h2 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight">
              Stay up to date with insights from <span className="font-semibold text-[#1a3460]">KP Reliable!</span>
            </h2>
          </div>

          {/* Subscription Form Area */}
          <div className="w-full max-w-2xl ml-auto">
            <form onSubmit={handleSubscribe} className="space-y-6">
              
              {/* Pill-shaped Input Group */}
              <div className="relative flex items-center p-1.5 border border-gray-300 rounded-full focus-within:border-[#00a2e9] focus-within:ring-1 focus-within:ring-[#00a2e9] transition-all bg-white shadow-sm">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-transparent px-6 py-3 outline-none text-sm placeholder:text-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-[#1a3460] hover:bg-[#284c87] text-white px-10 py-3 rounded-full text-sm font-bold transition-all active:scale-95"
                >
                  Subscribe
                </button>
              </div>

              {/* Legal & Consent Checkboxes */}
              <div className="space-y-5 text-[13px] leading-relaxed text-[#5a6a85] pl-2">
                
                {/* Marketing Consent */}
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input type="checkbox" className="peer sr-only" required />
                    <div className="w-5 h-5 border border-gray-300 rounded-full peer-checked:bg-[#00a2e9] peer-checked:border-[#00a2e9] transition-all flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                    </div>
                  </div>
                  <span className="group-hover:text-[#0f1f3d] transition-colors">
                    Yes, I would like to receive marketing communications from KP Reliable. I can unsubscribe at any time.
                  </span>
                </label>

                {/* Privacy Consent */}
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input type="checkbox" className="peer sr-only" required />
                    <div className="w-5 h-5 border border-gray-300 rounded-full peer-checked:bg-[#00a2e9] peer-checked:border-[#00a2e9] transition-all flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                    </div>
                  </div>
                  <span className="group-hover:text-[#0f1f3d] transition-colors">
                    I agree to the <Link href="/privacy" className="text-[#284c87] font-bold hover:underline underline-offset-4 decoration-[#00a2e9]">Privacy Notice</Link> and to the handling of my personal information.*
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* --- Bottom Section: Branding & Utilities --- */}
      <div className="max-w-[1400px] mx-auto py-10 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 group cursor-default">
                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                       <img
                src="https://res.cloudinary.com/dinnmia6e/image/upload/v1775933355/logo-minimal_2_t2zb9g.png"
                alt="KP Reliable Logo"
                className="w-6 h-6"
              />
                </div>
                <span className="font-bold text-xl tracking-tighter text-[#1a3460]">
                  kp reliable</span>
             </div>
             <span className="text-gray-300 text-sm font-light select-none">|</span>
             <span className="text-gray-400 text-sm font-medium">© 2026</span>
          </div>

          {/* Utility Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] font-medium text-[#5a6a85] lowercase">
            <Link href="/contact" className="hover:text-[#00a2e9] transition-colors">contact us</Link>
            <Link href="/privacy" className="hover:text-[#00a2e9] transition-colors">privacy notice</Link>
            <Link href="/careers/privacy" className="hover:text-[#00a2e9] transition-colors">applicant privacy notice</Link>
            <Link href="/imprint" className="hover:text-[#00a2e9] transition-colors">imprint</Link>
            <Link href="/sitemap" className="hover:text-[#00a2e9] transition-colors">sitemap</Link>
          </nav>

          {/* Social Icons with Brand Colors */}
          <div className="flex items-center gap-6 text-[#1a3460]">
            {SOCIAL_LINKS.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00a2e9] hover:-translate-y-1 transition-all"
                  aria-label={social.name}
                >
                  <IconComponent size={20} strokeWidth={1.5} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;