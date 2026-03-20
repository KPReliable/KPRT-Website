import {
  InspectionReport,
  QualityAlert,
  StatCard,
  Certificate,
} from "@/types/portal";

export const portalStats: StatCard[] = [
  {
    label: "Total Inspections",
    value: "128",
    trend: "+12 this month",
    trendUp: true,
    icon: "fa-search",
  },
  {
    label: "Reports Available",
    value: "114",
    trend: "6 processing",
    trendUp: true,
    icon: "fa-file-alt",
  },
  {
    label: "Current PPM",
    value: "18",
    suffix: "ppm",
    trend: "↓ from 34 last month",
    trendUp: true,
    icon: "fa-bullseye",
  },
  {
    label: "Open Alerts",
    value: "3",
    trend: "2 critical",
    trendUp: false,
    icon: "fa-bell",
  },
];

export const inspectionReports: InspectionReport[] = [
  {
    id: "RPT-2024-0128",
    title: "Pre-Dispatch Inspection",
    supplier: "Amtek Auto Ltd.",
    date: "18 Mar 2025",
    inspector: "Rajesh Kumar",
    status: "completed",
    reportStatus: "available",
    ppm: 0,
    defects: 0,
    total: 250,
    type: "PDI",
  },
  {
    id: "RPT-2024-0127",
    title: "In-Process Quality Inspection",
    supplier: "RICO Auto Industries",
    date: "16 Mar 2025",
    inspector: "Anil Sharma",
    status: "completed",
    reportStatus: "available",
    ppm: 24,
    defects: 3,
    total: 125,
    type: "IPQI",
  },
  {
    id: "RPT-2024-0126",
    title: "Supplier Quality Inspection",
    supplier: "Dantal Hydraulics",
    date: "15 Mar 2025",
    inspector: "Priya Singh",
    status: "in-progress",
    reportStatus: "processing",
    ppm: null,
    defects: 0,
    total: 200,
    type: "SQI",
  },
  {
    id: "RPT-2024-0125",
    title: "Process Audit",
    supplier: "Polyplastics India",
    date: "14 Mar 2025",
    inspector: "Vikram Joshi",
    status: "completed",
    reportStatus: "available",
    ppm: 12,
    defects: 1,
    total: 80,
    type: "AUDIT",
  },
  {
    id: "RPT-2024-0124",
    title: "Pre-Dispatch Inspection",
    supplier: "Global Automotive",
    date: "20 Mar 2025",
    inspector: "TBD",
    status: "scheduled",
    reportStatus: "pending",
    ppm: null,
    defects: 0,
    total: 0,
    type: "PDI",
  },
];

export const qualityAlerts: QualityAlert[] = [
  {
    id: "ALT-001",
    severity: "critical",
    title: "High Rejection Rate Detected",
    supplier: "RICO Auto Industries",
    date: "16 Mar 2025",
    description:
      "Rejection rate exceeded 2% threshold during in-process inspection. Immediate corrective action required.",
  },
  {
    id: "ALT-002",
    severity: "warning",
    title: "Dimensional Non-Conformance",
    supplier: "Dantal Hydraulics",
    date: "15 Mar 2025",
    description:
      "3 out of 20 samples failed dimensional check on bore diameter. Supplier notified.",
  },
  {
    id: "ALT-003",
    severity: "info",
    title: "Audit Scheduled",
    supplier: "Polyplastics India",
    date: "22 Mar 2025",
    description:
      "Annual process audit scheduled. Please ensure documentation is ready prior to visit.",
  },
];

export const certificates: Certificate[] = [
  {
    id: "CERT-001",
    name: "Inspection Certificate",
    supplier: "Amtek Auto Ltd.",
    issuedDate: "18 Mar 2025",
    expiryDate: "18 Mar 2026",
    status: "valid",
  },
  {
    id: "CERT-002",
    name: "Quality Compliance Certificate",
    supplier: "RICO Auto Industries",
    issuedDate: "01 Jan 2025",
    expiryDate: "01 Apr 2025",
    status: "expiring",
  },
  {
    id: "CERT-003",
    name: "Supplier Audit Certificate",
    supplier: "Polyplastics India",
    issuedDate: "14 Mar 2025",
    expiryDate: "14 Mar 2026",
    status: "valid",
  },
];
