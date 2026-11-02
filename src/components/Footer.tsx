import React from 'react';
import { 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart,
  ShieldCheck
} from 'lucide-react';
import { PageTab } from '../types';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TikTokIcon } from './SocialIcons';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenPrivacy, onOpenTerms }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-dark text-ivory border-t-4 border-accent relative overflow-hidden">
      {/* Decorative Islamic arch ambient background */}
      <div className="absolute inset-0 bg-emerald-pattern opacity-10 pointer-events-none"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Academy Branding & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center border-2 border-accent">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                  Tazyeenul Quran <span className="text-accent">Academy</span>
                </h3>
                <p className="text-xs text-accent-light font-arabic">
                  تزيين القرآن أكاديمي
                </p>
              </div>
            </div>

            <p className="text-sm text-ivory/80 leading-relaxed italic">
              "Beautifying Hearts with the Light of the Quran."
            </p>

            <p className="text-xs text-ivory/70 leading-relaxed">
              A premier international Islamic online institution offering personalized 1-on-1 Quran recitation, Tajweed, Hifz, and Islamic studies to students of all ages across the globe.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">
                Official Social Channels
              </h4>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/tazyeenulquran7869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary/60 border border-accent/40 flex items-center justify-center text-ivory hover:text-white hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-pink-600 hover:border-transparent transition-all"
                  aria-label="Instagram"
                  title="Follow us on Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@tazyeenulquran.ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary/60 border border-accent/40 flex items-center justify-center text-ivory hover:text-white hover:bg-black hover:border-accent transition-all"
                  aria-label="TikTok"
                  title="Follow us on TikTok"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/18XLwa5Pxm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary/60 border border-accent/40 flex items-center justify-center text-ivory hover:text-white hover:bg-blue-600 hover:border-transparent transition-all"
                  aria-label="Facebook"
                  title="Follow us on Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@TazyeenulQuranAcademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary/60 border border-accent/40 flex items-center justify-center text-ivory hover:text-white hover:bg-red-600 hover:border-transparent transition-all"
                  aria-label="YouTube"
                  title="Subscribe on YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-accent mb-4 border-b border-accent/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory/80">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-accent transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-accent transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-accent transition-colors">
                  Our Courses
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('teachers')} className="hover:text-accent transition-colors">
                  Our Teachers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-accent transition-colors">
                  Pricing Plans
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('trial')} className="text-accent-light font-semibold hover:text-white transition-colors flex items-center gap-1">
                  <span>Free Trial Class</span>
                  <span className="text-[10px] bg-accent/30 px-1.5 py-0.5 rounded text-accent">No Cost</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-accent transition-colors">
                  Islamic Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-accent transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div>
            <h4 className="font-serif text-lg font-bold text-accent mb-4 border-b border-accent/30 pb-2">
              Popular Courses
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory/80">
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-accent transition-colors">
                  • Noorani Qaida for Kids
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-accent transition-colors">
                  • Quran Reading (Nazra)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-accent transition-colors">
                  • Comprehensive Tajweed
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-accent transition-colors">
                  • Quran Memorization (Hifz)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-accent transition-colors">
                  • Quran Tafseer & Translation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-accent transition-colors">
                  • Islamic Studies & Ethics
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-accent transition-colors">
                  • Ten Qirat Course
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-accent transition-colors">
                  • Daily Masnoon Duas
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-accent mb-4 border-b border-accent/30 pb-2">
              Get in Touch
            </h4>
            
            <div className="space-y-3 text-sm text-ivory/80">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-ivory/60">WhatsApp / Call:</span>
                  <a 
                    href="https://wa.me/923052350269" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent font-semibold hover:underline"
                  >
                    +92 305 2350269
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-ivory/60">Official Support:</span>
                  <a href="mailto:info@tazyeenulquran.com" className="hover:text-accent transition-colors">
                    info@tazyeenulquran.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-ivory/60">Class Availability:</span>
                  <span>24 Hours / 7 Days a Week (Global Time Zones)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-ivory/60">Main Office:</span>
                  <span>Lahore, Pakistan (Serving Worldwide)</span>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="bg-primary/50 border border-accent/30 rounded-lg p-3 text-xs flex items-center gap-2 text-ivory/90">
              <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
              <span>Certified male & female tutors with authentic Sanad & Ijazah.</span>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ivory/70">
          <div>
            © {currentYear} <strong>Tazyeenul Quran Academy</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-accent transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-accent transition-colors underline-offset-4 hover:underline">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => handleNav('student-portal')} className="hover:text-accent transition-colors">
              Student Dashboard
            </button>
          </div>

          <div className="flex items-center gap-1 text-ivory/60">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
            <span>for the Ummah</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
