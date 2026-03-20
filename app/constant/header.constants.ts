import { NavItem, ContactItem, SocialLink } from "@/app/types/header.types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
  },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
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