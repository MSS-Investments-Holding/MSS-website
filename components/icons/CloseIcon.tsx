interface Props {
  fill?: string;
}

export default function CloseIcon({ fill = "currentColor" }: Props) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M6.4997 5.05535L11.5551 0L12.9994 1.44437L7.94406 6.49972L12.9994 11.555L11.5551 12.9993L6.4997 7.94408L1.44438 12.9993L0 11.555L5.05533 6.49972L0 1.44437L1.44438 0L6.4997 5.05535Z"
        fill={fill}
      />
    </svg>
  );
}
