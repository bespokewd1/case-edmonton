import { Link } from "@tanstack/react-router";

/**
 * Temporary brand mark. Replace the <svg> with the official
 * "Little Red Man" mascot image once the logo file is supplied.
 */
export function LogoMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-burgundy-soft ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" className="h-3/4 w-3/4" fill="none">
        <path
          d="M24 40s-13-8.2-13-18a7.5 7.5 0 0 1 13-5.1A7.5 7.5 0 0 1 37 22c0 9.8-13 18-13 18Z"
          className="fill-warm"
        />
        <path
          d="M6 25h9l3-6 4 11 3-8 2 3h15"
          stroke="currentColor"
          className="text-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" onClick={() => window.scrollTo({ top: 0 })} className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="CASE — Cardiac Athletic Society of Edmonton, home">
      <LogoMark />
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`text-2xl font-extrabold tracking-tight ${light ? "text-primary-foreground" : "text-primary"}`}>
          CASE
        </span>
        <span className={`mt-1 max-w-[9.5rem] text-[0.7rem] sm:max-w-[11rem] font-semibold sm:text-xs ${light ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
          Cardiac Athletic Society of Edmonton
        </span>
      </span>
    </Link>
  );
}
