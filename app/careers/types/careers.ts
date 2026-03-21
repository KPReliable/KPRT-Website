export interface Job {
  id: string;
  title: string;
  department: string;
  departmentKey: string;
  location: string;
  experience: string;
  qualification: string;
  type: string;
  mode: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  initials: string;
  quote: string;
  name: string;
  role: string;
  tenure: string;
}

export interface Stat {
  value: string;
  suffix: string;
  label: string;
}

export interface DepartmentFilter {
  key: string;
  label: string;
}
