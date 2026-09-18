import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

const PREVIEW_COUNT = 6;

export function ServicesPreview() {
  const preview = services.slice(0, PREVIEW_COUNT);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I work on"
          description="A focused set of digital marketing services, centered on content and campaign work."
        />
        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2">
          {preview.map((service) => (
            <li key={service.title} className="border-b border-line pb-6">
              <h3 className="font-serif text-lg text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
        <Link
          href="/services"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
        >
          See all services
          <span aria-hidden="true">→</span>
        </Link>
      </Container>
    </section>
  );
}
