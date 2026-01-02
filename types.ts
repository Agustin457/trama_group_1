export interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  category: string;
  image: string;
  status: 'En Venta' | 'Finalizado' | 'En Construcción';
  amenities: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}
