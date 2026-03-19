export interface CaseStudy {
  id: string;
  client: string;
  challenge: string;
  result: string;
  metric: string;
  metricLabel: string;
}

export interface Industry {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  caseStudy: CaseStudy;
  href: string;
  accent: string; // tailwind-like hex for card accent
}