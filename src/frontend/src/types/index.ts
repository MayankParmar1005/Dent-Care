export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  initials: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface DoctorInfo {
  name: string;
  title: string;
  experience: string;
  qualifications: string[];
  specializations: string[];
  achievements: string[];
  bio: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  timings: ClinicTiming[];
}

export interface ClinicTiming {
  day: string;
  hours: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
