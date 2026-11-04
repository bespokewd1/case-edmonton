import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, pageHead } from "@/lib/site";
import { PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead({ title: "Privacy Policy | CASE Edmonton", description: "How the Cardiac Athletic Society of Edmonton handles your privacy on this website.", path: "/privacy" }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy Policy" text="We respect your privacy and keep things simple." />
      <section className="container-site max-w-3xl space-y-6 py-16 text-lg">
        <h2 className="text-2xl">Information we collect</h2>
        <p>This website does not ask you to create an account, fill in forms, or make payments. We do not collect personal information through this site.</p>
        <h2 className="text-2xl">When you email us</h2>
        <p>If you contact us by email, we use your message and email address only to reply to you and share CASE information you asked about. We do not sell or share your details.</p>
        <h2 className="text-2xl">Member privacy</h2>
        <p>We do not publish members' personal contact details, surnames, or private information on this public website.</p>
        <h2 className="text-2xl">Questions</h2>
        <p>Email us at <a className="font-semibold text-primary underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      </section>
    </>
  );
}
