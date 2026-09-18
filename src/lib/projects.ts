import "server-only";
import { db } from "@/db";
import { PROJECT_CATEGORIES, type ProjectCategorySlug } from "@/lib/categories";
import { PROJECT_SEED, type SeedProject } from "@/content/projects";
import type { ProjectImageSource } from "@/lib/images";

export type ProjectWithImages = {
  id: number | string;
  slug: string;
  title: string;
  description: string;
  images: ProjectImageSource[];
};

export type CategoryWithProjects = {
  slug: ProjectCategorySlug;
  title: string;
  description: string;
  projects: ProjectWithImages[];
};

/**
 * Returns all six project categories. For each category, projects come
 * from the database if any exist there; otherwise the category falls
 * back to the static seed of real, client-supplied snapshots in
 * src/content/projects.ts. This means the site shows real work out of
 * the box with no database configured, and a category only switches to
 * database-managed content once someone actually populates it there.
 */
export async function getProjectCategories(): Promise<CategoryWithProjects[]> {
  const projectsByCategory = db ? await fetchProjectsFromDb() : new Map();

  return PROJECT_CATEGORIES.map((category) => ({
    slug: category.slug,
    title: category.title,
    description: category.description,
    projects:
      projectsByCategory.get(category.slug) ??
      seedToProjects(PROJECT_SEED[category.slug]),
  }));
}

function seedToProjects(seedProjects: SeedProject[]): ProjectWithImages[] {
  return seedProjects.map((project) => ({
    id: project.slug,
    slug: project.slug,
    title: project.title,
    description: project.description ?? "",
    images: project.images,
  }));
}

async function fetchProjectsFromDb(): Promise<
  Map<ProjectCategorySlug, ProjectWithImages[]>
> {
  try {
    const rows = await db!.query.projects.findMany({
      orderBy: (project, { asc }) => [asc(project.sortOrder), asc(project.createdAt)],
      with: {
        images: {
          orderBy: (image, { asc }) => [asc(image.sortOrder)],
        },
      },
    });

    const byCategory = new Map<ProjectCategorySlug, ProjectWithImages[]>();
    for (const row of rows) {
      const category = row.category as ProjectCategorySlug;
      const list = byCategory.get(category) ?? [];
      list.push({
        id: row.id,
        slug: row.slug,
        title: row.title,
        description: row.description,
        images: row.images.map((image) => ({
          src: image.src,
          alt: image.alt,
        })),
      });
      byCategory.set(category, list);
    }
    return byCategory;
  } catch (error) {
    console.error(
      "[projects] Failed to load projects from the database — falling back to static content.",
      error,
    );
    return new Map();
  }
}
