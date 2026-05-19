"use client";
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { 
  ChevronRight, 
  BarChart3, 
  BrainCircuit,
  MessageSquare
} from 'lucide-react';

/**
 * Reusable Alternating Section Component
 * Derived from the layout requirements in Screenshot 2026-05-13 180715.png
 */
interface AlternatingSectionProps {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const AlternatingSection: React.FC<AlternatingSectionProps> = ({
  tag, title, description, imageSrc, imageAlt, isReversed = false
}) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
    {/* Text Content Block */}
    <div className={`${isReversed ? 'lg:order-2' : ''}`}>
      <p className="text-[#ffb300] font-medium mb-4 uppercase tracking-widest text-sm">{tag}</p>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-800">
        {title}
      </h2>
      <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-md">
        {description}
      </p>
      
    </div>
    
    {/* Image Visual Block */}
    <div className={`relative aspect-[4/3]  overflow-hidden shadow-2xl ${isReversed ? 'lg:order-1' : ''}`}>
      <Image 
        src={imageSrc} 
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
    </div>
  </div>
);

export default function ConsultantPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Head>
        <title>Production Process Inspection | KPRT Quality Intelligence</title>
      </Head>

      {/* SECTION 1: HERO BANNER 
          Focused on the "Unbiased Oversight" scenario for TPI consultancy.
      */}
      <section className="bg-[#0F172A] pt-40 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#14B8A6]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#ffb300] text-lg font-medium mb-6 lowercase tracking-wide">
            Product Process Inspection
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-bold max-w-4xl leading-[1.1] mb-8">
            Empowering Quality Through <br /> Unbiased Technical Oversight.
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mb-12 leading-relaxed">
            We provide the independent expertise and rigorous auditing standards required 
            to safeguard your supply chain and achieve global compliance excellence.
          </p>
          <div className="flex flex-wrap gap-6">
            
          </div>
        </div>
      </section>

      {/* SECTION 2: ALTERNATING CONTENT BLOCKS */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Block 1: MACE Audit (Image Right) */}
          <AlternatingSection 
            tag="Improve the business"
            title="First off inspeciton"
            description="Our specialized Manufacturing Assessment and Compliance Excellence (MACE) audits identify hidden gaps in your production workflow, ensuring your facility operates at peak global efficiency."
            imageSrc="https://res.cloudinary.com/dinnmia6e/image/upload/v1778654634/RAJ46_ydfry2.svg"
            imageAlt="MACE Auditing Session"
          />

          

          {/* Block 2: VDA 6.3 (Image Left) */}
          <AlternatingSection 
            tag="Operational Excellence"
            title="Patrol inspection: product & process parameter"
            description="As a third-party leader, we conduct rigorous VDA 6.3 audits to evaluate the effectiveness of your manufacturing processes, aligning your output with German automotive excellence."
            imageSrc="https://res.cloudinary.com/dinnmia6e/image/upload/v1777530237/Raj36_cpwsca.svg"
            imageAlt="VDA 6.3 Quality Control Station"
            isReversed={true}
          />

          {/* Block 3: IATF 16949 (Image Right) */}
          <AlternatingSection 
            tag="Scale & Growth"
            title="Operator inspection"
            description="We guide your organization through the transition to IATF 16949 standards, integrating automated intelligence into your Quality Management Systems (QMS) for zero-defect production."
            imageSrc="https://res.cloudinary.com/dinnmia6e/image/upload/v1778655547/Raj49_zqdblp.svg"
            imageAlt="IATF Certification Roadmap"
          />
          {/* Block 3: IATF 16949 (Image Right) */}
          <AlternatingSection 
            tag="Scale & Growth"
            title="Cpk & Ppk Study"
            description="We guide your organization through the transition to IATF 16949 standards, integrating automated intelligence into your Quality Management Systems (QMS) for zero-defect production."
            imageSrc="https://res.cloudinary.com/dinnmia6e/image/upload/v1778655547/Raj49_zqdblp.svg"
            imageAlt="IATF Certification Roadmap"
          />
          {/* Block 3: IATF 16949 (Image Right) */}
          <AlternatingSection 
            tag="Scale & Growth"
            title="Known conformity monitoring"
            description="We guide your organization through the transition to IATF 16949 standards, integrating automated intelligence into your Quality Management Systems (QMS) for zero-defect production."
            imageSrc="https://res.cloudinary.com/dinnmia6e/image/upload/v1778655547/Raj49_zqdblp.svg"
            imageAlt="IATF Certification Roadmap"
          />

        </div>
      </section>

      
    </div>
  );
}