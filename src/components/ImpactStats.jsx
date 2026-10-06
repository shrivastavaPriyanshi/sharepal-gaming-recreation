import React from 'react';
import { PiggyBank, Leaf, RefreshCw, Sparkles } from 'lucide-react';

export default function ImpactStats() {
  const STATS = [
    {
      id: 1,
      value: '250Cr+',
      label: 'Saved Together',
      subtext: 'By renting instead of buying expensive gaming hardware',
      icon: PiggyBank,
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400'
    },
    {
      id: 2,
      value: '4.5M Kg',
      label: 'CO₂e Emissions Saved',
      subtext: 'Promoting sustainable circular economy & zero electronic waste',
      icon: Leaf,
      color: 'from-teal-500 to-emerald-600',
      textColor: 'text-teal-400'
    },
    {
      id: 3,
      value: '100K+',
      label: 'Products in Circulation',
      subtext: 'Active gadgets shared happily across Indian homes',
      icon: RefreshCw,
      color: 'from-emerald-600 to-slate-800',
      textColor: 'text-emerald-300'
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-extrabold px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>The SharePal Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Collective Environmental & Financial Impact
          </h2>
          <p className="text-sm text-slate-300">
            Renting gear is smarter for your wallet and kinder to the planet. Here is what we have accomplished together.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat) => {
            const IconComponent = stat.icon;

            return (
              <div 
                key={stat.id}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-8 backdrop-blur-md hover:border-emerald-500/60 transition-all duration-300 text-center space-y-4 group"
              >
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                    {stat.value}
                  </div>
                  <div className="text-base font-extrabold text-white">
                    {stat.label}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
