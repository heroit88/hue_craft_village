"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { galleryCategories, galleryItems } from "@/data/gallery";

export default function GalleryPage() {
  const [category, setCategory] = useState("Tất cả");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const filtered = useMemo(
    () => (category === "Tất cả" ? galleryItems : galleryItems.filter((item) => item.category === category)),
    [category]
  );
  const selectedItem = selectedIndex === null ? null : filtered[selectedIndex];
  const total = filtered.length;

  const showPrev = () => {
    if (selectedIndex === null || total === 0) return;
    setIsImageLoading(true);
    setSelectedIndex((selectedIndex - 1 + total) % total);
  };

  const showNext = () => {
    if (selectedIndex === null || total === 0) return;
    setIsImageLoading(true);
    setSelectedIndex((selectedIndex + 1) % total);
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        setIsImageLoading(true);
        setSelectedIndex((prev) => {
          if (prev === null || total === 0) return prev;
          return (prev - 1 + total) % total;
        });
      }
      if (event.key === "ArrowRight") {
        setIsImageLoading(true);
        setSelectedIndex((prev) => {
          if (prev === null || total === 0) return prev;
          return (prev + 1) % total;
        });
      }
    };
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [selectedIndex, total]);

  return (
    <div className="container-luxury space-y-8 py-10">
      <h1 className="text-5xl">Thư viện ảnh</h1>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-2 text-sm ${item === category ? "bg-[#7b1e1e] text-[#f5efe6]" : "bg-white/70 text-[#5c4033]"}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 md:columns-2 xl:columns-3">
        {filtered.map((item, i) => (
          <div key={item.title} className="card-luxury mb-4 break-inside-avoid overflow-hidden p-3">
            <div className={`relative overflow-hidden rounded-2xl ${i % 3 === 0 ? "h-56" : "h-72"}`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                quality={75}
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <p className="mt-3 font-medium">{item.title}</p>
            <p className="text-sm text-[#5c4033]/75">{item.category}</p>
            <button
              type="button"
              className="mt-2 text-sm text-[#7b1e1e]"
              onClick={() => {
                setIsImageLoading(true);
                setSelectedIndex(i);
              }}
            >
              Xem lightbox
            </button>
          </div>
        ))}
      </div>

      {selectedItem ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1f120f]/85 p-4" onClick={() => setSelectedIndex(null)}>
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-black/30 p-3 backdrop-blur" onClick={(e) => e.stopPropagation()}>
            <div
              className="relative h-[56vh] w-full overflow-hidden rounded-2xl"
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null) return;
                const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
                const diff = endX - touchStartX.current;
                if (diff > 45) showPrev();
                if (diff < -45) showNext();
                touchStartX.current = null;
              }}
            >
              {isImageLoading ? <div className="absolute inset-0 animate-pulse bg-white/15" /> : null}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem.image}
                  initial={{ opacity: 0.25 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    sizes="90vw"
                    quality={85}
                    className="object-contain"
                    onLoad={() => setIsImageLoading(false)}
                  />
                </motion.div>
              </AnimatePresence>
              <button
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
                onClick={showPrev}
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
                onClick={showNext}
                aria-label="Ảnh sau"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {filtered.map((thumb, idx) => (
                <button
                  key={`${thumb.title}-${idx}`}
                  type="button"
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border ${idx === selectedIndex ? "border-[#c8a96b]" : "border-white/20"}`}
                  onClick={() => {
                    setIsImageLoading(true);
                    setSelectedIndex(idx);
                  }}
                  aria-label={`Xem ảnh ${idx + 1}`}
                >
                  <Image src={thumb.image} alt={thumb.title} fill sizes="80px" quality={60} className="object-cover" />
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between px-1">
              <div>
                <p className="font-heading text-2xl text-[#f5efe6]">{selectedItem.title}</p>
                <p className="text-sm text-[#f5efe6]/80">
                  {selectedItem.category} • {(selectedIndex ?? 0) + 1}/{total}
                </p>
              </div>
              <button type="button" className="rounded-xl bg-white/15 px-4 py-2 text-sm text-[#f5efe6]" onClick={() => setSelectedIndex(null)}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
