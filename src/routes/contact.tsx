import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Globe, Mail, MapPin } from "lucide-react";
import { EMAIL, ORG_NAME, pageHead } from "@/lib/site";
import { PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact CASE | Cardiac Athletic Society of Edmonton",
      description: "Questions about CASE activities or membership? Email the Cardiac Athletic Society of Edmonton at case.edmonton@gmail.com.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  const rows = [
    { icon: Building2, label: "Organization", value: ORG_NAME },
    { icon: MapPin, label: "Location", value: "Edmonton, Alberta, Canada" },
    { icon: Mail, label: "Email", value: <a href={`mailto:${EMAIL}`} className="break-all text-primary underline underline-offset-4">{EMAIL}</a> },
    { icon: Globe, label: "Website", value: "edmontoncase.ca" },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in Touch With CASE" text="Have questions about CASE, our activities, or membership? We'd be happy to hear from you." />
      <section className="container-site grid gap-10 py-20 lg:grid-cols-[1.2fr_1fr]">
        <div className="card-surface p-8 md:p-10">
          <h2 className="text-2xl">Contact Information</h2>
          <dl className="mt-6 space-y-5">
            {rows.map((r) => (
              <div key={r.label} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burgundy-soft text-primary"><r.icon className="h-5 w-5" aria-hidden="true" /></span>
                <div>
                  <dt className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{r.label}</dt>
                  <dd className="text-lg font-semibold">{r.value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <a href={`mailto:${EMAIL}`} className="btn btn-primary mt-8"><Mail className="h-5 w-5" aria-hidden="true" />Email CASE</a>
        </div>
        <div className="self-start rounded-2xl bg-secondary p-8 md:p-10">
          <h2 className="text-2xl">Interested in Learning More?</h2>
          <p className="mt-4 text-lg">Whether you're considering membership, exploring our activities, or sharing CASE information with someone completing cardiac rehabilitation, we welcome your questions.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/activities" className="btn btn-outline">See Activities</Link>
            <Link to="/membership" className="btn btn-outline">Membership</Link>
          </div>
        </div>
      </section>
    </>
  );
}
