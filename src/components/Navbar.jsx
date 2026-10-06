import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Calendar, 
  ShoppingCart, 
  User, 
  ChevronDown, 
  X, 
  Menu 
} from 'lucide-react';
import { NAV_CATEGORIES } from '../data/categories';

export default function Navbar({ 
  selectedCity, 
  setSelectedCity, 
  rentalDates, 
  onOpenDateModal, 
  cartItemsCount, 
  onOpenCart,
  searchQuery,
  setSearchQuery
}) {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const CITIES = ['Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Pune', 'Chennai'];

  const getFormattedDayMonth = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    const day = d.getDate();
    const month = d.toLocaleString('en-US', { month: 'short' });
    
    const suffix = (day === 1 || day === 21 || day === 31) ? 'st' :
                   (day === 2 || day === 22) ? 'nd' :
                   (day === 3 || day === 23) ? 'rd' : 'th';
    return `${day}${suffix} ${month}`;
  };

  const deliveryStr = getFormattedDayMonth(rentalDates.startDate);
  const pickupStr = getFormattedDayMonth(rentalDates.endDate);

  return (
    <header className="sticky top-0 z-40 bg-[#900C27] text-white shadow-md font-sans">
      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Left: SharePal Signature Logo */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center">
              <div className="bg-[#0055FF] text-white px-3.5 py-1.5 rounded-xl flex items-center justify-center font-extrabold text-xl tracking-tight shadow-sm hover:opacity-95 transition-opacity">
                <span>Share<span className="italic font-serif font-normal">Pal</span></span>
              </div>
            </a>
          </div>

          {/* Center: Combined Pill (Location + Dates + Edit) */}
          <div className="hidden lg:flex items-center bg-white text-slate-800 rounded-full px-3.5 py-1 shadow-md border border-white/20 text-xs font-semibold space-x-2">
            
            {/* City Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center space-x-1 hover:text-slate-900 transition-colors py-1 px-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-slate-700" />
                <span className="font-bold text-slate-800">{selectedCity}</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {isCityDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 text-slate-800 animate-in fade-in duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Select City
                  </div>
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setIsCityDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center justify-between ${
                        selectedCity === city 
                          ? 'bg-rose-50 text-[#900C27] font-bold' 
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{city}</span>
                      {selectedCity === city && <span className="w-1.5 h-1.5 rounded-full bg-[#900C27]"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Vertical Divider */}
            <div className="w-px h-4 bg-slate-300"></div>

            {/* Delivery & Pickup Dates */}
            <div className="flex items-center space-x-3 px-1 text-slate-700">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span><strong className="text-slate-900">Delivery Date:</strong> {deliveryStr || '9th Oct'}</span>
              </div>

              <div className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span><strong className="text-slate-900">Pickup Date:</strong> {pickupStr || '12th Oct'}</span>
              </div>
            </div>

            {/* Edit Button */}
            <button
              onClick={onOpenDateModal}
              className="bg-[#0B1528] hover:bg-slate-900 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs transition-colors flex items-center space-x-1"
            >
              <Calendar className="w-3 h-3 text-emerald-400" />
              <span>Edit</span>
            </button>
          </div>

          {/* Right Header Actions: Search, Cart, Login */}
          <div className="flex items-center space-x-4">
            
            {/* Search Icon / Input */}
            <div className="relative flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center bg-white text-slate-800 rounded-full px-3 py-1 shadow-md animate-in fade-in duration-200">
                  <Search className="w-3.5 h-3.5 text-slate-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search PS5, Xbox, VR..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="bg-transparent text-xs text-slate-800 focus:outline-none w-36 sm:w-48 font-medium"
                  />
                  <button onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} className="ml-1 text-slate-400 hover:text-slate-600">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1.5 text-white hover:text-rose-200 transition-colors rounded-full hover:bg-white/10"
                  title="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Cart Icon */}
            <button
              onClick={onOpenCart}
              className="relative p-1.5 text-white hover:text-rose-200 transition-colors rounded-full hover:bg-white/10"
              title="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#900C27]">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* User Login */}
            <button className="flex items-center space-x-2 text-white hover:opacity-90 transition-opacity">
              <div className="w-7 h-7 rounded-full bg-white text-[#900C27] flex items-center justify-center font-bold text-xs shadow-xs">
                <User className="w-4 h-4 text-[#900C27]" />
              </div>
              <span className="hidden sm:inline text-xs font-bold tracking-tight">
                Hi, Login
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-white lg:hidden"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Category Navigation Bar */}
      <div className="bg-white border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-10 h-11 text-xs sm:text-sm font-semibold text-slate-700">
            {NAV_CATEGORIES.map((cat) => (
              <a
                key={cat.name}
                href={cat.link}
                className={`h-full flex items-center px-1 border-b-2 transition-all ${
                  cat.active 
                    ? 'border-[#900C27] text-slate-900 font-extrabold' 
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-slate-800 px-4 py-4 space-y-4 shadow-xl border-t border-slate-200 animate-in slide-in-from-top duration-200">
          
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2 text-xs">
            <div className="flex items-center justify-between font-bold text-slate-900">
              <span className="flex items-center">
                <MapPin className="w-3.5 h-3.5 text-[#900C27] mr-1" /> {selectedCity}
              </span>
              <button 
                onClick={onOpenDateModal}
                className="bg-[#0B1528] text-white text-[10px] px-2.5 py-1 rounded-full font-bold"
              >
                Edit Dates
              </button>
            </div>
            <div className="text-slate-600 space-y-0.5 pt-1 border-t border-slate-200 text-[11px]">
              <div><strong>Delivery:</strong> {deliveryStr}</div>
              <div><strong>Pickup:</strong> {pickupStr}</div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
              Top Categories
            </div>
            {NAV_CATEGORIES.map((cat) => (
              <a
                key={cat.name}
                href={cat.link}
                className={`block px-3 py-2 rounded-lg text-xs font-semibold ${
                  cat.active ? 'bg-rose-50 text-[#900C27] font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
