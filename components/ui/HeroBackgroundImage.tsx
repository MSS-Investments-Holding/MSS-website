import Image from "next/image";

export interface HeroBackgroundImageProps {
  src: string;
  alt?: string;
  className?: string;
  sizes?: string;
  /** Default true for top-of-page heroes; set false for below-the-fold full-bleed sections. */
  priority?: boolean;
}

/**
 * Full-bleed hero backgrounds from `/public` (local static files only).
 *
 * Uses Next/Image with `unoptimized` so the browser requests a single stable URL
 * (`/images/...`) instead of varying `/_next/image?...` responses. That URL is
 * cached normally across client-side navigations, avoiding visible reloads when
 * returning to a page. First visit still downloads the file once; compress large
 * JPGs in `/public/images` if initial load is slow.
 *
 * Remote URLs (e.g. Sanity) should keep the default optimized `<Image>` pipeline
 * and rely on `images.minimumCacheTTL` in next.config.
 */
export default function HeroBackgroundImage({
  src,
  alt = "",
  className,
  sizes = "100vw",
  priority = true,
}: HeroBackgroundImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      unoptimized
    />
  );
}
