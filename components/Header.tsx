"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="relative z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" onClick={closeMenu} className="flex flex-col">
          <span className="text-lg font-semibold tracking-tight text-white">
            YOUR DETAIL NAME
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-foreground-muted">
            Dallas • Fort Worth
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-foreground-muted md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/book"
            className="rounded-full bg-mavs-blue px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-white transition hover:bg-card-hover md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open navigation</span>

          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-border bg-background/95 px-6 py-5 backdrop-blur md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold text-white transition hover:bg-card-hover"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/book"
              onClick={closeMenu}
              className="rounded-2xl bg-mavs-blue px-5 py-4 text-center text-sm font-semibold text-white transition hover:opacity-90"
            >
              Book Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}