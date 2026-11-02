import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  Phone, 
  HelpCircle, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Users,
  CreditCard
} from 'lucide-react';
import { PricingPlan, PageTab } from '../types';
import { CURRENCY_SYMBOLS } from '../data/pricing';

interface PricingPageProps {
  plans: PricingPlan[];
  setActiveTab: (tab: PageTab) => void;
  onSelectPlanTrial: (planName: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ plans, setActiveTab, onSelectPlanTrial }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'GBP' | 'EUR' | 'PKR' | 'SAR'>('USD');

  const currencies: { code: 'USD' | 'GBP' | 'EUR' | 'PKR' | 'SAR'; label: string }[] = [
    { code: 'USD', label: 'USD ($)' },
    { code: 'GBP', label: 'GBP (£)' },
    { code: 'EUR', label: 'EUR (€)' },
    { code: 'PKR', label: 'PKR (₨)' },
    { code: 'SAR', label: 'SAR (ر.س)' },
  ];

  const handleWhatsAppInquiry = (planName: string, priceText: string) => {
    const text = encodeURIComponent(
      `Assalamu Alaikum! I am inquiring about the ${planName} (${priceText}) at Tazyeenul Quran Academy. Please share schedule availability and enrollment details.`
    );
    window.open(`https://wa.me/923052350269?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-primary-dark via-primary to-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-pattern opacity-15 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-secondary/80 border border-accent/40 px-4 py-1 rounded-full">
            Affordable & Transparent Investment
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white">
            Simple, Honest Pricing Plans
          </h1>
          <p className="text-sm sm:text-base text-ivory/90 max-w-2xl mx-auto leading-relaxed">
            Invest in eternal Quranic knowledge. Flexible month-to-month plans with no long-term contracts, family discounts, and 100% free trial classes.
          </p>

          {/* Sample Placeholder Disclosure */}
          <div className="inline-block mt-2">
            <span className="text-xs text-accent-light bg-primary-dark/80 px-4 py-1.5 rounded-full border border-accent/30">
              * Editable sample placeholder fees (Subject to custom schedule & family packages)
            </span>
          </div>
        </div>
      </section>

      {/* Currency Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm max-w-xl mx-auto">
          <span className="text-xs font-bold text-charcoal/70 flex items-center gap-1.5">
            <CreditCard className="w-4 h-4 text-accent" />
            Select Your Currency:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {currencies.map((curr) => (
              <button
                key={curr.code}
                onClick={() => setSelectedCurrency(curr.code)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCurrency === curr.code
                    ? 'bg-primary text-white shadow'
                    : 'bg-ivory hover:bg-gray-100 text-charcoal/80'
                }`}
              >
                {curr.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => {
            const price = plan.prices[selectedCurrency] ?? plan.prices.USD;
            const currencySymbol = CURRENCY_SYMBOLS[selectedCurrency] || '$';
            const priceText = `${currencySymbol}${price}/month`;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between relative shadow-sm hover:shadow-xl ${
                  plan.popular 
                    ? 'border-2 border-accent shadow-gold lg:-translate-y-2' 
                    : 'border-gray-200 hover:border-accent/40'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent via-accent-light to-accent text-primary-dark font-extrabold text-[11px] uppercase tracking-wider py-1 px-4 rounded-full shadow-md border border-accent-dark/30">
                    Most Popular Choice
                  </div>
                )}

                {/* Family Plan Badge */}
                {plan.isFamilyPlan && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white font-bold text-[11px] uppercase tracking-wider py-1 px-4 rounded-full shadow border border-accent">
                    Multi-Student Savings
                  </div>
                )}

                <div className="space-y-4">
                  {/* Plan Name & Tagline */}
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-charcoal/60 mt-1 min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-4 border-y border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-serif font-black text-primary">
                        {currencySymbol}{price}
                      </span>
                      <span className="text-xs text-charcoal/60 font-medium">/ month</span>
                    </div>
                    <span className="text-[11px] text-accent-dark font-semibold block mt-1">
                      {plan.daysPerWeek} Days/Week ({plan.classesPerMonth} Classes/Mo)
                    </span>
                    <span className="text-[10px] text-charcoal/50 block">
                      ⏱️ {plan.classDurationMinutes} Minutes One-on-One Class
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
                      Package Includes:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-charcoal/80">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 mt-6 border-t border-gray-100 space-y-2.5">
                  <button
                    onClick={() => onSelectPlanTrial(plan.name)}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary-light text-white border border-accent'
                        : 'bg-ivory hover:bg-primary hover:text-white text-primary border border-primary/30'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    <span>Start Free Trial on this Plan</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppInquiry(plan.name, priceText)}
                    className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-300 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Inquiry for this Plan</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Assurance and Payment FAQ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory/80 rounded-3xl p-8 border border-accent/30 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="font-serif text-xl font-bold text-primary">
              Our Transparency & Flexibility Guarantee
            </h3>
            <p className="text-xs text-charcoal/70">
              No hidden fees, no binding lock-ins, and unconditional trial satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-charcoal/80 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-2">
              <span className="font-bold text-primary block">✨ 100% Free Trial</span>
              <p>Attend your first trial lesson before paying a single penny. Only continue if you are completely satisfied.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-2">
              <span className="font-bold text-primary block">🔄 Reschedule Missed Classes</span>
              <p>Traveling or busy? Simply notify us a few hours in advance and we will reschedule your missed session without penalty.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-2">
              <span className="font-bold text-primary block">🔒 Secure International Pay</span>
              <p>We support Credit Cards, PayPal, Stripe, Bank Wire, Remitly, Western Union, and local mobile payment options.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
