import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Star, 
  Sparkles, 
  Calendar, 
  ChevronRight, 
  Award
} from 'lucide-react';

export default function HeroSection({ selectedCity, rentalDates, onOpenDateModal }) {
  return (
    <section className="bg-slate-100 pt-4 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-3">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-slate-500 font-medium px-1">
          <a href="#" className="hover:text-slate-900 transition-colors">Home</a>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <a href="#" className="hover:text-slate-900 transition-colors">{selectedCity}</a>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#900C27] font-semibold">Gaming Gadgets on Rent</span>
        </nav>

        {/* SharePal Red Hero Banner Card */}
        <div className="bg-gradient-to-r from-[#900C27] via-[#B80D35] to-[#7D0A22] rounded-3xl p-6 sm:p-10 text-white relative shadow-xl border border-white/10 overflow-hidden">
          
          {/* Subtle Glow Overlays */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00FF87]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Headline, Subtitle, Benefit Badges */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Top Tag Pill */}
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/25 text-white text-xs font-bold px-3 py-1.5 rounded-xl backdrop-blur-md shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00FF87]" />
                <span>India's Most Trusted Lifestyle Gear Rental Platform</span>
              </div>

              {/* Main Heading with Green Accent on City */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.15] text-white">
                Rent Gaming Consoles in{' '}
                <span className="text-[#00FF87] font-black drop-shadow-xs">
                  {selectedCity}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-rose-100 font-normal leading-relaxed max-w-xl">
                Get the latest PS5 Consoles, Xbox Series X, Meta Quest 3 VR, and 4K Racing Wheels delivered to your doorstep. Zero Security Deposit • 100% Sanitized & Quality Tested.
              </p>

              {/* Benefit Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-xl shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#00FF87] shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-white leading-tight">Zero Deposit</div>
                    <div className="text-[10px] text-rose-200">No cash lock-in</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-xl shadow-2xs">
                  <Truck className="w-4 h-4 text-[#00FF87] shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-white leading-tight">Free Delivery</div>
                    <div className="text-[10px] text-rose-200">Above ₹1,200</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-xl shadow-2xs">
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300 shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-white leading-tight">4.9 ★ Rating</div>
                    <div className="text-[10px] text-rose-200">10k+ Reviews</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-xl shadow-2xs">
                  <Award className="w-4 h-4 text-[#00FF87] shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-white leading-tight">100% Sanitized</div>
                    <div className="text-[10px] text-rose-200">12-Point Check</div>
                  </div>
                </div>

              </div>

              {/* Brand logos bar */}
              <div className="flex items-center space-x-3 pt-2 text-[11px] font-extrabold uppercase tracking-widest text-rose-200/80">
                <span>PlayStation • Meta • Xbox • Logitech</span>
              </div>

            </div>

            {/* Right Column: Date-Selection Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-100 space-y-4">
                
                {/* Header inside Date Card */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#00B67A] flex items-center justify-center font-bold">
                      <Calendar className="w-5 h-5 text-[#00B67A]" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Rental Date Selection</h3>
                      <p className="text-[11px] text-slate-500 font-medium">Select delivery and pickup dates</p>
                    </div>
                  </div>
                </div>

                {/* Selected Date Box */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Selected Duration</span>
                    <span className="bg-emerald-100 text-[#009664] text-[10px] font-black px-2 py-0.5 rounded-full">
                      {rentalDates.days} Days Tenure
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center justify-between">
                    <span>{rentalDates.formattedRange}</span>
                    <span className="text-xs font-bold text-emerald-600">Save up to 35%</span>
                  </div>
                </div>

                {/* Duration Preset Quick Chips */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
                  <div className="bg-slate-50 hover:bg-slate-100 p-2 rounded-xl border border-slate-200 text-slate-800">
                    <span className="block text-slate-900 font-extrabold">3 Days</span>
                    <span className="text-[10px] text-emerald-600 font-bold">Standard</span>
                  </div>
                  <div className="bg-slate-50 hover:bg-slate-100 p-2 rounded-xl border border-slate-200 text-slate-800">
                    <span className="block text-slate-900 font-extrabold">7 Days</span>
                    <span className="text-[10px] text-emerald-600 font-bold">Save 35%</span>
                  </div>
                  <div className="bg-slate-50 hover:bg-slate-100 p-2 rounded-xl border border-slate-200 text-slate-800">
                    <span className="block text-slate-900 font-extrabold">15 Days</span>
                    <span className="text-[10px] text-emerald-600 font-bold">Save 50%</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={onOpenDateModal}
                  className="w-full bg-[#00B67A] hover:bg-[#009D69] text-slate-950 font-black py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md shadow-[#00B67A]/25 transition-all flex items-center justify-center space-x-2 active:scale-98"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>Change Dates & Recalculate Rates</span>
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
