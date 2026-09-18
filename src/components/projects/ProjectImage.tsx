import Image from "next/image";
import { resolveImageSrc, type ProjectImageSource } from "@/lib/images";

type ProjectImageProps = ProjectImageSource & {
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Renders a single local project image. Must be placed inside a
 * relatively-positioned, sized container since it renders with `fill`.
 */
export function ProjectImage({
  src,
  alt,
  sizes = "(min-width: 640px) 50vw, 100vw",
  priority,
  className = "object-contain",
}: ProjectImageProps) {
  const resolvedSrc = resolveImageSrc(src);

  if (!resolvedSrc) return null;

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
