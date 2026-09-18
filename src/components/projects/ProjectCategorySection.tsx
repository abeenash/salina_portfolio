import { Container } from "@/components/ui/Container";
import { ProjectImageGallery } from "@/components/projects/ProjectImageGallery";
import { SnapshotPlaceholder } from "@/components/projects/SnapshotPlaceholder";
import type { CategoryWithProjects } from "@/lib/projects";

export function ProjectCategorySection({
  category,
  index,
}: {
  category: CategoryWithProjects;
  index: number;
}) {
  return (
    <section
      id={category.slug}
      className="scroll-mt-24 border-b border-line py-16 sm:py-24"
    >
      <Container>
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-ink-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">
            {category.title}
          </h2>
        </div>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          {category.description}
        </p>

        <div className="mt-10 space-y-16">
          {category.projects.length > 0 ? (
            category.projects.map((project) => (
              <div key={project.id}>
                {category.projects.length > 1 && (
                  <h3 className="mb-3 font-serif text-lg text-ink">
                    {project.title}
                  </h3>
                )}
                <ProjectImageGallery images={project.images} />
                {project.description && (
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                )}
              </div>
            ))
          ) : (
            <SnapshotPlaceholder />
          )}
        </div>
      </Container>
    </section>
  );
}
