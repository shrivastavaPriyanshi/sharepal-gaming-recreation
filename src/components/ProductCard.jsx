import React, { useState } from 'react';
import { 
  Star, 
  Heart, 
  Check, 
  ShoppingBag, 
  Zap, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

export default function ProductCard({ 
  product, 
  rentalDays, 
  isWishlisted, 
  onToggleWishlist, 
  isInCart, 
  onAddToCart 
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate pricing based on rental duration presets
  const getDiscountMultiplier = (days) => {
    if (days >= 30) return 0.35; // 65% off
    if (days >= 15) return 0.50; // 50% off
    if (days >= 7)  return 0.65; // 35% off
    if (days >= 3)  return 0.80; // 20% off
    return 1.0;
  };

  const discountMultiplier = getDiscountMultiplier(rentalDays);
  const effectiveDailyRate = Math.round(product.dailyPrice * discountMultiplier);
  const totalRentalPrice = effectiveDailyRate * rentalDays;
  const originalTotalPrice = product.originalPrice * rentalDays;
  const savingsPercent = Math.round(((originalTotalPrice - totalRentalPrice) / originalTotalPrice) * 100);

  return (
    <div 
      className="product-card bg-white rounded-3xl border border-slate-200/90 overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 group relative p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Bar inside Card: Trending Badge + Wishlist */}
      <div className="flex items-center justify-between mb-3 z-10">
        <span className="border border-amber-500 text-amber-700 bg-amber-50/80 text-[11px] font-extrabold px-2.5 py-0.5 rounded-lg shadow-2xs">
          {product.badge || 'Trending'}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className={`p-1.5 rounded-full transition-all duration-200 ${
            isWishlisted 
              ? 'bg-rose-50 text-rose-500 shadow-xs scale-110' 
              : 'bg-slate-100 text-slate-400 hover:text-rose-500 hover:bg-white shadow-2xs'
          }`}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>
      </div>

      {/* Product Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-white rounded-2xl flex items-center justify-center p-2 mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover / InCart Floating Overlay Green Button matching screenshot */}
        {isInCart && (
          <div className="absolute inset-0 bg-white/40 backdrop-blur-2xs flex items-center justify-center animate-in fade-in duration-200">
            <button
              onClick={() => onAddToCart(product)}
              className="bg-[#65E300] hover:bg-[#58C700] text-slate-950 text-xs font-black px-4 py-2.5 rounded-full shadow-lg flex items-center space-x-2 transform scale-105 border border-black/10"
            >
              <div className="w-6 h-6 bg-slate-950 text-white rounded-lg flex items-center justify-center text-xs">
                🛍️
              </div>
              <span>Go to Cart</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        
        <div className="space-y-1.5">
          {/* Rating */}
          <div className="flex items-center space-x-1.5 text-xs text-slate-500">
            <div className="flex items-center space-x-1 font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
            <span className="text-slate-400">({product.reviewsCount} reviews)</span>
          </div>

          {/* Title */}
          <h3 className="font-extrabold text-slate-900 text-sm line-clamp-2 leading-snug group-hover:text-[#900C27] transition-colors">
            {product.title}
          </h3>

          {/* Features */}
          <div className="flex flex-wrap gap-1 pt-1">
            {product.features.slice(0, 2).map((feat, idx) => (
              <span key={idx} className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Rent CTA */}
        <div className="pt-3 border-t border-slate-100 space-y-2">
          
          <div className="flex items-baseline justify-between">
            <div>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-xl font-black text-slate-900">
                  ₹{totalRentalPrice.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 line-through">
                  ₹{originalTotalPrice.toLocaleString()}
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 block">
                for {rentalDays} {rentalDays === 1 ? 'day' : 'days'} (₹{effectiveDailyRate}/day)
              </span>
            </div>

            <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              {savingsPercent}% OFF
            </span>
          </div>

          {/* Rent Button */}
          <button
            onClick={() => onAddToCart(product)}
            className={`w-full py-2.5 px-4 rounded-xl font-black text-xs flex items-center justify-center space-x-2 transition-all duration-200 ${
              isInCart
                ? 'bg-slate-900 text-emerald-400'
                : 'bg-[#900C27] hover:bg-[#780A20] text-white shadow-md shadow-[#900C27]/20 active:scale-98'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>In Cart</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Rent Now</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
