/**
 * Canonical list of the six portfolio project categories.
 *
 * The `slug` values are used as:
 *  - the Postgres enum values for projects.category
 *  - the folder names under /public/portfolio/<slug>/
 *  - the anchor ids on the Projects page
 *
 * These categories were set from the actual client-supplied snapshots
 * (see src/content/projects.ts), not the other way around — a category
 * only exists here because there is real evidence for it.
 */

export const PROJECT_CATEGORIES = [
  {
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Social media graphic design created for client brands, including festival greetings and hiring announcements.",
  },
  {
    slug: "content-campaigns",
    title: "Content Campaigns",
    description:
      "Meta Ads Manager results from campaigns run to support content and audience engagement goals.",
  },
  {
    slug: "keyword-research",
    title: "Keyword Research / SEO",
    description:
      "Keyword research used to guide SEO strategy and content planning.",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads Campaigns",
    description:
      "Meta Ads Manager campaigns, covering setup, delivery, and results tracking.",
  },
  {
    slug: "audience-research",
    title: "Audience Research",
    description:
      "Audience targeting definitions built in Meta Ads Manager based on location, demographics, interests, and behavior.",
  },
  {
    slug: "brand-awareness",
    title: "Brand Awareness",
    description: "A Meta Ads reach campaign run to build brand awareness.",
  },
] as const;

export type ProjectCategorySlug = (typeof PROJECT_CATEGORIES)[number]["slug"];

export const PROJECT_CATEGORY_SLUGS = PROJECT_CATEGORIES.map(
  (category) => category.slug,
) as [ProjectCategorySlug, ...ProjectCategorySlug[]];
