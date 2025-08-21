import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import MediaGallery from "@/components/MediaGallery";
import { mediaItems } from "@/content/media";
import FeaturedIn from "@/components/FeaturedIn";
import PreorderButton from "@/components/PreorderModal";
import Testimonials from "@/components/Testimonials";
import { testimonials } from "@/content/testimonials";

export default function Home() {
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
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-2 items-center gap-12">
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
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gold-gradient">Lead with impact from day one</h1>
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
            <div className="relative">
              <div className="relative mx-auto h-[420px] w-[300px] md:h-[520px] md:w-[360px]">
                <Image src="https://m.media-amazon.com/images/I/71r8X3TjpYL._SY522_.jpg" alt="Day One Executive book cover" fill priority className="rounded-md shadow-2xl object-cover" style={{ filter: "drop-shadow(0 0 24px rgba(221, 190, 112, 0.45))" }} />
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
                        <div className="text-sm font-medium">The Golden Pyramid</div>
                        <div className="text-sm text-soft-gray">Know your unique value and align it with what drives the business.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Decision Intelligence</div>
                        <div className="text-sm text-soft-gray">Make smart, timely choices that accelerate momentum instead of stalling it.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Change Agent</div>
                        <div className="text-sm text-soft-gray">Navigate uncertainty, lead transformation, and move teams forward with confidence.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Operate with Urgency</div>
                        <div className="text-sm text-soft-gray">Execute quickly, without sacrificing quality, so results compound fast.</div>
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
                        <div className="text-sm font-medium">High-Value Network</div>
                        <div className="text-sm text-soft-gray">Create meaningful connections that expand opportunities and amplify your reach.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Executive Presence</div>
                        <div className="text-sm text-soft-gray">Exude confidence, clarity, and authority — whether you’re in the boardroom or on Zoom.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Accountability</div>
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
                        <div className="text-sm font-medium">CEO of Your Life</div>
                        <div className="text-sm text-soft-gray">Treat your career like an enterprise: manage priorities, time, and direction intentionally.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Walking Through Fire</div>
                        <div className="text-sm text-soft-gray">Build the grit to endure challenges, setbacks, and high-stakes pressure.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Banishing the Imposter</div>
                        <div className="text-sm text-soft-gray">Silence self-doubt and replace it with unshakable confidence.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 aspect-square flex-none items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                        <svg className="text-black" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Energy & Well-Being</div>
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
              <a href="#" className="text-xs hover:underline underline-offset-4 text-soft-gray">View all</a>
            </div>
            <p className="mt-3 text-sm text-soft-gray max-w-prose">Conversations and appearances that bring the Day One Executive principles to life.</p>
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
                <Image src="https://nebula.wsimg.com/23fc0dff8e9cd5471293b0cb46fd7301?AccessKeyId=B66E79F52C4816881D60&disposition=0&alloworigin=1" alt="Author headshot" fill className="rounded-full object-cover" />
              </div>
              <div className="mt-4 space-y-0.5 text-center" style={{ color: "var(--gold-start)" }}>
                <div className="text-xl md:text-2xl font-bold">April Armstrong</div>
                <div className="italic text-base md:text-lg">CEO, AHA Insight</div>
                <div className="text-xs md:text-sm">AHA Insight</div>
                <div className="text-xs md:text-sm">Washington, DC</div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About the author</h2>
              <p className="mt-4 text-sm md:text-base text-soft-gray max-w-prose">
                A former corporate officer in a Fortune 500 company who has worked with top corporate and government executives her entire career, April is grateful for the courageous and authentic leaders in our world.
              </p>
              <p className="mt-4 text-sm md:text-base text-soft-gray max-w-prose">
                She knows first-hand how stressful it can be to put yourself on the line every day to make the world a better place — today and for future generations. For April, and many of our most dedicated leaders, business is personal. It requires vulnerability, courage and the willingness to be all of you.
              </p>
              <p className="mt-4 text-sm md:text-base text-soft-gray max-w-prose">
                This is also what&apos;s required for you to show up as all of you. April is passionate about supporting leaders beyond the boardroom throughout every phase of their career, whether you are currently serving in an executive capacity, are an aspiring executive, or are in transition.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button type="button" className="btn-gold text-sm">Executive Coaching</button>
                <button type="button" className="btn-ghost text-sm">Leadership Advisory</button>
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
                src="https://static.wixstatic.com/media/740402_99df3784ec644f18919ae7f0b2282fab~mv2.jpg/v1/crop/x_0,y_145,w_810,h_520/fill/w_600,h_385,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7195_JPG.jpg"
                alt="Fireside chat photo"
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
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Organizations impacted</h2>
            <p className="mt-3 text-sm text-soft-gray max-w-prose mx-auto text-center">Trusted by leaders across government and industry.</p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              {[
                { src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Seal_of_the_Superior_Court_of_California%2C_County_of_Los_Angeles.png", alt: "Superior Court of California, County of Los Angeles" },
                { src: "https://cdn.freebiesupply.com/logos/large/2x/department-of-commerce-logo-png-transparent.png", alt: "U.S. Department of Commerce" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png", alt: "NASA" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Seal_of_the_United_States_Department_of_Homeland_Security.svg/640px-Seal_of_the_United_States_Department_of_Homeland_Security.svg.png", alt: "U.S. Department of Homeland Security" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Seal_of_the_United_States_Department_of_Defense.svg/1200px-Seal_of_the_United_States_Department_of_Defense.svg.png", alt: "U.S. Department of Defense" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/US-WhiteHouse-Logo.svg/2560px-US-WhiteHouse-Logo.svg.png", alt: "The White House" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/United_States_Department_of_Transportation_seal.svg", alt: "U.S. Department of Transportation" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Seal_of_the_Central_Intelligence_Agency.svg/2048px-Seal_of_the_Central_Intelligence_Agency.svg.png", alt: "Central Intelligence Agency" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/PayPal_Logo_Icon_2014.svg", alt: "PayPal" },
                { src: "https://cdn.freebiesupply.com/logos/large/2x/georgia-state-university-logo-png-transparent.png", alt: "Georgia State University" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png", alt: "eBay" },
                { src: "https://brand.psu.edu/images/backgrounds/veritcal-1-mark_registered.png", alt: "Penn State University" },
              ].map((org) => (
                <div key={org.alt} className="relative h-20 md:h-28 w-full">
                  <Image
                    src={org.src}
                    alt={org.alt}
                    fill
                    className={`object-contain ${(
                      org.alt === "U.S. Department of Commerce" ||
                      org.alt === "U.S. Department of Transportation" ||
                      org.alt === "Georgia State University"
                    ) ? "opacity-60" : "grayscale opacity-60"}`}
                    style={(
                      org.alt === "U.S. Department of Commerce" ||
                      org.alt === "U.S. Department of Transportation" ||
                      org.alt === "Georgia State University"
                    ) ? { filter: "brightness(0) invert(1)" } : undefined}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="border-t border-white/10">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gold-gradient">Get launch updates and a sample chapter</h2>
            <p className="mt-3 text-sm md:text-base text-soft-gray">
              Join the list and receive a preview on release.
            </p>
            <div className="mt-8 max-w-xl mx-auto">
              <NewsletterForm />
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
    </div>
  );
}
