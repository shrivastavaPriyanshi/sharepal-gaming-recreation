import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/faqs';

export default function FaqAccordion() {
  const [openFaqId, setOpenFaqId] = useState(1); // default first item open

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Everything you need to know about renting gaming gadgets, zero deposit, delivery, and safety.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div 
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-emerald-300 bg-emerald-50/20 shadow-xs' 
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="flex items-center space-x-3">
                    <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-emerald-100/50 animate-in fade-in duration-200">
                    <p className="pl-5 border-l-2 border-emerald-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
