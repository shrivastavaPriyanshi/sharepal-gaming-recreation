import React from 'react';
import { 
  Gamepad2, 
  Tv, 
  Box, 
  Glasses, 
  MonitorPlay, 
  Disc, 
  Disc3, 
  Layers 
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';

export default function CategoryTabs({ activeCategory, setActiveCategory, productCounts }) {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Gamepad2': return <Gamepad2 className="w-4 h-4" />;
      case 'Tv': return <Tv className="w-4 h-4" />;
      case 'Box': return <Box className="w-4 h-4" />;
      case 'Glasses': return <Glasses className="w-4 h-4" />;
      case 'MonitorPlay': return <MonitorPlay className="w-4 h-4" />;
      case 'Disc': return <Disc className="w-4 h-4" />;
      case 'Disc3': return <Disc3 className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-3.5 overflow-x-auto no-scrollbar scroll-smooth">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            const count = productCounts[category.id] || 0;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 scale-102 ring-2 ring-emerald-400/50'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/60'
                }`}
              >
                <span className={isActive ? 'text-slate-950' : 'text-slate-500'}>
                  {getCategoryIcon(category.icon)}
                </span>
                <span>{category.label}</span>
                <span 
                  className={`text-[11px] font-extrabold px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
