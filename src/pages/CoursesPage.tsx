import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  Filter
} from 'lucide-react';
import { Course, PageTab } from '../types';
import { COURSES } from '../data/courses';

interface CoursesPageProps {
  setActiveTab: (tab: PageTab) => void;
  onSelectCourse: (course: Course) => void;
  onEnrollCourse: (courseTitle: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ setActiveTab, onSelectCourse, onEnrollCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Foundation', 'Recitation', 'Memorization', 'Islamic Studies', 'Arabic'];

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.fullDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-primary-dark via-primary to-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-pattern opacity-15 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-secondary/80 border border-accent/40 px-4 py-1 rounded-full">
            Complete Islamic Curriculum
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white">
            Our Online Quran & Islamic Courses
          </h1>
          <p className="text-sm sm:text-base text-ivory/90 max-w-2xl mx-auto leading-relaxed">
            From basic Arabic alphabet phonetics in Noorani Qaida to full Quranic Memorization, Tajweed certification, and classical Tafseer.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-semibold text-charcoal/60 mr-2 hidden sm:inline flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-ivory hover:bg-gray-100 text-charcoal/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none bg-ivory/50"
            />
          </div>

        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-300">
            <BookOpen className="w-12 h-12 text-charcoal/30 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-primary">No courses found matching your search</h3>
            <p className="text-xs text-charcoal/60 mt-1">Try clearing filters or search for another keyword.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group justify-between"
              >
                <div>
                  {/* Course Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-white shadow">
                        {course.category}
                      </span>
                      {course.popular && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-accent text-primary-dark shadow">
                          Popular
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm">
                        {course.level}
                      </span>
                      {course.arabicTitle && (
                        <span className="font-serif text-accent-light text-sm font-semibold">
                          {course.arabicTitle}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Course Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs text-charcoal/60">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        Duration: <strong>{course.duration}</strong>
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {course.classesPerWeek}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-bold text-primary group-hover:text-accent-dark transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-xs text-charcoal/70 line-clamp-3 mt-2 leading-relaxed">
                        {course.shortDesc}
                      </p>
                    </div>

                    {/* Preview Outcomes */}
                    <div className="space-y-1.5 pt-2 border-t border-gray-100">
                      <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
                        What You Will Learn:
                      </span>
                      {course.learningOutcomes.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-charcoal/70">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="w-1/2 py-2.5 rounded-xl border border-primary/30 text-primary hover:bg-ivory text-xs font-bold transition-colors"
                    >
                      View Syllabus
                    </button>
                    <button
                      onClick={() => onEnrollCourse(course.title)}
                      className="w-1/2 py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold transition-all shadow-sm border border-accent flex items-center justify-center gap-1"
                    >
                      <span>Enroll / Trial</span>
                      <ArrowRight className="w-3.5 h-3.5 text-accent" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

      {/* Free Trial Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-secondary-dark text-white p-8 sm:p-12 border-2 border-accent/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-white">
              Not sure which course is right for you or your child?
            </h3>
            <p className="text-xs sm:text-sm text-ivory/80">
              Book a free trial and let our certified academic evaluators assess your reading level and design a personalized roadmap.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('trial')}
            className="px-8 py-3.5 rounded-full bg-accent hover:bg-accent-light text-primary-dark font-bold text-sm shadow-md hover:shadow-gold transition-all shrink-0"
          >
            Book Free Assessment Trial
          </button>
        </div>
      </section>

    </div>
  );
};
