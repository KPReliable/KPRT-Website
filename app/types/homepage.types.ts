export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface Client {
  id: string;
  name: string;
  logo?: string;
}

export interface Certification {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}