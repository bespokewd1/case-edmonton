import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import exercise from "@/assets/exercise.jpg";
import golf from "@/assets/golf.jpg";
import walking from "@/assets/hero-walking.jpg";
import bowling from "@/assets/bowling.jpg";
import breakfast from "@/assets/community-breakfast.jpg";
import education from "@/assets/education.jpg";
import { pageHead } from "@/lib/site";
import { ContactCta, Notice, PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/activities")({
  head: () =>
    pageHead({
      title: "Activities | Exercise, Golf, Walking & More | CASE Edmonton",
      description: "Explore CASE activities in Edmonton: heart-healthy exercise at Terwillegar, golf, walking groups, bowling, Essentrics, and social gatherings.",
      path: "/activities",
    }),
  component: Activities,
});

type Item = { id: string; title: string; img: string; alt: string; body: string[]; location?: string; list?: string[]; note?: string };

const items: Item[] = [
  {
    id: "exercise", title: "Healthy at Heart Exercise", img: exercise, alt: "Older adults in a group exercise class at a recreation centre",
    body: ["CASE members participate in exercise opportunities at Terwillegar Community Recreation Centre.", "The program provides opportunities for participants to maintain regular physical activity in a community environment."],
    location: "Terwillegar Community Recreation Centre, Edmonton",
    note: "For current activity schedules, please contact CASE.",
  },
  {
    id: "golf", title: "Golf", img: golf, alt: "Two friends enjoying a round of golf on a sunny day",
    body: ["Members enjoy recreational golf during the golf season, with a relaxed, friendly pace that welcomes all skill levels.", "Virtual golf opportunities may also be available during winter."],
    location: "Countryside, Edmonton area",
    note: "Please contact CASE for current golf details and schedules.",
  },
  {
    id: "walking", title: "Walking Group", img: walking, alt: "A group of friends walking along a trail on an autumn day",
    body: ["Seasonal outdoor walking sessions provide opportunities for gentle exercise, friendship, and enjoying Edmonton's outdoor spaces."],
  },
  {
    id: "bowling", title: "Bowling", img: bowling, alt: "Friends cheering as a man bowls",
    body: ["A recreational activity focused on fun, coordination, and social engagement."],
  },
  {
    id: "essentrics", title: "Essentrics", img: exercise, alt: "Adults moving through a gentle flexibility routine",
    body: ["CASE members may have access to online Essentrics workouts through an associated instructor.", "The program focuses on flexibility, mobility, and movement. Member discounts may be available."],
    note: "Contact CASE to learn more about Essentrics access.",
  },
  {
    id: "social", title: "Social Activities", img: breakfast, alt: "Members sharing a cheerful breakfast together",
    body: ["Some of the best moments at CASE happen around a table. Our social calendar gives members a chance to relax, celebrate, and get to know one another."],
    list: ["Summer barbecues", "Christmas celebrations", "Welcome-back dinners", "Monthly social breakfasts", "Other community gatherings"],
    note: "Schedules and availability may vary throughout the year.",
  },
];

function Activities() {
  return (
    <>
      <PageHero eyebrow="Activities" title="Stay Active. Enjoy Life. Connect With Others." text="Explore the activities that bring CASE members together throughout the year." image={education} alt="Members gathered for a friendly presentation" />
      <nav aria-label="Activities on this page" className="container-site pt-10">
        <ul className="flex flex-wrap gap-2">
          {items.map((i) => (
            <li key={i.id}><a href={`#${i.id}`} className="btn btn-outline min-h-11 px-4 text-[0.95rem]">{i.title}</a></li>
          ))}
        </ul>
      </nav>
      <div className="container-site space-y-20 py-16">
        {items.map((i, idx) => (
          <section key={i.id} id={i.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2">
            <img src={i.img} alt={i.alt} width={1024} height={768} loading="lazy" className={`aspect-[4/3] w-full rounded-3xl object-cover shadow-card ${idx % 2 ? "lg:order-2" : ""}`} />
            <div>
              <h2 className="text-3xl md:text-4xl">{i.title}</h2>
              <div className="mt-5 space-y-4 text-lg">{i.body.map((p) => <p key={p}>{p}</p>)}</div>
              {i.list && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {i.list.map((l) => (
                    <li key={l} className="flex items-center gap-2 font-semibold"><span className="h-2 w-2 rounded-full bg-warm" aria-hidden="true" />{l}</li>
                  ))}
                </ul>
              )}
              {i.location && (
                <p className="mt-5 flex items-start gap-2 font-semibold"><MapPin className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />{i.location}</p>
              )}
              {i.note && <Notice>{i.note}</Notice>}
            </div>
          </section>
        ))}
      </div>
      <ContactCta title="Want to try an activity?" text="Get in touch for current schedules and to find out how you can take part." />
    </>
  );
}
