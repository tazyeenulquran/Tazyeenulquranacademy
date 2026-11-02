import React, { useState } from 'react';
import { 
  Users, 
  Award, 
  Globe, 
  Star, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Filter,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { Teacher, PageTab } from '../types';

interface TeachersPageProps {
  teachers: Teacher[];
  setActiveTab: (tab: PageTab) => void;
  onBookWithTeacher: (teacherName: string) => void;
}

export const TeachersPage: React.FC<TeachersPageProps> = ({ teachers, setActiveTab, onBookWithTeacher }) => {
  const [genderFilter, setGenderFilter] = useState<'all' | 'male' | 'female'>('all');
  const [languageFilter, setLanguageFilter] = useState<string>('all');

  const filteredTeachers = teachers.filter((t) => {
    const matchesGender = genderFilter === 'all' || t.gender === genderFilter;
    const matchesLanguage = languageFilter === 'all' || t.languages.includes(languageFilter);
    return matchesGender && matchesLanguage;
  });

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary-dark via-primary to-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-pattern opacity-15 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-secondary/80 border border-accent/40 px-4 py-1 rounded-full">
            Sanad & Ijazah Certified Tutors
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white">
            Our Qualified Quran Instructors
          </h1>
          <p className="text-sm sm:text-base text-ivory/90 max-w-2xl mx-auto leading-relaxed">
            Learn from verified male and female Islamic scholars, Huffaz-ul-Quran, and Qaris proficient in English, Urdu, and Arabic.
          </p>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Gender Filters */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-semibold text-charcoal/60 mr-2 flex items-center gap-1">
                <Users className="w-4 h-4 text-accent" />
                Teacher Gender:
              </span>
              <button
                onClick={() => setGenderFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  genderFilter === 'all'
                    ? 'bg-primary text-white shadow'
                    : 'bg-ivory hover:bg-gray-100 text-charcoal/80'
                }`}
              >
                All Teachers
              </button>
              <button
                onClick={() => setGenderFilter('male')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  genderFilter === 'male'
                    ? 'bg-primary text-white shadow'
                    : 'bg-ivory hover:bg-gray-100 text-charcoal/80'
                }`}
              >
                Male Teachers
              </button>
              <button
                onClick={() => setGenderFilter('female')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  genderFilter === 'female'
                    ? 'bg-primary text-white shadow'
                    : 'bg-ivory hover:bg-gray-100 text-charcoal/80'
                }`}
              >
                Female Teachers (Sisters/Kids)
              </button>
            </div>

            {/* Language Filters */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-semibold text-charcoal/60 mr-2 flex items-center gap-1">
                <Globe className="w-4 h-4 text-accent" />
                Language:
              </span>
              {['all', 'English', 'Urdu', 'Arabic'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguageFilter(lang)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
                    languageFilter === lang
                      ? 'bg-accent text-primary-dark font-bold shadow'
                      : 'bg-ivory hover:bg-gray-100 text-charcoal/80'
                  }`}
                >
                  {lang === 'all' ? 'All Languages' : lang}
                </button>
              ))}
            </div>

          </div>

          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-charcoal/50">
            <span>Showing {filteredTeachers.length} verified instructor profiles</span>
            <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              * Editable sample instructor details (Customizable in Admin Panel)
            </span>
          </div>

        </div>
      </section>

      {/* Teachers Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-6 space-y-4">
                
                {/* Header: Photo & Core Info */}
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-accent shadow-sm shrink-0">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-0 inset-x-0 bg-primary/90 text-[10px] text-accent font-bold text-center py-0.5">
                      {teacher.gender === 'male' ? 'Brother' : 'Sister'}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent-dark transition-colors">
                        {teacher.name}
                      </h3>
                    </div>
                    <p className="text-xs text-accent-dark font-semibold">
                      {teacher.title}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{teacher.rating.toFixed(1)}</span>
                      <span className="text-[10px] text-charcoal/40 font-normal">({teacher.studentsCount}+ students taught)</span>
                    </div>
                  </div>
                </div>

                {/* Experience & Languages */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100 text-xs">
                  <span className="bg-ivory text-primary font-medium px-2.5 py-1 rounded-md border border-accent/20">
                    ⏳ {teacher.experience}
                  </span>
                  {teacher.languages.map((l, idx) => (
                    <span key={idx} className="bg-gray-50 text-charcoal/80 px-2 py-0.5 rounded-md border border-gray-200 text-[11px]">
                      🗣️ {l}
                    </span>
                  ))}
                </div>

                {/* Bio */}
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  {teacher.bio}
                </p>

                {/* Qualifications */}
                <div className="space-y-1 pt-1">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
                    Verified Qualifications:
                  </span>
                  {teacher.qualifications.map((q, qIdx) => (
                    <div key={qIdx} className="flex items-center gap-1.5 text-xs text-charcoal/75">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>

                {/* Specializations */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1">
                    Key Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {teacher.specialization.map((spec, sIdx) => (
                      <span key={sIdx} className="text-[10px] bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookWithTeacher(teacher.name)}
                  className="w-full py-3 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold transition-all shadow-sm border border-accent flex items-center justify-center gap-2 group-hover:shadow-gold"
                >
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span>Book Free Trial with {teacher.name.split(' ')[0]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Safety & Modesty Guarantee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-3xl border-2 border-accent/30 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-ivory border-2 border-accent flex items-center justify-center text-primary shrink-0">
            <ShieldCheck className="w-8 h-8 text-accent" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-primary">
              Our Safety & Modesty Commitment for Sisters and Children
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
              We respect your family values. All classes are conducted under strict Islamic decorum. Female students and young girls are paired exclusively with certified female instructors upon preference, ensuring peace of mind for parents worldwide.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
