"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Types ---
interface Feature {
  title: string;
  description: string;
  imagePath: string;
}

// --- Data ---
const features: Feature[] = [
  {
    title: "End Phishing & Takeover Fears",
    description: "When security requires a physical touch, remote attacks become impossible.",
    imagePath: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776186083/Ram28_y0ujkz.svg",
  },
  {
    title: "Work Securely from Anywhere",
    description: "Carry enterprise-grade protection in your pocket, from the coffee shop to the airport.",
    imagePath: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776506531/Ram45_b1dipl.svg",
  },
  {
    title: "Reclaim Your Digital Sovereignty",
    description: "Truly own and control your identity in an era of borrowed, server-based trust.",
    imagePath: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776186990/Ram29_cqoeiw.svg",
  },
  {
    title: "Declutter Your Digital Defenses",
    description: "Replace a confusing mess of apps and passwords with one reliable, secure physical token.",
    imagePath: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776186133/Ram21_lpxq7j.svg",
  },
];

const SecurityShowcase = () => {
  return (
    <main className="w-full font-sans overflow-hidden bg-[#1a365d]">
      
      {/* SECTION 1: Testimonial Section */}
      <section className="relative pt-24 pb-12 px-6">
        {/* Background Gradient Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#2b6cb0_0%,_#1a365d_70%)] opacity-60" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h4 className="text-white text-2xl md:text-3xl font-semibold leading-tight">
              Trusted by Leaders, <br />
              Secured by Tri.wi
            </h4>
          </motion.div>

          {/* Main Testimonial Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-start justify-between border border-white/10"
          >
            {/* Left Side: Big Quote */}
            <div className="md:w-3/5">
              <h2 className="text-white text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight">
                &quot;The Tinsen solved our remote workforce security challenge overnight.&quot;
              </h2>
            </div>

            {/* Right Side: Details & Profile */}
            <div className="md:w-1/3 flex flex-col justify-between space-y-10">
              <p className="text-blue-100/80 text-lg leading-relaxed">
                It&apos;s a simple, elegant, and powerful solution that our team actually 
                enjoys using. It&apos;s the first time security has felt like an upgrade, 
                not a burden.
              </p>

              {/* Profile Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">J. Reese</p>
                  <p className="text-blue-300 text-sm">Chief Security Officer,</p>
                  <p className="text-blue-300/60 text-sm font-light leading-none">Vailu Consulting</p>
                </div>
                
                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                    alt="J. Reese profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Animated Feature Cards */}
      <section className="relative w-full py-24 px-6 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col group"
              >
                {/* Image Container with Animation */}
                <div className="relative h-64 mb-8 flex items-center justify-center">
                  {/* Background Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/10 rounded-full blur-3xl transition-all duration-700 scale-75 group-hover:scale-110" />
                  
                  <motion.img
                    src={feature.imagePath}
                    alt={feature.title}
                    className="w-full h-full object-contain grayscale opacity-60 z-10 group-hover:opacity-100"
                    whileHover={{ 
                      scale: 1.08, 
                      filter: "grayscale(0%) brightness(1.1)" 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <h3 className="text-white text-xl font-semibold leading-tight tracking-tight group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default SecurityShowcase;