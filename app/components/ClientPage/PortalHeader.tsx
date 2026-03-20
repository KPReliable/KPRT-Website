"use client";

import Link from "next/link";
import { useState } from "react";

interface PortalHeaderProps {
  clientName?: string;
  companyName?: string;
}

export default function PortalHeader({
  clientName = "Rahul Mehta",
  companyName = "Maruti Suzuki India Ltd.",
}: PortalHeaderProps) {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="portal-header">
      <div className="portal-header__inner">
        {/* Logo */}
        <Link href="/" className="portal-header__logo">
          <div className="portal-header__logo-mark">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
              <circle cx="18" cy="18" r="18" fill="#284C87" />
              <circle cx="18" cy="22" r="10" fill="#00A2E9" />
              <text x="18" y="27" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontWeight="800" fontSize="12" fill="white">Q</text>
              <line x1="18" y1="4" x2="18" y2="9" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" />
              <line x1="26" y1="6.5" x2="23.8" y2="10.5" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" />
              <line x1="10" y1="6.5" x2="12.2" y2="10.5" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" />
              <line x1="31" y1="14" x2="27" y2="16" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" />
              <line x1="5" y1="14" x2="9" y2="16" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="portal-header__logo-text">
            <span className="portal-header__logo-name">
              KP<span>Reliable</span>
            </span>
            <span className="portal-header__logo-sub">Client Portal</span>
          </div>
        </Link>

        {/* Right: notifications + user */}
        <div className="portal-header__right">
          {/* Notification Bell */}
          <button
            className="portal-header__notif-btn"
            onClick={() => setNotifOpen(!notifOpen)}
            aria-label="Notifications"
          >
            <i className="fas fa-bell" />
            <span className="portal-header__notif-badge">3</span>
          </button>

          {/* Help */}
          <Link href="/contact" className="portal-header__help">
            <i className="fas fa-headset" />
            <span>Support</span>
          </Link>

          {/* User */}
          <div className="portal-header__user">
            <div className="portal-header__avatar">
              {clientName.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div className="portal-header__user-info">
              <span className="portal-header__user-name">{clientName}</span>
              <span className="portal-header__user-company">{companyName}</span>
            </div>
            <i className="fas fa-chevron-down portal-header__user-chevron" />
          </div>
        </div>
      </div>
    </header>
  );
}
