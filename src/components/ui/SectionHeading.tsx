type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
          {eyebrow}
        </p>
      )}
      <Heading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </div>
  );
}
