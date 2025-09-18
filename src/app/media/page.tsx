"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { mediaItems, type MediaItem } from "@/content/media";

export default function MediaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "video" | "podcast" | "article">("all");
  const [sortBy, setSortBy] = useState<"date" | "title" | "type">("date");
  const [openId, setOpenId] = useState<string | null>(null);
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

  const filteredItems = mediaItems
    .filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesType = selectedType === "all" || item.type === selectedType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.date || "").getTime() - new Date(a.date || "").getTime();
        case "title":
          return a.title.localeCompare(b.title);
        case "type":
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });

  const typeCounts = {
    all: mediaItems.length,
    video: mediaItems.filter(item => item.type === "video").length,
    podcast: mediaItems.filter(item => item.type === "podcast").length,
    article: mediaItems.filter(item => item.type === "article").length,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/50 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logos/key.png" alt="Site logo" width={32} height={32} className="object-contain" />
            <span className="font-semibold tracking-tight">Day One Executive</span>
          </Link>
          <Link href="/" className="text-sm text-soft-gray hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gold-gradient">Hear It Firsthand</h1>
          <p className="mt-4 text-lg text-soft-gray max-w-3xl">
            Conversations and appearances that bring the Day One Executive principles to life. 
            Explore videos, podcasts, and articles featuring April Armstrong's insights on leadership and executive success.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search media..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-3 pl-10 bg-white/[.05] border border-white/10 rounded-lg text-white placeholder-soft-gray focus:outline-none focus:ring-2 focus:ring-gold-start/50 focus:border-gold-start"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-soft-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Type Filter and Sort */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-soft-gray">Filter by type:</span>
              {(["all", "video", "podcast", "article"] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full border text-sm transition ${
                    selectedType === type
                      ? "btn-gold border-transparent"
                      : "btn-ghost"
                  }`}
                >
                  {type === "all" ? "All" : type === "video" ? "Videos" : type === "podcast" ? "Podcasts" : "Articles"}
                  <span className="ml-2 text-xs opacity-70">({typeCounts[type]})</span>
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-soft-gray">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "date" | "title" | "type")}
                className="px-3 py-2 bg-white/[.05] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-start/50"
              >
                <option value="date">Date (Newest First)</option>
                <option value="title">Title (A-Z)</option>
                <option value="type">Type</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-soft-gray">
            Showing {filteredItems.length} of {mediaItems.length} items
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenId(item.id)}
              className="text-left group rounded-lg border border-white/10 overflow-hidden hover:bg-white/[.04] transition-all duration-200 hover:scale-[1.02]"
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
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                    {item.type === "video" ? "Video" : item.type === "podcast" ? "Podcast" : "Article"}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-sm font-medium line-clamp-2">{item.title}</div>
                {item.description && (
                  <div className="mt-2 text-xs text-soft-gray line-clamp-3">{item.description}</div>
                )}
                {item.date && (
                  <div className="mt-3 text-[10px] text-soft-gray">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-soft-gray text-lg">No media found</div>
            <p className="text-soft-gray text-sm mt-2">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </main>

      {/* Modal */}
      {openId && (
        <div
          ref={dialogRef}
          onMouseDown={onBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          role="dialog"
          aria-modal="true"
        >
          {(() => {
            const current = mediaItems.find(i => i.id === openId);
            if (!current) return null;
            const isVideo = current.type === "video";
            const isPodcast = current.type === "podcast";
            const isArticle = current.type === "article";
            const youTubeId = isVideo ? (current.url.split("v=")[1] || "").split("&")[0] : "";
            return (
              <div className={`w-full ${isVideo ? "max-w-4xl aspect-video" : "max-w-2xl"} bg-black rounded-lg overflow-hidden border border-white/10`}>
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
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{current.title}</h3>
                      {current.description && (
                        <p className="text-soft-gray text-sm">{current.description}</p>
                      )}
                    </div>
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
                  </div>
                )}
                {isArticle && (
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">{current.title}</h3>
                    {current.description && (
                      <p className="text-soft-gray text-sm mb-6">{current.description}</p>
                    )}
                    <a 
                      href={current.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 btn-gold text-sm"
                    >
                      Read on Forbes
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/>
                      </svg>
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
    </div>
  );
}
