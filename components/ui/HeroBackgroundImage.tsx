import Image from "next/image";

export interface HeroBackgroundImageProps {
  src: string;
  alt?: string;
  className?: string;
  sizes?: string;
  /** Default true for top-of-page heroes; set false for below-the-fold full-bleed sections. */
  priority?: boolean;
}

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
    />
  );
}
