import React from 'react';
import { Mail, Phone, Heart, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-slate-800">
        
        {/* Column 1: SharePal */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Sharepal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Why SharePal</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Sitemap</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">CarePal Shield</a></li>
          </ul>
        </div>

        {/* Column 2: Become a Pal */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Become a Pal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Sharepal for Creators</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-1.5 py-0.5 rounded font-bold">Hiring</span></a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Sharepal for Brands</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Asset Funding Program <span className="text-amber-400 text-[10px] font-bold">New</span></a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Rent Your Gear <span className="text-emerald-400 text-[10px] font-bold">Earn</span></a></li>
          </ul>
        </div>

        {/* Column 3: Information */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Information</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">How it works?</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Instant Verification</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Life at Sharepal</a></li>
          </ul>
        </div>

        {/* Column 4: Policies */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Policies</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms & Condition</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Shipping policy</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Damage Policy</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 5: Need Help */}
        <div className="space-y-3 col-span-2 md:col-span-1">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Need Help</h4>
          <ul className="space-y-2.5">
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors block font-semibold text-white">
                Contact Customer Support
              </a>
            </li>
            <li className="flex items-center space-x-2 text-slate-300">
              <Mail className="w-4 h-4 text-emerald-400" />
              <a href="mailto:care@sharepal.in" className="hover:text-emerald-400 transition-colors">
                care@sharepal.in
              </a>
            </li>
            <li className="flex items-center space-x-2 text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+91 80 4718 8899</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
        <div>
          © 2026. SWNAC E-Kiraya Services Pvt Ltd. All rights reserved.
        </div>
        <div className="flex items-center space-x-1">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          <span>for India</span>
        </div>
      </div>
    </footer>
  );
}
