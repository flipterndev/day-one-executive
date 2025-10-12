import Image from "next/image";
import type { Testimonial } from "@/content/testimonials";

type Props = {
  items: Testimonial[];
};

export default function Testimonials({ items }: Props) {
  const featured = items.find((t) => t.featured) ?? items[0];
  const others = items.filter((t) => t !== featured);
  return (
    <div className="space-y-8">
      {/* Featured */}
      <figure className="relative rounded-lg md:rounded-xl border border-white/10 p-6 md:p-8 bg-white/[.02] md:bg-white/[.03] shadow-md hover:bg-white/[.04] md:hover:bg-white/[.04] transition-shadow hover:shadow-md">
        {featured.logo && (
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -bottom-2 right-3 flex items-end justify-end opacity-10 md:opacity-20">
              <span className="relative block h-16 w-32 md:h-20 md:w-40">
                <Image src={featured.logo} alt="" fill className="object-contain" />
              </span>
            </div>
          </div>
        )}
        <div className="h-0.5 md:h-1 w-full mb-3 relative z-10" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }} />
        <div className="pointer-events-none absolute -top-1 right-3 opacity-10 hidden md:block" aria-hidden>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--gold-start)" }}><path d="M7.17 6A5 5 0 0 0 2 11v7h7v-7H6.83A3 3 0 0 1 9 8.17V6H7.17Zm9 0A5 5 0 0 0 11 11v7h7v-7h-2.17A3 3 0 0 1 18 8.17V6h-1.83Z"/></svg>
        </div>
        
        <div className="flex items-start gap-3 md:gap-4 relative z-10">
          {featured.avatar && (
            <div className="relative h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-full overflow-hidden border-2" style={{ borderColor: "var(--gold-start)" }}>
              <Image src={featured.avatar} alt={featured.name} fill className="object-cover" />
            </div>
          )}
          <blockquote className="text-sm md:text-xl leading-relaxed flex-1">
            <span aria-hidden className="inline-block align-top mr-2" style={{ color: "var(--gold-start)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="md:w-5 md:h-5"><path d="M7.17 6A5 5 0 0 0 2 11v7h7v-7H6.83A3 3 0 0 1 9 8.17V6H7.17Zm9 0A5 5 0 0 0 11 11v7h7v-7h-2.17A3 3 0 0 1 18 8.17V6h-1.83Z"/></svg>
            </span>
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
        </div>
        <figcaption className="mt-4 flex flex-col items-start gap-1 text-xs md:text-sm text-soft-gray relative z-10">
          <span>
            — {featured.name}
            {featured.title ? `, ${featured.title}` : ""}
            {featured.company ? `, ${featured.company}` : ""}
          </span>
          <div className="inline-flex items-center gap-1" aria-hidden style={{ color: "var(--gold-start)" }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="md:w-3.5 md:h-3.5"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/></svg>
            ))}
          </div>
        </figcaption>
      </figure>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {others.map((t, idx) => (
          <figure key={`${t.name}-${idx}`} className="relative rounded-lg border border-white/10 p-6 bg-white/[.02] hover:bg-white/[.04] transition-shadow hover:shadow-md">
            {t.logo && (
              <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 md:opacity-20">
                  <span className="relative block h-24 w-48 md:h-36 md:w-64">
                    <Image src={t.logo} alt="" fill className="object-contain" />
                  </span>
                </div>
              </div>
            )}
            <div className="h-0.5 w-full mb-3 relative z-10" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }} />
            <div className="flex items-start gap-3 relative z-10">
              {t.avatar && (
                <span className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden border-2" style={{ borderColor: "var(--gold-start)" }}>
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </span>
              )}
              <blockquote className="text-sm md:text-base leading-relaxed flex-1">
                <span aria-hidden className="inline-block align-top mr-2" style={{ color: "var(--gold-start)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7.17 6A5 5 0 0 0 2 11v7h7v-7H6.83A3 3 0 0 1 9 8.17V6H7.17Zm9 0A5 5 0 0 0 11 11v7h7v-7h-2.17A3 3 0 0 1 18 8.17V6h-1.83Z"/></svg>
                </span>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
            <figcaption className={`${t.name === "Maggie Wilderotter" ? "mt-17" : "mt-4"} flex flex-col items-start gap-1 text-xs text-soft-gray relative z-10`}>
              <span>
                — {t.name}
                {t.title ? `, ${t.title}` : ""}
                {t.company ? `, ${t.company}` : ""}
              </span>
              <div className="inline-flex items-center gap-1" aria-hidden style={{ color: "var(--gold-start)" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}


