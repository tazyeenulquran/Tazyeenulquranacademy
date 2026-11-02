import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('Assalamu Alaikum, I would like to inquire about booking a Free Trial Class for Tazyeenul Quran Academy.');

  const whatsappNumber = '923052350269';

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(quickMsg);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border-2 border-accent/40 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex items-center justify-between border-b border-accent/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-accent text-primary-dark font-bold flex items-center justify-center font-serif text-lg">
                  TQ
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary rounded-full"></span>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Tazyeenul Quran Academy</h4>
                <p className="text-xs text-accent-light flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  Online | Typically replies in minutes
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-ivory hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-ivory/60 space-y-3 text-xs text-charcoal">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%]">
              <p className="text-charcoal leading-relaxed">
                Assalamu Alaikum! Welcome to Tazyeenul Quran Academy. 🌿
              </p>
              <p className="text-charcoal/80 mt-1">
                How can our academic counselor assist you today? We offer free 1-on-1 trial classes with certified male and female teachers!
              </p>
              <span className="text-[10px] text-charcoal/50 block text-right mt-1">Official WhatsApp: +92 305 2350269</span>
            </div>

            <form onSubmit={handleSend} className="space-y-2 pt-2">
              <textarea
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                rows={2}
                className="w-full text-xs p-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-none bg-white"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start Chat on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 py-3 px-4 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white"
        aria-label="Chat on WhatsApp"
        title="WhatsApp Support: +92 305 2350269"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="font-semibold text-sm hidden sm:inline tracking-tight">
          WhatsApp Us
        </span>
        <span className="bg-primary/90 text-[11px] text-accent font-bold px-2 py-0.5 rounded-full hidden md:inline">
          +92 305 2350269
        </span>
      </button>
    </div>
  );
};
