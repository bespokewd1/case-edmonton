import { Link } from "@tanstack/react-router";
import { CalendarClock, MapPin, Clock, Tag } from "lucide-react";
import type { ReactNode } from "react";
import type { CaseEvent } from "@/data/events";

export function PageHero({ eyebrow, title, text, image, alt }: { eyebrow: string; title: string; text: string; image?: string; alt?: string }) {
  return (
    <section className="border-b border-border bg-card">
      <div className={`container-site grid items-center gap-10 py-14 md:py-20 ${image ? "lg:grid-cols-2" : ""}`}>
        <div className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl">{text}</p>
        </div>
        {image && (
          <img src={image} alt={alt ?? ""} width={1024} height={768} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
        )}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, center }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 rounded-xl border-l-4 border-sage bg-sage-soft px-5 py-4 font-semibold text-foreground">{children}</p>
  );
}

export function EventCard({ event }: { event: CaseEvent }) {
  const date = new Date(`${event.date}T12:00:00`).toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  return (
    <article className="card-surface flex flex-col p-6">
      <p className="inline-flex items-center gap-2 text-sm font-bold text-sage-deep"><Tag className="h-4 w-4" aria-hidden="true" />{event.category}</p>
      <h3 className="mt-2 text-xl">{event.title}</h3>
      <ul className="mt-4 space-y-2 text-[0.95rem]">
        <li className="flex gap-2"><CalendarClock className="mt-1 h-4 w-4 text-primary" aria-hidden="true" />{date}</li>
        <li className="flex gap-2"><Clock className="mt-1 h-4 w-4 text-primary" aria-hidden="true" />{event.time}</li>
        <li className="flex gap-2"><MapPin className="mt-1 h-4 w-4 text-primary" aria-hidden="true" />{event.location}</li>
      </ul>
      <p className="mt-4 flex-1 text-muted-foreground">{event.description}</p>
      <Link to="/contact" className="btn btn-outline mt-6 self-start">View Details</Link>
    </article>
  );
}

export function EmptyEvents({ title, text }: { title: string; text: string }) {
  return (
    <div className="card-surface flex flex-col items-center px-6 py-14 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-soft text-sage-deep">
        <CalendarClock className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-2xl">{title}</h3>
      <p className="mt-3 max-w-lg text-muted-foreground">{text}</p>
    </div>
  );
}

export function ContactCta({ title = "Have a question? We'd love to hear from you.", text = "Reach out to CASE for current schedules, membership details, or anything else you'd like to know." }: { title?: string; text?: string }) {
  return (
    <section className="container-site mt-24">
      <div className="rounded-3xl bg-primary px-6 py-14 text-center md:px-16">
        <h2 className="text-3xl text-primary-foreground md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">{text}</p>
        <Link to="/contact" className="btn btn-light mt-8">Contact CASE</Link>
      </div>
    </section>
  );
}
