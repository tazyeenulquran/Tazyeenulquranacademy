import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TikTokIcon } from '../components/SocialIcons';
import { saveContactMessage } from '../data/storage';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      saveContactMessage(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setErrors({ form: 'Could not send message. Please reach us directly on WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-primary-dark via-primary to-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-pattern opacity-15 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-secondary/80 border border-accent/40 px-4 py-1 rounded-full">
            We Are Here to Assist You
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white">
            Contact Tazyeenul Quran Academy
          </h1>
          <p className="text-sm sm:text-base text-ivory/90 max-w-2xl mx-auto leading-relaxed">
            Have questions about our online courses, pricing, schedules, or trial classes? Our academic team is available 24/7.
          </p>
        </div>
      </section>

      {/* Main Grid: Details on Left, Form on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Academy Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
              
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary">
                  Tazyeenul Quran Academy
                </h2>
                <p className="text-xs text-accent-dark font-medium mt-1">
                  Beautifying Hearts with the Light of the Quran
                </p>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  Direct WhatsApp Support (24/7)
                </span>
                <p className="text-xs text-charcoal/80 leading-relaxed">
                  For quickest response, contact our Academic Counselor directly on WhatsApp:
                </p>
                <a
                  href="https://wa.me/923052350269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>+92 305 2350269</span>
                </a>
              </div>

              {/* Contact Information List */}
              <div className="space-y-4 text-sm text-charcoal/80 pt-2">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-primary text-xs">Official Email Support</strong>
                    <a href="mailto:info@tazyeenulquran.com" className="hover:text-accent transition-colors text-xs">
                      info@tazyeenulquran.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-primary text-xs">Class Availability</strong>
                    <span className="text-xs">24 Hours / 7 Days a Week (Worldwide Shifts)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-primary text-xs">Headquarters</strong>
                    <span className="text-xs">Lahore, Pakistan (Global Distance Learning)</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Section */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Connect on Official Social Media:
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <a
                    href="https://www.instagram.com/tazyeenulquran7869"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-ivory border border-gray-200 hover:border-pink-500 hover:text-pink-600 flex items-center gap-2 font-medium transition-all"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-500" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.tiktok.com/@tazyeenulquran.ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-ivory border border-gray-200 hover:border-black hover:text-black flex items-center gap-2 font-medium transition-all"
                  >
                    <TikTokIcon className="w-4 h-4" />
                    <span>TikTok</span>
                  </a>

                  <a
                    href="https://www.facebook.com/share/18XLwa5Pxm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-ivory border border-gray-200 hover:border-blue-600 hover:text-blue-600 flex items-center gap-2 font-medium transition-all"
                  >
                    <FacebookIcon className="w-4 h-4 text-blue-600" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://www.youtube.com/@TazyeenulQuranAcademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-ivory border border-gray-200 hover:border-red-600 hover:text-red-600 flex items-center gap-2 font-medium transition-all"
                  >
                    <YoutubeIcon className="w-4 h-4 text-red-600" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Inquiries Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
                  Fill out the form below and our admissions coordinator will respond within 3 to 6 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-serif font-bold text-emerald-900 text-lg">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    JazakAllahu Khairan for reaching out. We have received your inquiry and our advisor will get back to you promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-5 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Abdullah Khan"
                      className={`w-full px-4 py-3 rounded-xl border text-xs outline-none bg-ivory/30 ${
                        errors.name ? 'border-red-400' : 'border-gray-200 focus:border-accent'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. abdullah@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-xs outline-none bg-ivory/30 ${
                        errors.email ? 'border-red-400' : 'border-gray-200 focus:border-accent'
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Inquiry regarding Weekend Classes for 2 Children"
                      className={`w-full px-4 py-3 rounded-xl border text-xs outline-none bg-ivory/30 ${
                        errors.subject ? 'border-red-400' : 'border-gray-200 focus:border-accent'
                      }`}
                    />
                    {errors.subject && <span className="text-[11px] text-red-500 mt-1 block">{errors.subject}</span>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your questions or requests here..."
                      className={`w-full p-4 rounded-xl border text-xs outline-none resize-none bg-ivory/30 ${
                        errors.message ? 'border-red-400' : 'border-gray-200 focus:border-accent'
                      }`}
                    />
                    {errors.message && <span className="text-[11px] text-red-500 mt-1 block">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white font-bold text-xs shadow-md hover:shadow-gold transition-all border border-accent flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-accent" />
                    <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
