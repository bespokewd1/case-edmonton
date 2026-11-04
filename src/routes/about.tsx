import { createFileRoute } from "@tanstack/react-router";
import { Dumbbell, GraduationCap, Trophy, Users } from "lucide-react";
import breakfast from "@/assets/community-breakfast.jpg";
import hero from "@/assets/hero-river-valley.jpg";
import { pageHead } from "@/lib/site";
import { ContactCta, PageHero, SectionHeading } from "@/components/site/Blocks";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About CASE | Cardiac Athletic Society of Edmonton",
      description: "Learn about the Cardiac Athletic Society of Edmonton: our mission, our story since 1979, and the welcoming community we've built around active living.",
      path: "/about",
    }),
  component: About,
});

const timeline = [
  { year: "1979", text: "Early cardiac rehabilitation community roots." },
  { year: "1980", text: "University of Alberta Cardiac Self-Help Group established." },
  { year: "1989", text: "CASE formally registered as a society." },
  { year: "2012", text: "Exercise activities moved to Terwillegar." },
  { year: "Today", text: "Continuing to bring Edmonton residents together through recreation, education, and community activities." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About CASE" title="About the Cardiac Athletic Society of Edmonton" text="Building strength, friendships, and community through active living since 1979." image={hero} alt="Friends walking a river valley trail toward downtown Edmonton, seen from behind" />

      <section className="container-site grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Who we are" title="A community built around active living" />
          <div className="mt-6 space-y-4 text-lg">
            <p>CASE is a community of adults committed to maintaining a healthy heart through exercise, education, and social programs.</p>
            <p>Today, we welcome new members who have completed cardiac rehabilitation, as well as anyone who simply wants to support a healthy heart lifestyle by taking part in our programs.</p>
          </div>
        </div>
        <div className="card-surface self-start border-l-4 border-l-warm p-8">
          <p className="eyebrow">Our mission</p>
          <p className="mt-4 text-2xl font-bold leading-snug text-primary">
            To encourage active living, continued learning, and meaningful social connections through accessible community programs and shared experiences.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our story" title="More than four decades of keeping each other moving" />
            <div className="mt-6 space-y-4 text-lg">
              <p>CASE traces its roots to 1979, when cardiac rehabilitation staff at the University of Alberta Hospital set out to help patients keep up a lifetime of heart-healthy exercise after finishing their rehabilitation program.</p>
              <p>That original purpose still guides CASE today. Over the years it has grown into a community built around exercise, education, recreation, and lasting friendships.</p>
              <p>The Cardiac Athletic Society of Edmonton was formally registered as a society in 1989.</p>
            </div>
          </div>
          <ol className="relative space-y-8 border-l-2 border-primary/25 pl-8" aria-label="CASE history timeline">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[2.6rem] top-1 h-5 w-5 rounded-full border-4 border-secondary bg-primary" aria-hidden="true" />
                <p className="text-2xl font-extrabold text-primary">{t.year}</p>
                <p className="mt-1 text-lg">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-site grid items-center gap-12 py-20 lg:grid-cols-2">
        <img src={breakfast} alt="Friends talking and laughing at a community breakfast" width={1200} height={912} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card" />
        <div>
          <SectionHeading eyebrow="Our community today" title="Active, curious, and connected" text="Today, CASE members stay involved through a mix of activities that keep the body moving and the friendships growing." />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Dumbbell, t: "Exercise" },
              { icon: GraduationCap, t: "Education" },
              { icon: Trophy, t: "Recreation" },
              { icon: Users, t: "Social engagement" },
            ].map(({ icon: Icon, t }) => (
              <li key={t} className="card-surface flex items-center gap-3 p-4 font-bold">
                <Icon className="h-5 w-5 text-sage-deep" aria-hidden="true" />{t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
