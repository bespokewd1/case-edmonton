import { Link } from "@tanstack/react-router";
import { Lock, Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const linkCls =
    "rounded-full px-3 py-2 text-[0.95rem] font-semibold text-foreground transition-colors hover:bg-burgundy-soft hover:text-primary";
  const activeCls = "text-primary bg-burgundy-soft";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 btn btn-primary"
      >
        Skip to main content
      </a>
      <div className="container-site flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className={linkCls} activeProps={{ className: activeCls }} activeOptions={{ exact: n.to === "/" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/members" className="ml-2 btn btn-outline min-h-11 px-4 text-[0.95rem]">
            <Lock className="h-4 w-4" aria-hidden="true" /> Members Login
          </Link>
        </nav>
        <button
          type="button"
          className="btn btn-outline min-h-12 px-4 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          Menu
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background xl:hidden">
          <ul className="container-site flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-lg font-semibold hover:bg-burgundy-soft"
                  activeProps={{ className: "text-primary bg-burgundy-soft" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/members" onClick={() => setOpen(false)} className="btn btn-outline w-full">
                <Lock className="h-4 w-4" aria-hidden="true" /> Members Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
