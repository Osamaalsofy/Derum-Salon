export type Language = 'en' | 'ar';

export interface Service {
  id: string;
  name: { en: string; ar: string };
  category: ServiceCategory;
  price: string;
  duration: string;
  description: { en: string; ar: string };
  image: string;
}

export type ServiceCategory = 'HAIR' | 'NAILS' | 'SKIN' | 'LASHES' | 'BODY' | 'MAKEUP';

export interface Specialist {
  id: string;
  name: string;
  role: { en: string; ar: string };
  experience: string;
  image: string;
  bio: { en: string; ar: string };
  instagram?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: { en: string; ar: string };
  date: string;
}

export interface Appointment {
  id: string;
  serviceId: string;
  specialistId: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}
