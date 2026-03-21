import {
  LeadershipMember,
  CertificationItem,
  ValueItem,
  MilestoneItem,
  StatItem,
} from "@/app/types/about";

export const aboutStats: StatItem[] = [
  { value: "17", suffix: "+", label: "Years of Experience" },
  { value: "650", suffix: "+", label: "Trained Resources" },
  { value: "500", suffix: "+", label: "Clients Served" },
  { value: "0", suffix: "%", label: "Conflict of Interest" },
];

export const milestones: MilestoneItem[] = [
  {
    year: "2008",
    title: "Founded as Reliable AES",
    description:
      "Established in Haryana with a focused mission to deliver unbiased third-party inspection services across the automotive supply chain.",
  },
  {
    year: "2012",
    title: "Pan-India Expansion",
    description:
      "Expanded operations to Gujarat and South India, deploying regional COO zones to serve clients across multiple manufacturing hubs.",
  },
  {
    year: "2015",
    title: "OEM Recognition",
    description:
      "Achieved preferred vendor status with major OEMs including Maruti Suzuki, Tata Motors, and Bosch — validating our zero conflict-of-interest model.",
  },
  {
    year: "2017",
    title: "Rebranded to KPRT",
    description:
      "Rebranded as KP Reliable Technique India Pvt. Ltd. (KPRT), reflecting a broader scope of services including audits, supplier development, and training.",
  },
  {
    year: "2020",
    title: "650+ Resource Network",
    description:
      "Built a pan-India inspector network of 650+ trained and line-qualified resources, enabling rapid activation and same-day deployment.",
  },
  {
    year: "2024",
    title: "ISO Certified Operations",
    description:
      "Achieved full ISO 9001:2015 compliance across all service verticals, reinforcing our commitment to structured, traceable quality assurance.",
  },
];

export const leadershipTeam: LeadershipMember[] = [
  {
    initials: "KP",
    name: "K.P. Sharma",
    title: "Managing Director & Founder",
    bio: "With over 25 years in quality assurance and supply chain management, KP founded Reliable AES in 2008 with a vision to bring truly independent inspection services to Indian manufacturing. His leadership has driven KPRT's growth into a trusted partner for OEMs across India.",
    zone: "Pan-India",
  },
  {
    initials: "RS",
    name: "Rajiv Sinha",
    title: "General Manager — Operations",
    bio: "Rajiv oversees day-to-day inspection operations across North and Central India. With 18+ years in automotive quality, he specializes in supplier development, APQP, and large-scale inspection deployment for Tier-1 and Tier-2 suppliers.",
    zone: "North & Central India",
  },
  {
    initials: "AM",
    name: "Anand Mehta",
    title: "COO — West India",
    bio: "Anand leads KPRT's Gujarat and Maharashtra operations, managing a network of 200+ inspectors. He brings deep expertise in casting, fabrication, and heavy machinery inspection with clients including JCB, L&T, and Escorts.",
    zone: "West India",
  },
  {
    initials: "PS",
    name: "Priya Suresh",
    title: "COO — South India",
    bio: "Priya heads the South India division with a focus on electronics and consumer goods inspection. She has 15+ years of experience working with Bosch, Honeywell, and Kaynes, driving quality improvement programs across the region.",
    zone: "South India",
  },
];

export const certifications: CertificationItem[] = [
  {
    icon: "fa-certificate",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description:
      "Our operations are fully compliant with ISO 9001:2015, ensuring structured, documented, and traceable quality processes across all service verticals.",
  },
  {
    icon: "fa-industry",
    title: "IATF 16949",
    subtitle: "Automotive Quality Standard",
    description:
      "We follow IATF 16949 guidelines for all automotive inspection activities, aligning with global OEM requirements for supplier quality management.",
  },
  {
    icon: "fa-shield-alt",
    title: "ASQ Aligned",
    subtitle: "American Society for Quality",
    description:
      "Our inspection methodologies and training programs are aligned with ASQ standards, ensuring best-in-class quality assurance practices.",
  },
  {
    icon: "fa-check-double",
    title: "VDA 6.3",
    subtitle: "Process Audit Standard",
    description:
      "KPRT auditors are trained in VDA 6.3 process audits, widely used by German OEMs and Tier-1 suppliers for comprehensive supplier evaluation.",
  },
];

export const coreValues: ValueItem[] = [
  {
    icon: "fa-balance-scale",
    title: "Independence",
    description:
      "We have zero financial or operational ties to manufacturers or suppliers — ensuring every report is 100% unbiased and trustworthy.",
  },
  {
    icon: "fa-eye",
    title: "Transparency",
    description:
      "Every inspection is backed by photographic evidence, documented findings, and clear corrective action recommendations.",
  },
  {
    icon: "fa-bolt",
    title: "Reliability",
    description:
      "650+ trained inspectors deployed rapidly across India — our clients count on us to be there when and where it matters most.",
  },
  {
    icon: "fa-chart-line",
    title: "Continuous Improvement",
    description:
      "We don't just report defects — we partner with clients and suppliers to drive systemic quality improvements over time.",
  },
  {
    icon: "fa-users",
    title: "People First",
    description:
      "Our inspector network is our greatest asset. We invest heavily in training, certification, and career growth for every team member.",
  },
  {
    icon: "fa-handshake",
    title: "Long-term Partnership",
    description:
      "We build lasting relationships with clients — acting as an extension of their quality team, not just a one-time vendor.",
  },
];
