import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCategorySection } from "@/components/projects/ProjectCategorySection";
import { CTASection } from "@/components/ui/CTASection";
import { getProjectCategories } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio work from Salina Magar across graphic design, social media campaigns, content calendars, short-form video strategy, brand awareness, and audience research.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const categories = await getProjectCategories();

  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Projects"
            description="Six areas of work, shown one at a time with the material behind it."
            as="h1"
          />
        </Container>
      </section>

      {categories.map((category, index) => (
        <ProjectCategorySection
          key={category.slug}
          category={category}
          index={index}
        />
      ))}

      <CTASection
        title="Have a project in mind?"
        description="Get in touch to talk through what you need."
        href="/contact"
        linkLabel="Contact"
      />
    </>
  );
}
