import { Industry } from "@/app/types/industries.types";

export const INDUSTRIES: Industry[] = [
  {
    id: "automotive",
    icon: "car",
    title: "Automotive",
    subtitle: "Components, Assemblies & OEM Suppliers",
    description:
      "End-to-end quality support for Tier-1 and Tier-2 suppliers — from incoming material inspection to final assembly audits aligned with IATF 16949 standards.",
    tags: ["OEM Suppliers", "Tier-1 / Tier-2", "IATF 16949", "Welding QC", "Press Parts"],
    accent: "#284c87",
    href: "/industries/automotive",
    caseStudy: {
      id: "cs-auto-01",
      client: "Leading Tier-1 Auto Supplier, Pune",
      challenge: "High rejection rate at customer end due to dimensional non-conformance in machined parts.",
      result: "Implemented in-process inspection checkpoints & SPC monitoring. Rejection rate dropped significantly within 3 months.",
      metric: "68%",
      metricLabel: "Reduction in rejection rate",
    },
  },
  {
    id: "Railways",
    icon: "circuit",
    title: "Railways",
    subtitle: "Consumer Electronics, PCB & Components",
    description:
      "Pre-dispatch and incoming inspections for electronics manufacturers — covering PCB assemblies, finished goods, packaging checks, and supplier audits.",
    tags: ["PCB Inspection", "Consumer Electronics", "Component QC", "IPC Standards", "ESD Compliance"],
    accent: "#00a2e9",
    href: "/industries/electronics",
    caseStudy: {
      id: "cs-elec-01",
      client: "Electronics Manufacturer, Chennai",
      challenge: "Customer complaints on cosmetic defects and packaging failures during export shipments.",
      result: "Deployed pre-shipment inspection protocol with AQL sampling. Customer complaints reduced to near-zero in 60 days.",
      metric: "94%",
      metricLabel: "Drop in customer complaints",
    },
  },
  
  {
    id: "Civil & Constructions",
    icon: "box",
    title: "Civil & Consturcitons",
    subtitle: "Appliances, Packaging & FMCG",
    description:
      "Factory audits, product conformance checks, and packaging inspections for consumer goods brands — ensuring every SKU reaches shelves defect-free.",
    tags: ["Home Appliances", "FMCG", "Packaging QC", "Factory Audits", "AQL Sampling"],
    accent: "#0f7abf",
    href: "/industries/consumer-goods",
    caseStudy: {
      id: "cs-cg-01",
      client: "FMCG Brand, Mumbai",
      challenge: "Inconsistent packaging quality across 4 contract manufacturers leading to returns from modern trade.",
      result: "Standardised inspection checklist deployed across all CMOs. Trade returns reduced and brand consistency improved.",
      metric: "76%",
      metricLabel: "Decrease in trade returns",
    },
  },

 
];