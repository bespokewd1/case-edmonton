import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const EXERCISE_LINKS = [
  { hash: "exercise", label: "Healthy at Heart" },
  { hash: "golf", label: "Golf" },
  { hash: "walking", label: "Walking Group" },
  { hash: "bowling", label: "Bowling" },
  { hash: "essentrics", label: "Essentrics / Aging Backwards" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [exOpen, setExOpen] = useState(false);
  const close = () => {
    setOpen(false);
    setExOpen(false);
  };
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setExOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  const linkCls =
    "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[0.9rem] font-semibold text-foreground transition-colors hover:bg-burgundy-soft hover:text-primary";
  const activeCls = "text-primary bg-burgundy-soft";
  const mobileLink = "block rounded-lg px-4 py-3 text-lg font-semibold hover:bg-burgundy-soft";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 btn btn-primary"
      >
        Skip to main content
      </a>
      <div className="container-site grid min-h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-2 sm:min-h-20 xl:flex xl:justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden shrink-0 items-center gap-1 xl:flex">
          {NAV.map((n) =>
            n.to === "/activities" ? (
              <div key={n.to} className="flex items-center gap-0.5">
              <div className="group relative">
                <Link to="/activities" className={linkCls} activeProps={{ className: activeCls }} aria-haspopup="true">
                  {n.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="w-64 rounded-xl border border-border bg-card p-2 shadow-soft">
                    {EXERCISE_LINKS.map((a) => (
                      <li key={a.hash}>
                        <Link
                          to="/activities"
                          hash={a.hash}
                          className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-foreground hover:bg-burgundy-soft hover:text-primary"
                        >
                          {a.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
                <Link to="/activities" hash="social" className={linkCls}>
                  Social Programs
                </Link>
              </div>
            ) : (
              <Link key={n.to} to={n.to} className={linkCls} activeProps={{ className: activeCls }} activeOptions={{ exact: n.to === "/" }}>
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-11 w-11 shrink-0 rounded-lg text-primary xl:hidden [&_svg]:size-6"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-border bg-background xl:hidden">
          <ul className="container-site flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <li key={n.to}>
                {n.to === "/activities" ? (
                  <>
                    <Button
                      type="button"
                      variant="ghost"
                      aria-expanded={exOpen}
                      aria-controls="mobile-exercise"
                      onClick={() => setExOpen((v) => !v)}
                      className={`${mobileLink} flex h-auto w-full items-center justify-between whitespace-normal text-left`}
                    >
                      {n.label}
                      <ChevronDown className={`h-5 w-5 transition-transform ${exOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    </Button>
                    {exOpen && (
                      <ul id="mobile-exercise" className="mb-1 ml-4 border-l-2 border-burgundy-soft pl-2">
                        <li>
                          <Link to="/activities" onClick={close} className="block rounded-lg px-3 py-2.5 text-base font-semibold text-primary hover:bg-burgundy-soft">
                            All Exercise Programs
                          </Link>
                        </li>
                        {EXERCISE_LINKS.map((a) => (
                          <li key={a.hash}>
                            <Link
                              to="/activities"
                              hash={a.hash}
                              onClick={close}
                              className="block rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-burgundy-soft hover:text-primary"
                            >
                              {a.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={n.to}
                    onClick={close}
                    className={mobileLink}
                    activeProps={{ className: "text-primary bg-burgundy-soft" }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                  </Link>
                )}
                {n.to === "/activities" && (
                  <Link to="/activities" hash="social" onClick={close} className={`${mobileLink} mt-1`}>
                    Social Programs
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
