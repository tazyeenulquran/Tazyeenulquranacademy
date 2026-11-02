import { PricingPlan } from '../types';

export const INITIAL_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic-plan',
    name: 'Basic Plan',
    tagline: 'Ideal for busy students or light supplementary Quran practice',
    daysPerWeek: 2,
    classesPerMonth: 8,
    classDurationMinutes: 30,
    prices: {
      USD: 35,
      GBP: 28,
      EUR: 32,
      PKR: 6500,
      SAR: 130,
    },
    features: [
      '2 Days / Week (8 live classes/month)',
      '30 Minutes One-on-One Session',
      'Choice of Male or Female Teacher',
      'Flexible Scheduling (Rescheduling Allowed)',
      'Monthly Progress Report',
      'Free Learning Materials & Digital Books',
      'Zoom / Google Meet HD Live Classes'
    ]
  },
  {
    id: 'standard-plan',
    name: 'Standard Plan',
    tagline: 'Most recommended plan for steady and consistent progress',
    popular: true,
    daysPerWeek: 3,
    classesPerMonth: 12,
    classDurationMinutes: 30,
    prices: {
      USD: 50,
      GBP: 40,
      EUR: 46,
      PKR: 9000,
      SAR: 190,
    },
    features: [
      '3 Days / Week (12 live classes/month)',
      '30 Minutes One-on-One Session',
      'Choice of Male or Female Teacher',
      'Priority Rescheduling Support',
      'Bi-Weekly Parent-Teacher Meeting',
      'Tajweed Audio Feedback Recordings',
      'Full Access to Student Portal',
      'Certificate upon Level Completion'
    ]
  },
  {
    id: 'premium-plan',
    name: 'Premium Plan',
    tagline: 'Accelerated learning for Hifz, Tajweed mastery, or fast Nazra',
    daysPerWeek: 5,
    classesPerMonth: 20,
    classDurationMinutes: 30,
    prices: {
      USD: 80,
      GBP: 65,
      EUR: 75,
      PKR: 14500,
      SAR: 300,
    },
    features: [
      '5 Days / Week (20 live classes/month)',
      '30 Minutes One-on-One Session',
      'Senior Certified Scholar / Hafiz Tutor',
      'Unlimited Rescheduling Flexibility',
      'Dedicated Academic Supervisor',
      'Personalized Manzil Revision Tracker',
      'Complimentary Islamic Studies & Duas Modules',
      'Official Academy Ijazah / Completion Certificate'
    ]
  },
  {
    id: 'family-plan',
    name: 'Family Plan',
    tagline: 'Multi-student package designed for siblings and parents (2+ learners)',
    isFamilyPlan: true,
    daysPerWeek: 4,
    classesPerMonth: 32, // Combined classes across learners
    classDurationMinutes: 45,
    prices: {
      USD: 125,
      GBP: 99,
      EUR: 115,
      PKR: 22000,
      SAR: 470,
    },
    features: [
      'Multi-Student Package (2 or more siblings / parents)',
      'Up to 32 classes / month shared',
      'Extended 45-Minute Sessions',
      'Dedicated Male & Female Teachers for each member',
      'Consolidated Family Invoicing with 15% discount',
      'Quarterly Family Academic Review',
      'All 12 Course Options Included'
    ]
  }
];

export const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  GBP: '£',
  EUR: '€',
  PKR: 'Rs.',
  SAR: 'SAR '
};
