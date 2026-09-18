/**
 * Site-wide identity and metadata defaults.
 *
 * This is the single place to update Salina's name, professional title,
 * and site URL. Everything else (about, services, projects, contact)
 * lives in its own file under src/content/.
 */

export const siteConfig = {
  name: "Salina Magar",
  title:
    "Digital Marketing Executive | SEO | Meta Ads | Social Media Marketing | WordPress",
  shortName: "Salina Magar",
  url: "https://salinamagar.com.np",
  description:
    "Digital Marketing professional with hands-on experience in social media marketing, paid advertising, content creation, and lead generation.",
  locale: "en_US",
} as const;
