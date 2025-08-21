"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

type Props = {
  variant?: "header" | "hero";
  className?: string;
};

const LINKS = {
  kindle: "https://www.amazon.com/Day-One-Executive-Guidebook-Starting-ebook/dp/B0BYW6DVTQ/ref=tmm_kin_swatch_0",
  audiobook: "https://www.amazon.com/Day-One-Executive-Guidebook-Starting/dp/B0DMQ455Z5/ref=tmm_aud_swatch_0",
  paperback: "https://www.amazon.com/Day-One-Executive-Guidebook-Starting/dp/B0C9G4MZP1/ref=tmm_pap_swatch_0",
  hardcover: "https://www.amazon.com/Day-One-Executive-Guidebook-Starting/dp/B0CBZF6VQR/ref=tmm_hrd_swatch_0",
};

export default function PreorderButton({ variant = "hero", className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function onBackdropClick(e: React.MouseEvent) {
    if (e.target === dialogRef.current) setOpen(false);
  }

  const label = "Read now";

  const modal = (
    <div
      ref={dialogRef}
      onMouseDown={onBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      role="dialog"
      aria-modal="true"
      aria-labelledby="preorder-title"
    >
      <div
        className="w-full max-w-md rounded-lg border border-black/10 p-6 shadow-2xl text-black"
        style={{ backgroundColor: "var(--gold-start)" }}
      >
        <div className="flex items-start justify-between gap-6">
          <h3 id="preorder-title" className="text-lg font-semibold">Choose your format</h3>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="rounded-md border border-black/10 px-2 py-1 text-sm text-black/70 hover:bg-black/5"
          >
            ✕
          </button>
        </div>
        <p className="mt-2 text-sm text-black/70">You'll be redirected to complete your order.</p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href={LINKS.kindle}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-on-gold text-sm"
          >
            Kindle
          </a>
          <a
            href={LINKS.audiobook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-on-gold text-sm"
          >
            Audiobook
          </a>
          <a
            href={LINKS.paperback}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-on-gold text-sm"
          >
            Paperback
          </a>
          <a
            href={LINKS.hardcover}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-on-gold text-sm"
          >
            Hardcover
          </a>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="relative inline-block h-6 w-[110px]">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
              alt="Amazon logo"
              fill
              className="object-contain"
            />
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="btn-on-gold text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`btn-gold ${variant === "header" ? "text-sm px-4 py-2" : ""} ${className}`}
      >
        {label}
      </button>

      {open && (typeof window !== "undefined" ? createPortal(modal, document.body) : modal)}
    </>
  );
}


