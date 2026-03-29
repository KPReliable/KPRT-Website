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
  icon: string;        // FontAwesome class
  title: string;
  subtitle: string;
  description: string;
}

// 🔷 Core Values
export interface ValueItem {
  icon: string;        // FontAwesome class
  title: string;
  description: string;
}