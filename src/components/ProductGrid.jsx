import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { 
  ArrowUpDown, 
  SearchX, 
  Gamepad2, 
  Tv, 
  Box, 
  Glasses, 
  MonitorPlay, 
  Disc, 
  Disc3, 
  Layers,
  Smile
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';

export default function ProductGrid({ 
  products, 
  rentalDays, 
  wishlist, 
  onToggleWishlist, 
  cartItems, 
  onAddToCart,
  searchQuery,
  activeCategory,
  setActiveCategory
}) {
  const [sortBy, setSortBy] = useState('popular');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Gamepad2': return <Smile className="w-6 h-6 text-blue-500" />;
      case 'Tv': return <Tv className="w-6 h-6 text-slate-700" />;
      case 'Box': return <Box className="w-6 h-6 text-slate-700" />;
      case 'Glasses': return <Glasses className="w-6 h-6 text-slate-700" />;
      case 'MonitorPlay': return <MonitorPlay className="w-6 h-6 text-slate-700" />;
      case 'Disc': return <Disc className="w-6 h-6 text-slate-700" />;
      case 'Disc3': return <Disc3 className="w-6 h-6 text-slate-700" />;
      default: return <Layers className="w-6 h-6 text-slate-700" />;
    }
  };

  // Filter products by category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.dailyPrice - b.dailyPrice;
    if (sortBy === 'price-high') return b.dailyPrice - a.dailyPrice;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewsCount - a.reviewsCount;
  });

  const cartItemIds = new Set(cartItems.map(item => item.id));
  const wishlistSet = new Set(wishlist);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Subcategory Sidebar */}
        <aside className="w-full lg:w-44 shrink-0 bg-white rounded-2xl p-3 border border-slate-200/80 shadow-2xs space-y-2 overflow-x-auto lg:overflow-x-visible flex lg:flex-col gap-2 no-scrollbar">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full flex-col items-center justify-center p-3 rounded-2xl transition-all text-center flex shrink-0 min-w-[90px] ${
                  isActive
                    ? 'bg-blue-50/70 border-2 border-blue-500 text-blue-600 font-extrabold shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200/70 border border-transparent text-slate-700 font-semibold'
                }`}
              >
                <div className="p-2 rounded-xl bg-white shadow-2xs mb-1.5 flex items-center justify-center">
                  {getCategoryIcon(category.icon)}
                </div>
                <span className="text-xs leading-tight">{category.label}</span>
                {isActive && (
                  <div className="w-5 h-0.5 bg-blue-500 rounded-full mt-1"></div>
                )}
              </button>
            );
          })}
        </aside>

        {/* Main Product Area */}
        <div className="flex-1 w-full space-y-4">
          
          {/* Section Sub-header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Gaming Gadgets On Rent
              </h2>
            </div>

            <div className="flex items-center space-x-4 text-xs font-semibold text-slate-500">
              <span>Total items: <strong className="text-slate-900">{sortedProducts.length} items</strong></span>
              
              {/* Sort Select */}
              <div className="flex items-center space-x-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-700">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#900C27]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer text-xs"
                >
                  <option value="popular">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Cards Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  rentalDays={rentalDays}
                  isWishlisted={wishlistSet.has(product.id)}
                  onToggleWishlist={onToggleWishlist}
                  isInCart={cartItemIds.has(product.id)}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            /* Empty Fallback State */
            <div className="py-16 text-center bg-white rounded-2xl border border-dashed border-slate-200 p-8 space-y-3 max-w-md mx-auto my-6">
              <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-[#900C27]">
                <SearchX className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-900">No Gaming Gear Found</h3>
              <p className="text-xs text-slate-500">
                We couldn't find any products matching your search query or selected subcategory.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
