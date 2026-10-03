export default function RobotAvatar({ small = false }) {
  return (
    <span className={`robot-avatar${small ? " small" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M32 8v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="6" r="2.5" fill="currentColor" />
        <rect x="10" y="16" width="44" height="34" rx="12" fill="currentColor" opacity=".12" stroke="currentColor" strokeWidth="2.5" />
        <rect x="16" y="23" width="32" height="20" rx="8" fill="currentColor" opacity=".12" />
        <circle cx="25" cy="33" r="3.5" fill="currentColor" />
        <circle cx="39" cy="33" r="3.5" fill="currentColor" />
        <path d="M24 39c2.5 2 13.5 2 16 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 30H6M58 30h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}
