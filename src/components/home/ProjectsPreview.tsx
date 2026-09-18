import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECT_CATEGORIES } from "@/lib/categories";

export function ProjectsPreview() {
  return (
    <section className="border-t border-line py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Portfolio work, by category"
          description="Six areas of work, each shown with the actual material behind it."
        />
        <ol className="mt-12 border-t border-line">
          {PROJECT_CATEGORIES.map((category, index) => (
            <li key={category.slug} className="border-b border-line">
              <Link
                href={`/projects#${category.slug}`}
                className="group flex items-baseline justify-between gap-6 py-5"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl text-ink transition-colors group-hover:text-accent sm:text-2xl">
                    {category.title}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-ink-muted transition-colors group-hover:text-accent"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
