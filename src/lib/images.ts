/**
 * Project images are local files shipped under /public/portfolio/, and
 * referenced by their site-relative path (e.g.
 * "/portfolio/graphic-design/example.jpg"). This validates that a src
 * coming from the database is actually a local, site-relative path
 * before it reaches next/image, so an unexpected value can't be used
 * to render from an arbitrary host.
 */
export type ProjectImageSource = {
  src: string;
  alt: string;
};

export function resolveImageSrc(src: string): string | null {
  return src.startsWith("/") ? src : null;
}
