"use client";

import { useState, useEffect } from "react";

interface LandingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LandingPopup({ isOpen, onClose }: LandingPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure smooth animation
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className={`relative bg-gradient-to-br from-background to-background/95 border border-white/20 rounded-3xl p-8 md:p-12 max-w-2xl w-full mx-4 shadow-2xl transform transition-all duration-500 ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
        >
          <svg className="w-5 h-5 text-soft-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gold-gradient/10 border border-gold-gradient/20 rounded-full mb-6">
            <span className="text-gold-gradient font-semibold text-sm">Services</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Transform Your Leadership Journey
          </h2>

          {/* Description */}
          <div className="space-y-4 text-lg text-soft-gray leading-relaxed mb-8">
            <p>
              Ready to take your leadership to the next level? April Armstrong offers exclusive 
              <span className="text-gold-gradient font-semibold"> executive coaching</span>, 
              <span className="text-gold-gradient font-semibold"> training workshops</span>, and 
              <span className="text-gold-gradient font-semibold"> keynote talks</span> 
              designed to accelerate your success.
            </p>
            <p className="text-base">
              From Fortune 500 companies to government agencies, leaders trust April&apos;s proven 
              Day One Executive framework to deliver immediate impact.
            </p>
          </div>

          {/* Services Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/[.02] border border-white/10 rounded-xl p-4 text-center">
              <div className="w-8 h-8 bg-gold-gradient rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <p className="text-xs text-soft-gray font-medium">Executive Coaching</p>
            </div>
            <div className="bg-white/[.02] border border-white/10 rounded-xl p-4 text-center">
              <div className="w-8 h-8 bg-gold-gradient rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 18.5H3.5V22h16z"/>
                </svg>
              </div>
              <p className="text-xs text-soft-gray font-medium">Training & Workshops</p>
            </div>
            <div className="bg-white/[.02] border border-white/10 rounded-xl p-4 text-center">
              <div className="w-8 h-8 bg-gold-gradient rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              <p className="text-xs text-soft-gray font-medium">Keynote Talks</p>
            </div>
            <div className="bg-white/[.02] border border-white/10 rounded-xl p-4 text-center">
              <div className="w-8 h-8 bg-gold-gradient rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 18.5H3.5V22h16z"/>
                </svg>
              </div>
              <p className="text-xs text-soft-gray font-medium">Team Coaching</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToServices}
              className="btn-gold text-base px-8 py-4 text-lg font-semibold"
            >
              Explore Services
            </button>
            <button
              onClick={onClose}
              className="btn-outline text-base px-8 py-4 text-lg font-semibold"
            >
              Continue Reading
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-soft-gray">
              Trusted by Fortune 500 companies and government agencies for 30+ years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
