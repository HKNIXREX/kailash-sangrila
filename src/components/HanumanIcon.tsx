type HanumanIconProps = {
  className?: string;
  strokeWidth?: number;
};

export default function HanumanIcon({ className, strokeWidth = 4 }: HanumanIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Crown finial */}
      <path d="M50 8 L50 18" />
      {/* Crown dome */}
      <path d="M32 32 Q40 14 50 14 Q60 14 68 32" />
      {/* Crown band */}
      <path d="M30 32 L70 32" />
      {/* Tilak dot on forehead */}
      <circle cx="50" cy="40" r="2.2" fill="currentColor" stroke="none" />
      {/* Face outline */}
      <path d="M28 40 Q28 72 50 84 Q72 72 72 40" />
      {/* Eyes (closed, peaceful) */}
      <path d="M38 52 Q42 56 46 52" />
      <path d="M54 52 Q58 56 62 52" />
      {/* Mouth / smile */}
      <path d="M42 68 Q50 74 58 68" />
      {/* Tail curl (small loop on right - signature Hanuman element) */}
      <path d="M76 50 Q86 50 86 60 Q86 72 76 72" />
    </svg>
  );
}
