"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "@/content/media";

type Props = {
  items: MediaItem[];
};

export default function MediaGallery({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  type Tab = "video" | "podcast" | "article";
  const [tab, setTab] = useState<Tab>("video");
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenId(null);
    }
    if (openId) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openId]);

  function onBackdropClick(e: React.MouseEvent) {
    if (e.target === dialogRef.current) setOpenId(null);
  }

  const filtered = items.filter((i) => i.type === tab);

  return (
    <>
      <div className="mb-6 flex items-center gap-2">
        {(["video", "podcast", "article"] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={`px-3 py-1.5 rounded-full border text-xs ${
              tab === key ? "btn-gold border-transparent" : "btn-ghost"
            }`}
          >
            {key === "video" ? "Videos" : key === "podcast" ? "Podcasts" : "Articles"}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenId(item.id)}
            className="text-left group rounded-lg border border-white/10 overflow-hidden hover:bg-white/[.04] transition"
          >
            <div className="relative aspect-video bg-white/5">
              <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
              <div className="absolute bottom-2 right-2 text-xs bg-black/70 px-2 py-1 rounded">
                {item.duration}
              </div>
              {item.type !== "article" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "linear-gradient(90deg, var(--gold-start), var(--gold-end))" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><path d="M8 5v14l11-7z"/></svg>
                  </span>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="text-xs uppercase tracking-wide text-soft-gray">{item.type}</div>
              <div className="mt-1 text-sm font-medium">{item.title}</div>
              {item.description && (
                <div className="mt-1 text-xs text-soft-gray line-clamp-2">{item.description}</div>
              )}
              {item.date && (
                <div className="mt-2 text-[10px] text-soft-gray">{new Date(item.date).toLocaleDateString()}</div>
              )}
            </div>
          </button>
        ))}
      </div>

      {openId && (
        <div
          ref={dialogRef}
          onMouseDown={onBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          role="dialog"
          aria-modal="true"
        >
          {(() => {
            const current = items.find(i => i.id === openId);
            if (!current) return null;
            const isVideo = current.type === "video";
            const isPodcast = current.type === "podcast";
            const isArticle = current.type === "article";
            const youTubeId = isVideo ? (current.url.split("v=")[1] || "").split("&")[0] : "";
            return (
              <div className={`w-full ${isVideo ? "max-w-3xl aspect-video" : "max-w-xl"} bg-black rounded-lg overflow-hidden border border-white/10`}>
                {isVideo && (
                  <iframe
                    key={openId}
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${youTubeId}?autoplay=1`}
                    title={current.title || "Video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
                {isPodcast && (
                  <iframe
                    key={openId}
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameBorder={0}
                    height={175}
                    style={{ width: "100%", maxWidth: 660, overflow: "hidden", borderRadius: 10, background: "#000" }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src={current.embedUrl || current.url}
                    title={current.title || "Podcast"}
                  />
                )}
                {isArticle && (
                  <div className="p-4 text-sm text-white/90">
                    <div className="font-medium">{current.title}</div>
                    {current.description && <div className="mt-2 text-white/70">{current.description}</div>}
                    <a href={current.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 btn-on-gold text-xs">
                      Read on Forbes
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/></svg>
                    </a>
                  </div>
                )}
              </div>
            );
          })()}
          <button
            type="button"
            onClick={() => setOpenId(null)}
            className="absolute top-4 right-4 rounded-md border border-white/20 px-2 py-1 text-sm bg-white/10 hover:bg-white/20"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}


