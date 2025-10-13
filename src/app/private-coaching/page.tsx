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

export default function PrivateCoaching() {
  useEffect(() => {
    let isInitialized = false;
    let checkInterval: NodeJS.Timeout;

    // Initialize Calendly widget when component mounts
    const initCalendly = () => {
      if (window.Calendly && !isInitialized) {
        const widgetElement = document.getElementById('calendly-widget');
        if (widgetElement && widgetElement.children.length === 0) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/dayoneexecutive/discovery-call?back=1&month=2025-09',
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
        <div className="mx-auto max-w-7xl px-6 py-4">
          {/* Logo and Home Link */}
          <div className="flex items-center justify-between mb-3">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/logos/key.png" alt="Site logo" width={32} height={32} className="object-contain group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold tracking-tight group-hover:text-gold-gradient transition-colors duration-300">Day One Executive</span>
            </Link>
            <Link href="/" className="text-sm text-soft-gray hover:text-gold-gradient transition-colors duration-300 flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Home
            </Link>
          </div>
          
          {/* Services Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-2">
            <Link href="/executive-coaching" className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[.03] text-soft-gray hover:border-gold-gradient/50 hover:text-gold-gradient hover:bg-white/[.08] transition-all duration-300">
              Executive Coaching
            </Link>
            <Link href="/training-workshops" className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[.03] text-soft-gray hover:border-gold-gradient/50 hover:text-gold-gradient hover:bg-white/[.08] transition-all duration-300">
              Training & Workshops
            </Link>
            <Link href="/keynote-talks" className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[.03] text-soft-gray hover:border-gold-gradient/50 hover:text-gold-gradient hover:bg-white/[.08] transition-all duration-300">
              Keynote Talks
            </Link>
            <Link href="/team-coaching" className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[.03] text-soft-gray hover:border-gold-gradient/50 hover:text-gold-gradient hover:bg-white/[.08] transition-all duration-300">
              Strategic Advisory
            </Link>
            <Link href="/private-coaching" className="text-xs px-3 py-1.5 rounded-full border border-gold-gradient bg-gold-gradient/10 text-gold-gradient font-medium hover:bg-gold-gradient/20 transition-all duration-300">
              Private Coaching
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-end), transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-start), transparent 70%)" }} />
          
          <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16 pb-8 md:pb-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-4 py-2 mb-6">
                <span className="flex items-center gap-1" aria-hidden style={{ color: "var(--gold-start)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span className="text-sm font-medium">Private Coaching</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Propel Your Career <span className="text-gold-gradient">(and Life)</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-soft-gray max-w-4xl mx-auto leading-relaxed">
                Private Coaching
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative border-t border-white/10 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-start), transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-end), transparent 70%)" }} />
          
          <div className="relative mx-auto max-w-7xl px-6 pt-8 md:pt-12 pb-16 md:pb-24">
            {/* Introduction Section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 max-w-4xl mx-auto">
                April has helped dozens of executives cultivate <span className="text-gold-gradient">executive presence</span>, navigate sensitive leadership challenges and complex transitions, and change their lives.
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6 text-lg text-soft-gray leading-relaxed">
                <p className="text-xl">
                  Executives reach out to April for private coaching when they prefer to leverage coaching support outside of an employer&apos;s offering. She is known for a compassionate-yet-direct style.
                </p>
                
                <p className="text-xl">
                  April uses a powerful combination of active inquiry and is one of the first coaches in the United States trained and certified in the ICF-accredited Multiple Brain Integration Technique (mBIT), based on neuroscience breakthroughs over the last decade.
                </p>
                
                <p className="text-xl font-medium text-foreground">
                  Everything gets easier when you are clear and congruent: You move forward with astonishing efficiency and surprising ease.
                </p>
                
                <p className="text-xl">
                  Book a call today with April to confidentially explore possibilities with private coaching.
                </p>
              </div>
            </div>

            {/* Image and Approach Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Private Coaching Image */}
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center h-full">
                  <div className="relative w-full max-w-md mx-auto h-80 flex items-center justify-center">
                    <Image 
                      src="/logos/06_AprilArmstrongbyStephanieRichardson-7367.jpg" 
                      alt="Private Coaching" 
                      width={400}
                      height={500}
                      className="object-contain max-w-full max-h-full rounded-lg"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <div className="text-2xl font-bold text-gold-gradient mb-2">Compassionate & Direct</div>
                    <p className="text-sm text-soft-gray font-medium">Confidential Private Coaching</p>
                  </div>
                </div>
              </div>

              {/* Coaching Approach */}
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8 h-full">
                  <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                    Advanced Techniques
                  </h3>
                  <div className="space-y-6 text-lg text-soft-gray leading-relaxed">
                    <p>
                      April combines active inquiry with cutting-edge neuroscience through her certification in Multiple Brain Integration Technique (mBIT), helping executives achieve clarity and congruence for maximum effectiveness.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mt-8 items-center">
                      <div className="text-center">
                        <Image 
                          src="https://mbraining.it/wp-content/uploads/2023/05/coach-mbraining.webp" 
                          alt="mBraining Coach Certification" 
                          width={128}
                          height={128}
                          className="w-full max-w-32 mx-auto"
                        />
                      </div>
                      <div className="text-center">
                        <Image 
                          src="https://centerforexecutivecoaching.com/wp-content/uploads/ICF_CCE_Mark_Color-300x270.png" 
                          alt="ICF CCE Continuing Coach Education" 
                          width={96}
                          height={96}
                          className="w-full max-w-24 mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  THE THINGS PEOPLE SAY
                </h3>
                <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="#DDBE70" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg text-soft-gray leading-relaxed mb-4">
                        &ldquo;I just want to express my gratitude for being my coach throughout the last several months.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="#DDBE70" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg text-soft-gray leading-relaxed mb-4">
                        &ldquo;I saw results in record time.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="#DDBE70" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg text-soft-gray leading-relaxed mb-4">
                        &ldquo;April helped me work through some specific challenges I was facing in lightning speed.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="#DDBE70" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg text-soft-gray leading-relaxed mb-4">
                        &ldquo;a depth of experience and intellect that is hard to find.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendly Booking Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Book Your Confidential Discovery Call
                  </h3>
                  <p className="text-lg text-soft-gray">
                    Schedule a private consultation to explore your coaching possibilities
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
                Ready to Transform Your Career and Life?
              </h3>
              <p className="text-lg text-soft-gray mb-8 max-w-3xl mx-auto">
                Book a confidential call with April to explore how private coaching can propel your success with clarity and congruence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-gold text-base px-10 py-4 text-lg font-semibold">
                  Book a Confidential Call
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
