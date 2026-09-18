"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/nav";
import { siteConfig } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-lg tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            {siteConfig.name}
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 sm:flex"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm tracking-wide transition-colors ${
                    isActive
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              {open ? (
                <path
                  d="M4 4L18 18M18 4L4 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2 6H20M2 11H20M2 16H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-line sm:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`block py-3 text-base ${
                        isActive ? "text-ink" : "text-ink-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
