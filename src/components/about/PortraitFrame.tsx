import Image from "next/image";
import { aboutContent } from "@/content/about";

export function PortraitFrame() {
  const { portrait } = aboutContent;

  return (
    <div className="aspect-[4/5] w-full max-w-sm border border-line bg-white">
      {portrait.src ? (
        <Image
          src={portrait.src}
          alt={portrait.alt}
          width={640}
          height={800}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
          <p className="text-xs uppercase tracking-[0.14em] text-ink-muted">
            Portrait
          </p>
          <p className="text-sm text-ink-muted">
            TODO: Add a supplied portrait photo.
          </p>
        </div>
      )}
    </div>
  );
}
