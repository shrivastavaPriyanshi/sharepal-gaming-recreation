import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DateSelectorModal from './components/DateSelectorModal';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import FaqAccordion from './components/FaqAccordion';
import Testimonials from './components/Testimonials';
import ImpactStats from './components/ImpactStats';
import CategoryLinks from './components/CategoryLinks';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { PRODUCTS } from './data/products';
import { CheckCircle2 } from 'lucide-react';

function GamingPageContent() {
  const [selectedCity, setSelectedCity] = useState('Bangalore');
  
  // Date state
  const todayStr = new Date().toISOString().split('T')[0];
  const [rentalDates, setRentalDates] = useState({
    startDate: todayStr,
    days: 3,
    endDate: new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0],
    formattedRange: '10 Oct - 12 Oct'
  });

  // Subcategory & Search states
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Wishlist & Cart state
  const [wishlist, setWishlist] = useState([1, 3]);
  const [cartItems, setCartItems] = useState([PRODUCTS[0]]);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Toggle wishlist
  const handleToggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      showToast('Removed from wishlist');
    } else {
      setWishlist([...wishlist, productId]);
      showToast('Added to wishlist ❤️');
    }
  };

  // Add/Remove from cart
  const handleAddToCart = (product) => {
    const isAlreadyInCart = cartItems.some(item => item.id === product.id);
    if (isAlreadyInCart) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
      showToast('Removed item from cart');
    } else {
      setCartItems([...cartItems, product]);
      showToast(`Added "${product.title}" to cart! 🛒`);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    showToast('Removed item from cart');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs sm:text-sm font-bold px-4 py-3 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center space-x-2.5 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header / Navbar */}
      <Navbar
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        rentalDates={rentalDates}
        onOpenDateModal={() => setIsDateModalOpen(true)}
        wishlistCount={wishlist.length}
        cartItemsCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Section: Hero Banner & Date Card */}
        <HeroSection
          selectedCity={selectedCity}
          rentalDates={rentalDates}
          onOpenDateModal={() => setIsDateModalOpen(true)}
        />

        {/* Section: Subcategory Sidebar & Product Grid */}
        <ProductGrid
          products={PRODUCTS}
          rentalDays={rentalDates.days}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Section: FAQ Accordion */}
        <FaqAccordion />

        {/* Section: Customer Testimonials */}
        <Testimonials />

        {/* Section: Impact Statistics */}
        <ImpactStats />

        {/* Section: Category Directory Links */}
        <CategoryLinks />

      </main>

      {/* Section: Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <DateSelectorModal
        isOpen={isDateModalOpen}
        onClose={() => setIsDateModalOpen(false)}
        rentalDates={rentalDates}
        setRentalDates={setRentalDates}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        rentalDays={rentalDates.days}
      />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GamingPageContent />} />
      <Route path="/bangalore/gaming-gadgets-on-rent" element={<GamingPageContent />} />
      <Route path="*" element={<GamingPageContent />} />
    </Routes>
  );
}
