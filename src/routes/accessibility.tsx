import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, pageHead } from "@/lib/site";
import { PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/accessibility")({
  head: () => pageHead({ title: "Accessibility | CASE Edmonton", description: "Our commitment to making the CASE website easy to read and use for everyone.", path: "/accessibility" }),
  component: Accessibility,
});

function Accessibility() {
  return (
    <>
      <PageHero eyebrow="Accessibility" title="Accessibility Statement" text="We want everyone to be able to use this website comfortably." />
      <section className="container-site max-w-3xl space-y-6 py-16 text-lg">
        <p>This website aims to meet the Web Content Accessibility Guidelines (WCAG) 2.2, Level AA.</p>
        <h2 className="text-2xl">What we've done</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Large, easy-to-read text and strong colour contrast</li>
          <li>Clear headings and simple page layouts</li>
          <li>Keyboard-friendly navigation with a "skip to main content" link</li>
          <li>Descriptive text for images</li>
          <li>No pop-ups and no autoplaying video or sound</li>
        </ul>
        <h2 className="text-2xl">Tips</h2>
        <p>You can make text larger by pressing <strong>Ctrl</strong> and <strong>+</strong> (or <strong>⌘</strong> and <strong>+</strong> on a Mac).</p>
        <h2 className="text-2xl">Tell us</h2>
        <p>If something is hard to use, please let us know at <a className="font-semibold text-primary underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      </section>
    </>
  );
}
