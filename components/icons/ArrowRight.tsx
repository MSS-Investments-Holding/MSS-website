interface Props {
  /** "sm" = 11×9 (Read More links) · "lg" = 12×10 (CTA buttons) */
  size?: "sm" | "lg";
  fill?: string;
}

export default function ArrowRight({ size = "lg", fill = "currentColor" }: Props) {
  if (size === "sm") {
    return (
      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
        <path
          d="M8.62803 3.92154L5.45194 0.818192L6.2893 0L10.8949 4.50009L6.2893 9.00012L5.45194 8.18193L8.62803 5.07864H0V3.92154H8.62803Z"
          fill={fill}
        />
      </svg>
    );
  }
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
      <path
        d="M9.50322 4.31932L6.00496 0.901185L6.92726 0L12 4.95656L6.92726 9.91304L6.00496 9.01187L9.50322 5.5938H0V4.31932H9.50322Z"
        fill={fill}
      />
    </svg>
  );
}
