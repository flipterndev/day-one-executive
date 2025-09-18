"use client";

import Image from "next/image";
import Link from "next/link";
import MediaGallery from "@/components/MediaGallery";
import { mediaItems } from "@/content/media";
import FeaturedIn from "@/components/FeaturedIn";
import PreorderButton from "@/components/PreorderModal";
import Testimonials from "@/components/Testimonials";
import { testimonials } from "@/content/testimonials";
import MailerLiteForm from "@/components/MailerLiteForm";
import OrganizationsModal from "@/components/OrganizationsModal";
import LandingPopup from "@/components/LandingPopup";
import { useState, useEffect } from "react";

export default function Home() {
  const [isOrganizationsModalOpen, setIsOrganizationsModalOpen] = useState(false);
  const [isLandingPopupOpen, setIsLandingPopupOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('hasSeenLandingPopup');
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsLandingPopupOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseLandingPopup = () => {
    setIsLandingPopupOpen(false);
    // Mark as seen in localStorage
    localStorage.setItem('hasSeenLandingPopup', 'true');
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logos/key.png" alt="Site logo" width={32} height={32} className="object-contain" />
            <span className="font-semibold tracking-tight">Day One Executive</span>
          </div>
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
          <div className="flex items-center gap-3">
            <PreorderButton variant="header" />
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            {/* Book cover - shown above content on mobile, right side on desktop */}
            <div className="relative mb-8 md:hidden">
              <div className="relative mx-auto h-[420px] w-[300px]">
                <Image src="https://m.media-amazon.com/images/I/71r8X3TjpYL._SY522_.jpg" alt="Day One Executive book cover" fill priority className="rounded-md shadow-2xl object-cover" style={{ filter: "drop-shadow(0 0 24px rgba(221, 190, 112, 0.45))" }} />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 items-center gap-12">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-3 py-1">
                  <span className="flex items-center gap-0.5" aria-hidden style={{ color: "var(--gold-start)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </span>
                  <span className="text-xs text-soft-gray">Rated by Top Executives!</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gold-gradient">Lead With Impact From Day One</h1>
                <p className="mt-4 text-base md:text-lg text-soft-gray max-w-prose">
                  Proven strategies to deliver impact, inspire others, and sustain success from the very start.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <PreorderButton variant="hero" />
                  <a href="https://read.amazon.com/sample/B0BYW6DVTQ?clientId=share" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    Preview
                  </a>
                </div>
                <p className="mt-4 text-xs text-soft-gray">Available in hardcover, ebook, and audiobook</p>
                <div className="mt-4 flex items-center gap-4">
          <Image
                    src="https://www.thebookfest.com/wp-content/uploads/2022/03/The-BookFest-First-Place-Book-Award.png"
                    alt="The BookFest First Place Book Award"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
              <Image
                    src="https://literarytitan.com/wp-content/uploads/2020/06/literary-titan-gold-book-award-icon.png"
                    alt="Literary Titan Gold Book Award"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                  <Image
                    src="https://goodybusinessbookawards.com/wp-content/uploads/2021/12/goody-business-book-awards-logo-winner-rgb-1.png"
                    alt="Goody Business Book Awards Winner"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="relative mx-auto h-[520px] w-[360px]">
                  <Image src="https://m.media-amazon.com/images/I/71r8X3TjpYL._SY522_.jpg" alt="Day One Executive book cover" fill priority className="rounded-md shadow-2xl object-cover" style={{ filter: "drop-shadow(0 0 24px rgba(221, 190, 112, 0.45))" }} />
                </div>
              </div>
            </div>
          </div>
          <FeaturedIn compact />
        </section>

        {/* Features */}
        <section id="features" className="relative border-t border-white/10 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-end), transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-start), transparent 70%)" }} />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">The Day One Executive Framework</h2>
            <p className="mt-2 text-sm text-soft-gray max-w-prose text-center mx-auto">Three pillars to deliver outcomes, build trust, and sustain performance.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="group rounded-2xl border border-white/10 bg-white/[.03] hover:bg-white/[.05] transition shadow-sm overflow-hidden">
                <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }} />
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-2.5 py-1 text-sm md:text-base font-bold">Generate Results</div>
                  <p className="mt-3 text-sm italic text-soft-gray">Deliver impact that gets noticed.</p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Know the Driving Force</div>
                        <div className="text-sm text-soft-gray">Understand the core motivations and strategic priorities that propel a business forward.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Master the Golden Pyramid</div>
                        <div className="text-sm text-soft-gray">Know your unique value and align it with what drives the business.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Know Your Value</div>
                        <div className="text-sm text-soft-gray">Confidently advocate for yourself in career advancement and compensation discussions.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Be Strategic</div>
                        <div className="text-sm text-soft-gray">Maximize career advantage and organizational impact.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Build Decision Intelligence</div>
                        <div className="text-sm text-soft-gray">Make smart, timely choices that accelerate momentum instead of stalling it.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Be a Change Agent</div>
                        <div className="text-sm text-soft-gray">Navigate uncertainty, lead transformation, and move teams forward with confidence.</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group rounded-2xl border border-white/10 bg-white/[.03] hover:bg-white/[.05] transition shadow-sm overflow-hidden">
                <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }} />
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-2.5 py-1 text-sm md:text-base font-bold">Nurture Relationships</div>
                  <p className="mt-3 text-sm italic text-soft-gray">Influence, connect, and build trust that lasts.</p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Know Thyself</div>
                        <div className="text-sm text-soft-gray">Self-awareness is the foundation of executive success.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Know Others</div>
                        <div className="text-sm text-soft-gray">Deeply understand underlying motivations and priorities of key stakeholders.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Create a High Value Network</div>
                        <div className="text-sm text-soft-gray">Create meaningful connections that expand opportunities and amplify your reach.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Be Accountable</div>
                        <div className="text-sm text-soft-gray">Own your actions and model excellence so others rise to the standard you set.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Raise the Bar</div>
                        <div className="text-sm text-soft-gray">Inspire higher performance by setting clear expectations and living them yourself.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Don’t Derail</div>
                        <div className="text-sm text-soft-gray">Recognize and avoid the behaviors that sideline promising leaders.</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group rounded-2xl border border-white/10 bg-white/[.03] hover:bg-white/[.05] transition shadow-sm overflow-hidden">
                <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }} />
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-2.5 py-1 text-sm md:text-base font-bold">Cultivate Resilience</div>
                  <p className="mt-3 text-sm italic text-soft-gray">Stay strong, centered, and unstoppable.</p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Be the CEO of Your Life</div>
                        <div className="text-sm text-soft-gray">Treat your career like an enterprise: manage priorities, time, and direction intentionally.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Prize Your Time</div>
                        <div className="text-sm text-soft-gray">Treat time as a strategic asset.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Be Unstoppable</div>
                        <div className="text-sm text-soft-gray">Align personal resilience with strategic self-awareness to overcome obstacles and seize career-defining opportunities.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Walk Through Fire</div>
                        <div className="text-sm text-soft-gray">Build the grit to endure challenges, setbacks, and high-stakes pressure.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Banish the Imposter</div>
                        <div className="text-sm text-soft-gray">Silence self-doubt and replace it with unshakable confidence.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Care for Yourself</div>
                        <div className="text-sm text-soft-gray">Protect your health and vitality so you can perform at your peak long-term.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Commit to You</div>
                        <div className="text-sm text-soft-gray">Ground yourself in a personal vision and values that carry you through every season.</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Media */}
        <section id="media" className="relative border-t border-white/10 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-start), transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-end), transparent 70%)" }} />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Hear It Firsthand</h2>
              <a href="/media" className="text-xs hover:underline underline-offset-4 text-soft-gray">View all</a>
            </div>
            <p className="mt-3 text-sm text-soft-gray max-w-prose">Conversations and appearances that bring The Day One Executive principles to life.</p>
            <div className="mt-8">
              <MediaGallery items={mediaItems} />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="relative border-t border-white/10 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-end), transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-start), transparent 70%)" }} />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What leaders are saying</h2>
            <div className="mt-10">
              <Testimonials items={testimonials} />
            </div>
          </div>
        </section>

        {/* Author */}
        <section id="author" className="relative border-t border-white/10 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-start), transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-end), transparent 70%)" }} />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="relative h-56 w-56 md:h-72 md:w-72">
                <Image src="/logos/Author_7410.jpg" alt="Author headshot" fill className="rounded-full object-contain" />
              </div>
              <div className="mt-4 space-y-0.5 text-center" style={{ color: "var(--gold-start)" }}>
                <div className="text-xl md:text-2xl font-bold">April Armstrong</div>
                <div className="italic text-base md:text-lg">CEO, AHA Insight</div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About the Author</h2>
              <p className="mt-4 text-sm md:text-base text-soft-gray max-w-prose">
                April Armstrong is a trusted advisor to senior government and private sector officials. She is the founder and Chief Executive Officer of AHA Insight, a strategic consulting firm that supports top government officials and corporate executives leading transformational change.
              </p>
              <p className="mt-4 text-sm md:text-base text-soft-gray max-w-prose">
                April has worked extensively with senior executives from the White House, nearly every department and agency of the Executive Branch—including the U.S. Intelligence Community, and numerous private sector corporations. Her career focus has helping often divergent stakeholders achieve complex deals valued in the billions of dollars and strike enduring partnerships to see those deals through and deliver results that last.
              </p>
              <p className="mt-4 text-sm md:text-base text-soft-gray max-w-prose">
                Prior to forming her own company, April rose through the ranks to become one of the youngest—and first female—executives at the nation&apos;s largest employee-owned research and engineering company, which subsequently became a Fortune 500 company. April earned a Bachelor of Arts degree in communications and French from James Madison University; and a Master of Science degree in management information systems from The George Washington University in Washington, D.C. She has extensive training in negotiation and mediation in the United States and in Europe, and is a certified executive and career coach.
              </p>
            </div>
          </div>
        </section>

        {/* Go Beyond the Book */}
        <section id="services-section" className="relative border-t border-white/10 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-start), transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-end), transparent 70%)" }} />
          
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="max-w-5xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-4 py-2 mb-6">
                  <span className="text-sm font-medium" style={{ color: "var(--gold-start)" }}>
                    Services
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  Go Beyond the Book:<br />
                  <span className="text-gold-gradient">Fastrack Your Success</span>
                </h2>
                <p className="text-lg md:text-xl text-soft-gray max-w-4xl mx-auto leading-relaxed">
                  Turn proven leadership principles into performance and immediate impact with coaching, training, custom workshops and keynote talks—starting now.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="service-card group relative bg-white/[.02] border border-white/10 rounded-xl p-6 hover:bg-white/[.04] hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">Executive Coaching</h3>
                  <p className="text-sm text-soft-gray">One-on-one leadership development for senior executives and emerging leaders.</p>
                </div>

                <div className="service-card group relative bg-white/[.02] border border-white/10 rounded-xl p-6 hover:bg-white/[.04] hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">Custom Workshops</h3>
                  <p className="text-sm text-soft-gray">Tailored training programs designed for your organization's specific needs.</p>
                </div>

                <div className="service-card group relative bg-white/[.02] border border-white/10 rounded-xl p-6 hover:bg-white/[.04] hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">Keynote Talks</h3>
                  <p className="text-sm text-soft-gray">Inspiring presentations that transform audiences and drive organizational change.</p>
                </div>

                <div className="service-card group relative bg-white/[.02] border border-white/10 rounded-xl p-6 hover:bg-white/[.04] hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400/20 to-green-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">Strategic Advisory</h3>
                  <p className="text-sm text-soft-gray">High-level consulting for complex organizational challenges and transformation.</p>
                </div>
              </div>
              
              {/* Featured Quote */}
              <div className="relative bg-gradient-to-r from-white/[.03] to-white/[.01] border border-white/10 rounded-2xl p-8 md:p-12 mb-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-start to-transparent"></div>
                <div className="relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-start/20 to-gold-end/20 flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gold-start">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                      &ldquo;Even in this age of AI, successful organizations will engineer the &apos;people&apos; side of success as much as the technical and business aspects. They will not leave it to chance.&rdquo;
                    </blockquote>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground text-lg">April Armstrong</div>
                      <div className="text-soft-gray">Author of The Day One Executive and CEO of AHA Insight</div>
                    </div>
                    <div className="hidden md:block w-16 h-16 rounded-full bg-gradient-to-br from-gold-start/10 to-gold-end/10 flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-start">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="text-center bg-gradient-to-br from-white/[.02] to-white/[.01] border border-white/10 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to Level Up Your Leadership?
                </h3>
                <p className="text-lg text-soft-gray mb-8 max-w-3xl mx-auto">
                  What will be most needed in the new era? Leaders at all levels and layers able to think and lead like executives. The best organizations will start NOW to embed executive capacity at every layer of their organization.
                </p>
                <p className="text-base text-soft-gray mb-8">
                  Book a call today to see whether April Armstrong and The Day One Executive leadership development services are a fit for your team's needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    type="button" 
                    onClick={() => setIsOrganizationsModalOpen(true)}
                    className="btn-gold text-base px-10 py-4 text-lg font-semibold"
                  >
                    For Organizations
                  </button>
                  <Link href="/private-coaching" className="btn-ghost text-base px-10 py-4 text-lg font-semibold">
                    For Individuals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author gallery */}
        <section id="author-photos" className="border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="relative w-full h-56 sm:h-64 md:h-[45vh]">
              <Image
                src="https://static.wixstatic.com/media/740402_50847c79352c4cccb42cfa25a3a50914~mv2.png/v1/crop/x_0,y_116,w_916,h_676/fill/w_600,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/740402_50847c79352c4cccb42cfa25a3a50914~mv2.png"
                alt="Author speaking on stage"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-56 sm:h-64 md:h-[45vh]">
              <Image
                src="/logos/IMG_6514.jpg"
                alt="April Armstrong photo"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-56 sm:h-64 md:h-[45vh]">
              <Image
                src="https://static.wixstatic.com/media/740402_a98f1ac4f28a4a3ebc4d59b4e8322b82~mv2.jpg/v1/fill/w_600,h_393,al_c,lg_1,q_80,enc_avif,quality_auto/740402_a98f1ac4f28a4a3ebc4d59b4e8322b82~mv2.jpg"
                alt="Keynote audience photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Organizations Impacted */}
        <section id="organizations" className="relative border-t border-white/10 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-end), transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, var(--gold-start), transparent 70%)" }} />
          
          {/* Header - Constrained */}
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Organizations impacted</h2>
            <p className="mt-3 text-sm text-soft-gray max-w-prose mx-auto text-center">Trusted by leaders across government and industry to deliver transformational results.</p>
          </div>

          {/* Government Institutions - Card Layout */}
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="text-center text-sm tracking-wide uppercase text-soft-gray mb-12">Government Institutions</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Seal_of_the_Superior_Court_of_California%2C_County_of_Los_Angeles.png", 
                  alt: "Superior Court of California, County of Los Angeles",
                  name: "Superior Court of California",
                  impact: "Led executive leadership development for judicial administrators, enhancing court system efficiency and public service delivery."
                },
                { 
                  src: "https://cdn.freebiesupply.com/logos/large/2x/department-of-commerce-logo-png-transparent.png", 
                  alt: "U.S. Department of Commerce",
                  name: "U.S. Department of Commerce",
                  impact: "Facilitated strategic partnerships and complex deal negotiations valued in the billions, driving economic growth initiatives."
                },
                { 
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png", 
                  alt: "NASA",
                  name: "NASA",
                  impact: "Supported leadership transitions and organizational transformation during critical mission phases and technological advancement periods."
                },
                { 
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Seal_of_the_U.S._National_Security_Agency.svg/2048px-Seal_of_the_U.S._National_Security_Agency.svg.png", 
                  alt: "U.S. National Security Agency",
                  name: "U.S. National Security Agency",
                  impact: "Provided executive coaching and strategic advisory services to senior intelligence officials leading high-stakes operations."
                },
                { 
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Seal_of_the_United_States_Department_of_Defense.svg/1200px-Seal_of_the_United_States_Department_of_Defense.svg.png", 
                  alt: "U.S. Department of Defense",
                  name: "U.S. Department of Defense",
                  impact: "Guided military leaders through complex organizational changes and strategic planning initiatives during critical defense modernization efforts."
                },
                { 
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/US-WhiteHouse-Logo.svg/2560px-US-WhiteHouse-Logo.svg.png", 
                  alt: "The White House",
                  name: "The White House",
                  impact: "Advised senior officials on executive leadership strategies and stakeholder management for high-priority policy initiatives."
                },
                { 
                  src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/United_States_Department_of_Transportation_seal.svg", 
                  alt: "U.S. Department of Transportation",
                  name: "U.S. Department of Transportation",
                  impact: "Supported infrastructure investment strategies and public-private partnerships that enhanced transportation systems nationwide."
                },
                { 
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Seal_of_the_Central_Intelligence_Agency.svg/2048px-Seal_of_the_Central_Intelligence_Agency.svg.png", 
                  alt: "Central Intelligence Agency",
                  name: "Central Intelligence Agency",
                  impact: "Provided leadership development for intelligence officers and supported organizational transformation initiatives."
                },
                { 
                  src: "https://upload.wikimedia.org/wikipedia/commons/2/27/Seal_of_the_Office_of_the_Director_of_National_Intelligence.svg", 
                  alt: "Office of the Director of National Intelligence",
                  name: "Office of the Director of National Intelligence",
                  impact: "Facilitated inter-agency coordination and strategic planning for national intelligence community initiatives."
                },
              ].map((org, i) => (
                <div key={`${org.alt}-${i}`} className="org-impact-card group relative bg-white/[.02] border border-white/10 rounded-lg p-6 hover:bg-white/[.04] hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="logo-container h-16 w-16 flex-shrink-0 relative">
                      <Image
                        src={org.src}
                        alt={org.alt}
                        fill
                        className={`object-contain ${(
                          org.alt === "U.S. Department of Commerce" ||
                          org.alt === "U.S. Department of Transportation"
                        ) ? "opacity-60" : "grayscale opacity-60"}`}
                        style={(
                          org.alt === "U.S. Department of Commerce" ||
                          org.alt === "U.S. Department of Transportation"
                        ) ? { filter: "brightness(0) invert(1)" } : undefined}
                      />
                    </div>
                    <div className="org-content flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">
                        {org.name}
                      </h3>
                      <p className="text-sm text-soft-gray leading-relaxed">
                        {org.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Universities - Card Layout */}
          <div className="relative mx-auto max-w-6xl px-6 mt-20">
            <div className="text-center text-sm tracking-wide uppercase text-soft-gray mb-12">Academic Institutions</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  src: "https://cdn.freebiesupply.com/logos/large/2x/georgia-state-university-logo-png-transparent.png", 
                  alt: "Georgia State University",
                  name: "Georgia State University",
                  impact: "Delivered executive leadership programs for university administrators and faculty leaders, enhancing institutional effectiveness and student outcomes."
                },
                { 
                  src: "https://identity.usc.edu/wp-content/uploads/2022/08/TheSeal.png", 
                  alt: "University of Southern California",
                  name: "University of Southern California",
                  impact: "Conducted leadership development workshops for academic deans and department heads, fostering innovation in higher education administration."
                },
                { 
                  src: "https://brand.psu.edu/images/backgrounds/veritcal-1-mark_registered.png", 
                  alt: "Penn State University",
                  name: "Penn State University",
                  impact: "Supported strategic planning initiatives and leadership transitions within the university's executive administration and research programs."
                },
                { 
                  src: "https://d2jyir0m79gs60.cloudfront.net/college/logos/James_Madison_University.gif", 
                  alt: "James Madison University",
                  name: "James Madison University",
                  impact: "Facilitated organizational development and change management for university leadership during major campus expansion and modernization efforts."
                },
                { 
                  src: "https://logos-world.net/wp-content/uploads/2022/02/Virginia-Tech-Logo-2006.png", 
                  alt: "Virginia Tech",
                  name: "Virginia Tech",
                  impact: "Provided executive coaching and strategic advisory services to university administrators, supporting research excellence and academic innovation initiatives."
                },
              ].map((org, i) => (
                <div key={`${org.alt}-${i}`} className="org-impact-card group relative bg-white/[.02] border border-white/10 rounded-lg p-6 hover:bg-white/[.04] hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="logo-container h-16 w-16 flex-shrink-0 relative">
                      <Image
                        src={org.src}
                        alt={org.alt}
                        fill
                        className={`object-contain ${(
                          org.alt === "Georgia State University" ||
                          org.alt === "University of Southern California" ||
                          org.alt === "Virginia Tech"
                        ) ? "opacity-60" : "grayscale opacity-60"}`}
                        style={(
                          org.alt === "Georgia State University" ||
                          org.alt === "University of Southern California" ||
                          org.alt === "Virginia Tech"
                        ) ? { filter: "brightness(0) invert(1)" } : undefined}
                      />
                    </div>
                    <div className="org-content flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">
                        {org.name}
                      </h3>
                      <p className="text-sm text-soft-gray leading-relaxed">
                        {org.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="border-t border-white/10 relative overflow-hidden">
          {/* Content */}
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24 text-center">
            <div className="max-w-2xl mx-auto">
              <MailerLiteForm />
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

      {/* Organizations Modal */}
      <OrganizationsModal 
        isOpen={isOrganizationsModalOpen} 
        onClose={() => setIsOrganizationsModalOpen(false)} 
      />

      {/* Landing Popup */}
      <LandingPopup 
        isOpen={isLandingPopupOpen} 
        onClose={handleCloseLandingPopup} 
      />
    </div>
  );
}
