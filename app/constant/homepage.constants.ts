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
    img:"/assets/servicesImages/services6.svg"
  },
  {
    id: "pdi",
    icon: "clipboard",
    title: "Pre-Dispatch Inspection",
    description:
      "On-site inspection of finished goods before dispatch — ensuring every shipment meets your specifications.",
    href: "/services/pdi",
    img:"/assets/servicesImages/services7.svg"
  },
  {
    id: "audits",
    icon: "search",
    title: "Quality & Process Audits",
    description:
      "Systematic audits of manufacturing processes, quality systems, and compliance standards across facilities.",
    href: "/services/audits",
    img:"/assets/servicesImages/services8.svg"
  },
  {
    id: "training",
    icon: "book",
    title: "Quality Training Programs",
    description:
      "Customised training workshops on quality tools, standards, and best practices for your teams.",
    href: "/services/training",
    img:"/assets/servicesImages/services10.svg"
  },
];

export const CLIENTS: Client[] = [
  { id: "1", name: "Tata Motors" ,logo:"/assets/companyImages/_com2.svg"},
  { id: "2", name: "Mahindra" ,logo:"/assets/companyImages/_com3.svg"},
  { id: "3", name: "L&T" ,logo:"/assets/companyImages/_com4.svg"},
  { id: "4", name: "Bosch India" ,logo:"/assets/companyImages/_com5.svg"},
  { id: "5", name: "Maruti Suzuki" ,logo:"/assets/companyImages/_com6.svg"},
  { id: "6", name: "Bajaj Auto" ,logo:"/assets/companyImages/_com7.svg"},
  { id: "7", name: "Hero MotoCorp" ,logo:"/assets/companyImages/_com8.svg"},
  { id: "8", name: "Ashok Leyland" ,logo:"/assets/companyImages/_com2.svg"},
  { id: "9", name: "Tata Motors" ,logo:"/assets/companyImages/com10.svg"},
  { id: "10", name: "Mahindra" ,logo:"/assets/companyImages/com11.svg"},
  { id: "11", name: "L&T" ,logo:"/assets/companyImages/com12.svg"},
  { id: "12", name: "Bosch India" ,logo:"/assets/companyImages/com13.svg"},
  { id: "13", name: "Maruti Suzuki" ,logo:"/assets/companyImages/com14.svg"},
  { id: "14", name: "Bajaj Auto" ,logo:"/assets/companyImages/com15.svg"},
  { id: "15", name: "Hero MotoCorp" ,logo:"/assets/companyImages/com16.svg"},
  { id: "16", name: "Ashok Leyland" ,logo:"/assets/companyImages/_com8.svg"},
  { id: "17", name: "Ashok Leyland" ,logo:"/assets/companyImages/_com4.svg"},
  { id: "18", name: "Ashok Leyland" ,logo:"/assets/companyImages/com19.svg"},
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