import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('tazyeenul_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('tazyeenul_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('tazyeenul_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-md bg-white border border-accent/40 shadow-2xl rounded-2xl p-4 sm:p-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-ivory border border-accent/30 flex items-center justify-center shrink-0">
          <Cookie className="w-5 h-5 text-accent" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-primary">Privacy & Cookies</h4>
          <p className="text-xs text-charcoal/70 leading-relaxed">
            We use essential cookies and local storage to enhance your browsing experience, remember your currency preferences, and manage trial submissions securely.
          </p>
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-lg bg-primary hover:bg-primary-light text-white text-xs font-semibold shadow-sm transition-all"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-charcoal text-xs font-medium transition-all"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-charcoal/40 hover:text-charcoal p-1"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
