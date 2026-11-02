export type PageTab = 
  | 'home' 
  | 'about' 
  | 'courses' 
  | 'teachers' 
  | 'pricing' 
  | 'trial' 
  | 'blog' 
  | 'contact' 
  | 'student-portal' 
  | 'admin';

export interface Course {
  id: string;
  title: string;
  arabicTitle?: string;
  category: 'Foundation' | 'Recitation' | 'Memorization' | 'Islamic Studies' | 'Arabic';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  ageGroup: string;
  duration: string; // e.g., "3 - 6 Months"
  classesPerWeek: string; // e.g., "3 to 5 Days"
  shortDesc: string;
  fullDesc: string;
  learningOutcomes: string[];
  prerequisites: string;
  image: string;
  popular?: boolean;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  gender: 'male' | 'female';
  image: string;
  qualifications: string[];
  experience: string;
  languages: string[];
  specialization: string[];
  bio: string;
  rating: number;
  studentsCount: number;
  available: boolean;
  sampleBadge?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  daysPerWeek: number;
  classesPerMonth: number;
  classDurationMinutes: number;
  prices: {
    USD: number;
    GBP: number;
    EUR: number;
    PKR: number;
    SAR: number;
  };
  features: string[];
  isFamilyPlan?: boolean;
}

export interface FreeTrialApplication {
  id: string;
  studentName: string;
  parentName?: string;
  email: string;
  whatsapp: string;
  country: string;
  studentAge: string;
  preferredCourse: string;
  preferredTeacherGender: 'male' | 'female' | 'no-preference';
  preferredLanguage: string;
  preferredDays: string;
  preferredTime: string;
  timeZone: string;
  message?: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Trial Scheduled' | 'Enrolled' | 'Archived';
  notes?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  arabicExcerpt?: string;
  slug: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  image: string;
  summary: string;
  content: string[];
  tags: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'Unread' | 'Replied';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'classes' | 'teachers' | 'fees';
}
