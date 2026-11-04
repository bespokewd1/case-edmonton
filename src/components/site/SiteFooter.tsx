import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { EMAIL, NAV } from "@/lib/site";
import { LogoMark } from "./Logo";
import { EdmontonNow } from "./EdmontonNow";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-tight">
              <p className="text-2xl font-extrabold text-primary">CASE</p>
              <p className="text-sm font-semibold text-muted-foreground">Cardiac Athletic Society of Edmonton</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-muted-foreground">
            Supporting active living, education, and community connections in Edmonton.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-base font-bold text-foreground">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-primary hover:underline">{n.label}</Link>
              </li>
            ))}
            <li><Link to="/members" className="hover:text-primary hover:underline">Members Login</Link></li>
          </ul>
        </nav>
        <div>
          <h2 className="text-base font-bold text-foreground">Get in touch</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
              <a href={`mailto:${EMAIL}`} className="break-all font-semibold text-primary underline-offset-4 hover:underline">{EMAIL}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
              <span>Edmonton, Alberta, Canada</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-site py-4">
          <EdmontonNow />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-site flex flex-col gap-3 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>© {year} Cardiac Athletic Society of Edmonton. All rights reserved.</p>
            <p>
              Web Development by{" "}
              <a href="https://www.facebook.com/bespokewebdesignEdmonton/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                Bespoke Web Design
              </a>
            </p>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary hover:underline">Privacy Policy</Link>
            <Link to="/accessibility" className="hover:text-primary hover:underline">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
