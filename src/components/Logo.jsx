// Monogram mark for Algernon Callier — an interlocked "A/C" formed from two
// concentric geometric strokes. Works monochrome; uses currentColor.
export default function Logo(props) {
  return (
    <svg
      className="logo"
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Algernon Callier monogram"
      {...props}
    >
      {/* Outer arc — the "C" */}
      <path
        d="M27 8.5A12 12 0 1 0 27 23.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Inner apex — the "A" */}
      <path
        d="M11 22 16 10l5 12M12.9 18.2h6.2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
