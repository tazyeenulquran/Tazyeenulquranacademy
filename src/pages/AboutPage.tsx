import React from 'react';
import { 
  Target, 
  Compass, 
  Award, 
  BookOpen, 
  Heart, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PageTab } from '../types';

interface AboutPageProps {
  setActiveTab: (tab: PageTab) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab }) => {
  const educationalObjectives = [
    {
      title: 'Flawless Quran Recitation',
      desc: 'Ensuring every student articulates each Arabic letter from its authentic point of exit (Makhraj) with exact Tajweed rules.'
    },
    {
      title: 'Spiritual Comprehension',
      desc: 'Moving beyond phonetics to cultivate deep understanding of the divine wisdom, translation, and commandments of Allah SWT.'
    },
    {
      title: 'Lifelong Character Building (Akhlaq)',
      desc: 'Nurturing Islamic morals, truthfulness, humility, and filial respect in children and adults in everyday life.'
    },
    {
      title: 'Preserving Sacred Tradition (Sanad)',
      desc: 'Connecting our students to continuous, unbroken chains of transmission tracing back to the Messenger of Allah ﷺ.'
    }
  ];

  const methodologyPillars = [
    {
      step: '01',
      title: 'Individual Diagnostic Assessment',
      desc: 'Every student begins with a comprehensive diagnostic trial where an expert tutor identifies strengths, pronunciation hurdles, and assigns the exact right syllabus level.'
    },
    {
      step: '02',
      title: 'Tailored 1-on-1 Pedagogy',
      desc: 'We discard the traditional one-size-fits-all classroom. Each session is personalized to the student’s retention speed, cognitive style, and personal schedule.'
    },
    {
      step: '03',
      title: 'Interactive Screen Technology',
      desc: 'Using high-definition screen sharing, digital color-coded Mushaf, and pen annotations, visual and audio cues are synchronized for rapid learning.'
    },
    {
      step: '04',
      title: 'Continuous Review & Feedback Loops',
      desc: 'Through regular Manzil checks, daily Sabaq revisions, and transparent monthly reports sent to parents, no progress is left to chance.'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary-dark via-primary to-primary text-white py-16 lg:py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-emerald-pattern opacity-15 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-secondary/80 border border-accent/40 px-4 py-1 rounded-full">
            About Our Academy
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
            Nurturing Hearts with the Light of the Quran
          </h1>

          <p className="text-base sm:text-lg text-ivory/90 leading-relaxed max-w-2xl mx-auto">
            Welcome to <strong>Tazyeenul Quran Academy</strong> — an esteemed online Quranic institution dedicated to making authentic Islamic education accessible, engaging, and transformative for Muslims worldwide.
          </p>
        </div>
      </section>

      {/* Introduction & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-accent/20 px-3.5 py-1 rounded-full">
              Our Journey & Purpose
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary leading-tight">
              An International Sanctuary for Quranic Excellence
            </h2>

            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
              Founded with the noble aspiration of beautifying hearts through the timeless speech of Allah SWT, <strong>Tazyeenul Quran Academy</strong> bridges geographic distances to bring certified, compassionate Islamic scholars directly into your home.
            </p>

            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
              Whether you are a parent seeking gentle, engaging Noorani Qaida lessons for your 5-year-old in London, an ambitious university student memorizing the Quran in Dallas, or a busy professional yearning to understand Quranic translation in Sydney, our academy provides an encouraging sanctuary tailored specifically to you.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('trial')}
                className="px-6 py-3 rounded-full bg-primary hover:bg-primary-light text-white font-semibold text-sm shadow-md hover:shadow-gold transition-all inline-flex items-center gap-2 border border-accent"
              >
                <span>Experience a Free Trial Session</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-accent/40 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=800&q=80" 
                alt="Muslim student reciting Quran peacefully" 
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-secondary-dark/90 backdrop-blur-md border border-accent/30 text-xs text-white">
                <span className="text-accent font-serif font-bold block text-sm mb-1">
                  "تَزْيِينُ الْقُرْآنِ بِأَصْوَاتِكُمْ"
                </span>
                <p className="italic text-ivory/80">
                  "Beautify the Quran with your voices." — Sunan Abi Dawud
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Statements */}
      <section className="bg-ivory/70 py-16 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-accent/30 shadow-sm relative overflow-hidden space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary text-accent flex items-center justify-center border-2 border-accent">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-dark">
                Our Solemn Commitment
              </span>
              <h3 className="text-2xl font-serif font-bold text-primary">
                Academy Mission Statement
              </h3>
              <blockquote className="text-sm sm:text-base text-charcoal/80 leading-relaxed italic border-l-4 border-accent pl-4">
                "Our mission is to make Quranic education accessible to Muslims worldwide by providing quality online Quran learning through qualified teachers, personalized lessons, and flexible schedules."
              </blockquote>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-accent/30 shadow-sm relative overflow-hidden space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary text-accent flex items-center justify-center border-2 border-accent">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-dark">
                Our Long-Term Aspiration
              </span>
              <h3 className="text-2xl font-serif font-bold text-primary">
                Academy Vision Statement
              </h3>
              <blockquote className="text-sm sm:text-base text-charcoal/80 leading-relaxed italic border-l-4 border-accent pl-4">
                "Our vision is to inspire people of all ages to build a lifelong connection with the Holy Quran and Islamic teachings."
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* Educational Objectives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-accent/20 px-3.5 py-1 rounded-full">
            Core Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
            Our Educational Objectives
          </h2>
          <p className="text-sm text-charcoal/70">
            We aim for holistic Quranic literacy that encompasses pronunciation, mental understanding, and heartfelt spiritual implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationalObjectives.map((obj, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-3 hover:border-accent transition-colors">
              <div className="w-10 h-10 rounded-xl bg-ivory text-accent flex items-center justify-center border border-accent/30">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-serif text-lg font-bold text-primary">
                {obj.title}
              </h4>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="bg-secondary-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-pattern opacity-15 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-accent bg-primary px-3.5 py-1 rounded-full border border-accent/30">
              Pedagogical Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Our Structured Teaching Methodology
            </h2>
            <p className="text-sm text-ivory/80">
              How our certified tutors ensure steady progress, unwavering retention, and joyful learning every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologyPillars.map((item, idx) => (
              <div key={idx} className="bg-primary/60 border border-accent/30 rounded-3xl p-6 space-y-3">
                <span className="font-serif text-accent text-2xl font-extrabold block">
                  {item.step}
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-ivory/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Authentic Quranic Education */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-secondary p-8 sm:p-12 rounded-3xl text-white border-2 border-accent/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-accent">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider">Uncompromising Integrity</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Commitment to Authentic Quranic Education
            </h3>
            <p className="text-sm text-ivory/90 leading-relaxed">
              Every curriculum taught at Tazyeenul Quran Academy adheres to the consensus of Ahlus-Sunnah wal-Jama’ah and centuries-old verified Tajweed rules codified by classical masters like Imam Ibn al-Jazari. We safeguard the Quran's sacred integrity in every lesson.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('trial')}
            className="px-8 py-4 rounded-full bg-accent hover:bg-accent-light text-primary-dark font-bold text-sm shadow-lg hover:shadow-gold transition-all shrink-0"
          >
            Start Learning With Us
          </button>
        </div>
      </section>

    </div>
  );
};
