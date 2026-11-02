export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  course: string;
  quote: string;
  samplePlaceholderNote: string;
}

export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sister Maryam & Son (Zayd, 7 yrs)',
    role: 'Parent of Noorani Qaida Student',
    location: 'London, United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    course: 'Noorani Qaida & Daily Duas',
    quote: 'My son Zayd was struggling with Arabic letters at our local weekend madrasah. Since joining Tazyeenul Quran Academy with Ustadha Fatima, his pronunciation has improved remarkably in just 2 months. She is incredibly patient and kind with young children.',
    samplePlaceholderNote: 'Sample Parent Review Placeholder'
  },
  {
    id: 'test-2',
    name: 'Brother Omar Farooq',
    role: 'Adult Tajweed Student',
    location: 'Dallas, Texas, USA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    course: 'Tajweed Rules & Tartil',
    quote: 'As a working professional in the US, finding flexible 8:00 PM class timings that fit my schedule was a blessing. Qari Muhammad Abdullah corrected my Makharij and taught me the rules of Waqf and Ghunnah with meticulous detail. Highly recommended!',
    samplePlaceholderNote: 'Sample Student Review Placeholder'
  },
  {
    id: 'test-3',
    name: 'Dr. Tariq & Family',
    role: 'Parent of 2 Siblings',
    location: 'Toronto, Canada',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    course: 'Family Plan (Nazra & Hifz)',
    quote: 'Both my daughter (9) and son (12) are enrolled in the Family Plan. The academy coordinator provides monthly progress reports and adjusts class timings whenever exams come up. Very professional and reliable Islamic academy.',
    samplePlaceholderNote: 'Sample Parent Review Placeholder'
  },
  {
    id: 'test-4',
    name: 'Sister Khadija Al-Hashmi',
    role: 'Adult Quran Translation Student',
    location: 'Dubai, UAE',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    course: 'Quran Translation & Tafseer',
    quote: 'Understanding the Quran in its depth has completely transformed my daily prayers. The lessons on root words and the context behind each Surah are intellectually stimulating and spiritually uplifting.',
    samplePlaceholderNote: 'Sample Student Review Placeholder'
  },
  {
    id: 'test-5',
    name: 'Brother Bilal Ahmed',
    role: 'Father of Hifz Student',
    location: 'Sydney, Australia',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    course: 'Quran Memorization (Hifz)',
    quote: 'Hafiz Usman Ghani has a brilliant systematic method for daily Sabaq and Manzil revision. My son has already memorized 5 Juz with strong retention and beautiful Tajweed.',
    samplePlaceholderNote: 'Sample Parent Review Placeholder'
  }
];
