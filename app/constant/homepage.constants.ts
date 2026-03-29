import { Stat, Service, Client, Certification } from "@/app/types/homepage.types";

export const STATS: Stat[] = [
  { value: "15", suffix: "+", label: "Years of Experience" },
  { value: "500", suffix: "+", label: "Clients Served" },
  { value: "20", suffix: "+", label: "Industries Served" },
  { value: "28", suffix: " States", label: "Pan-India Presence" },
];

export const SERVICES: Service[] = [
  {
    id: "supplier-quality",
    icon: "shield",
    title: "Supplier Quality Management",
    description:
      "End-to-end supplier evaluation, qualification, and ongoing quality monitoring to keep your supply chain compliant.",
    href: "/services/supplier-quality",
    img:""
  },
  {
    id: "pdi",
    icon: "clipboard",
    title: "Pre-Dispatch Inspection",
    description:
      "On-site inspection of finished goods before dispatch — ensuring every shipment meets your specifications.",
    href: "/services/pdi",
    img:"https://www.thechecker.net/hubfs/The%20importance%20of%20inspections%20for%20compliance.png"
  },
  {
    id: "audits",
    icon: "search",
    title: "Quality & Process Audits",
    description:
      "Systematic audits of manufacturing processes, quality systems, and compliance standards across facilities.",
    href: "/services/audits",
    img:""
  },
  {
    id: "training",
    icon: "book",
    title: "Quality Training Programs",
    description:
      "Customised training workshops on quality tools, standards, and best practices for your teams.",
    href: "/services/training",
    img:""
  },
];

export const CLIENTS: Client[] = [
  { id: "1", name: "Tata Motors" },
  { id: "2", name: "Mahindra" },
  { id: "3", name: "L&T" },
  { id: "4", name: "Bosch India" },
  { id: "5", name: "Maruti Suzuki" },
  { id: "6", name: "Bajaj Auto" },
  { id: "7", name: "Hero MotoCorp" },
  { id: "8", name: "Ashok Leyland" },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "iso9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    icon: "award",
  },
  {
    id: "iso45001",
    title: "ISO 45001",
    subtitle: "Occupational Health & Safety",
    icon: "shield-check",
  },
  {
    id: "iatf",
    title: "IATF 16949",
    subtitle: "Automotive Quality Standard",
    icon: "badge",
  },
];