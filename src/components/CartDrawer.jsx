import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ShieldCheck, Tag, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveFromCart, rentalDays }) {
  if (!isOpen) return null;

  const [coupon, setCoupon] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponSuccess, setCouponSuccess] = useState('');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Price calculations
  const getDiscountMultiplier = (days) => {
    if (days >= 30) return 0.35;
    if (days >= 15) return 0.50;
    if (days >= 7)  return 0.65;
    if (days >= 3)  return 0.80;
    return 1.0;
  };

  const mult = getDiscountMultiplier(rentalDays);

  const subtotal = cartItems.reduce((acc, item) => {
    const daily = Math.round(item.dailyPrice * mult);
    return acc + (daily * rentalDays);
  }, 0);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'SHAREPAL' || coupon.trim().toUpperCase() === 'EARLYBIRD15') {
      setAppliedDiscount(300);
      setCouponSuccess('Coupon SHAREPAL applied! ₹300 discount added.');
    } else {
      setCouponSuccess('Invalid code. Try "SHAREPAL" for ₹300 OFF!');
      setAppliedDiscount(0);
    }
  };

  const finalTotal = Math.max(0, subtotal - appliedDiscount);

  const handleCheckout = () => {
    setIsOrderPlaced(true);
    setTimeout(() => {
      setIsOrderPlaced(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="absolute inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <h3 className="font-extrabold text-lg">Your Rental Cart ({cartItems.length})</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Body */}
          {isOrderPlaced ? (
            <div className="p-8 text-center my-auto space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Rental Request Received!</h3>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Thank you! Our team in Bangalore will contact you shortly for doorstep delivery confirmation. Zero Deposit • Pay on Delivery.
              </p>
            </div>
          ) : cartItems.length > 0 ? (
            <>
              {/* Item List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-slate-100">
                {cartItems.map((item) => {
                  const itemDaily = Math.round(item.dailyPrice * mult);
                  const itemTotal = itemDaily * rentalDays;

                  return (
                    <div key={item.id} className="pt-4 first:pt-0 flex items-center justify-between gap-4">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-16 h-16 object-cover rounded-xl border border-slate-200" 
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{item.title}</h4>
                        <span className="text-[11px] text-slate-500 block">
                          ₹{itemDaily}/day × {rentalDays} days
                        </span>
                        <span className="text-xs font-extrabold text-emerald-600">
                          ₹{itemTotal.toLocaleString()}
                        </span>
                      </div>
                      <button 
                        onClick={() => onRemoveFromCart(item.id)}
                        className="p-2 text-slate-400 hover:text-rose-500 rounded-lg transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Footer Summary & Checkout */}
              <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-4">
                
                {/* Coupon input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Coupon Code (e.g. SHAREPAL)"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-white text-xs border border-slate-200 rounded-xl focus:outline-none uppercase font-bold"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="bg-slate-900 text-white px-3 py-2 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
                  >
                    Apply
                  </button>
                </form>

                {couponSuccess && (
                  <p className={`text-[11px] font-bold ${appliedDiscount > 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                    {couponSuccess}
                  </p>
                )}

                {/* Subtotal calculation */}
                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200 pt-3">
                  <div className="flex justify-between">
                    <span>Subtotal ({rentalDays} Days)</span>
                    <span className="font-bold text-slate-900">₹{subtotal.toLocaleString()}</span>
                  </div>
                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Promo Discount</span>
                      <span>-₹{appliedDiscount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>Delivery Fee</span>
                    <span className="text-emerald-600 font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Security Deposit</span>
                    <span className="text-emerald-600 font-bold">₹0 (ZERO)</span>
                  </div>
                  <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                    <span>Total Amount Payable</span>
                    <span className="text-emerald-600 text-base">₹{finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Guarantee badge */}
                <div className="flex items-center space-x-2 text-[11px] text-slate-500 bg-emerald-50 border border-emerald-200/60 p-2 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Sanitized & Quality Tested • Pay on Delivery</span>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Proceed to Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="p-8 text-center my-auto space-y-3">
              <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">Your Cart is Empty</h3>
              <p className="text-xs text-slate-500">Explore gaming consoles and add your favorites!</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
