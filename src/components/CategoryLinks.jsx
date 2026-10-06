import React from 'react';
import { CATEGORY_DIRECTORY } from '../data/categoryLinks';
import { ChevronRight } from 'lucide-react';

export default function CategoryLinks() {
  return (
    <section className="bg-slate-100 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider">
            Explore All Rental Categories
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Rent cameras, outdoor gear, gaming consoles, and audio equipment in Bangalore
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CATEGORY_DIRECTORY.map((cat, idx) => (
            <div key={idx} className="space-y-2.5">
              <h4 className="text-xs font-bold text-slate-900 border-b border-slate-200 pb-1.5 uppercase tracking-wide">
                {cat.title}
              </h4>
              <ul className="space-y-1.5">
                {cat.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-xs text-slate-600 hover:text-emerald-600 transition-colors flex items-center space-x-1 group"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
