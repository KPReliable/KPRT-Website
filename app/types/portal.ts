export interface StatCard {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: string;
  suffix?: string;
}

export interface InspectionReport {
  id: string;
  title: string;
  supplier: string;
  date: string;
  inspector: string;
  status: InspectionStatus;
  reportStatus: ReportStatus;
  ppm: number | null;
  defects: number;
  total: number;
  type: string;
}

export interface QualityAlert {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  title: string;
  supplier: string;
  date: string;
  description: string;
}

export interface Certificate {
  id: string;
  name: string;
  supplier: string;
  issuedDate: string;
  expiryDate: string;
  status: 'valid' | 'expiring' | 'expired';
}

export type InspectionStatus = 'completed' | 'in-progress' | 'scheduled' | 'pending';

export type ReportStatus = 'available' | 'processing' | 'pending';

export type AlertSeverity = "critical" | "warning" | "info";