import { createFileRoute } from "@tanstack/react-router";
import { Newspaper } from "lucide-react";
import education from "@/assets/education.jpg";
import breakfast from "@/assets/community-breakfast.jpg";
import { pageHead } from "@/lib/site";
import { upcomingEvents } from "@/data/events";
import { ContactCta, EmptyEvents, EventCard, PageHero, SectionHeading } from "@/components/site/Blocks";

export const Route = createFileRoute("/events")({
  head: () =>
    pageHead({
      title: "Events & News | Education & Community | CASE Edmonton",
      description: "Upcoming CASE events, heart-health education sessions, the Heart Murmurs newsletter, and community gatherings in Edmonton.",
      path: "/events",
    }),
  component: Events,
});

const topics = ["Heart health", "Exercise and lifestyle", "Wellness", "First aid", "Travel", "Internet safety"];

function Events() {
  const list = upcomingEvents();
  return (
    <>
      <PageHero eyebrow="Events & News" title="Events, Education & Community News" text="Stay informed about upcoming activities, educational presentations, and community gatherings." />

      <section className="container-site py-20">
        <SectionHeading eyebrow="Calendar" title="Upcoming Events" />
        <div className="mt-10">
          {list.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((e) => <EventCard key={e.id} event={e} />)}</div>
          ) : (
            <EmptyEvents title="Upcoming Events Will Be Announced Soon" text="Please check back for the latest CASE activities and community gatherings." />
          )}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Education" title="Learning Together" text="CASE hosts educational sessions on heart health, exercise, lifestyle, and other useful topics." />
            <p className="mt-4 rounded-xl bg-card px-5 py-4 text-lg font-semibold shadow-soft">These sessions are free and open to members, their friends, and prospective new members.</p>
            <h3 className="mt-8 text-xl">Topics may include</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {topics.map((t) => (
                <li key={t} className="flex items-center gap-2 font-semibold"><span className="h-2 w-2 shrink-0 rounded-full bg-warm" aria-hidden="true" />{t}</li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">Guest speakers may include healthcare professionals and community specialists.</p>
          </div>
          <img src={education} alt="Members listening to an educational presentation" width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card" />
        </div>
      </section>

      <section className="container-site py-20">
        <div className="card-surface grid gap-8 p-8 md:grid-cols-[auto_1fr] md:p-12">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-burgundy-soft text-primary">
            <Newspaper className="h-8 w-8" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-3xl">Heart Murmurs — CASE Newsletter</h2>
            <p className="mt-4 text-lg">Heart Murmurs is our membership newsletter, with articles on heart-health management along with updates on upcoming events and programs.</p>
            <p className="mt-4 rounded-xl bg-secondary px-5 py-4 font-semibold">The latest issue will be shared here soon. Past issues will be available in the future members area.</p>
          </div>
        </div>
      </section>

      <section className="container-site grid items-center gap-12 lg:grid-cols-2">
        <img src={breakfast} alt="Members enjoying a meal together" width={1200} height={912} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card lg:order-2" />
        <div>
          <SectionHeading eyebrow="Gatherings" title="Community Gatherings" />
          <div className="mt-6 space-y-4 text-lg">
            <p>Community and connection are a vital part of CASE — members often say the social side is just as important as the exercise. Every year, members look forward to:</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[["June", "Summer Barbecue"], ["December", "Christmas Dinner Party"], ["January", "Welcome-Back Dinner"], ["Monthly", "Social Breakfast"]].map(([m, t]) => (
                <li key={t} className="card-surface p-4"><p className="text-sm font-bold uppercase tracking-wider text-warm">{m}</p><p className="font-bold text-primary">{t}</p></li>
              ))}
            </ul>
            <p className="text-base text-muted-foreground">These are recurring traditions — contact CASE for this year's dates.</p>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
