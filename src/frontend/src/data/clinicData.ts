import type {
  ClinicInfo,
  DoctorInfo,
  GalleryImage,
  Service,
  Testimonial,
} from "../types";

export const CLINIC: ClinicInfo = {
  name: "Dent Care",
  tagline: "Your Smile, Our Passion — Expert Dental Care You Can Trust",
  address: "303, Apex Complex, Maninagar, Ahmedabad - 380022",
  phone: "989800000",
  whatsapp: "919898000000",
  email: "dentcare@info.com",
  timings: [
    { day: "Monday – Friday", hours: "9:00 AM – 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 2:00 PM" },
  ],
};

export const DOCTOR: DoctorInfo = {
  name: "Dr. Akash Solanki",
  title: "BDS, MDS — Prosthodontics & Implantology",
  experience: "10+ Years",
  qualifications: [
    "BDS — Bachelor of Dental Surgery",
    "MDS — Master of Dental Surgery (Prosthodontics & Implantology)",
    "Member, Indian Dental Association (IDA)",
    "Certified in Advanced Implant Surgery",
  ],
  specializations: [
    "Dental Implants",
    "Full Mouth Rehabilitation",
    "Root Canal Treatment",
    "Orthodontics & Aligners",
    "Cosmetic Dentistry",
  ],
  achievements: [
    "Best Dentist Award — IDA Gujarat Chapter 2022",
    "Over 2,000 successful implant procedures",
    "500+ smile makeovers completed",
    "Regular speaker at national dental conferences",
  ],
  bio: "Dr. Akash Solanki founded Dent Care with a singular vision: to provide world-class dental care in a warm, patient-first environment. With over 10 years of clinical experience and advanced training in prosthodontics and implantology, he brings both technical excellence and genuine compassion to every patient interaction. His philosophy is simple — every patient deserves a healthy, confident smile.",
};

export const SERVICES: Service[] = [
  {
    id: "teeth-cleaning",
    icon: "🦷",
    title: "Teeth Cleaning",
    description:
      "Professional scaling and polishing to remove plaque and tartar, leaving your teeth sparkling clean and healthy.",
    benefits: [
      "Prevents gum disease and cavities",
      "Removes stubborn stains",
      "Fresh breath and healthier gums",
      "Early detection of dental issues",
    ],
  },
  {
    id: "rct",
    icon: "🔬",
    title: "Root Canal Treatment",
    description:
      "Pain-free RCT using latest rotary instruments and digital X-rays. Save your natural tooth without discomfort.",
    benefits: [
      "Relieves severe toothache",
      "Saves natural tooth structure",
      "Single-sitting procedures available",
      "Long-lasting results with crown",
    ],
  },
  {
    id: "extraction",
    icon: "⚕️",
    title: "Tooth Extraction",
    description:
      "Safe, gentle tooth removal with minimal discomfort — from simple extractions to complex surgical procedures.",
    benefits: [
      "Painless with proper anesthesia",
      "Prevents spread of infection",
      "Quick healing with expert care",
      "Same-day emergency extractions",
    ],
  },
  {
    id: "braces",
    icon: "😁",
    title: "Braces & Aligners",
    description:
      "Traditional metal braces and modern clear aligners to straighten your teeth and perfect your bite.",
    benefits: [
      "Corrects crooked and crowded teeth",
      "Transparent aligner options",
      "Improves bite and jaw alignment",
      "Boosts confidence with straighter smile",
    ],
  },
  {
    id: "whitening",
    icon: "✨",
    title: "Teeth Whitening",
    description:
      "In-office professional whitening treatment that brightens your smile by several shades in a single session.",
    benefits: [
      "Results visible in 1 session",
      "Safe bleaching agents used",
      "Long-lasting whiteness",
      "Customized home kits available",
    ],
  },
  {
    id: "implants",
    icon: "🦾",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements that integrate with your jawbone for a lifetime of confident smiling.",
    benefits: [
      "Looks and feels like natural teeth",
      "Prevents bone loss",
      "No removal needed — permanent solution",
      "Success rate of 98%+",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    rating: 5,
    review:
      "Dr. Akash is absolutely wonderful! I had been scared of dentists for years, but his calm demeanor and gentle touch made me completely at ease. My RCT was painless — I couldn't believe it!",
    initials: "PS",
  },
  {
    id: "2",
    name: "Rajesh Patel",
    rating: 5,
    review:
      "Got dental implants done here after losing a tooth in an accident. The result is indistinguishable from my natural teeth. The entire team is professional, caring, and the clinic is spotlessly clean.",
    initials: "RP",
  },
  {
    id: "3",
    name: "Meera Joshi",
    rating: 5,
    review:
      "My daughter had her braces put on at Dent Care and couldn't be happier. Dr. Solanki takes extra time to explain every step. Highly recommend this clinic to families!",
    initials: "MJ",
  },
  {
    id: "4",
    name: "Amit Desai",
    rating: 5,
    review:
      "Came in for teeth whitening before my wedding — the results exceeded my expectations. My smile looked amazing in all the wedding photos. Thank you, Dr. Akash and team!",
    initials: "AD",
  },
  {
    id: "5",
    name: "Sunita Mehta",
    rating: 5,
    review:
      "I've been a patient here for 3 years. Regular cleanings and check-ups have kept my teeth in excellent shape. The staff remembers your name and makes you feel valued every visit.",
    initials: "SM",
  },
  {
    id: "6",
    name: "Karan Trivedi",
    rating: 5,
    review:
      "Emergency tooth extraction at 8 PM and they accommodated me without any fuss. The clinic is equipped with modern technology and Dr. Solanki's expertise is evident in every procedure.",
    initials: "KT",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src: "/assets/generated/clinic-interior.dim_800x600.jpg",
    alt: "Modern Dent Care clinic interior",
    category: "Clinic",
  },
  {
    id: "2",
    src: "/assets/generated/doctor-hero.dim_1200x700.jpg",
    alt: "Dr. Akash Solanki with patient",
    category: "Team",
  },
  {
    id: "3",
    src: "/assets/generated/dental-treatment.dim_800x600.jpg",
    alt: "Dental treatment in progress",
    category: "Treatment",
  },
  {
    id: "4",
    src: "/assets/generated/healthy-smile.dim_800x600.jpg",
    alt: "Beautiful healthy smile result",
    category: "Results",
  },
  {
    id: "5",
    src: "/assets/generated/dental-equipment.dim_800x600.jpg",
    alt: "Advanced dental equipment",
    category: "Equipment",
  },
  {
    id: "6",
    src: "/assets/generated/doctor-portrait.dim_600x700.jpg",
    alt: "Dr. Akash Solanki portrait",
    category: "Team",
  },
];
