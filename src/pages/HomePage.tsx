import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Clock, 
  BookOpen, 
  HeartHandshake, 
  Globe2, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Star, 
  PlayCircle,
  HelpCircle,
  ChevronDown,
  Phone
} from 'lucide-react';
import { PageTab, Course } from '../types';
import { COURSES } from '../data/courses';
import { INITIAL_TEACHERS } from '../data/teachers';
import { SAMPLE_TESTIMONIALS } from '../data/testimonials';
import { FAQS } from '../data/faq';
import { BLOG_POSTS } from '../data/blogs';

interface HomePageProps {
  setActiveTab: (tab: PageTab) => void;
  onSelectCourse: (course: Course) => void;
  onSelectBlog: (blogId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onSelectCourse, onSelectBlog }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const popularCourses = COURSES.slice(0, 6);
  const featuredTeachers = INITIAL_TEACHERS.slice(0, 4);
  const recentBlogs = BLOG_POSTS.slice(0, 3);

  const whyChooseFeatures = [
    {
      icon: Users,
      title: 'Qualified Male & Female Teachers',
      desc: 'Carefully vetted Huffaz, Qaris, and Alimat with verified certificates and extensive experience teaching adults and children.'
    },
    {
      icon: BookOpen,
      title: 'One-to-One Online Classes',
      desc: '100% focused attention where the teacher dedicates the full session exclusively to a single student without classroom distractions.'
    },
    {
      icon: Clock,
      title: 'Flexible Class Timings',
      desc: '24/7 availability accommodating time zones across USA, UK, Canada, Australia, Europe, Saudi Arabia, and the Gulf.'
    },
    {
      icon: Sparkles,
      title: 'Free Trial Classes',
      desc: 'Complimentary evaluation sessions with zero financial obligation to test teaching style, student rapport, and syllabus.'
    },
    {
      icon: HeartHandshake,
      title: 'Affordable Pricing',
      desc: 'Reasonable, family-friendly fee structures with sibling discounts, flexible monthly billing, and no locked-in contracts.'
    },
    {
      icon: Globe2,
      title: 'International Online Learning',
      desc: 'Live HD video sessions via Zoom & Google Meet with interactive digital whiteboards and Quranic screen-sharing.'
    },
    {
      icon: Award,
      title: 'Personalized Learning Plans',
      desc: 'Customized progression tailored to the individual learning speed of each child or adult, with monthly progress reviews.'
    },
    {
      icon: ShieldCheck,
      title: 'Friendly Learning Environment',
      desc: 'Encouraging, patient, and compassionate pedagogy designed to nurture a lifelong love for the Quran in young hearts.'
    }
  ];

  const fourSteps = [
    {
      step: '01',
      title: 'Register for a Free Trial',
      desc: 'Fill out our quick registration form with your preferred days, times, and course interests in under two minutes.'
    },
    {
      step: '02',
      title: 'Meet Your Quran Teacher',
      desc: 'Attend your scheduled 1-on-1 trial class on Zoom or Google Meet with a matched male or female teacher.'
    },
    {
      step: '03',
      title: 'Choose Course & Schedule',
      desc: 'Discuss your goals with the teacher, evaluate the trial, and finalize a comfortable weekly class schedule.'
    },
    {
      step: '04',
      title: 'Start Learning the Holy Quran',
      desc: 'Begin your regular live lessons and watch your Quran recitation, Tajweed, and Islamic knowledge blossom!'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-dark via-primary to-primary text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle Islamic geometric pattern overlay */}
        <div className="absolute inset-0 bg-emerald-pattern opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Islamic Calligraphy Accent Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-accent/40 text-accent text-xs font-semibold backdrop-blur-md shadow-sm">
                <span className="font-serif text-sm">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
                <span>•</span>
                <span>Tazyeenul Quran Academy</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-white leading-tight">
                Learn the Holy Quran Online with <span className="gold-gradient-text">Qualified Teachers</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-ivory/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Begin your beautiful journey towards Quranic knowledge with <strong>Tazyeenul Quran Academy</strong>. Learn Quran reading, Tajweed, memorization, translation, and Islamic studies from the comfort of your home.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => setActiveTab('trial')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-accent via-accent-light to-accent text-primary-dark font-bold text-base shadow-xl hover:shadow-gold hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 border border-accent-dark/40"
                >
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>Book Your Free Trial</span>
                </button>

                <button
                  onClick={() => setActiveTab('courses')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-accent/50 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Explore Our Courses</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </button>
              </div>

              {/* Trust Indicators / Badges */}
              <div className="pt-8 border-t border-accent/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">1-on-1 Classes</h5>
                    <p className="text-[11px] text-ivory/70">Personalized attention</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Male & Female</h5>
                    <p className="text-[11px] text-ivory/70">Certified Tutors</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">100% Free Trial</h5>
                    <p className="text-[11px] text-ivory/70">Zero commitment</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">24/7 Schedule</h5>
                    <p className="text-[11px] text-ivory/70">Global time zones</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative golden ring aura */}
                <div className="absolute -inset-2 bg-gradient-to-r from-accent via-accent-light to-accent rounded-3xl opacity-30 blur-xl animate-pulse"></div>
                
                {/* Main Rehal Image */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-accent/50 shadow-2xl bg-secondary">
                  <img 
                    src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80" 
                    alt="Holy Quran on a wooden rehal with peaceful Islamic background"
                    className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent"></div>
                  
                  {/* Floating Quote on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-secondary-dark/90 backdrop-blur-md border border-accent/40 text-xs">
                    <div className="font-serif text-accent text-sm mb-1 font-semibold">
                      "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
                    </div>
                    <p className="text-ivory/90 italic">
                      "The best of you are those who learn the Quran and teach it."
                    </p>
                    <span className="text-accent-light block text-[10px] mt-0.5">— Sahih al-Bukhari</span>
                  </div>
                </div>

                {/* Floating Satisfaction Badge */}
                <div className="absolute -top-6 -left-6 bg-white text-charcoal rounded-2xl p-3.5 shadow-2xl border border-accent/30 hidden sm:flex items-center gap-3 animate-bounce duration-1000">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-accent">
                    <Star className="w-6 h-6 fill-accent text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary flex items-center gap-1">
                      <span>4.9 / 5.0</span>
                      <span className="text-xs text-charcoal/50">(Sample Reviews)</span>
                    </div>
                    <p className="text-[11px] text-charcoal/70">Parent & Student Trust</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Why Choose Tazyeenul Quran Academy? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-accent/20 px-3.5 py-1 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
            Why Families Worldwide Choose Tazyeenul Quran Academy
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
            We combine authentic classical Islamic pedagogy with cutting-edge online technology, ensuring a peaceful, comfortable, and highly effective learning environment for your whole family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-emerald hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-ivory border border-accent/30 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-accent transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-2 group-hover:text-accent-dark transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Our Popular Courses Preview */}
      <section className="bg-ivory/60 py-16 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-accent/20 px-3 py-1 rounded-full">
                Comprehensive Syllabus
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
                Our Popular Courses
              </h2>
              <p className="text-sm text-charcoal/70 max-w-xl">
                From the very first Arabic letter in Noorani Qaida to full Quranic Memorization, Tafseer, and Ten Qira'at.
              </p>
            </div>

            <button
              onClick={() => setActiveTab('courses')}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent-dark group transition-colors"
            >
              <span>Explore All 12 Courses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
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
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md text-xs font-medium bg-black/60 text-white backdrop-blur-sm">
                    {course.level}
                  </span>
                </div>

                {/* Course Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-charcoal/60 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        {course.duration}
                      </span>
                      <span>{course.classesPerWeek}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-primary group-hover:text-accent-dark transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-charcoal/70 line-clamp-2 mt-2 leading-relaxed">
                      {course.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="text-xs font-semibold text-primary hover:text-accent-dark transition-colors"
                    >
                      Learn More & Syllabus →
                    </button>
                    <button
                      onClick={() => setActiveTab('trial')}
                      className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-semibold shadow-sm transition-all border border-accent/40"
                    >
                      Free Trial
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setActiveTab('courses')}
              className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-light text-white font-semibold text-sm shadow-md hover:shadow-gold transition-all"
            >
              View Full Course Catalog (12 Courses)
            </button>
          </div>

        </div>
      </section>

      {/* 4. How It Works (Four-Step Process) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-accent/20 px-3.5 py-1 rounded-full">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
            How It Works
          </h2>
          <p className="text-sm text-charcoal/70">
            Getting started with your Quranic journey takes less than 3 minutes with our hassle-free onboarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {fourSteps.map((stepItem, idx) => (
            <div key={idx} className="relative bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-primary text-accent font-serif font-extrabold text-xl flex items-center justify-center border-2 border-accent shadow-sm">
                {stepItem.step}
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                {stepItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                {stepItem.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our Teaching Approach */}
      <section className="bg-secondary-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-pattern opacity-15 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-accent bg-primary px-3.5 py-1 rounded-full border border-accent/30">
                Individual Attention
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Our Proven Teaching Approach for Maximum Retention & Spiritual Joy
              </h2>
              <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
                At Tazyeenul Quran Academy, we believe no two students learn at the same rhythm. Our teaching philosophy blends traditional Sanad-based Tajweed discipline with modern motivational psychology.
              </p>

              <div className="space-y-4 text-sm text-ivory/90">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">1-on-1 Dedicated Time:</strong>
                    <span>No waiting for other students to read. 100% of the teacher's time is dedicated to listening and rectifying.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Interactive Digital Whiteboard & Mushaf:</strong>
                    <span>High-clarity on-screen pointing highlighting Makharij, rules of Ghunnah, and color-coded Tajweed texts.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Monthly Progress Reports:</strong>
                    <span>Parents receive structured feedback detailing Surahs covered, pronunciation accuracy, and teacher comments.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('about')}
                  className="px-6 py-3 rounded-xl bg-accent text-primary-dark font-bold text-sm hover:bg-accent-light transition-all shadow-md"
                >
                  Read More About Our Academy Methodology →
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-accent/40 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80" 
                  alt="Student learning Quran online with digital Mushaf"
                  className="w-full h-80 sm:h-96 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-primary/90 backdrop-blur-md border border-accent/30 text-xs">
                  <p className="text-ivory font-serif text-sm">
                    "Recite, and your Lord is the Most Generous - Who taught by the pen."
                  </p>
                  <span className="text-accent-light text-[10px] block mt-1">Surah Al-‘Alaq [96:3-4]</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Meet Our Teachers Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-accent/20 px-3.5 py-1 rounded-full">
            Certified Instructors
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
            Meet Our Qualified Quran Teachers
          </h2>
          <p className="text-sm text-charcoal/70">
            Learn from certified male and female scholars, Huffaz, and Qaris who inspire students with wisdom, empathy, and deep Tajweed mastery.
          </p>
          <div className="text-xs text-charcoal/50 italic">
            * Teacher profile samples are shown below for illustration and can be managed directly in the Admin Panel.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTeachers.map((teacher) => (
            <div 
              key={teacher.id}
              className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between"
            >
              <div>
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-accent mb-4 shadow-sm">
                  <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 right-0 px-1.5 py-0.5 rounded-full bg-primary text-[10px] text-accent font-bold">
                    {teacher.gender === 'male' ? 'Male' : 'Female'}
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-primary">
                  {teacher.name}
                </h3>
                <p className="text-xs text-accent-dark font-medium mb-2">
                  {teacher.title}
                </p>

                <p className="text-xs text-charcoal/70 line-clamp-2 leading-relaxed mb-3">
                  {teacher.bio}
                </p>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {teacher.languages.map((lang, lIdx) => (
                    <span key={lIdx} className="text-[10px] bg-ivory text-charcoal/80 px-2 py-0.5 rounded-md border border-gray-200">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveTab('trial')}
                className="w-full py-2 rounded-xl bg-ivory hover:bg-primary hover:text-white text-primary text-xs font-semibold border border-accent/40 transition-colors"
              >
                Book Trial With Teacher
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setActiveTab('teachers')}
            className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm transition-all"
          >
            View All Teachers & Filter by Gender / Language →
          </button>
        </div>
      </section>

      {/* 7. Student Testimonials */}
      <section className="bg-ivory/70 py-16 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-accent/20 px-3.5 py-1 rounded-full">
              Student & Parent Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
              What Our Community Says
            </h2>
            <p className="text-sm text-charcoal/70">
              Honest sample placeholders from parents and students across the UK, USA, Canada, UAE, and Australia.
            </p>
            <span className="text-[11px] text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
              * Clearly marked sample placeholders until genuine live reviews are provided.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_TESTIMONIALS.slice(0, 3).map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center gap-3">
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover border border-accent" />
                  <div>
                    <h4 className="text-xs font-bold text-primary">{item.name}</h4>
                    <span className="text-[11px] text-charcoal/60 block">{item.location}</span>
                    <span className="text-[10px] text-accent-dark font-medium">{item.course}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Free Trial CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-secondary p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl border-2 border-accent/40">
          <div className="absolute inset-0 bg-emerald-pattern opacity-15 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-accent text-primary-dark font-bold text-xs uppercase tracking-wider inline-block">
              Start With Zero Financial Risk
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight">
              Start Your Quran Learning Journey Today!
            </h2>

            <p className="text-base sm:text-lg text-ivory/90 leading-relaxed">
              Experience our teaching methods with a free trial class. No obligation to enroll. Connect with an expert teacher matching your schedule.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setActiveTab('trial')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent hover:bg-accent-light text-primary-dark font-bold text-base shadow-xl hover:shadow-gold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Book Your Free Trial</span>
              </button>

              <a
                href="https://wa.me/923052350269"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-accent/40 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>WhatsApp: +92 305 2350269</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-accent/20 px-3.5 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-charcoal/70">
            Find quick answers to common queries regarding registration, trial classes, timings, and fees.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left font-serif font-semibold text-primary flex items-center justify-between gap-4 hover:bg-ivory/50 transition-colors"
                >
                  <span className="text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-accent shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-sm text-charcoal/80 leading-relaxed border-t border-gray-100 bg-ivory/20 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. Latest Blog Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-accent/20 px-3 py-1 rounded-full">
              Islamic Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
              Latest Blog Articles
            </h2>
            <p className="text-sm text-charcoal/70">
              Enriching articles on Tajweed rules, memorization strategies, Islamic parenting, and daily Duas.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('blog')}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent-dark group transition-colors"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentBlogs.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => onSelectBlog(post.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-primary text-white">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs text-charcoal/50 mb-2">
                    <span>{post.publishedDate}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent-dark transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 line-clamp-2 mt-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Read Article →</span>
                  <span className="text-charcoal/50">By {post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
