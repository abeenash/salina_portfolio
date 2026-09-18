import type { ProjectCategorySlug } from "@/lib/categories";

/**
 * Static fallback project content.
 *
 * The portfolio is effectively static: these are the actual
 * client-supplied snapshots, shipped as local files under
 * /public/portfolio/<category>/. This seed is what renders when the
 * database has no rows for a category (which is the default, since no
 * Neon database is provisioned yet — see src/lib/projects.ts). Once a
 * category has real rows in the `projects`/`project_images` tables,
 * those take precedence over this seed for that category.
 *
 * Do not add images here that weren't actually supplied, and don't
 * write alt text that asserts more than what the image shows.
 */

export type SeedProjectImage = {
  src: string;
  alt: string;
};

export type SeedProject = {
  slug: string;
  title: string;
  description?: string;
  images: SeedProjectImage[];
};

export const PROJECT_SEED: Record<ProjectCategorySlug, SeedProject[]> = {
  "graphic-design": [
    {
      slug: "graphic-design-social-posts",
      title: "Graphic Design",
      images: [
        {
          src: "/portfolio/graphic-design/peak-digital-works-janai-purnima.jpeg",
          alt: "Facebook post design for Peak Digital Works wishing a happy Janai Purnima, featuring the sacred thread ceremony against a Himalayan backdrop.",
        },
        {
          src: "/portfolio/graphic-design/zylobrains-qa-intern-hiring.jpeg",
          alt: "Instagram hiring post for Zylobrains advertising a QA Intern position, with role responsibilities and contact details.",
        },
        {
          src: "/portfolio/graphic-design/zylobrains-national-paddy-day.jpeg",
          alt: "Instagram post for Zylobrains celebrating National Paddy Day (Asar 15) with rice-planting imagery and a festive food platter.",
        },
        {
          src: "/portfolio/graphic-design/alcohol-lab-kheer-khane-din.jpeg",
          alt: "Instagram post for Alcohol Lab wishing a happy Kheer Khane Din, featuring a bowl of kheer garnished with nuts and saffron.",
        },
        {
          src: "/portfolio/graphic-design/alcohol-lab-guru-purnima.jpeg",
          alt: "Instagram post for Alcohol Lab celebrating Guru Purnima with a silhouette illustration of a teacher and student.",
        },
        {
          src: "/portfolio/graphic-design/zylobrains-java-developer-hiring.jpeg",
          alt: "Instagram hiring post for Zylobrains advertising a Full Stack Java Developer position, with required skills and shift details.",
        },
      ],
    },
  ],
  "content-campaigns": [
    {
      slug: "meta-ads-content-campaign-results",
      title: "Content Campaigns",
      images: [
        {
          src: "/portfolio/content-campaigns/meta-ads-performance-messaging-172.jpeg",
          alt: "Meta Ads Manager performance overview for a campaign showing 172 messaging conversations started.",
        },
        {
          src: "/portfolio/content-campaigns/meta-ads-performance-messaging-82.jpeg",
          alt: "Meta Ads Manager performance overview for a campaign showing 82 messaging conversations started.",
        },
        {
          src: "/portfolio/content-campaigns/meta-ads-performance-reach-39346.jpeg",
          alt: "Meta Ads Manager performance overview for a campaign showing a reach of 39,346.",
        },
        {
          src: "/portfolio/content-campaigns/meta-ads-performance-messaging-81.jpeg",
          alt: "Meta Ads Manager performance overview for a campaign showing 81 messaging conversations started.",
        },
        {
          src: "/portfolio/content-campaigns/meta-ads-performance-messaging-129.jpeg",
          alt: "Meta Ads Manager performance overview for a campaign showing 129 messaging conversations started.",
        },
      ],
    },
  ],
  "keyword-research": [
    {
      slug: "keyword-research-zylobrains",
      title: "Keyword Research / SEO",
      images: [
        {
          src: "/portfolio/keyword-research/keyword-research-zylobrains.jpeg",
          alt: "Google Sheets keyword research spreadsheet for Zylobrains, listing search volume and competition for software-development-related keywords.",
        },
      ],
    },
  ],
  "meta-ads": [
    {
      slug: "meta-ads-campaign-list",
      title: "Meta Ads Campaigns",
      images: [
        {
          src: "/portfolio/meta-ads/meta-ads-campaign-list.jpeg",
          alt: "Meta Ads Manager campaign list showing multiple completed campaigns with their delivery status and results.",
        },
      ],
    },
  ],
  "audience-research": [
    {
      slug: "audience-research-saved-audiences",
      title: "Audience Research",
      images: [
        {
          src: "/portfolio/audience-research/saved-audience-furniture-shoppers.jpeg",
          alt: "Meta Ads Manager saved audience details for a Nepal-based audience, ages 23–55, interested in furniture and small business ownership.",
        },
        {
          src: "/portfolio/audience-research/saved-audience-travel.jpeg",
          alt: "Meta Ads Manager saved audience details for a Nepal-based audience, ages 22–60, interested in travel and tourism.",
        },
      ],
    },
  ],
  "brand-awareness": [
    {
      slug: "brand-awareness-reach-campaign",
      title: "Brand Awareness",
      images: [
        {
          src: "/portfolio/brand-awareness/meta-ads-reach-campaign.jpeg",
          alt: "Meta Ads Manager performance overview for a reach campaign, showing 39,346 people reached.",
        },
      ],
    },
  ],
};
