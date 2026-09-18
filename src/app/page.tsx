import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <CTASection
        title="Interested in working together?"
        description="Get in touch to talk through a project."
        href="/contact"
        linkLabel="Contact"
      />
    </>
  );
}
