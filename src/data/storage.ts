import { FreeTrialApplication, ContactMessage, Teacher, PricingPlan } from '../types';
import { INITIAL_TEACHERS } from './teachers';
import { INITIAL_PRICING_PLANS } from './pricing';

const STORAGE_KEYS = {
  APPLICATIONS: 'tazyeenul_trial_applications',
  CONTACTS: 'tazyeenul_contact_messages',
  TEACHERS: 'tazyeenul_teachers',
  PRICING: 'tazyeenul_pricing_plans',
};

// Initial sample seed applications so the admin dashboard is immediately testable and functional
const SEED_APPLICATIONS: FreeTrialApplication[] = [
  {
    id: 'TQA-10021',
    studentName: 'Zayd Ali',
    parentName: 'Muhammad Ali',
    email: 'm.ali.uk@example.com',
    whatsapp: '+44 7911 123456',
    country: 'United Kingdom',
    studentAge: '7',
    preferredCourse: 'Noorani Qaida',
    preferredTeacherGender: 'male',
    preferredLanguage: 'English',
    preferredDays: 'Mon, Wed, Fri',
    preferredTime: '17:30 (UK Time)',
    timeZone: 'GMT (UTC+0)',
    message: 'Looking for a patient male teacher who speaks fluent English.',
    createdAt: '2026-11-01 16:45',
    status: 'New',
  },
  {
    id: 'TQA-10022',
    studentName: 'Sarah Khan',
    parentName: 'Rehan Khan',
    email: 'rkhan.dallas@example.com',
    whatsapp: '+1 214 555 0199',
    country: 'United States',
    studentAge: '11',
    preferredCourse: 'Tajweed Course',
    preferredTeacherGender: 'female',
    preferredLanguage: 'English',
    preferredDays: 'Tue, Thu, Sat',
    preferredTime: '18:00 (CST)',
    timeZone: 'CST (UTC-6)',
    message: 'Sarah has finished Qaida and wants to master proper Tajweed rules with a female teacher.',
    createdAt: '2026-11-02 09:20',
    status: 'Contacted',
  },
  {
    id: 'TQA-10023',
    studentName: 'Hamza Farooq',
    email: 'h.farooq@example.com',
    whatsapp: '+971 50 123 4567',
    country: 'United Arab Emirates',
    studentAge: '28',
    preferredCourse: 'Quran Translation',
    preferredTeacherGender: 'no-preference',
    preferredLanguage: 'Urdu',
    preferredDays: 'Weekend (Sat, Sun)',
    preferredTime: '20:30 (GST)',
    timeZone: 'GST (UTC+4)',
    message: 'Working adult seeking weekend classes to understand Quran word-by-word.',
    createdAt: '2026-11-02 11:15',
    status: 'Trial Scheduled',
  }
];

const SEED_CONTACTS: ContactMessage[] = [
  {
    id: 'CNT-901',
    name: 'Sister Yasmeen',
    email: 'yasmeen.b@example.com',
    subject: 'Inquiry regarding Family Plan for 3 children',
    message: 'Assalamu Alaikum, I would like to inquire if you offer custom packages for 3 siblings with flexible weekend timings?',
    createdAt: '2026-11-01 14:10',
    status: 'Unread'
  },
  {
    id: 'CNT-902',
    name: 'Brother Ibrahim',
    email: 'ibrahim.aus@example.com',
    subject: 'Hifz Program timing for Australia timezone',
    message: 'Do you have morning slots available matching Sydney time (AEST) for Quran Memorization?',
    createdAt: '2026-11-02 08:30',
    status: 'Replied'
  }
];

export const getStoredApplications = (): FreeTrialApplication[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(SEED_APPLICATIONS));
      return SEED_APPLICATIONS;
    }
    return JSON.parse(data);
  } catch {
    return SEED_APPLICATIONS;
  }
};

export const saveApplication = (app: Omit<FreeTrialApplication, 'id' | 'createdAt' | 'status'>): FreeTrialApplication => {
  const current = getStoredApplications();
  const idNumber = Math.floor(10000 + Math.random() * 90000);
  const now = new Date();
  const createdAt = `${now.toISOString().split('T')[0]} ${now.toTimeString().split(' ')[0].slice(0, 5)}`;
  
  const newApp: FreeTrialApplication = {
    ...app,
    id: `TQA-${idNumber}`,
    createdAt,
    status: 'New'
  };

  const updated = [newApp, ...current];
  localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(updated));
  return newApp;
};

export const updateApplicationStatus = (id: string, status: FreeTrialApplication['status'], notes?: string): FreeTrialApplication[] => {
  const current = getStoredApplications();
  const updated = current.map(item => item.id === id ? { ...item, status, ...(notes !== undefined ? { notes } : {}) } : item);
  localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(updated));
  return updated;
};

export const deleteApplication = (id: string): FreeTrialApplication[] => {
  const current = getStoredApplications();
  const updated = current.filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(updated));
  return updated;
};

export const getStoredContacts = (): ContactMessage[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CONTACTS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(SEED_CONTACTS));
      return SEED_CONTACTS;
    }
    return JSON.parse(data);
  } catch {
    return SEED_CONTACTS;
  }
};

export const saveContactMessage = (msg: { name: string; email: string; subject: string; message: string }): ContactMessage => {
  const current = getStoredContacts();
  const now = new Date();
  const createdAt = `${now.toISOString().split('T')[0]} ${now.toTimeString().split(' ')[0].slice(0, 5)}`;
  const newMsg: ContactMessage = {
    id: `CNT-${Math.floor(100 + Math.random() * 900)}`,
    ...msg,
    createdAt,
    status: 'Unread'
  };
  const updated = [newMsg, ...current];
  localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(updated));
  return newMsg;
};

export const updateContactStatus = (id: string, status: 'Unread' | 'Replied'): ContactMessage[] => {
  const current = getStoredContacts();
  const updated = current.map(item => item.id === id ? { ...item, status } : item);
  localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(updated));
  return updated;
};

export const getStoredTeachers = (): Teacher[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.TEACHERS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.TEACHERS, JSON.stringify(INITIAL_TEACHERS));
      return INITIAL_TEACHERS;
    }
    return JSON.parse(data);
  } catch {
    return INITIAL_TEACHERS;
  }
};

export const updateTeacher = (updatedTeacher: Teacher): Teacher[] => {
  const current = getStoredTeachers();
  const updated = current.map(t => t.id === updatedTeacher.id ? updatedTeacher : t);
  localStorage.setItem(STORAGE_KEYS.TEACHERS, JSON.stringify(updated));
  return updated;
};

export const addTeacher = (newTeacher: Omit<Teacher, 'id'>): Teacher[] => {
  const current = getStoredTeachers();
  const teacherWithId: Teacher = {
    ...newTeacher,
    id: `t-${Date.now()}`
  };
  const updated = [teacherWithId, ...current];
  localStorage.setItem(STORAGE_KEYS.TEACHERS, JSON.stringify(updated));
  return updated;
};

export const getStoredPricing = (): PricingPlan[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PRICING);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.PRICING, JSON.stringify(INITIAL_PRICING_PLANS));
      return INITIAL_PRICING_PLANS;
    }
    return JSON.parse(data);
  } catch {
    return INITIAL_PRICING_PLANS;
  }
};

export const updatePricingPlan = (updatedPlan: PricingPlan): PricingPlan[] => {
  const current = getStoredPricing();
  const updated = current.map(p => p.id === updatedPlan.id ? updatedPlan : p);
  localStorage.setItem(STORAGE_KEYS.PRICING, JSON.stringify(updated));
  return updated;
};

export const resetAllDemoData = () => {
  localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(SEED_APPLICATIONS));
  localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(SEED_CONTACTS));
  localStorage.setItem(STORAGE_KEYS.TEACHERS, JSON.stringify(INITIAL_TEACHERS));
  localStorage.setItem(STORAGE_KEYS.PRICING, JSON.stringify(INITIAL_PRICING_PLANS));
};
