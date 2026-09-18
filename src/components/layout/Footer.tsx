import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/nav";
import { siteConfig } from "@/content/site";
import { contactContent } from "@/content/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container>
        <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-lg text-ink">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-ink-muted">{siteConfig.title}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={contactContent.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-muted hover:text-ink"
          >
            {contactContent.linkedin.value}
          </a>
        </div>

        <div className="border-t border-line py-6">
          <p className="text-xs text-ink-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
