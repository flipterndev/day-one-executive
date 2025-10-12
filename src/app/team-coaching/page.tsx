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
            <Link href="/keynote-talks" className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[.03] text-soft-gray hover:border-gold-gradient/50 hover:text-gold-gradient hover:bg-white/[.08] transition-all duration-300">
              Keynote Talks
            </Link>
            <Link href="/team-coaching" className="text-xs px-3 py-1.5 rounded-full border border-gold-gradient bg-gold-gradient/10 text-gold-gradient font-medium hover:bg-gold-gradient/20 transition-all duration-300">
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
                  <span className="text-sm font-medium">Strategic Advisory</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                From <span className="text-gold-gradient">Stalled to Stellar</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-soft-gray max-w-4xl mx-auto leading-relaxed">
                Strategic Advisory
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
                Great results happen by design.
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6 text-lg text-soft-gray leading-relaxed">
                <p className="text-xl">
                  Everybody knows that project failure is no fun, but it can also be costly. Despite advancements in project management, 70% of projects still fail to meet objectives or experience major cost overruns.
                </p>
                
                <p className="text-xl">
                  High-stakes initiatives share one common under-appreciated risk factor: People. Success requires the cooperation, if not the active investment, of multiple parties—some of whom have different and evening divergent interests. For executives, it means managing expectations up, down, and all around.
                </p>
                
                <p className="text-xl">
                  April has led dozens of high-stakes initiatives over the course of her career spanning multiple sectors and valued in the billions of dollars—and has advised dozens more executives leading complex, high-consequence projects and deals.
                </p>
                
                <p className="text-xl">
                  With decades of experience, April is able to quickly spot high-risk areas in your initiative, on which success and failure ultimately hinges. Her pragmatic, research-based stakeholder engagement advisory can turn your project around and get it on stable ground. If the winds are in your favor, you have the chance to build real momentum and become a huge success where everybody wins (feels pretty good).
                </p>
                
                <p className="text-xl font-medium text-foreground">
                  It seems soft, but it&apos;s really science. April blends a unique background in technology combined with enterprise-scale strategy, systems integration, management and execution, interpersonal communication, negotiation, mediation, and consensus strategy. She is accredited in public relations and crisis communications, and brings systematic approaches that help you quantitatively and qualitatively assess perceptions and power dynamics and be efficient and strategic with influence.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mb-16">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gold-gradient opacity-5 blur-3xl"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Stat 1 */}
                  <div className="group relative bg-gradient-to-br from-white/[.05] to-white/[.02] border border-white/10 rounded-2xl p-8 text-center hover:border-gold-gradient/30 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-gradient/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="text-6xl md:text-7xl font-bold text-gold-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                        240%
                      </div>
                      <div className="h-1 w-16 bg-gold-gradient mx-auto mb-4 rounded-full"></div>
                      <p className="text-sm text-soft-gray leading-relaxed">
                        The average overrun of change projects that fail to achieve objectives.
                      </p>
                    </div>
                  </div>
                  
                  {/* Stat 2 */}
                  <div className="group relative bg-gradient-to-br from-white/[.05] to-white/[.02] border border-white/10 rounded-2xl p-8 text-center hover:border-gold-gradient/30 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-gradient/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="text-6xl md:text-7xl font-bold text-gold-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                        3x
                      </div>
                      <div className="h-1 w-16 bg-gold-gradient mx-auto mb-4 rounded-full"></div>
                      <p className="text-sm text-soft-gray leading-relaxed">
                        Less return on investment experienced by organizations that do not excel in stakeholder engagement.
                      </p>
                    </div>
                  </div>
                  
                  {/* Stat 3 */}
                  <div className="group relative bg-gradient-to-br from-white/[.05] to-white/[.02] border border-white/10 rounded-2xl p-8 text-center hover:border-gold-gradient/30 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-gradient/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="text-6xl md:text-7xl font-bold text-gold-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                        5x
                      </div>
                      <div className="h-1 w-16 bg-gold-gradient mx-auto mb-4 rounded-full"></div>
                      <p className="text-sm text-soft-gray leading-relaxed">
                        More cost to re-establish a damaged relationship with a customer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image and Approach Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Team Coaching Image */}
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center h-full">
                  <div className="relative w-full max-w-md mx-auto h-80 flex items-center justify-center">
                    <Image 
                      src="/logos/03_AprilArmstrongbyStephanieRichardson-7576.jpg" 
                      alt="Team Coaching" 
                      width={400}
                      height={500}
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

            {/* Leadership Requirement Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  Leadership Commitment Required
                </h3>
                <div className="text-center">
                  <p className="text-lg text-soft-gray leading-relaxed mb-6">
                    One word of caution: team coaching requires cooperation and engagement of the team leader, who has a disproportionate influence on a team&apos;s success. But the best team leaders are committed to the team&apos;s success so are all in (yes, this is a litmus test – don&apos;t book a call if you&apos;re not willing to dive in yourself).
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
                    Schedule a consultation to discuss your team coaching needs.
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
