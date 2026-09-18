/**
 * Contact information.
 *
 * Only render information that has actually been supplied or verified.
 * The LinkedIn URL was provided directly for this project, so it is
 * populated. Every other channel is null until the client supplies it —
 * do not invent an email, phone number, or handle to fill a gap.
 */

export type ContactLink = {
  label: string;
  href: string;
  value: string;
};

export const contactContent = {
  email: "salinadigitalmarketing@gmail.com" as string | null,
  phone: "+977 9764379489" as string | null,
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/salina-magar-57aa1b3ab/",
    value: "linkedin.com/in/salina-magar-57aa1b3ab",
  } satisfies ContactLink,
  instagram: null as ContactLink | null, // TODO: Add Instagram handle/URL if supplied.
  facebook: null as ContactLink | null, // TODO: Add Facebook page/URL if supplied.
};
