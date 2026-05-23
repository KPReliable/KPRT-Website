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
    <div className="topbar w-full">
      {/* 
        Responsive Adjustments:
        - Transforms the bar from a stacked vertical layout on mobile devices 
          into a horizontal layout on larger screens (`sm:flex-row`).
        - Uses explicit padding scales to align properly across all device screens.
      */}
      <div className="topbar-inner flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full">
        
        {/* Contact links */}
        {/* Added flex-wrap and center alignment handles to keep multi-line strings look pristine on mobile viewports */}
        <div className="contact-links flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-5 md:gap-6 w-full sm:w-auto">
          {CONTACT_ITEMS.map((item) => {
            const Icon = contactIconMap[item.icon];
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className="contact-link flex items-center gap-1.5 text-xs sm:text-[12.5px] py-1 sm:py-0 transition-colors"
              >
                <Icon className="contact-icon shrink-0 w-3.5 h-3.5" />
                <span className="truncate max-w-[180px] sm:max-w-none">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Social links */}
        {/* Keeps social shortcut links cleanly centered on mobile devices */}
        <div className="social-links flex items-center justify-center gap-2 sm:gap-3 shrink-0">
          {SOCIAL_LINKS.map((social) => {
            const Icon = socialIconMap[social.platform];
            return (
              <Link
                key={social.platform}
                href={social.href}
                className="social-link w-[26px] h-[26px] flex items-center justify-center transition-all"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="social-icon w-3.5 h-3.5" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopBar;