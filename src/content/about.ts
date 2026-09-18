/**
 * About Me content.
 *
 * Source of truth is Salina Magar's LinkedIn profile:
 * https://www.linkedin.com/in/salina-magar-57aa1b3ab/
 *
 * Automated retrieval of the profile was blocked, so this content was
 * supplied directly and copied here with only minor grammatical
 * cleanup — no facts, employers, dates, or results have been added
 * beyond what was supplied. Anything not yet supplied stays as a TODO.
 */

export type ExperienceEntry = {
  role: string;
  organization: string;
  dates: string;
  description: string;
};

export type EducationEntry = {
  credential: string;
  institution: string;
  location?: string;
  dates: string;
  note?: string;
};

export type CertificationEntry = {
  title: string;
  issuer: string;
  date: string;
};

export const aboutContent = {
  intro: [
    "I’m a Digital Marketing professional with hands-on experience in social media marketing, paid advertising, content creation, and lead generation. I have worked with businesses to strengthen their online presence, manage social media platforms, create engaging content, and execute digital marketing campaigns.",
    "My core skills include Digital Marketing, Social Media Marketing, Meta Ads, Google Ads, SEO, WordPress, Content Marketing, Email Marketing, and Lead Generation. I have a strong interest in developing effective digital strategies that increase brand visibility, audience engagement, and business growth.",
    "I enjoy combining creativity with data-driven thinking to plan campaigns, understand audience behavior, and improve marketing performance. I’m continuously learning new tools, platforms, and strategies to stay updated with the evolving digital marketing landscape.",
    "I’m passionate about helping businesses build a strong online presence and achieve meaningful results through digital marketing. I’m open to opportunities where I can apply my practical experience, contribute to business growth, and continue developing as a well-rounded Digital Marketing professional.",
  ],
  portrait: {
    src: "/portrait.jpeg" as string | null,
    alt: "Portrait of Salina Magar",
  },
  // No discrete roles, employers, or dates have been supplied yet — the
  // paragraphs above describe her experience in general terms.
  experience: [] as ExperienceEntry[],
  education: [
    {
      credential: "Bachelor of Business Studies (BBS), Accounting and Finance",
      institution: "Janamaitri Multiple Campus",
      location: "Kathmandu, Bāgmatī, Nepal",
      dates: "In progress",
      note: "Currently pursuing BBS, alongside developing interest in digital marketing and SEO.",
    },
  ] as EducationEntry[],
  certifications: [
    {
      title: "Digital Marketing Course",
      issuer: "Broadway Infosys",
      date: "July 2025",
    },
  ] as CertificationEntry[],
  // Deduplicated from the supplied skill list — "Digital Marketing
  // Course" is a certification, not a separate skill, so it's excluded
  // here (see certifications above).
  skills: [
    "Digital Marketing",
    "Social Media Marketing",
    "Meta Ads",
    "Google Ads",
    "Search Engine Optimization (SEO)",
    "Keyword Research",
    "WordPress Design",
    "Content Creation",
    "Content Marketing",
    "Web Content Writing",
    "Email Marketing",
    "Lead Generation",
    "Accounting",
    "Financial Accounting",
    "Auditing",
  ] as string[],
};
