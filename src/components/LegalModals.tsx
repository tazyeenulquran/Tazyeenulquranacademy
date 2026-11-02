import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border-2 border-accent/30 overflow-hidden relative max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-primary text-white p-6 flex items-center justify-between border-b border-accent/30">
          <div className="flex items-center gap-3">
            {type === 'privacy' ? (
              <ShieldCheck className="w-6 h-6 text-accent" />
            ) : (
              <FileText className="w-6 h-6 text-accent" />
            )}
            <div>
              <h2 className="text-xl font-serif font-bold text-white">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h2>
              <p className="text-xs text-accent-light">
                Tazyeenul Quran Academy • Official Institutional Policy
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-ivory hover:text-white p-1.5 rounded-full hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-charcoal/80 space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-primary">
                Last Updated: November 2026
              </p>
              <p>
                At <strong>Tazyeenul Quran Academy</strong>, your privacy and trust are of paramount importance to us. As an online educational platform serving Muslim families and students globally, we are strictly committed to safeguarding your personal data and ensuring a secure, Islamic, and family-friendly environment.
              </p>

              <h4 className="font-serif font-bold text-base text-primary pt-2">1. Information We Collect</h4>
              <p>
                When you submit a Free Trial request, contact our administration, or enroll in classes, we collect necessary contact information including: Student Name, Parent/Guardian Name (for minors), Email Address, WhatsApp/Phone Number, Country of Residence, Student Age, and Scheduling Preferences.
              </p>

              <h4 className="font-serif font-bold text-base text-primary pt-2">2. How We Use Your Information</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>To coordinate, schedule, and deliver one-to-one live Quran and Islamic classes.</li>
                <li>To communicate via WhatsApp or email regarding class schedules, teacher matching, and attendance.</li>
                <li>To issue monthly student progress reports and certificates of completion.</li>
                <li>We do NOT sell, rent, or trade your personal data to any third-party marketers or advertisers under any circumstances.</li>
              </ul>

              <h4 className="font-serif font-bold text-base text-primary pt-2">3. Video and Online Classroom Modesty</h4>
              <p>
                We maintain the highest Islamic standards of modesty (Haya) and decorum. Female students are paired with female teachers upon request, and all video/audio communications are strictly monitored for educational integrity and student safety.
              </p>

              <h4 className="font-serif font-bold text-base text-primary pt-2">4. Contacting Our Data Protection Officer</h4>
              <p>
                If you have questions or wish to delete your stored registration details, please reach out directly to our administration via WhatsApp at <strong>+92 305 2350269</strong> or email at <strong>info@tazyeenulquran.com</strong>.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-primary">
                Last Updated: November 2026
              </p>
              <p>
                Welcome to <strong>Tazyeenul Quran Academy</strong>. By registering for free trial classes, accessing our student dashboard, or enrolling in any monthly course, you agree to comply with and be bound by the following terms.
              </p>

              <h4 className="font-serif font-bold text-base text-primary pt-2">1. Free Trial Classes</h4>
              <p>
                Every prospective student is entitled to complimentary trial sessions with no obligation to enroll. Trial classes allow parents and students to evaluate the teaching methodology and compatibility with the assigned teacher.
              </p>

              <h4 className="font-serif font-bold text-base text-primary pt-2">2. Punctuality & Rescheduling Policy</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Students and teachers are expected to join the virtual classroom on time.</li>
                <li>If a student cannot attend a scheduled session, please inform the administration or teacher at least 3 to 4 hours in advance. Make-up classes will be scheduled according to mutual availability.</li>
              </ul>

              <h4 className="font-serif font-bold text-base text-primary pt-2">3. Islamic Code of Conduct</h4>
              <p>
                Both students and teachers are expected to maintain Islamic manners (Akhlaq), mutual respect, and reverence for the Holy Quran during all interactions. Any inappropriate behavior will result in immediate suspension.
              </p>

              <h4 className="font-serif font-bold text-base text-primary pt-2">4. Fee Billing and Cancellations</h4>
              <p>
                Monthly tuition fees are paid in advance on a flexible month-to-month basis. There are no lock-in annual contracts. Families can pause or cancel their enrollment at any time by notifying the coordinator before the start of the subsequent billing cycle.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-ivory border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-primary hover:bg-primary-light text-white text-sm font-semibold transition-colors"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};
