"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-neutral-200 bg-white/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo/logo.png"
            alt="Max Alpha Labs"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            Max Alpha Labs
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Work with us
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={cn(
                "absolute left-0 h-0.5 w-4 bg-neutral-900 transition-all duration-200",
                menuOpen ? "top-1.5 rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-4 bg-neutral-900 transition-all duration-200",
                menuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-0.5 w-4 bg-neutral-900 transition-all duration-200",
                menuOpen ? "top-1.5 -rotate-45" : "top-3"
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-neutral-200 bg-white md:hidden",
          menuOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-base text-neutral-700 hover:bg-neutral-50"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-medium text-white"
            onClick={() => setMenuOpen(false)}
          >
            Work with us
          </Link>
        </nav>
      </div>
    </header>
  );
}
