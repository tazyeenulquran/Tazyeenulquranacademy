import React from 'react';
import { Course } from '../types';
import { X, CheckCircle2, Clock, Calendar, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseTitle: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose, onEnroll }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border-2 border-accent/30 overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header with image & overlay */}
        <div className="relative h-48 sm:h-60 overflow-hidden shrink-0">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/80 to-transparent"></div>
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and Badge */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent text-primary-dark uppercase tracking-wider">
                {course.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                {course.level}
              </span>
              {course.arabicTitle && (
                <span className="text-accent-light font-serif text-lg ml-auto hidden sm:inline">
                  {course.arabicTitle}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {course.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-ivory border border-accent/20 text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <div>
                <span className="text-charcoal/60 block">Est. Duration</span>
                <strong className="text-primary">{course.duration}</strong>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <div>
                <span className="text-charcoal/60 block">Schedule</span>
                <strong className="text-primary">{course.classesPerWeek}</strong>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <div>
                <span className="text-charcoal/60 block">Target Audience</span>
                <strong className="text-primary">{course.ageGroup}</strong>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              <div>
                <span className="text-charcoal/60 block">Certification</span>
                <strong className="text-primary">Verified Sanad</strong>
              </div>
            </div>
          </div>

          {/* Detailed Course Description */}
          <div>
            <h3 className="font-serif text-lg font-bold text-primary mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" />
              <span>Course Overview</span>
            </h3>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              {course.fullDesc}
            </p>
          </div>

          {/* What Students Will Learn */}
          <div>
            <h3 className="font-serif text-lg font-bold text-primary mb-3">
              What You Will Learn
            </h3>
            <div className="space-y-2.5">
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-charcoal/85">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="p-4 rounded-xl bg-primary/5 border-l-4 border-accent text-xs">
            <span className="font-bold text-primary block mb-0.5">Prerequisites:</span>
            <span className="text-charcoal/70">{course.prerequisites}</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-ivory/80 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-charcoal/70 text-center sm:text-left">
            <span>✨ 100% Free Trial Class included • No credit card required</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-gray-300 text-charcoal hover:bg-gray-100 text-sm font-medium w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onEnroll(course.title);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white font-semibold text-sm shadow-md hover:shadow-gold transition-all flex items-center justify-center gap-2 w-full sm:w-auto border border-accent"
            >
              <span>Book Free Trial for this Course</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
