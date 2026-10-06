import React, { useState } from 'react';
import { Calendar as CalendarIcon, X, Clock, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

export default function DateSelectorModal({ isOpen, onClose, rentalDates, setRentalDates }) {
  if (!isOpen) return null;

  // Local temp state
  const [startDate, setStartDate] = useState(rentalDates.startDate);
  const [days, setDays] = useState(rentalDates.days);

  const DURATION_PRESETS = [
    { label: '3 Days', count: 3, popular: true, discount: 'Save 20%' },
    { label: '7 Days (1 Week)', count: 7, popular: false, discount: 'Save 35%' },
    { label: '15 Days', count: 15, popular: false, discount: 'Save 50%' },
    { label: '30 Days (1 Month)', count: 30, popular: false, discount: 'Save 65%' },
  ];

  const formatDateString = (dateObj) => {
    return dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  };

  const calculateEndDate = (start, durationDays) => {
    const end = new Date(start);
    end.setDate(end.getDate() + (durationDays - 1));
    return end;
  };

  const handleApply = () => {
    const startObj = new Date(startDate);
    const endObj = calculateEndDate(startObj, days);
    
    setRentalDates({
      startDate: startDate,
      days: days,
      endDate: endObj.toISOString().split('T')[0],
      formattedRange: `${formatDateString(startObj)} - ${formatDateString(endObj)}`
    });
    
    onClose();
  };

  const startObj = new Date(startDate);
  const endObj = calculateEndDate(startObj, days);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#900C27] text-white px-6 py-4.5 flex items-center justify-between border-b border-rose-900/30">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-white/10 rounded-xl text-white flex items-center justify-center border border-white/20">
              <CalendarIcon className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg tracking-tight text-white">Select Rental Period</h3>
              <p className="text-[11px] text-rose-100/80 font-medium">Doorstep delivery & pickup dates</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          
          {/* Quick Presets */}
          <div>
            <label className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2.5">
              Select Tenure
            </label>
            <div className="grid grid-cols-2 gap-3">
              {DURATION_PRESETS.map((preset) => (
                <button
                  key={preset.count}
                  onClick={() => setDays(preset.count)}
                  className={`p-3 rounded-2xl border text-left transition-all relative ${
                    days === preset.count 
                      ? 'border-2 border-[#00B67A] bg-emerald-50/80 ring-2 ring-[#00B67A]/20 shadow-xs' 
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs sm:text-sm font-black ${days === preset.count ? 'text-slate-900' : 'text-slate-700'}`}>
                      {preset.label}
                    </span>
                    {days === preset.count && (
                      <CheckCircle2 className="w-4 h-4 text-[#00B67A] shrink-0" />
                    )}
                  </div>
                  <span className="text-[11px] font-extrabold text-[#009664] mt-0.5 block">
                    {preset.discount}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Delivery & Pickup Dates Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                Delivery Date
              </label>
              <input 
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:border-[#00B67A] focus:bg-white transition-all cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                Pickup Date
              </label>
              <div className="w-full px-3 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-600 flex items-center justify-between">
                <span>{formatDateString(endObj)}</span>
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Total Rental Tenure</span>
              <span className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5">
                {formatDateString(startObj)} to {formatDateString(endObj)} ({days} Days)
              </span>
            </div>
            <span className="bg-emerald-100 text-[#009664] text-[11px] font-black px-2.5 py-1 rounded-full border border-emerald-200">
              ⚡ Free Delivery
            </span>
          </div>

          {/* Logistics Note */}
          <div className="flex items-start space-x-2 text-xs text-slate-500 bg-slate-50/60 p-2.5 rounded-xl border border-slate-200/60">
            <AlertCircle className="w-4 h-4 text-[#00B67A] shrink-0 mt-0.5" />
            <span className="text-[11px] leading-tight">
              Delivered by 10 AM on start date and picked up after 8 PM on end date.
            </span>
          </div>

          {/* Apply Green CTA Button */}
          <button
            onClick={handleApply}
            className="w-full bg-[#00B67A] hover:bg-[#009D69] text-slate-950 font-black text-xs sm:text-sm py-3.5 rounded-xl shadow-md shadow-[#00B67A]/25 transition-all flex items-center justify-center space-x-2 active:scale-98"
          >
            <span>Update Dates & Recalculate Rates</span>
            <Sparkles className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
