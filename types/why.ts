export interface WhyCard {
  icon: string;
  stat: string;
  statSuffix: string;
  title: string;
  description: string;
  points: string[];
  accent: string;
}

export interface OEMClient {
  name: string;
  initials: string;
  industry: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  result: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  icon: string;
  industry: string;
  client: string;
  challenge: string;
  result: string;
  metrics: Metric[];
}

export interface ComparisonRow {
  feature: string;
  kprt: boolean;
  others: boolean | string;
}
