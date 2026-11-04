import { createFileRoute, Link } from "@tanstack/react-router";
import { LogoMark } from "@/components/site/Logo";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/members")({
  head: () => {
    const h = pageHead({
      title: "Members Area — Coming Soon | CASE Edmonton",
      description: "A dedicated CASE members area with newsletters, updates, and resources is coming soon.",
      path: "/members",
    });
    return { ...h, meta: [...h.meta, { name: "robots", content: "noindex" }] };
  },
  component: Members,
});

function Members() {
  return (
    <section className="container-site flex justify-center py-20 md:py-28">
      <div className="card-surface max-w-2xl p-8 text-center md:p-14">
        <LogoMark className="mx-auto h-20 w-20" />
        <p className="mt-6 inline-block rounded-full bg-sage-soft px-4 py-1 text-sm font-bold text-sage-deep">Coming Soon</p>
        <h1 className="mt-4 text-4xl">Members Area — Coming Soon</h1>
        <p className="mt-5 text-lg">We're working on a dedicated space where CASE members can access newsletters, community updates, helpful documents, and additional resources.</p>
        <p className="mt-3 text-lg text-muted-foreground">For now, please contact CASE if you need membership-related information.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn btn-primary">Return to Homepage</Link>
          <Link to="/contact" className="btn btn-outline">Contact CASE</Link>
        </div>
      </div>
    </section>
  );
}
