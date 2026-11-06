import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/case-logo.webp";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      onClick={() => setTimeout(() => window.scrollTo({ top: 0 }), 50)}
      className={`flex min-w-0 flex-col items-start leading-none ${className}`}
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
