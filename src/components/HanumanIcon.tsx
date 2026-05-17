type HanumanIconProps = {
  className?: string;
};

export default function HanumanIcon({ className }: HanumanIconProps) {
  return (
    <svg
      viewBox="0 0 110 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Tail curl (signature Hanuman element, behind everything) */}
      <path
        d="M82 58 Q104 56 100 82 Q96 108 74 102"
        fill="none"
        stroke="#f97316"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Crown finial (peak tip) */}
      <path d="M55 6 L51 14 L55 22 L59 14 Z" fill="#f97316" />
      {/* Small dot above finial */}
      <circle cx="55" cy="4" r="1.8" fill="#dc2626" />

      {/* Crown / Mukut */}
      <path
        d="M28 36 Q30 18 55 14 Q80 18 82 36 L82 40 L28 40 Z"
        fill="#f97316"
      />
      {/* Crown band */}
      <rect x="26" y="38" width="58" height="5" rx="1" fill="#ea580c" />
      {/* Crown gem (red) */}
      <circle cx="55" cy="30" r="3" fill="#dc2626" />
      {/* Crown decorative dots */}
      <circle cx="40" cy="32" r="1.8" fill="#fbbf24" />
      <circle cx="70" cy="32" r="1.8" fill="#fbbf24" />

      {/* Beard / fur outline (orange ring around face) */}
      <path
        d="M22 50 Q22 86 55 96 Q88 86 88 50"
        fill="#f97316"
      />

      {/* Face (white/cream) */}
      <path
        d="M28 50 Q28 80 55 90 Q82 80 82 50 Q70 46 55 46 Q40 46 28 50 Z"
        fill="#fef3c7"
        stroke="#f97316"
        strokeWidth="1.5"
      />

      {/* Monkey muzzle / lower face area */}
      <ellipse cx="55" cy="72" rx="16" ry="11" fill="#ffffff" stroke="#f97316" strokeWidth="1.5" />

      {/* Tilak (vertical red mark on forehead) */}
      <path d="M52 50 L55 62 L58 50 Z" fill="#dc2626" />

      {/* Eyes */}
      <ellipse cx="46" cy="60" rx="2.2" ry="2.6" fill="#1f2937" />
      <ellipse cx="64" cy="60" rx="2.2" ry="2.6" fill="#1f2937" />

      {/* Eyebrows */}
      <path d="M41 56 Q46 54 51 56" stroke="#1f2937" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M59 56 Q64 54 69 56" stroke="#1f2937" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M53 66 Q55 70 57 66" stroke="#9a3412" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Mouth / smile */}
      <path d="M48 76 Q55 80 62 76" stroke="#dc2626" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}
