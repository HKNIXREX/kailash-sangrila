/* eslint-disable @next/next/no-img-element */
type HanumanIconProps = {
  className?: string;
};

export default function HanumanIcon({ className }: HanumanIconProps) {
  return (
    <img
      src="/images/hanuman.svg"
      alt="Lord Hanuman"
      className={`object-contain ${className ?? ""}`}
      draggable={false}
    />
  );
}
