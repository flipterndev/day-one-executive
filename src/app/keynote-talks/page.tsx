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

export default function KeynoteTalks() {
  useEffect(() => {
    let isInitialized = false;
    let checkInterval: NodeJS.Timeout;

    // Initialize Calendly widget when component mounts
    const initCalendly = () => {
      if (window.Calendly && !isInitialized) {
        const widgetElement = document.getElementById('calendly-widget');
        if (widgetElement && widgetElement.children.length === 0) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/dayoneexecutive/keynote-speaking-discovery-call?month=2025-09',
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
          <nav className="flex flex-wrap items-center gap-2">
            <Link href="/executive-coaching" className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[.03] text-soft-gray hover:border-gold-gradient/50 hover:text-gold-gradient hover:bg-white/[.08] transition-all duration-300">
              Executive Coaching
            </Link>
            <Link href="/training-workshops" className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[.03] text-soft-gray hover:border-gold-gradient/50 hover:text-gold-gradient hover:bg-white/[.08] transition-all duration-300">
              Training & Workshops
            </Link>
            <Link href="/keynote-talks" className="text-xs px-3 py-1.5 rounded-full border border-gold-gradient bg-gold-gradient/10 text-gold-gradient font-medium hover:bg-gold-gradient/20 transition-all duration-300">
              Keynote Talks
            </Link>
            <Link href="/team-coaching" className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[.03] text-soft-gray hover:border-gold-gradient/50 hover:text-gold-gradient hover:bg-white/[.08] transition-all duration-300">
              Strategic Advisory
            </Link>
            <Link href="/private-coaching" className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[.03] text-soft-gray hover:border-gold-gradient/50 hover:text-gold-gradient hover:bg-white/[.08] transition-all duration-300">
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
                <span className="flex items-center gap-2" aria-hidden style={{ color: "var(--gold-start)" }}>
                  <Image src="/logos/key.png" alt="Key icon" width={16} height={16} className="object-contain" />
                  <span className="text-sm font-medium">Keynote Talks</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="text-gold-gradient">Ignite Possibility</span>—at Scale
              </h1>
              
              <p className="text-xl md:text-2xl text-soft-gray max-w-4xl mx-auto leading-relaxed">
                Inspire, uplift, and rally your audience to a greater future
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
                April Armstrong&apos;s Day One Executive keynote talks have inspired <span className="text-gold-gradient">thousands of people</span> from dozens of stages as a keynote speaker across the United States and in Europe including at Harvard and West Point.
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6 text-lg text-soft-gray leading-relaxed">
                <p className="text-xl">
                  April&apos;s energy, wit, and vulnerability rally audiences to a greater future. Dynamic, interactive, and relevant, April works with you to customize her message for your event&apos;s purpose and to tap relevance from your audience&apos;s perspectives.
                </p>
                
                <p className="text-xl font-medium text-foreground">
                  Book a call today with April to galvanize the future you know is possible.
                </p>
              </div>
            </div>

            {/* Video and Credentials Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Harvard Speaking Video */}
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                    Watch April Speak at Harvard
                  </h3>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      src="https://www.youtube.com/embed/re3tDxPqcEk?start=307&autoplay=0&rel=0&modestbranding=1"
                      title="April Armstrong speaking at Harvard"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Speaking Credentials */}
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8 h-full">
                  <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                    Speaking Credentials
                  </h3>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gold-gradient mb-3">1000+</div>
                      <p className="text-sm text-soft-gray font-medium">People Inspired</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gold-gradient mb-3">50+</div>
                      <p className="text-sm text-soft-gray font-medium">Stages Across US & Europe</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gold-gradient mb-3">Harvard</div>
                      <p className="text-sm text-soft-gray font-medium">University</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gold-gradient mb-3">West Point</div>
                      <p className="text-sm text-soft-gray font-medium">Military Academy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Showcase */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-gold-gradient mb-2">Dynamic Speaker</div>
                  <p className="text-sm text-soft-gray font-medium">Inspiring Audiences Across the Globe</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Image 
                      src="/logos/04_April Armstrong at Westpoint with Buzz Aldrin.jpg" 
                      alt="April Armstrong at West Point with Buzz Aldrin" 
                      width={300}
                      height={192}
                      className="object-cover w-full h-48 rounded-lg"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      West Point
                    </div>
                  </div>
                  <div className="relative">
                    <Image 
                      src="/logos/04_April at Harvard_Crowd.png" 
                      alt="April Armstrong speaking at Harvard" 
                      width={300}
                      height={192}
                      className="object-cover w-full h-48 rounded-lg"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      Harvard
                    </div>
                  </div>
                  <div className="relative">
                    <Image 
                      src="/logos/04_April_JMU_CrowdShot.jpg" 
                      alt="April Armstrong speaking at JMU" 
                      width={300}
                      height={192}
                      className="object-cover w-full h-48 rounded-lg"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      JMU
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
                        &ldquo;… incredible energy and such a powerful method of delivering a talk.&rdquo;
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
                        &ldquo;Your inspirational presentation will not leave my mind!&rdquo;
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
                        &ldquo;Thank you for the stellar presentation you gave. We have received fantastic feedback. YOU ROCK!!!!&rdquo;
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
                        &ldquo;Pure gold~I have seen her change the entire feeling in a room of leaders.&rdquo;
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
                    Book Your Discovery Call
                  </h3>
                  <p className="text-lg text-soft-gray">
                    Schedule a consultation to discuss your keynote speaking needs.
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
                Ready to Ignite Your Audience?
              </h3>
              <p className="text-lg text-soft-gray mb-8 max-w-3xl mx-auto">
                Book a call with April to discuss how her keynote talks can inspire and galvanize your organization.
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
