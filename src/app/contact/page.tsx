import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Salina Magar.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const channels = [
    contactContent.email
      ? {
          label: "Email",
          href: `mailto:${contactContent.email}`,
          value: contactContent.email,
        }
      : null,
    contactContent.phone
      ? {
          label: "Phone",
          href: `tel:${contactContent.phone.replace(/\s+/g, "")}`,
          value: contactContent.phone,
        }
      : null,
    {
      label: contactContent.linkedin.label,
      href: contactContent.linkedin.href,
      value: contactContent.linkedin.value,
    },
    contactContent.instagram,
    contactContent.facebook,
  ].filter((channel): channel is NonNullable<typeof channel> =>
    Boolean(channel),
  );

  const hasMissingChannels = !contactContent.instagram || !contactContent.facebook;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Contact" title="Get in touch" as="h1" />

        <ul className="mt-12 max-w-md border-t border-line">
          {channels.map((channel) => (
            <li key={channel.label} className="border-b border-line py-5">
              <p className="text-xs uppercase tracking-[0.14em] text-ink-muted">
                {channel.label}
              </p>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  channel.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="mt-1 inline-block font-serif text-xl text-ink transition-colors hover:text-accent"
              >
                {channel.value}
              </a>
            </li>
          ))}
        </ul>

        {/* {hasMissingChannels && (
          <p className="mt-8 max-w-md text-sm text-ink-muted">
            TODO: Add verified Instagram and/or Facebook links once supplied.
          </p>
        )} */}
      </Container>
    </section>
  );
}
