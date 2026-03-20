"use client";

import React, { useState } from "react";
import Link from "next/link";

/* ============================================================
   STATIC DATA
   ============================================================ */
const SERVICES = [
  "Supplier Quality Management",
  "Pre-Dispatch Inspection (PDI)",
  "Quality & Process Audits",
  "Training Programs",
  "Other / General Inquiry",
];

const OFFICES = [
  {
    city: "Pune",
    tag: "Head Office",
    address: "Plot 14, Pimpri-Chinchwad Industrial Area, Pune – 411018, Maharashtra",
    phone: "+91 98765 43210",
    email: "pune@qualityinspect.in",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.652!2d73.8567!3d18.6279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzQwLjQiTiA3M8KwNTEnMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    city: "Delhi NCR",
    tag: "North India",
    address: "Unit 204, Udyog Vihar Phase IV, Gurugram – 122015, Haryana",
    phone: "+91 98765 43211",
    email: "delhi@qualityinspect.in",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.052!2d77.0988!3d28.4989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI5JzU2LjEiTiA3N8KwMDUnNTUuNyJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    city: "Chennai",
    tag: "South India",
    address: "No. 7, II Floor, Ambattur Industrial Estate, Chennai – 600058, Tamil Nadu",
    phone: "+91 98765 43212",
    email: "chennai@qualityinspect.in",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.052!2d80.1488!3d13.1149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzUzLjciTiA4MMKwMDgnNTUuNyJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
];

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "#0077b5",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    color: "#1877f2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    color: "#ff0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M23 7s-.3-1.9-1.1-2.7c-1.1-1.1-2.3-1.1-2.8-1.2C16.2 3 12 3 12 3s-4.2 0-7.1.1c-.6.1-1.8.1-2.8 1.2C1.3 5.1 1 7 1 7S.7 9.1.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 1.9 1.1 2.7c1.1 1.1 2.5 1 3.1 1.1C7.2 21.5 12 21.5 12 21.5s4.2 0 7.1-.2c.6-.1 1.8-.1 2.8-1.2.8-.8 1.1-2.7 1.1-2.7s.3-2.1.3-4.3v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l7.6 3.6-7.6 3.5z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    color: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    color: "#25d366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

/* ============================================================
   FORM STATE TYPE
   ============================================================ */
interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const EMPTY: FormState = { name: "", email: "", phone: "", service: "", message: "" };

/* ============================================================
   COMPONENT
   ============================================================ */
const ContactPage: React.FC = () => {
  const [form, setForm]       = useState<FormState>(EMPTY);
  const [errors, setErrors]   = useState<Partial<FormState>>({});
  const [sent, setSent]       = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.service)        e.service = "Please select a service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  return (
    <main className="cp-page">

      {/* ======================================================
          PAGE HERO
      ====================================================== */}
      <section className="cp-hero">
        <div className="cp-hero-bg" aria-hidden="true" />
        <div className="cp-hero-inner">
          <span className="cp-eyebrow">Get In Touch</span>
          <h1 className="cp-hero-title">Contact Us</h1>
          <p className="cp-hero-sub">
            Have a quality challenge? Need an inspection quote? We respond to
            every inquiry within one business day.
          </p>

          {/* Quick contact chips */}
          <div className="cp-hero-chips">
            <a href="tel:+919876543210" className="cp-chip">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              +91 98765 43210
            </a>
            <a href="mailto:info@qualityinspect.in" className="cp-chip">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              info@qualityinspect.in
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="cp-chip cp-chip--green">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51A9.87 9.87 0 0012.05 0C5.495 0 .16 5.335.157 11.892a11.86 11.86 0 001.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          MAIN CONTENT — Form + Sidebar
      ====================================================== */}
      <div className="cp-body">
        <div className="cp-body-inner">

          {/* ---- INQUIRY FORM ---- */}
          <div className="cp-form-card">
            {sent ? (
              <div className="cp-success">
                <div className="cp-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2 className="cp-success-title">Message Sent!</h2>
                <p className="cp-success-text">
                  Thank you for reaching out. Our team will get back to you within one business day.
                </p>
                <button className="cp-success-reset" onClick={() => { setSent(false); setForm(EMPTY); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="cp-form-header">
                  <h2 className="cp-form-title">Send Us a Message</h2>
                  <p className="cp-form-sub">Fill in the details below and we&apos;ll respond within 24 hours.</p>
                </div>

                <form onSubmit={submit} className="cp-form" noValidate>
                  {/* Row 1 — Name + Email */}
                  <div className="cp-form-row">
                    <div className="cp-field">
                      <label className="cp-label" htmlFor="name">
                        Full Name <span className="cp-required">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text"
                        className={`cp-input${errors.name ? " cp-input--error" : ""}`}
                        placeholder="Rajesh Sharma"
                        value={form.name} onChange={change}
                      />
                      {errors.name && <span className="cp-error-msg">{errors.name}</span>}
                    </div>
                    <div className="cp-field">
                      <label className="cp-label" htmlFor="email">
                        Email Address <span className="cp-required">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email"
                        className={`cp-input${errors.email ? " cp-input--error" : ""}`}
                        placeholder="rajesh@company.com"
                        value={form.email} onChange={change}
                      />
                      {errors.email && <span className="cp-error-msg">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Row 2 — Phone + Service */}
                  <div className="cp-form-row">
                    <div className="cp-field">
                      <label className="cp-label" htmlFor="phone">Phone Number</label>
                      <div className="cp-phone-wrap">
                        <span className="cp-phone-prefix">+91</span>
                        <input
                          id="phone" name="phone" type="tel"
                          className="cp-input cp-input--phone"
                          placeholder="98765 43210"
                          value={form.phone} onChange={change}
                        />
                      </div>
                    </div>
                    <div className="cp-field">
                      <label className="cp-label" htmlFor="service">
                        Service Interested In <span className="cp-required">*</span>
                      </label>
                      <select
                        id="service" name="service"
                        className={`cp-input cp-select${errors.service ? " cp-input--error" : ""}`}
                        value={form.service} onChange={change}
                      >
                        <option value="">Select a service…</option>
                        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <span className="cp-error-msg">{errors.service}</span>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="cp-field">
                    <label className="cp-label" htmlFor="message">Your Message</label>
                    <textarea
                      id="message" name="message"
                      className="cp-input cp-textarea"
                      placeholder="Tell us about your quality challenge or requirement…"
                      rows={5}
                      value={form.message} onChange={change}
                    />
                  </div>

                  <button type="submit" className="cp-submit">
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" />
                    </svg>
                  </button>
                </form>
              </>
            )}
          </div>

          {/* ---- SIDEBAR ---- */}
          <aside className="cp-sidebar">

            {/* Direct contact */}
            <div className="cp-info-card">
              <h3 className="cp-card-title">Direct Contact</h3>
              <div className="cp-contact-list">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: "+91 98765 43210",
                    href: "tel:+919876543210",
                    accent: "var(--color-primary)",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    ),
                    label: "Email",
                    value: "info@qualityinspect.in",
                    href: "mailto:info@qualityinspect.in",
                    accent: "var(--color-secondary)",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51A9.87 9.87 0 0012.05 0C5.495 0 .16 5.335.157 11.892a11.86 11.86 0 001.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ),
                    label: "WhatsApp",
                    value: "+91 98765 43210",
                    href: "https://wa.me/919876543210",
                    accent: "#25d366",
                  },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="cp-contact-item"
                    target={item.label === "WhatsApp" ? "_blank" : undefined}
                    rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}>
                    <div className="cp-contact-icon" style={{ background: `${item.accent}15`, color: item.accent }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="cp-contact-label">{item.label}</p>
                      <p className="cp-contact-value">{item.value}</p>
                    </div>
                    <svg className="cp-contact-arrow" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="14" height="14">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="cp-info-card">
              <h3 className="cp-card-title">Follow Us</h3>
              <div className="cp-social-grid">
                {SOCIAL.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="cp-social-btn"
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ "--social-color": s.color } as React.CSSProperties}
                  >
                    {s.icon}
                    <span>{s.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Response time badge */}
            <div className="cp-response-card">
              <div className="cp-response-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                  strokeLinecap="round" width="20" height="20">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <p className="cp-response-title">We respond within 24 hrs</p>
                <p className="cp-response-sub">Mon – Sat &nbsp;·&nbsp; 9 am – 6 pm IST</p>
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* ======================================================
          OFFICE LOCATIONS + MAP
      ====================================================== */}
      <section className="cp-offices">
        <div className="cp-offices-inner">
          <div className="cp-section-header">
            <span className="cp-eyebrow">Where We Are</span>
            <h2 className="cp-section-title">Our Offices</h2>
          </div>

          {/* Tab switcher */}
          <div className="cp-office-tabs" role="tablist">
            {OFFICES.map((o, i) => (
              <button
                key={o.city}
                role="tab"
                aria-selected={activeOffice === i}
                className={`cp-office-tab${activeOffice === i ? " cp-office-tab--active" : ""}`}
                onClick={() => setActiveOffice(i)}
              >
                <span className="cp-tab-city">{o.city}</span>
                <span className="cp-tab-tag">{o.tag}</span>
              </button>
            ))}
          </div>

          {/* Map + details */}
          <div className="cp-office-panel">
            {/* Map embed */}
            <div className="cp-map-wrap">
              <iframe
                key={activeOffice}
                src={OFFICES[activeOffice].mapSrc}
                className="cp-map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${OFFICES[activeOffice].city} office map`}
              />
            </div>

            {/* Office info */}
            <div className="cp-office-details">
              <div className="cp-office-tag-badge">{OFFICES[activeOffice].tag}</div>
              <h3 className="cp-office-city">{OFFICES[activeOffice].city}</h3>
              <div className="cp-office-info-list">
                <div className="cp-office-info-item">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ color: "var(--color-secondary)", flexShrink: 0, marginTop: 2 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                  <p className="cp-office-info-text">{OFFICES[activeOffice].address}</p>
                </div>
                <a href={`tel:${OFFICES[activeOffice].phone}`} className="cp-office-info-item cp-office-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ color: "var(--color-secondary)", flexShrink: 0 }}>
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                  <span>{OFFICES[activeOffice].phone}</span>
                </a>
                <a href={`mailto:${OFFICES[activeOffice].email}`} className="cp-office-info-item cp-office-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ color: "var(--color-secondary)", flexShrink: 0 }}>
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>{OFFICES[activeOffice].email}</span>
                </a>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(OFFICES[activeOffice].address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-directions-btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;