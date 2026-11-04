import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, Dumbbell, CalendarHeart, Footprints, GraduationCap, Smile, Trophy, Users, Coffee, CircleDot, HeartPulse } from "lucide-react";
import hero from "@/assets/hero-river-valley.jpg";
import walkers from "@/assets/hero-walking.jpg";
import breakfast from "@/assets/community-breakfast.jpg";
import exercise from "@/assets/exercise.jpg";
import golf from "@/assets/golf.jpg";
import bowling from "@/assets/bowling.jpg";
import education from "@/assets/education.jpg";
import { pageHead } from "@/lib/site";
import { upcomingEvents } from "@/data/events";
import { EmptyEvents, EventCard, SectionHeading } from "@/components/site/Blocks";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "CASE Edmonton | Heart Health, Exercise & Community",
      description:
        "Discover the Cardiac Athletic Society of Edmonton (CASE). Stay active and connected through exercise, education, recreation, and community events.",
      path: "/",
    }),
  component: Home,
});

const activities = [
  { title: "Heart-Healthy Exercise", text: "Stay active through group exercise opportunities designed to encourage regular physical activity.", img: exercise, alt: "Older adults taking part in a group exercise class in a bright gym", icon: HeartPulse },
  { title: "Golf", text: "Enjoy recreational golf with fellow members and participate in seasonal activities.", img: golf, alt: "Two friends putting on a sunny golf green", icon: Trophy },
  { title: "Walking Groups", text: "Get outdoors, enjoy fresh air, and connect with friends through group walks.", img: walkers, alt: "A group of adults walking together on a river valley trail", icon: Footprints },
  { title: "Bowling", text: "Have fun, stay engaged, and enjoy low-impact recreation in a social setting.", img: bowling, alt: "A man bowling while friends cheer behind him", icon: CircleDot },
  { title: "Social Gatherings", text: "Build friendships through community breakfasts, celebrations, and special events.", img: breakfast, alt: "Friends laughing together over breakfast in a community hall", icon: Coffee },
  { title: "Educational Sessions", text: "Learn about heart health, wellness, safety, and everyday topics through educational presentations.", img: education, alt: "An audience listening to a friendly presentation in a community room", icon: GraduationCap },
];

const benefits = [
  { title: "An active, heart-healthy lifestyle", text: "Regular activity with others makes it easier to keep healthy habits going.", icon: Activity },
  { title: "Safe, effective exercise habits", text: "Group sessions encourage steady, sensible exercise you can keep up week to week.", icon: HeartPulse },
  { title: "Less anxiety, low mood, and loneliness", text: "Many members find that staying active with friends can help ease worry, low mood, and isolation.", icon: Smile },
  { title: "Strength, endurance, and stamina", text: "Ongoing activity helps build strength and endurance over time.", icon: Dumbbell },
  { title: "Camaraderie and connection", text: "Shared experiences and friendly faces make every activity something to look forward to.", icon: Users },
];

function Home() {
  const events = upcomingEvents().slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="bg-card">
        <div className="container-site grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
          <div>
            <p className="eyebrow">Edmonton, Alberta · Since 1979</p>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem]">
              Stay Active. Stay Connected. Support Your Heart.
            </h1>
            <p className="mt-5 text-xl font-bold text-warm md:text-2xl">
              Building strength, confidence, and community — one step at a time.
            </p>
            <p className="mt-5 text-lg md:text-xl">
              Discover a welcoming Edmonton community where active living, meaningful friendships, and heart-health education come together.
            </p>
            <p className="mt-4 text-muted-foreground">
              CASE brings people together through exercise, recreation, educational programs, and social activities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/activities" className="btn btn-primary">Explore Our Activities</Link>
              <Link to="/about" className="btn btn-outline">Learn About CASE</Link>
            </div>
          </div>
          <img
            src={hero}
            alt="Four friends, seen from behind, walking a trail in Edmonton's river valley with the downtown skyline ahead"
            width={1280}
            height={1024}
            fetchPriority="high"
            className="aspect-[5/4] w-full rounded-3xl object-cover shadow-card"
          />
        </div>
      </section>

      {/* Trust strip */}
      <section aria-label="About CASE at a glance" className="bg-primary text-primary-foreground">
        <ul className="container-site grid gap-6 py-8 sm:grid-cols-3">
          {[
            { icon: CalendarHeart, text: "Serving Edmonton Since 1979" },
            { icon: Users, text: "Exercise, Education & Friendship" },
            { icon: Smile, text: "A Welcoming Local Community" },
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 font-bold">
              <Icon className="h-6 w-6 shrink-0 text-primary-foreground/80" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </section>

      {/* About intro */}
      <section className="container-site grid items-center gap-12 py-20 lg:grid-cols-2">
        <img src={breakfast} alt="Friends sharing coffee and conversation at a community breakfast" width={1200} height={912} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card lg:order-2" />
        <div>
          <SectionHeading eyebrow="About CASE" title="A Community That Keeps You Moving Forward" />
          <div className="mt-6 space-y-4 text-lg">
            <p>Completing cardiac rehabilitation can be an important milestone, but maintaining an active lifestyle and meaningful connections is an ongoing journey.</p>
            <p>The Cardiac Athletic Society of Edmonton provides opportunities for people to stay active, participate in recreational activities, continue learning, and build lasting friendships.</p>
            <p>Whether you're looking to maintain a heart-healthy lifestyle or connect with others who share similar interests, CASE offers a welcoming place to belong.</p>
          </div>
          <Link to="/about" className="btn btn-primary mt-8">Discover Our Story</Link>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-secondary py-20">
        <div className="container-site">
          <SectionHeading center eyebrow="Activities" title="Find Your Way to Stay Active" text="From exercise and recreation to social gatherings and educational events, there's always something happening at CASE." />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <li key={a.title} className="card-surface overflow-hidden">
                <img src={a.img} alt={a.alt} width={1024} height={768} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="p-6">
                  <h3 className="flex items-center gap-2 text-xl"><a.icon className="h-5 w-5 text-warm" aria-hidden="true" />{a.title}</h3>
                  <p className="mt-2 text-muted-foreground">{a.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link to="/activities" className="btn btn-primary">View All Activities</Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-site py-20">
        <SectionHeading center eyebrow="Why people join" title="More Than Activities. A Place to Belong." text="Over the years, CASE members have discovered that taking part in our exercise, educational, and social programs brings meaningful, lasting benefits:" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {benefits.map((b) => (
            <li key={b.title} className="card-surface p-7 lg:col-span-2 lg:[&:nth-child(4)]:col-start-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-soft text-sage-deep">
                <b.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.text}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">Everyone's experience is different. CASE is a community group, not a medical service — please follow your own healthcare provider's advice.</p>
      </section>

      {/* Events */}
      <section className="bg-card py-20">
        <div className="container-site">
          <SectionHeading eyebrow="Events" title="What's Happening at CASE" />
          <div className="mt-10">
            {events.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-3">{events.map((e) => <EventCard key={e.id} event={e} />)}</div>
            ) : (
              <EmptyEvents title="New Events Coming Soon" text="Stay connected with CASE for upcoming activities, educational sessions, and community gatherings." />
            )}
          </div>
          <Link to="/events" className="btn btn-outline mt-10">Explore Events & News</Link>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="container-site mt-20">
        <div className="grid items-center gap-8 rounded-3xl bg-primary p-8 md:grid-cols-[1.4fr_auto] md:p-14">
          <div>
            <h2 className="text-3xl text-primary-foreground md:text-4xl">Interested in Joining CASE?</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">Discover the benefits of becoming part of a welcoming community dedicated to active living, education, and friendship.</p>
            <p className="mt-2 text-lg text-primary-foreground/90">Learn more about membership and how to get involved.</p>
          </div>
          <Link to="/membership" className="btn btn-light">Learn About Membership</Link>
        </div>
      </section>
    </>
  );
}
