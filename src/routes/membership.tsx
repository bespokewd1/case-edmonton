import { createFileRoute, Link } from "@tanstack/react-router";
import { Dumbbell, GraduationCap, Info, Users, Clock } from "lucide-react";
import breakfast from "@/assets/community-breakfast.jpg";
import { pageHead } from "@/lib/site";
import { Notice, PageHero, SectionHeading } from "@/components/site/Blocks";

export const Route = createFileRoute("/membership")({
  head: () =>
    pageHead({
      title: "Membership | Join CASE Edmonton",
      description: "Learn about joining the Cardiac Athletic Society of Edmonton. Membership is open to anyone interested in heart-healthy, active living.",
      path: "/membership",
    }),
  component: Membership,
});

const benefits = [
  { icon: Dumbbell, t: "Exercise & Recreation", d: "Learn about opportunities to participate in physical and recreational activities." },
  { icon: Users, t: "Community Connections", d: "Build friendships through social gatherings and shared experiences." },
  { icon: GraduationCap, t: "Educational Opportunities", d: "Attend informative sessions about health, wellness, and practical everyday topics." },
  { icon: Info, t: "Member Information", d: "Receive information about CASE news, activities, and membership opportunities." },
];

const steps = [
  { t: "Learn About CASE", d: "Explore our activities, events, and community benefits." },
  { t: "Contact Us", d: "Reach out to CASE for membership information." },
  { t: "Get Involved", d: "Learn how to participate in upcoming activities and community events." },
];

function Membership() {
  return (
    <>
      <PageHero eyebrow="Membership" title="Join a Community That Cares About Staying Active" text="CASE brings together people interested in heart-healthy living, recreation, education, and meaningful social connections." image={breakfast} alt="Members chatting over coffee at a community breakfast" />

      <section className="container-site grid gap-10 py-20 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Who can join?" title="Everyone interested in active living is welcome" />
          <div className="mt-6 space-y-4 text-lg">
            <p>Membership is open to anyone with an interest in maintaining a healthy heart, with a range of activities that support a healthy lifestyle — including exercise, educational sessions, and social events.</p>
            <p>CASE encourages spouses and significant others to take part in all programs and events.</p>
            <p>Many members join after cardiac rehabilitation, but it isn't required.</p>
          </div>
        </div>
        <div className="card-surface self-start p-8">
          <h2 className="text-2xl">Membership Fees</h2>
          <Notice>For current membership fees and details, please contact CASE.</Notice>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-site">
          <SectionHeading center eyebrow="Benefits" title="What membership offers" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <li key={b.t} className="card-surface p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-soft text-sage-deep"><b.icon className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl">{b.t}</h3>
                <p className="mt-2 text-muted-foreground">{b.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site py-20">
        <SectionHeading center eyebrow="How to join" title="Three simple steps" />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="card-surface p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-extrabold text-primary-foreground">{i + 1}</span>
              <h3 className="mt-5 text-xl">Step {i + 1} — {s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border-2 border-dashed border-sage bg-sage-soft p-8 text-center">
          <p className="inline-flex items-center gap-2 font-bold text-sage-deep"><Clock className="h-5 w-5" aria-hidden="true" />Coming Soon</p>
          <h2 className="mt-2 text-2xl">Online Registration — Coming Soon</h2>
          <p className="mt-3 text-lg">We're working on making online membership registration available in the future. For now, please contact CASE directly for membership information.</p>
          <Link to="/contact" className="btn btn-primary mt-6">Contact CASE</Link>
        </div>
      </section>
    </>
  );
}
