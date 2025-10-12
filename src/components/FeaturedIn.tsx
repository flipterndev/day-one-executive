import Image from "next/image";

type Props = { compact?: boolean };

const logos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Forbes.svg/2560px-Forbes.svg.png", alt: "Forbes" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/97/NBC_News_logo.png", alt: "NBC News" },
  { src: "https://images.squarespace-cdn.com/content/v1/59967c766a4963119596fdc4/1519194246889-ZNO16P13BWNN79L3SCVN/abc.png", alt: "ABC" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/dc/CBS_News_logo_%282020%29.svg", alt: "CBS News" },
  { src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/93ee227e-38bf-4f0f-9be4-bce0cbbd07b5/dfktd9n-eb17da0f-03b3-47e8-b9df-ae9d077825a3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkzZWUyMjdlLTM4YmYtNGYwZi05YmU0LWJjZTBjYmJkMDdiNVwvZGZrdGQ5bi1lYjE3ZGEwZi0wM2IzLTQ3ZTgtYjlkZi1hZTlkMDc3ODI1YTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6pf7mXPJdWAFoLo7F-hddGQe-nDDAIGLF_52EkBkp0k", alt: "Fox" },
  { src: "https://www.pngkit.com/png/full/141-1419851_cw-logo.png", alt: "The CW" },
  { src: "https://booklife.com/marlin/images/booklife-logo.png", alt: "BookLife" },
  { src: "https://events.latimes.com/festivalofbooks/files/2023/01/logophase1.png", alt: "LA Times Festival of Books" },
];

export default function FeaturedIn({ compact = false }: Props) {
  // Duplicate the list for a seamless loop
  const loop = [...logos, ...logos];
  const inner = (
    <>
      <div className="text-center text-xs tracking-wide uppercase text-soft-gray">Featured in</div>
      <div className="mt-6 overflow-hidden featured-logos">
        <div className="logo-track">
          {loop.map((logo, i) => (
            <div key={`${logo.alt}-${i}`} className="logo-item h-10 w-[140px] relative">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );

  if (compact) {
    return (
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 pt-8 pb-10">{inner}</div>
      </div>
    );
  }

  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10">{inner}</div>
    </section>
  );
}


