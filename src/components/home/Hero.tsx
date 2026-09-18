import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
          {siteConfig.title}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          {siteConfig.description}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            View the work
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </section>
  );
}
