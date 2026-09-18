import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortraitFrame } from "@/components/about/PortraitFrame";
import { aboutContent } from "@/content/about";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { intro, experience, education, certifications, skills } =
    aboutContent;

  return (
    <>
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="About" title="About Me" as="h1" />

          <div className="mt-12 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-14">
            <PortraitFrame />
            <div className="max-w-xl space-y-5">
              {intro.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-ink-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <h2 className="font-serif text-2xl text-ink">Experience</h2>
          {experience.length > 0 ? (
            <ol className="mt-8 space-y-8 border-t border-line pt-8">
              {experience.map((role) => (
                <li key={`${role.organization}-${role.role}`}>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <p className="font-serif text-lg text-ink">
                      {role.role} · {role.organization}
                    </p>
                    <p className="text-sm text-ink-muted">{role.dates}</p>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                    {role.description}
                  </p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted">
              TODO: Add specific roles, employers, and dates once supplied
              — the paragraphs above describe her experience in general
              terms.
            </p>
          )}
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <h2 className="font-serif text-2xl text-ink">Education</h2>
          {education.length > 0 ? (
            <ol className="mt-8 space-y-6 border-t border-line pt-8">
              {education.map((entry) => (
                <li
                  key={`${entry.institution}-${entry.credential}`}
                  className="space-y-1"
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <p className="font-serif text-lg text-ink">
                      {entry.credential} · {entry.institution}
                    </p>
                    <p className="text-sm text-ink-muted">{entry.dates}</p>
                  </div>
                  {entry.location && (
                    <p className="text-sm text-ink-muted">{entry.location}</p>
                  )}
                  {entry.note && (
                    <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
                      {entry.note}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted">
              TODO: Add education entries from Salina&apos;s LinkedIn profile.
            </p>
          )}
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <h2 className="font-serif text-2xl text-ink">Certifications</h2>
          {certifications.length > 0 ? (
            <ul className="mt-8 space-y-3 border-t border-line pt-8">
              {certifications.map((certification) => (
                <li
                  key={certification.title}
                  className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline"
                >
                  <p className="text-base text-ink">
                    {certification.title} · {certification.issuer}
                  </p>
                  <p className="text-sm text-ink-muted">
                    {certification.date}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted">
              TODO: Add certifications from Salina&apos;s LinkedIn profile, if
              any are listed.
            </p>
          )}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-serif text-2xl text-ink">Skills</h2>
          {skills.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
              {skills.map((skill) => (
                <li key={skill} className="text-sm text-ink-muted">
                  {skill}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted">
              TODO: Add skills from Salina&apos;s LinkedIn profile.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
