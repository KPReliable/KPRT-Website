import { NavItem, ContactItem, SocialLink } from "@/app/types/header.types";

// @/app/constant/header.constants.ts

export const SERVICES_DATA = [
  { category: "Plastic Moulding", desc: "Injection, blow, or compression moulding.", points: "Material traceability, Mould maintenance, Process parameters" },
  { category: "Rubber Components", desc: "Compression, transfer, or injection moulding.", points: "Compound control, Hardness testing, Curing parameters" },
  { category: "Sheet Metal", desc: "Cutting, bending, and forming using press machines.", points: "Die maintenance, Burr control, Dimensional checks" },
  { category: "Casting", desc: "Molten metal poured into complex moulds.", points: "Raw material control, Porosity defects, Heat treatment" },
  { category: "Forging", desc: "Shaping metal for enhanced strength.", points: "Billet quality, Temperature control, Grain flow" },
  { category: "Machining", desc: "Precision CNC and conventional machining.", points: "Calibration, Tool wear, SPC control" },
  { category: "Fabrication & Welding", desc: "Assembly using qualified welding processes.", points: "WPS adherence, Visual inspection, NDT" },
  { category: "Surface Treatment", desc: "Painting, plating, and anodizing.", points: "Coating thickness, Adhesion test, Bath control" },
  { category: "Electrical & Electronics", desc: "Electrical components and systems.", points: "ESD control, Functional testing, Soldering quality" },
  { category: "Consumables", desc: "Lubricants, adhesives, and coolants.", points: "MSDS, Shelf life, Safety compliance" },
  { category: "Tooling & Fixtures", desc: "Dies, molds, jigs, and fixtures.", points: "Design validation, Tool life, Accuracy check" },
  { category: "Packaging", desc: "Packing and transportation materials.", points: "Damage prevention, Labeling, FIFO" },
];

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/",
    isMega: true, // Specific flag for the full-width dropdown
  },
  { label: "Industries", href: "/industries" },
  { label: "Why Us", href: "/whyus" },
  { label: "Careers", href: "/careers" },
  { label: "About Us", href: "/about" },
];

export const CONTACT_ITEMS: ContactItem[] = [
  { icon: "phone", label: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: "email", label: "info@qualityinspect.in", href: "mailto:info@qualityinspect.in" },
  { icon: "location", label: "Pan-India Operations", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
  { platform: "twitter", href: "https://twitter.com", label: "Twitter" },
  { platform: "youtube", href: "https://youtube.com", label: "YouTube" },
  { platform: "whatsapp", href: "https://wa.me/919876543210", label: "WhatsApp" },
];