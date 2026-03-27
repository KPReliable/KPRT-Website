// import WhyCards from "../components/whyUsPage/WhyCards";
// import TrustedByOEMs from "../components/whyUsPage/TrustedByOEMs";
// import ComparisonTable from "../components/whyUsPage/ComparisonTable";
// import Testimonials from "../components/whyUsPage/Testimonials";
// import CaseStudies from "../components/whyUsPage/CaseStudies";

type WhyCard = {
  icon: string;
  stat: string;
  statSuffix: string;
  title: string;
  description: string;
  points: string[];
  accent: string;
};

type OEMClient = {
  name: string;
  initials: string;
  industry: string;
};

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  result: string;
};

type CaseStudy = {
  icon: string;
  industry: string;
  client: string;
  challenge: string;
  result: string;
  metrics: Array<{ value: string; label: string }>;
};

type ComparisonRow = {
  feature: string;
  kprt: boolean | string;
  others: boolean | string;
};

export const whyCards: WhyCard[] = [
  {
    icon: "fa-balance-scale",
    stat: "100",
    statSuffix: "%",
    title: "Independent & Reliable",
    description:
      "We have zero financial or operational ties to any manufacturer or supplier. Every report we deliver is completely unbiased — always.",
    points: [
      "No conflict of interest — ever",
      "Findings you can act on with full confidence",
      "Separate from client & supplier pressure",
      "Zero compromise on reporting integrity",
    ],
    accent: "primary",
  },
  {
    icon: "fa-bolt",
    stat: "24",
    statSuffix: "hr",
    title: "Rapid Activation",
    description:
      "Our pan-India network of 650+ trained inspectors means we can deploy to your supplier location within hours of a request — not days.",
    points: [
      "Same-day deployment across India",
      "650+ line-qualified inspectors on standby",
      "Haryana, Gujarat, South India & beyond",
      "Emergency inspection activation available",
    ],
    accent: "secondary",
  },
  {
    icon: "fa-rupee-sign",
    stat: "3x",
    statSuffix: "",
    title: "Cost Advantage",
    description:
      "Our inspection cost is consistently lower than your direct and indirect quality losses — scrap, rework, warranty claims, and customer rejections.",
    points: [
      "Cost < your direct quality losses",
      "Prevent field failures & warranty claims",
      "Reduce scrap, rework & recall costs",
      "Measurable ROI on every engagement",
    ],
    accent: "green",
  },
  {
    icon: "fa-bullseye",
    stat: "~0",
    statSuffix: "PPM",
    title: "Zero PPM Approach",
    description:
      "Our systematic inspection methodology is designed to drive near-zero defects at your customer end — protecting your reputation and relationships.",
    points: [
      "Defect detection at source, not customer end",
      "Systematic root cause elimination",
      "Controlled shipment CS-1 & CS-2 protocols",
      "Ongoing PPM trend monitoring",
    ],
    accent: "primary",
  },
  {
    icon: "fa-industry",
    stat: "500",
    statSuffix: "+",
    title: "Trusted by OEMs",
    description:
      "India's leading automotive OEMs and global Tier-1 manufacturers trust KPRT — because independence and reliability are non-negotiable at that level.",
    points: [
      "Maruti Suzuki, Tata Motors, Toyota",
      "BMW, Nissan, Bosch, Honeywell",
      "JCB, L&T, Escorts, Hindalco",
      "Preferred vendor status with major OEMs",
    ],
    accent: "secondary",
  },
  {
    icon: "fa-chart-line",
    stat: "17",
    statSuffix: "yrs",
    title: "Proven Track Record",
    description:
      "Since 2008, KPRT has delivered measurable results for clients across automotive, electronics, heavy machinery, and consumer goods sectors.",
    points: [
      "17+ years of uninterrupted operations",
      "Documented quality improvement results",
      "Client-verified case studies available",
      "Repeat engagement rate above 90%",
    ],
    accent: "green",
  },
];

export const oemClients: OEMClient[] = [
  { name: "Maruti Suzuki", initials: "MS", industry: "Automotive" },
  { name: "Tata Motors", initials: "TM", industry: "Automotive" },
  { name: "Toyota", initials: "TY", industry: "Automotive" },
  { name: "BMW India", initials: "BM", industry: "Automotive" },
  { name: "Nissan", initials: "NS", industry: "Automotive" },
  { name: "Bosch", initials: "BS", industry: "Electronics" },
  { name: "Honeywell", initials: "HW", industry: "Electronics" },
  { name: "JCB", initials: "JC", industry: "Heavy Machinery" },
  { name: "L&T", initials: "LT", industry: "Heavy Machinery" },
  { name: "Escorts", initials: "ES", industry: "Heavy Machinery" },
  { name: "Hindalco", initials: "HD", industry: "Metals" },
  { name: "Kaynes", initials: "KY", industry: "Electronics" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "KPRT's inspectors were on-site within hours of our request. Their unbiased reporting helped us identify a critical supplier issue before it reached our assembly line — saving us weeks of production loss.",
    name: "Rajesh Kumar",
    title: "Head of Supplier Quality",
    company: "Tier-1 Automotive Supplier",
    initials: "RK",
    result: "Prevented 3-week production stoppage",
  },
  {
    quote:
      "We've worked with multiple inspection agencies over the years. KPRT is the only one where we've never had to question the neutrality of a report. That independence is priceless in supplier negotiations.",
    name: "Sunita Mehta",
    title: "VP — Supply Chain Quality",
    company: "Leading Electronics OEM",
    initials: "SM",
    result: "PPM reduced from 1,200 to 45 in 6 months",
  },
  {
    quote:
      "The cost of KPRT's PDI service is a fraction of what a single customer rejection costs us. We've made it mandatory for all critical components. It's the best quality investment we've made.",
    name: "Anil Sharma",
    title: "Quality Director",
    company: "Heavy Machinery Manufacturer",
    initials: "AS",
    result: "Zero customer rejections for 18 months",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    icon: "fa-car",
    industry: "Automotive",
    client: "Tier-1 Supplier to Maruti Suzuki",
    challenge:
      "High rejection rate (2,800 PPM) at customer end for engine components, causing assembly line stoppages and penalty claims.",
    result:
      "KPRT deployed a team of 8 inspectors for in-process and PDI inspection. Root cause identified in machining parameters within 2 weeks. Controlled shipment protocols implemented.",
    metrics: [
      { value: "2800", label: "PPM Before" },
      { value: "38", label: "PPM After" },
      { value: "₹42L", label: "Penalty Costs Saved" },
      { value: "6wks", label: "Resolution Time" },
    ],
  },
  {
    icon: "fa-microchip",
    industry: "Electronics",
    client: "PCB Manufacturer — Bosch Supply Chain",
    challenge:
      "Supplier capability audit required by OEM before new component approval. Internal team lacked VDA 6.3 certified auditors.",
    result:
      "KPRT conducted a comprehensive VDA 6.3 process audit within 48 hours of request. Detailed gap analysis provided with prioritized corrective actions and timeline.",
    metrics: [
      { value: "48hr", label: "Audit Turnaround" },
      { value: "23", label: "Gaps Identified" },
      { value: "100%", label: "CAPA Closure" },
      { value: "Approved", label: "OEM Status" },
    ],
  },
  {
    icon: "fa-industry",
    industry: "Heavy Machinery",
    client: "Casting Supplier — JCB Supply Chain",
    challenge:
      "Dimensional non-conformances in hydraulic castings leading to field failures and costly warranty claims from end customer.",
    result:
      "KPRT implemented stage-wise inspection at critical machining operations. SPC charts established for key dimensions. Monthly capability reviews conducted.",
    metrics: [
      { value: "0", label: "Field Failures" },
      { value: "1.67", label: "Cpk Achieved" },
      { value: "₹18L", label: "Warranty Saved" },
      { value: "12mo", label: "Sustained" },
    ],
  },
];

export const comparisonRows: ComparisonRow[] = [
  { feature: "100% Independent — no supplier ties", kprt: true, others: false },
  { feature: "Pan-India rapid deployment (24hr)", kprt: true, others: false },
  { feature: "650+ trained inspector network", kprt: true, others: false },
  { feature: "ISO 9001 & IATF 16949 aligned", kprt: true, others: "Partial" },
  { feature: "VDA 6.3 certified auditors", kprt: true, others: false },
  { feature: "Same-day inspection reports", kprt: true, others: false },
  { feature: "Zero conflict of interest policy", kprt: true, others: false },
  { feature: "OEM preferred vendor recognition", kprt: true, others: "Some" },
];
