"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

// Declare Calendly global
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill: object;
        utm: object;
      }) => void;
    };
  }
}

export default function TeamCoaching() {
  useEffect(() => {
    let isInitialized = false;
    let checkInterval: NodeJS.Timeout;

    // Initialize Calendly widget when component mounts
    const initCalendly = () => {
      if (window.Calendly && !isInitialized) {
        const widgetElement = document.getElementById('calendly-widget');
        if (widgetElement && widgetElement.children.length === 0) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/dayoneexecutive/consensus-strategy-discovery-call-corporate?month=2025-09',
            parentElement: widgetElement,
            prefill: {},
            utm: {}
          });
          isInitialized = true;
        }
      }
    };

    // Check if Calendly is already loaded
    if (window.Calendly) {
      initCalendly();
    } else {
      // Wait for Calendly to load
      checkInterval = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkInterval);
          initCalendly();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => {
        if (checkInterval) {
          clearInterval(checkInterval);
        }
      }, 10000);
    }

    // Cleanup function
    return () => {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logos/key.png" alt="Site logo" width={32} height={32} className="object-contain" />
            <span className="font-semibold tracking-tight">Day One Executive</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-4">
            <a href="https://www.instagram.com/aprilarmstronglive" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.facebook.com/aprilarmstrong.LIVE/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/80 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.64L18 10h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://x.com/ahaconsult" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white/80 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ahainsight/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/80 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
              </svg>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-end), transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-start), transparent 70%)" }} />
          
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-4 py-2 mb-6">
                <span className="flex items-center gap-1" aria-hidden style={{ color: "var(--gold-start)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span className="text-sm font-medium">Team Coaching</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                From <span className="text-gold-gradient">Stalled to Stellar</span>: Team Coaching
              </h1>
              
              <p className="text-xl md:text-2xl text-soft-gray max-w-4xl mx-auto leading-relaxed">
                Transform your teams into powerhouses of possibility
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative border-t border-white/10 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-start), transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-end), transparent 70%)" }} />
          
          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            {/* Introduction Section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 max-w-4xl mx-auto">
                Only <span className="text-gold-gradient">30% of teams</span> are considered high performing. Teams with effective collaboration are 5x more successful than those that wing it.
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6 text-lg text-soft-gray leading-relaxed">
                <p className="text-xl">
                  Chances are, you can further streamline your bottom line and have happier staff by adding team coaching into your leadership development investment mix.
                </p>
                
                <p className="text-xl">
                  April Armstrong's Day One Executive team coaching programs are born from decades of lived experience, coupled with leading edge research.
                </p>
                
                <p className="text-xl font-medium text-foreground">
                  Negative dynamics do not have to have the final word: You can move a team from stuck to stoked, celebrating a huge shared victory—where everybody wins (there's no better feeling).
                </p>
              </div>
            </div>

            {/* Image and Approach Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Team Coaching Image */}
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center h-full">
                  <div className="relative w-full max-w-md mx-auto h-80 flex items-center justify-center">
                    <img 
                      src="/logos/03_AprilArmstrongbyStephanieRichardson-7576.jpg" 
                      alt="Team Coaching" 
                      className="object-contain max-w-full max-h-full rounded-lg"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <div className="text-2xl font-bold text-gold-gradient mb-2">Team Transformation</div>
                    <p className="text-sm text-soft-gray font-medium">From Stuck to Stoked</p>
                  </div>
                </div>
              </div>

              {/* Approach */}
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8 h-full">
                  <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                    Our Approach
                  </h3>
                  <div className="space-y-6 text-lg text-soft-gray leading-relaxed">
                    <p>
                      Bite-sized workshops coupled with quarterly or semi-annual deeper dives build capacity to turnaround the 7 deadly dynamics according to the research.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gold-gradient mb-2">Bite-sized</div>
                        <p className="text-xs text-soft-gray font-medium">Workshops</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gold-gradient mb-2">Quarterly</div>
                        <p className="text-xs text-soft-gray font-medium">Deep Dives</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 7 Deadly Dynamics Section */}
            <div className="mb-16">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  The <span className="text-gold-gradient">7 Deadly Dynamics</span>
                </h3>
                <p className="text-lg text-soft-gray max-w-3xl mx-auto mb-8">
                  According to research, these are the key areas teams must address to achieve high performance
                </p>
                <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full"></div>
              </div>
              
              {/* Hexagonal Layout */}
              <div className="relative max-w-5xl mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-gradient opacity-5 blur-3xl"></div>
                </div>
                
                {/* Top Row - 3 items */}
                <div className="flex justify-center gap-8 mb-8">
                  <div className="group relative bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-6 text-center hover:border-gold-gradient/30 hover:bg-white/[.04] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold-gradient/10 w-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gold-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="#DDBE70" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">Role Clarity</h4>
                      <p className="text-xs text-soft-gray">Clear responsibilities</p>
                    </div>
                  </div>
                  
                  <div className="group relative bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-6 text-center hover:border-gold-gradient/30 hover:bg-white/[.04] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold-gradient/10 w-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gold-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="#DDBE70" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">Constructive Conflict</h4>
                      <p className="text-xs text-soft-gray">Healthy debate</p>
                    </div>
                  </div>
                  
                  <div className="group relative bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-6 text-center hover:border-gold-gradient/30 hover:bg-white/[.04] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold-gradient/10 w-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gold-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="#DDBE70" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">Accountability</h4>
                      <p className="text-xs text-soft-gray">Ownership</p>
                    </div>
                  </div>
                </div>
                
                {/* Middle Row - 2 items */}
                <div className="flex justify-center gap-16 mb-8">
                  <div className="group relative bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-6 text-center hover:border-gold-gradient/30 hover:bg-white/[.04] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold-gradient/10 w-56">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gold-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="#DDBE70" viewBox="0 0 24 24">
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 18.5H3.5V22h16z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">Collaboration & Relational Coordination</h4>
                      <p className="text-xs text-soft-gray">Seamless teamwork</p>
                    </div>
                  </div>
                  
                  <div className="group relative bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-6 text-center hover:border-gold-gradient/30 hover:bg-white/[.04] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold-gradient/10 w-56">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gold-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="#DDBE70" viewBox="0 0 24 24">
                          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">Communication & Team Norms</h4>
                      <p className="text-xs text-soft-gray">Clear channels</p>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Row - 2 items */}
                <div className="flex justify-center gap-8">
                  <div className="group relative bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-6 text-center hover:border-gold-gradient/30 hover:bg-white/[.04] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold-gradient/10 w-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gold-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="#DDBE70" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">Trust & Cohesion</h4>
                      <p className="text-xs text-soft-gray">Strong bonds</p>
                    </div>
                  </div>
                  
                  <div className="group relative bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-6 text-center hover:border-gold-gradient/30 hover:bg-white/[.04] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold-gradient/10 w-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gold-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="#DDBE70" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">Adaptability</h4>
                      <p className="text-xs text-soft-gray">Flexibility</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Requirement Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  Leadership Commitment Required
                </h3>
                <div className="text-center">
                  <p className="text-lg text-soft-gray leading-relaxed mb-6">
                    One word of caution: team coaching requires cooperation and engagement of the team leader, who has a disproportionate influence on a team's success. But the best team leaders are committed to the team's success so are all in (yes, this is a litmus test – don't book a call if you're not willing to dive in yourself).
                  </p>
                  <p className="text-xl font-medium text-foreground">
                    Reach out today to discover how April can introduce leading-edge tools and coaching techniques to help your teams transform into powerhouses of possibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Calendly Booking Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Book Your Discovery Call
                  </h3>
                  <p className="text-lg text-soft-gray">
                    Schedule a consultation to discuss your team coaching needs
                  </p>
                </div>
                <div 
                  id="calendly-widget"
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="border-t border-white/10 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-end), transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-start), transparent 70%)" }} />
          
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="text-center bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Teams?
              </h3>
              <p className="text-lg text-soft-gray mb-8 max-w-3xl mx-auto">
                Book a call with April to explore how team coaching can turn your teams from stalled to stellar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-gold text-base px-10 py-4 text-lg font-semibold">
                  Book a Call with April
                </button>
                <Link href="/" className="btn-ghost text-base px-10 py-4 text-lg font-semibold">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-xs text-soft-gray flex items-center justify-between">
          <span>© {new Date().getFullYear()} Day One Executive</span>
          <a href="#" className="hover:underline underline-offset-4">Privacy</a>
        </div>
      </footer>

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
