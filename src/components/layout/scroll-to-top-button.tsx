"use client";

import { ChevronUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SHOW_AFTER_PX = 360;

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
      tabIndex={visible ? 0 : -1}
      onClick={goTop}
      className={cn(
        "fixed bottom-6 right-6 z-40 size-11 rounded-full border-[#e5d9c8] bg-[#fdf9f3]/95 text-[#7b1e1e] shadow-md backdrop-blur-md transition-all duration-200 hover:border-[#7b1e1e] hover:bg-[#7b1e1e] hover:text-[#f5efe6]",
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      )}
    >
      <ChevronUp className="size-5" aria-hidden />
    </Button>
  );
}
