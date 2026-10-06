import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              <span>Customer Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Loved by Gamers Across India
            </h2>
          </div>

          <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-extrabold text-slate-900">4.9 / 5.0 Rating</span>
            <span className="text-xs text-slate-400">| 10,000+ Rentals</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4 relative"
            >
              <Quote className="w-8 h-8 text-emerald-100 absolute top-4 right-4 pointer-events-none" />

              <div className="space-y-3 relative z-10">
                {/* Rating */}
                <div className="flex text-amber-400 space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400" 
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center space-x-1">
                      <span>{review.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                    </h4>
                    <span className="text-xs text-slate-400">{review.location}</span>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  {review.item}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
