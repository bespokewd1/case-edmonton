import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/case-logo.webp";

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

export function Logo() {
  return (
    <Link
      to="/"
      onClick={() => setTimeout(() => window.scrollTo({ top: 0 }), 50)}
      className="flex min-w-0 flex-col items-start leading-none"
      aria-label="CASE — Cardiac Athletic Society of Edmonton, home"
    >
      <img
        src={logoSrc}
        alt=""
        width={1920}
        height={600}
        className="h-8 w-auto max-w-full object-contain mix-blend-multiply sm:h-10"
      />
      <span className="mt-1 max-w-[220px] text-[11px] font-semibold leading-tight text-primary sm:max-w-none sm:text-[12px]">
        Cardiac Athletic Society of Edmonton
      </span>
    </Link>
  );
}
