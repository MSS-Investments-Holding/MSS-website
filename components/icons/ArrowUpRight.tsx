interface Props {
  fill?: string;
  size?: number;
}

export default function ArrowUpRight({ fill = "currentColor", size = 16 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M10.6692 6.27614L4.93151 12.0139L3.98871 11.0711L9.72643 5.33333H4.66925V4H12.0026V11.3333H10.6692V6.27614Z"
        fill={fill}
      />
    </svg>
  );
}
