"use client";

import { useEffect, useRef, useState, ChangeEvent } from "react";
import { Job } from "../types/careers";

interface ApplyModalProps {
  job: Job | null;
  onClose: () => void;
}

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  notice: string;
  coverNote: string;
  fileName: string;
}

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  experience: "1–3 years",
  notice: "30 days",
  coverNote: "",
  fileName: "",
};

export default function ApplyModal({ job, onClose }: ApplyModalProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isOpen = job !== null;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setForm(initialForm);
      setSubmitted(false);
    }
  }, [job, isOpen]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setForm((prev) => ({ ...prev, fileName: file.name }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="apply-modal__overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="apply-modal">
        {/* Header */}
        <div className="apply-modal__header">
          <div>
            <h2 id="modal-title" className="apply-modal__title">
              Apply for Position
            </h2>
            <p className="apply-modal__job-label">
              {job?.title} &middot; {job?.department}
            </p>
          </div>
          <button
            className="apply-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="apply-modal__body">
          {submitted ? (
            <div className="apply-modal__success">
              <div className="apply-modal__success-icon">✅</div>
              <h3>Application Submitted!</h3>
              <p>
                Our HR team will review your profile and reach out within
                5–7 working days.
              </p>
              <button className="apply-modal__done-btn" onClick={onClose}>
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="apply-modal__row">
                <div className="apply-modal__field">
                  <label htmlFor="firstName">
                    First Name <span className="apply-modal__req">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Rahul"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="apply-modal__field">
                  <label htmlFor="lastName">
                    Last Name <span className="apply-modal__req">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Sharma"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="apply-modal__field">
                <label htmlFor="email">
                  Email Address <span className="apply-modal__req">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="rahul@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="apply-modal__row">
                <div className="apply-modal__field">
                  <label htmlFor="phone">
                    Phone <span className="apply-modal__req">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="apply-modal__field">
                  <label htmlFor="location">
                    Current Location <span className="apply-modal__req">*</span>
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="e.g. Pune, Maharashtra"
                    value={form.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="apply-modal__row">
                <div className="apply-modal__field">
                  <label htmlFor="experience">Total Experience</label>
                  <select
                    id="experience"
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                  >
                    <option>Fresher (0–1 yr)</option>
                    <option>1–3 years</option>
                    <option>3–5 years</option>
                    <option>5–8 years</option>
                    <option>8+ years</option>
                  </select>
                </div>
                <div className="apply-modal__field">
                  <label htmlFor="notice">Notice Period</label>
                  <select
                    id="notice"
                    name="notice"
                    value={form.notice}
                    onChange={handleChange}
                  >
                    <option>Immediate</option>
                    <option>15 days</option>
                    <option>30 days</option>
                    <option>60 days</option>
                    <option>90 days</option>
                  </select>
                </div>
              </div>

              <div className="apply-modal__field">
                <label>
                  Upload Resume <span className="apply-modal__req">*</span>
                </label>
                <div
                  className="apply-modal__file-box"
                  onClick={() => fileInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && fileInputRef.current?.click()
                  }
                >
                  <span className="apply-modal__file-icon">📄</span>
                  <p>
                    {form.fileName
                      ? form.fileName
                      : "Click to upload PDF or DOCX (Max 5MB)"}
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    style={{ display: "none" }}
                    onChange={handleFile}
                  />
                </div>
              </div>

              <div className="apply-modal__field">
                <label htmlFor="coverNote">
                  Cover Note{" "}
                  <span className="apply-modal__optional">(optional)</span>
                </label>
                <textarea
                  id="coverNote"
                  name="coverNote"
                  placeholder="Tell us briefly why you'd be a great fit…"
                  value={form.coverNote}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <button type="submit" className="apply-modal__submit">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
