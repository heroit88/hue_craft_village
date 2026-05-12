"use client";

import Link from "next/link";
import { ChevronDown, Menu, MountainSnow } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  navItemHasChildren,
  siteNavAfterHoiDap,
  siteNavExplore,
  siteNavHoiDap,
  siteNavPrimaryLinks,
  siteNavSpotlight,
} from "@/lib/site";
import type { NavItemWithChildren, SpotlightNavItem } from "@/lib/site";
import { cn } from "@/lib/utils";

function spotlightButtonClass(tone: SpotlightNavItem["tone"]) {
  if (tone === "forest") {
    return "border border-emerald-400/40 bg-[#0f3d3e] text-[#f5efe6] shadow-md shadow-black/25 hover:bg-[#0d3536]";
  }
  return "border border-[#c8a96b]/55 bg-[#7b1e1e] text-[#f5efe6] shadow-md shadow-black/25 hover:bg-[#6a1818]";
}

function spotlightRingClass(tone: SpotlightNavItem["tone"]) {
  return tone === "forest" ? "border-emerald-500/35" : "border-[#c8a96b]/40";
}

export function MainNavbar() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setDesktopOpen(null);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) {
        setOpen(false);
        setMobileExpanded(null);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    setMobileExpanded(null);
  };

  const renderDesktopDropdown = (item: NavItemWithChildren, buttonClassName: string) => {
    if (!navItemHasChildren(item)) return null;
    const isOpen = desktopOpen === item.label;
    const showOverview = item.showOverviewInDropdown !== false;

    return (
      <div key={item.label} className="relative shrink-0">
        <button
          type="button"
          className={cn(
            "flex items-center gap-0.5 whitespace-nowrap rounded-lg px-2 py-1.5 text-xs transition lg:px-2.5 lg:text-sm",
            buttonClassName
          )}
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setDesktopOpen(isOpen ? null : item.label)}
        >
          {item.label}
          <ChevronDown className={`size-3.5 shrink-0 transition lg:size-4 ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen ? (
          <div
            role="menu"
            className="absolute right-0 top-full z-[100] mt-1.5 min-w-[11.5rem] rounded-lg border border-white/15 bg-[#2c1b15]/98 py-1 shadow-xl backdrop-blur-xl lg:left-0 lg:right-auto lg:min-w-[12.5rem]"
          >
            {showOverview ? (
              <>
                <Link
                  href={item.href}
                  className="block px-3 py-1.5 text-xs font-medium text-[#c8a96b] hover:bg-white/10 lg:text-sm"
                  onClick={() => setDesktopOpen(null)}
                >
                  Tổng quan {item.label}
                </Link>
                <div className="my-0.5 h-px bg-white/10" />
              </>
            ) : null}
            {item.children.map((child, idx) => (
              <Link
                key={`${item.label}-${idx}-${child.href}`}
                href={child.href}
                role="menuitem"
                className="block px-3 py-1.5 text-xs text-[#f5efe6]/90 hover:bg-white/10 hover:text-[#c8a96b] lg:text-sm"
                onClick={() => setDesktopOpen(null)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  const renderMobileExplore = (item: NavItemWithChildren) => {
    const expanded = mobileExpanded === item.label;
    const showOverview = item.showOverviewInDropdown !== false;

    return (
      <div key={item.label} className="rounded-xl border border-white/10 px-3 py-2">
        <button
          type="button"
          className="flex w-full items-center justify-between text-left text-sm font-medium text-[#f5efe6]/95"
          aria-expanded={expanded}
          onClick={() => setMobileExpanded(expanded ? null : item.label)}
        >
          {item.label}
          <ChevronDown className={`size-4 shrink-0 transition ${expanded ? "rotate-180" : ""}`} />
        </button>
        {expanded ? (
          <div className="mt-2 flex flex-col gap-1 border-t border-white/10 pt-2">
            {showOverview ? (
              <Link href={item.href} className="pl-2 text-sm text-[#c8a96b]" onClick={closeMobile}>
                Tổng quan
              </Link>
            ) : null}
            {item.children.map((child, idx) => (
              <Link key={`${item.label}-${idx}-${child.href}`} href={child.href} className="pl-2 text-sm text-[#f5efe6]/85" onClick={closeMobile}>
                {child.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  const renderMobileSpotlight = (item: SpotlightNavItem) => (
    <div key={item.label} className={cn("overflow-hidden rounded-xl border bg-[#1a100d]/60", spotlightRingClass(item.tone))}>
      <Link
        href={item.href}
        className={cn("block px-4 py-3 text-center text-sm font-semibold", spotlightButtonClass(item.tone))}
        onClick={closeMobile}
      >
        {item.label}
        <span className="mt-0.5 block text-[11px] font-normal opacity-90">Mở Chatbot AI</span>
      </Link>
      {item.children[1] ? (
        <Link
          href={item.children[1].href}
          className="block border-t border-white/10 px-4 py-2.5 text-center text-xs text-[#c8a96b] hover:bg-white/5"
          onClick={closeMobile}
        >
          {item.children[1].label}
        </Link>
      ) : null}
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-visible border-b border-white/20 bg-[#2c1b15]/70 backdrop-blur-xl">
      <div className="container-luxury flex h-16 items-center gap-3 overflow-visible md:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-[#f5efe6]">
          <MountainSnow className="size-5 text-[#c8a96b]" />
          <span className="font-heading text-base md:text-lg">Làng Nghề Huế</span>
        </Link>

        <nav
          ref={desktopNavRef}
          className="ml-auto hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-1.5 gap-y-1 overflow-visible py-1 lg:flex lg:gap-x-2"
        >
          {siteNavPrimaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-lg px-2 py-1.5 text-xs text-[#f5efe6]/90 transition hover:bg-white/10 hover:text-[#c8a96b] lg:px-2.5 lg:text-sm"
            >
              {link.label}
            </Link>
          ))}
          {renderDesktopDropdown(siteNavExplore, "text-[#f5efe6]/90 hover:bg-white/10 hover:text-[#c8a96b]")}
          <span className="mx-0.5 hidden h-6 w-px shrink-0 bg-white/20 lg:inline-block" aria-hidden />
          {siteNavSpotlight.map((item) =>
            renderDesktopDropdown(item, cn("font-semibold", spotlightButtonClass(item.tone)))
          )}
          <Link
            href={siteNavHoiDap.href}
            className="whitespace-nowrap rounded-lg px-2 py-1.5 text-xs text-[#f5efe6]/90 transition hover:bg-white/10 hover:text-[#c8a96b] lg:px-2.5 lg:text-sm"
          >
            {siteNavHoiDap.label}
          </Link>
          {siteNavAfterHoiDap.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-lg px-2 py-1.5 text-xs text-[#f5efe6]/90 transition hover:bg-white/10 hover:text-[#c8a96b] lg:px-2.5 lg:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex shrink-0 rounded-lg border border-white/20 p-2 text-[#f5efe6] lg:ml-0 lg:hidden"
          aria-expanded={open}
          aria-controls="main-nav-drawer"
          aria-label={open ? "Đóng menu" : "Mở menu"}
        >
          <Menu className="size-6" />
        </button>
      </div>
      {open ? (
        <div id="main-nav-drawer" className="border-t border-white/20 bg-[#2c1b15]/95 lg:hidden">
          <div className="container-luxury flex max-h-[min(78vh,calc(100dvh-5rem))] flex-col gap-3 overflow-y-auto py-4">
            <div className="flex flex-col gap-1">
              {siteNavPrimaryLinks.map((link) => (
                <Fragment key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-xl border border-white/10 px-3 py-2.5 text-sm text-[#f5efe6]/95"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                  {link.href === "/gioi-thieu" ? (
                    <>
                      <p className="mt-2 px-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f5efe6]/50">
                        Khám phá
                      </p>
                      {renderMobileExplore(siteNavExplore)}
                    </>
                  ) : null}
                </Fragment>
              ))}
            </div>
            <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c8a96b]/90">Trọng tâm — Chatbot</p>
            <div className="flex flex-col gap-2">{siteNavSpotlight.map((item) => renderMobileSpotlight(item))}</div>
            <Link
              href={siteNavHoiDap.href}
              className="rounded-xl border border-white/10 px-3 py-2.5 text-sm text-[#f5efe6]/95"
              onClick={closeMobile}
            >
              {siteNavHoiDap.label}
            </Link>
            {siteNavAfterHoiDap.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-white/10 px-3 py-2.5 text-sm text-[#f5efe6]/95"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
