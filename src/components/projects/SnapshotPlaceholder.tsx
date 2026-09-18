export function SnapshotPlaceholder({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 border border-dashed border-line bg-white text-center ${className}`}
    >
      <p className="text-xs uppercase tracking-[0.14em] text-ink-muted">
        Snapshot coming soon
      </p>
      <p className="max-w-xs text-sm text-ink-muted">
        TODO: Add client-provided project snapshot.
      </p>
    </div>
  );
}
