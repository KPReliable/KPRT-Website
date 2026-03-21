// 🔷 Stats
export interface StatItem {
  value: string;
  suffix?: string;
  label: string;
}

// 🔷 Milestones (Timeline)
export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

// 🔷 Leadership Team
export interface LeadershipMember {
  initials: string;
  name: string;
  title: string;
  bio: string;
  zone: string;
}

// 🔷 Certifications
export interface CertificationItem {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

// 🔷 Core Values
export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

// 🔷 Hero Section
export interface AboutHero {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
}

// 🔷 Company Overview
export interface CompanyOverview {
  heading: string;
  description: string;
}

// 🔷 Mission & Vision
export type MissionVisionType = "mission" | "vision";

export interface MissionVisionItem {
  type: MissionVisionType;
  icon: string;
  title: string;
  description: string;
}

// 🔷 Why Choose Us
export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}