import { Stat, Service, Client, Certification } from "@/app/types/homepage.types";

export const STATS: Stat[] = [
  { value: "17", suffix: "+", label: "Years of Experience" },
  { value: "500", suffix: "+", label: "Clients Served" },
  { value: "20", suffix: "+", label: "Industries Served" },
  // { value: "10", suffix: " India", label: "Presence" },
];

export const SERVICES: Service[] = [
  {
    id: "supplier-quality",
    icon: "shield",
    title: "Supplier Quality Management",
    description:
      "End-to-end supplier evaluation, qualification, and ongoing quality monitoring to keep your supply chain compliant.",
    href: "/services/supplier-quality",
    img:"",
    tag:["Compliance", "Evaluation"]
  },
  {
    id: "pdi",
    icon: "clipboard",
    title: "Pre-Dispatch Inspection",
    description:
      "On-site inspection of finished goods before dispatch — ensuring every shipment meets your specifications.",
    href: "/services/pdi",
    img:"",
    tag:["Inspection", "QA"]
  },
  {
    id: "audits",
    icon: "search",
    title: "Quality & Process Audits",
    description:
      "Systematic audits of manufacturing processes, quality systems, and compliance standards across facilities.",
    href: "/services/audits",
    img:"",
    tag:["Auditing", "Standards"]
  },
  {
    id: "training",
    icon: "book",
    title: "Quality Training Programs",
    description:
      "Customised training workshops on quality tools, standards, and best practices for your teams.",
    href: "/services/training",
    img:"",
    tag:["Training", "Excellence"]
  },
];

export const CLIENTS: Client[] = [
  { id: "1", name: "Tata Motors" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544382/com2_z1rz2z.svg"},
  { id: "2", name: "Mahindra" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544382/com3_ub4jb8.svg"},
  { id: "3", name: "L&T" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544382/com4_nb3lx2.svg"},
  { id: "4", name: "Bosch India" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544381/com5_xzuxuf.svg"},
  { id: "5", name: "Maruti Suzuki" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544380/com6_p3bcaq.svg"},
  { id: "6", name: "Bajaj Auto" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544381/com7_bnv9tc.svg"},
  { id: "7", name: "Hero MotoCorp" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544380/com8_kfuxoc.svg"},
  { id: "8", name: "Ashok Leyland" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544382/com2_z1rz2z.svg"},
  { id: "9", name: "Tata Motors" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544379/com10_ig4zt7.svg"},
  { id: "10", name: "Mahindra" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544379/com11_lystro.svg"},
  { id: "11", name: "L&T" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544378/com12_zlipnu.svg"},
  { id: "12", name: "Bosch India" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544378/com13_yspzrn.svg"},
  { id: "13", name: "Maruti Suzuki" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544378/com14_s0gs7h.svg"},
  { id: "14", name: "Bajaj Auto" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544378/com15_bbogmv.svg"},
  { id: "15", name: "Hero MotoCorp" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544377/com16_pyvxfu.svg"},
  { id: "16", name: "Ashok Leyland" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544380/com8_kfuxoc.svg"},
  { id: "17", name: "Ashok Leyland" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544382/com4_nb3lx2.svg"},
  { id: "18", name: "Ashok Leyland" ,logo:"https://res.cloudinary.com/dinnmia6e/image/upload/v1775544376/com19_bxu0ax.svg"},
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