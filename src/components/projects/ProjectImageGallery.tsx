import { ProjectImage } from "@/components/projects/ProjectImage";
import { SnapshotPlaceholder } from "@/components/projects/SnapshotPlaceholder";
import type { ProjectImageSource } from "@/lib/images";

/**
 * These are real screenshots — square social graphics next to wide
 * dashboard and spreadsheet captures — so a fixed-aspect-ratio crop
 * would cut off columns, chart labels, or campaign details. Every
 * image renders at a fixed frame height with `object-contain` instead,
 * so nothing is cropped regardless of its source aspect ratio.
 */
export function ProjectImageGallery({
  images,
}: {
  images: ProjectImageSource[];
}) {
  if (images.length === 0) {
    return <SnapshotPlaceholder />;
  }

  if (images.length === 1) {
    return (
      <div className="relative h-105 w-full border border-line bg-white sm:h-140">
        <ProjectImage {...images[0]} sizes="100vw" priority />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-80 w-full border border-line bg-white sm:h-100"
        >
          <ProjectImage {...image} sizes="(min-width: 640px) 50vw, 100vw" />
        </div>
      ))}
    </div>
  );
}
