import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital marketing services offered by Salina Magar, including graphic design, social media content, and campaign strategy.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Services"
            description="A focused set of digital marketing services, covering content creation, campaign planning, and audience research."
            as="h1"
          />

          <ol className="mt-14 border-t border-line">
            {services.map((service, index) => (
              <li
                key={service.title}
                className="grid grid-cols-1 gap-2 border-b border-line py-8 sm:grid-cols-[3rem_1fr_2fr] sm:gap-8"
              >
                <span className="font-mono text-xs text-ink-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-xl text-ink sm:text-2xl">
                  {service.title}
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CTASection
        title="See these services in the work itself"
        description="The Projects page shows the actual snapshots behind each of these services."
        href="/projects"
        linkLabel="View projects"
      />
    </>
  );
}
