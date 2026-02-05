
export interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Goal {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface FormData {
  name: string;
  email: string;
  service: string;
  address: string;
  message: string;
}
