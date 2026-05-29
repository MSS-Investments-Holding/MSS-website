interface Props {
  fill?: string;
}

export default function ExternalLink({ fill = "currentColor" }: Props) {
  return (
    <svg width="10" height="10" viewBox="4 4 10 10" fill="none" aria-hidden="true">
      <path
        d="M12.0019 7.06066L5.54699 13.5156L4.48633 12.455L10.9413 6H5.25194V4.5H13.5019V12.75H12.0019V7.06066Z"
        fill={fill}
      />
    </svg>
  );
}
