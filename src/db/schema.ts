import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { PROJECT_CATEGORY_SLUGS } from "@/lib/categories";

export const projectCategoryEnum = pgEnum(
  "project_category",
  PROJECT_CATEGORY_SLUGS,
);

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  category: projectCategoryEnum("category").notNull(),
  description: text("description").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
  featured: boolean("featured").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

/**
 * Images are local files shipped under /public/portfolio/<category>/ —
 * `src` is always a site-relative path (e.g. "/portfolio/graphic-design/
 * example.jpg"). There is no remote image source; see src/lib/images.ts.
 */
export const projectImages = pgTable("project_images", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  src: text("src").notNull(),
  alt: text("alt").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const projectsRelations = relations(projects, ({ many }) => ({
  images: many(projectImages),
}));

export const projectImagesRelations = relations(projectImages, ({ one }) => ({
  project: one(projects, {
    fields: [projectImages.projectId],
    references: [projects.id],
  }),
}));
