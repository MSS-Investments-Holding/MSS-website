interface Props {
  fill?: string;
  size?: number;
}

export default function ArrowUpRight({ fill = "currentColor", size = 10 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M8.33619 2.84024L1.17647 9.99997L0 8.82352L7.15973 1.66378H0.849209V0H9.99996V9.15078H8.33619V2.84024Z"
        fill={fill}
      />
    </svg>
  );
}
