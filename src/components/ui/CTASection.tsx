import Link from "next/link";

type CTASectionProps = {
  title: string;
  description?: string;
  href: string;
  linkLabel: string;
};

export function CTASection({
  title,
  description,
  href,
  linkLabel,
}: CTASectionProps) {
  return (
    <section className="border-t border-line py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {description}
              </p>
            )}
          </div>
          <Link
            href={href}
            className="inline-flex shrink-0 items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {linkLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
