export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export interface ContactItem {
  icon: "phone" | "email" | "location";
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "linkedin" | "twitter" | "youtube" | "whatsapp";
  href: string;
  label: string;
}