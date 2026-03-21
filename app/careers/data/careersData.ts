import { Job, Value, Testimonial, Stat, DepartmentFilter } from "../types/careers";

export const stats: Stat[] = [
  { value: "15", suffix: "+", label: "Years of Excellence" },
  { value: "500", suffix: "+", label: "Clients Served" },
  { value: "20", suffix: "+", label: "Industries Covered" },
  { value: "Pan", suffix: "-India", label: "Presence" },
];

export const departmentFilters: DepartmentFilter[] = [
  { key: "all", label: "All Departments" },
  { key: "quality", label: "Quality Engineering" },
  { key: "audit", label: "Audit & Compliance" },
  { key: "training", label: "Training" },
  { key: "operations", label: "Operations" },
  { key: "sales", label: "Sales & BD" },
];

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Quality Inspector – Automotive",
    department: "Quality Engineering",
    departmentKey: "quality",
    location: "Pune",
    experience: "3–6 yrs",
    qualification: "B.E. / Diploma",
    type: "Full-time",
    mode: "On-site",
  },
  {
    id: "2",
    title: "PDI Engineer – Consumer Electronics",
    department: "Quality Engineering",
    departmentKey: "quality",
    location: "Bengaluru",
    experience: "1–3 yrs",
    qualification: "B.E. / B.Tech",
    type: "Full-time",
    mode: "On-site",
  },
  {
    id: "3",
    title: "Lead Auditor – ISO 9001 / IATF 16949",
    department: "Audit & Compliance",
    departmentKey: "audit",
    location: "Delhi NCR",
    experience: "5+ yrs",
    qualification: "Any Graduate",
    type: "Full-time",
    mode: "Hybrid",
  },
  {
    id: "4",
    title: "Supplier Quality Auditor",
    department: "Audit & Compliance",
    departmentKey: "audit",
    location: "Chennai",
    experience: "2–4 yrs",
    qualification: "B.E. / MBA",
    type: "Full-time",
    mode: "On-site",
  },
  {
    id: "5",
    title: "Quality Training Specialist",
    department: "Training",
    departmentKey: "training",
    location: "Mumbai",
    experience: "3–5 yrs",
    qualification: "Any Graduate",
    type: "Full-time",
    mode: "Hybrid",
  },
  {
    id: "6",
    title: "Regional Operations Manager",
    department: "Operations",
    departmentKey: "operations",
    location: "Hyderabad",
    experience: "7+ yrs",
    qualification: "B.E. / MBA",
    type: "Full-time",
    mode: "On-site",
  },
  {
    id: "7",
    title: "Business Development Executive",
    department: "Sales & BD",
    departmentKey: "sales",
    location: "Pan-India",
    experience: "2–4 yrs",
    qualification: "Any Graduate",
    type: "Full-time",
    mode: "Remote",
  },
  {
    id: "8",
    title: "Incoming Quality Control Inspector",
    department: "Quality Engineering",
    departmentKey: "quality",
    location: "Jaipur",
    experience: "1–2 yrs",
    qualification: "Diploma / B.E.",
    type: "Full-time",
    mode: "On-site",
  },
];

export const values: Value[] = [
  {
    icon: "🎯",
    title: "Meaningful Work",
    description:
      "Your work directly impacts product safety and quality for millions of end users across India and beyond.",
  },
  {
    icon: "📈",
    title: "Growth & Learning",
    description:
      "Structured training programs, certifications, and mentorship pathways to help you grow at every stage.",
  },
  {
    icon: "🌍",
    title: "Pan-India Exposure",
    description:
      "Work across different states, industries, and client environments — no two days are the same.",
  },
  {
    icon: "🤝",
    title: "Collaborative Culture",
    description:
      "A flat hierarchy where your ideas are heard, respected, and often implemented at the ground level.",
  },
  {
    icon: "🏅",
    title: "Recognition & Rewards",
    description:
      "Performance-linked incentives, annual awards, and a culture that celebrates individual and team wins.",
  },
  {
    icon: "⚖️",
    title: "Work-Life Balance",
    description:
      "Flexible schedules, remote-friendly roles, and leave policies designed to respect your personal time.",
  },
];

export const testimonials: Testimonial[] = [
  {
    initials: "RK",
    quote:
      "Joining here was the best career decision I made. Within two years I went from inspector to team lead. The growth is real and the support is genuine.",
    name: "Rajesh Kumar",
    role: "Team Lead – Quality",
    tenure: "Pune · 4 years",
  },
  {
    initials: "PS",
    quote:
      "I've worked across three cities and different industries — all within this one company. The cross-sector exposure simply can't be found elsewhere.",
    name: "Priya Sharma",
    role: "Sr. Auditor – Compliance",
    tenure: "Chennai · 6 years",
  },
  {
    initials: "AM",
    quote:
      "The training programs here are world-class. My ISO Lead Auditor certification was fully sponsored within my first year. That says everything about how they invest in people.",
    name: "Arjun Mehta",
    role: "Training Specialist",
    tenure: "Delhi NCR · 3 years",
  },
];
