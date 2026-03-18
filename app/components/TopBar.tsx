"use client";

import React from "react";
import Link from "next/link";
import { CONTACT_ITEMS, SOCIAL_LINKS } from "@/app/constant/header.constants";
import {
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
  WhatsAppIcon,
} from "@/app/components/icons/HeaderIcons";
import { ContactItem, SocialLink } from "@/app/types/header.types";

const contactIconMap: Record<ContactItem["icon"], React.FC<{ className?: string }>> = {
  phone: PhoneIcon,
  email: EmailIcon,
  location: LocationIcon,
};

const socialIconMap: Record<SocialLink["platform"], React.FC<{ className?: string }>> = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  youtube: YouTubeIcon,
  whatsapp: WhatsAppIcon,
};

const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        {/* Contact links */}
        <div className="contact-links">
          {CONTACT_ITEMS.map((item) => {
            const Icon = contactIconMap[item.icon];
            return (
              <Link key={item.href} href={item.href} className="contact-link">
                <Icon className="contact-icon" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Social links */}
        <div className="social-links">
          {SOCIAL_LINKS.map((social) => {
            const Icon = socialIconMap[social.platform];
            return (
              <Link
                key={social.platform}
                href={social.href}
                className="social-link"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="social-icon" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopBar;