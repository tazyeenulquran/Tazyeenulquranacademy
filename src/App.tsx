import React, { useState, useEffect } from 'react';
import { PageTab, Course } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CookieConsent } from './components/CookieConsent';
import { LegalModals } from './components/LegalModals';
import { CourseDetailModal } from './components/CourseDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { TeachersPage } from './pages/TeachersPage';
import { PricingPage } from './pages/PricingPage';
import { FreeTrialPage } from './pages/FreeTrialPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { AdminDashboard } from './pages/AdminDashboard';

// Data
import { getStoredTeachers, getStoredPricing } from './data/storage';

export function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeBlogId, setActiveBlogId] = useState<string | null>(null);

  // Pre-fill parameters for trial page
  const [trialCourse, setTrialCourse] = useState<string | undefined>(undefined);
  const [trialTeacher, setTrialTeacher] = useState<string | undefined>(undefined);
  const [trialPlan, setTrialPlan] = useState<string | undefined>(undefined);

  // Legal Modal
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Teachers & Pricing
  const [teachers, setTeachers] = useState(getStoredTeachers());
  const [pricingPlans, setPricingPlans] = useState(getStoredPricing());

  // Listen for hash navigation or refresh
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleEnrollFromCourse = (courseTitle: string) => {
    setTrialCourse(courseTitle);
    setActiveTab('trial');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookWithTeacher = (teacherName: string) => {
    setTrialTeacher(teacherName);
    setActiveTab('trial');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPlanTrial = (planName: string) => {
    setTrialPlan(planName);
    setActiveTab('trial');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBlog = (blogId: string | null) => {
    setActiveBlogId(blogId);
    if (activeTab !== 'blog') {
      setActiveTab('blog');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans antialiased">
      {/* Sticky Header & Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage 
            setActiveTab={setActiveTab}
            onSelectCourse={handleSelectCourse}
            onSelectBlog={handleSelectBlog}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage 
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'courses' && (
          <CoursesPage 
            setActiveTab={setActiveTab}
            onSelectCourse={handleSelectCourse}
            onEnrollCourse={handleEnrollFromCourse}
          />
        )}

        {activeTab === 'teachers' && (
          <TeachersPage 
            teachers={teachers}
            setActiveTab={setActiveTab}
            onBookWithTeacher={handleBookWithTeacher}
          />
        )}

        {activeTab === 'pricing' && (
          <PricingPage 
            plans={pricingPlans}
            setActiveTab={setActiveTab}
            onSelectPlanTrial={handleSelectPlanTrial}
          />
        )}

        {activeTab === 'trial' && (
          <FreeTrialPage 
            initialCourse={trialCourse}
            initialTeacher={trialTeacher}
            initialPlan={trialPlan}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'blog' && (
          <BlogPage 
            activeBlogId={activeBlogId}
            onSelectBlog={setActiveBlogId}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}

        {activeTab === 'student-portal' && (
          <StudentDashboard 
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'admin' && (
          <AdminDashboard 
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Course Detail Modal */}
      <CourseDetailModal 
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnrollFromCourse}
      />

      {/* Legal Modals (Privacy & Terms) */}
      <LegalModals 
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Cookie Consent Banner */}
      <CookieConsent />

      {/* Professional Footer */}
      <Footer 
        setActiveTab={setActiveTab}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />
    </div>
  );
}

export default App;
