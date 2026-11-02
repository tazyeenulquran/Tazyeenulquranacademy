import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  User, 
  Mail, 
  Globe, 
  Clock, 
  BookOpen, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { FreeTrialApplication, PageTab } from '../types';
import { COURSES } from '../data/courses';
import { saveApplication } from '../data/storage';

interface FreeTrialPageProps {
  initialCourse?: string;
  initialTeacher?: string;
  initialPlan?: string;
  setActiveTab: (tab: PageTab) => void;
}

export const FreeTrialPage: React.FC<FreeTrialPageProps> = ({ 
  initialCourse, 
  initialTeacher, 
  initialPlan,
  setActiveTab 
}) => {
  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    whatsapp: '',
    country: 'United States',
    studentAge: '',
    preferredCourse: initialCourse || 'Noorani Qaida',
    preferredTeacherGender: 'no-preference' as 'male' | 'female' | 'no-preference',
    preferredLanguage: 'English',
    preferredDays: 'Weekdays (Mon, Wed, Fri)',
    preferredTime: 'Evening (5:00 PM - 8:00 PM)',
    timeZone: 'EST (US Eastern)',
    message: initialTeacher ? `Preferred Teacher: ${initialTeacher}. ` : initialPlan ? `Inquiring for ${initialPlan}. ` : ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApplication, setSubmittedApplication] = useState<FreeTrialApplication | null>(null);
  const [copiedAppId, setCopiedAppId] = useState(false);

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'United Arab Emirates',
    'Saudi Arabia',
    'Qatar',
    'Kuwait',
    'Pakistan',
    'India',
    'Malaysia',
    'Singapore',
    'Other Country'
  ];

  const timeZones = [
    'EST (US Eastern Time - UTC-5)',
    'CST (US Central Time - UTC-6)',
    'PST (US Pacific Time - UTC-8)',
    'GMT / BST (United Kingdom - UTC+0 / +1)',
    'CET (Central European Time - UTC+1)',
    'GST (Gulf Standard Time - UAE - UTC+4)',
    'AST (Arabia Standard Time - KSA - UTC+3)',
    'PKT (Pakistan Standard Time - UTC+5)',
    'AEST (Australia Eastern Time - UTC+10)',
    'Other / Will Specify'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number with country code is required';
    } else if (formData.whatsapp.trim().length < 7) {
      newErrors.whatsapp = 'Please provide a complete WhatsApp number';
    }
    if (!formData.studentAge.trim()) {
      newErrors.studentAge = 'Student age is required';
    }
    if (!formData.preferredCourse) {
      newErrors.preferredCourse = 'Please select a preferred course';
    }
    if (!formData.preferredDays) {
      newErrors.preferredDays = 'Please choose your preferred days';
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please specify preferred timing';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save application securely to storage (and make available in admin dashboard)
      const saved = saveApplication({
        studentName: formData.studentName,
        parentName: formData.parentName || undefined,
        email: formData.email,
        whatsapp: formData.whatsapp,
        country: formData.country,
        studentAge: formData.studentAge,
        preferredCourse: formData.preferredCourse,
        preferredTeacherGender: formData.preferredTeacherGender,
        preferredLanguage: formData.preferredLanguage,
        preferredDays: formData.preferredDays,
        preferredTime: formData.preferredTime,
        timeZone: formData.timeZone,
        message: formData.message || undefined,
      });

      // Confetti celebration for successful submission
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setSubmittedApplication(saved);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    } catch (err) {
      setErrors({ form: 'An error occurred while saving your application. Please try again or message on WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyId = () => {
    if (submittedApplication) {
      navigator.clipboard.writeText(submittedApplication.id);
      setCopiedAppId(true);
      setTimeout(() => setCopiedAppId(false), 2500);
    }
  };

  const getWhatsAppConfirmationUrl = () => {
    if (!submittedApplication) return 'https://wa.me/923052350269';
    const text = encodeURIComponent(
      `Assalamu Alaikum! I have just registered for a Free Trial Class at Tazyeenul Quran Academy.\n` +
      `Application ID: ${submittedApplication.id}\n` +
      `Student Name: ${submittedApplication.studentName}\n` +
      `Course: ${submittedApplication.preferredCourse}\n` +
      `Country: ${submittedApplication.country}\n` +
      `Preferred Time: ${submittedApplication.preferredTime} (${submittedApplication.timeZone})\n` +
      `Please confirm trial class scheduling.`
    );
    return `https://wa.me/923052350269?text=${text}`;
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-primary-dark via-primary to-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-pattern opacity-15 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-secondary/80 border border-accent/40 px-4 py-1 rounded-full">
            100% Free Trial Class • Zero Risk
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white">
            Register for Your Free Trial Class
          </h1>
          <p className="text-sm sm:text-base text-ivory/90 max-w-2xl mx-auto leading-relaxed">
            Experience our 1-on-1 teaching excellence with a certified Quran mentor. No payment, no credit card required, and no obligation to enroll.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* If Application Submitted Successfully, show Celebratory Confirmation Screen */}
        {submittedApplication ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-accent shadow-2xl space-y-8 animate-in fade-in duration-300">
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold text-accent-dark uppercase tracking-wider bg-accent/20 px-3.5 py-1 rounded-full">
                Application Successfully Received!
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-primary">
                JazakAllahu Khairan, {submittedApplication.studentName}!
              </h2>
              <p className="text-sm text-charcoal/80 max-w-xl mx-auto">
                Your application has been logged into our admissions database. Our academic advisor will contact you within a few hours to match your tutor and confirm the trial class time.
              </p>
            </div>

            {/* Application ID Box */}
            <div className="bg-ivory rounded-2xl p-6 border border-accent/30 max-w-md mx-auto text-center space-y-2">
              <span className="text-xs text-charcoal/60 uppercase tracking-wider block">
                Your Official Application Reference ID:
              </span>
              <div className="flex items-center justify-center gap-3">
                <span className="font-mono text-2xl font-bold text-primary tracking-widest">
                  {submittedApplication.id}
                </span>
                <button
                  onClick={handleCopyId}
                  className="p-1.5 rounded-lg bg-white border border-gray-200 text-charcoal/70 hover:text-primary transition-colors text-xs flex items-center gap-1"
                  title="Copy Application ID"
                >
                  {copiedAppId ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[11px] text-charcoal/50">
                Saved into the Academy Database and available in the Admin Panel.
              </p>
            </div>

            {/* Summary Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 rounded-2xl bg-gray-50 text-xs border border-gray-100 max-w-3xl mx-auto">
              <div>
                <span className="text-charcoal/50 block">Student:</span>
                <strong className="text-primary">{submittedApplication.studentName} ({submittedApplication.studentAge} yrs)</strong>
              </div>
              <div>
                <span className="text-charcoal/50 block">Course Selected:</span>
                <strong className="text-primary">{submittedApplication.preferredCourse}</strong>
              </div>
              <div>
                <span className="text-charcoal/50 block">WhatsApp:</span>
                <strong className="text-primary">{submittedApplication.whatsapp}</strong>
              </div>
              <div>
                <span className="text-charcoal/50 block">Country:</span>
                <strong className="text-primary">{submittedApplication.country}</strong>
              </div>
              <div>
                <span className="text-charcoal/50 block">Preferred Schedule:</span>
                <strong className="text-primary">{submittedApplication.preferredDays}</strong>
              </div>
              <div>
                <span className="text-charcoal/50 block">Preferred Time:</span>
                <strong className="text-primary">{submittedApplication.preferredTime}</strong>
              </div>
            </div>

            {/* Direct WhatsApp Instant Confirmation Action */}
            <div className="text-center space-y-4 pt-4 border-t border-gray-100 max-w-xl mx-auto">
              <h4 className="font-serif font-bold text-primary text-base">
                ⚡ Want Instant Scheduling on WhatsApp?
              </h4>
              <p className="text-xs text-charcoal/70">
                Click below to send your Application ID directly to our WhatsApp coordinator at <strong>+92 305 2350269</strong> for priority class scheduling.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppConfirmationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Send Confirmation to WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setSubmittedApplication(null);
                    setFormData({
                      studentName: '',
                      parentName: '',
                      email: '',
                      whatsapp: '',
                      country: 'United States',
                      studentAge: '',
                      preferredCourse: 'Noorani Qaida',
                      preferredTeacherGender: 'no-preference',
                      preferredLanguage: 'English',
                      preferredDays: 'Weekdays (Mon, Wed, Fri)',
                      preferredTime: 'Evening (5:00 PM - 8:00 PM)',
                      timeZone: 'EST (US Eastern)',
                      message: ''
                    });
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-gray-300 text-charcoal hover:bg-gray-100 font-semibold text-xs transition-colors"
                >
                  Register Another Student
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Application Form */
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200 shadow-xl space-y-8">
            
            <div className="border-b border-gray-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                  Student Registration Form
                </h2>
                <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
                  Please fill in the details below. All fields marked with <span className="text-red-500 font-bold">*</span> are required.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Secure & Confidential</span>
              </div>
            </div>

            {errors.form && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errors.form}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Student Name & Parent Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Zayd Ali"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs outline-none transition-all ${
                        errors.studentName ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-accent bg-ivory/30'
                      }`}
                    />
                  </div>
                  {errors.studentName && <span className="text-[11px] text-red-500 mt-1 block">{errors.studentName}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">
                    Parent / Guardian Name <span className="text-charcoal/40 font-normal">(Optional for adults)</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Muhammad Ali"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent text-xs outline-none bg-ivory/30"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & WhatsApp Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. parent@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs outline-none transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-accent bg-ivory/30'
                      }`}
                    />
                  </div>
                  {errors.email && <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">
                    WhatsApp Number (with Country Code) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="e.g. +44 7911 123456 or +1 214 555 0199"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs outline-none transition-all ${
                        errors.whatsapp ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-accent bg-ivory/30'
                      }`}
                    />
                  </div>
                  {errors.whatsapp && <span className="text-[11px] text-red-500 mt-1 block">{errors.whatsapp}</span>}
                </div>
              </div>

              {/* Row 3: Country & Student Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">
                    Country of Residence <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent text-xs outline-none bg-ivory/30"
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">
                    Student Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.studentAge}
                    onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
                    placeholder="e.g. 7 years, 14 years, or Adult"
                    className={`w-full px-4 py-3 rounded-xl border text-xs outline-none transition-all ${
                      errors.studentAge ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-accent bg-ivory/30'
                    }`}
                  />
                  {errors.studentAge && <span className="text-[11px] text-red-500 mt-1 block">{errors.studentAge}</span>}
                </div>
              </div>

              {/* Row 4: Preferred Course */}
              <div>
                <label className="block text-xs font-bold text-charcoal mb-1.5">
                  Preferred Course <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.preferredCourse}
                    onChange={(e) => setFormData({ ...formData, preferredCourse: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent text-xs outline-none bg-ivory/30"
                  >
                    {COURSES.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title} ({course.category})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Teacher Preference & Preferred Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">
                    Preferred Teacher
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'male', label: 'Male' },
                      { id: 'female', label: 'Female' },
                      { id: 'no-preference', label: 'No Pref.' }
                    ].map((genderOption) => (
                      <button
                        key={genderOption.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredTeacherGender: genderOption.id as any })}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                          formData.preferredTeacherGender === genderOption.id
                            ? 'bg-primary text-white border-accent shadow-sm'
                            : 'bg-ivory/50 border-gray-200 text-charcoal/80 hover:bg-gray-100'
                        }`}
                      >
                        {genderOption.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">
                    Preferred Language of Instruction
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent text-xs outline-none bg-ivory/30"
                  >
                    <option value="English">English</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Bilingual (English & Urdu)">Bilingual (English & Urdu)</option>
                  </select>
                </div>
              </div>

              {/* Row 6: Preferred Days, Time & Timezone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">
                    Preferred Days <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.preferredDays}
                    onChange={(e) => setFormData({ ...formData, preferredDays: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent text-xs outline-none bg-ivory/30"
                  >
                    <option value="Weekdays (Mon, Wed, Fri)">Weekdays (Mon, Wed, Fri)</option>
                    <option value="Weekdays (Tue, Thu, Sat)">Weekdays (Tue, Thu, Sat)</option>
                    <option value="Weekend Only (Sat & Sun)">Weekend Only (Sat & Sun)</option>
                    <option value="5 Days a Week (Mon to Fri)">5 Days a Week (Mon to Fri)</option>
                    <option value="Flexible / Any Days">Flexible / Any Days</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">
                    Preferred Class Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      placeholder="e.g. 6:00 PM"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent text-xs outline-none bg-ivory/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">
                    Your Time Zone <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.timeZone}
                    onChange={(e) => setFormData({ ...formData, timeZone: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:border-accent text-xs outline-none bg-ivory/30"
                  >
                    {timeZones.map((tz) => (
                      <option key={tz} value={tz}>{tz}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 7: Additional Message */}
              <div>
                <label className="block text-xs font-bold text-charcoal mb-1.5">
                  Additional Notes or Specific Goals <span className="text-charcoal/40 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the student's current level, any special learning requests, or schedule constraints..."
                  className="w-full p-4 rounded-xl border border-gray-200 focus:border-accent text-xs outline-none resize-none bg-ivory/30"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-accent via-accent-light to-accent text-primary-dark font-extrabold text-sm sm:text-base shadow-xl hover:shadow-gold hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 border border-accent-dark/40 disabled:opacity-50"
                >
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application & Book Free Trial'}</span>
                </button>
                <p className="text-[11px] text-center text-charcoal/60 mt-3">
                  🔒 By submitting, your application will be saved securely and our advisor will connect with you on WhatsApp (+92 305 2350269) within hours.
                </p>
              </div>

            </form>

          </div>
        )}

      </section>

    </div>
  );
};
