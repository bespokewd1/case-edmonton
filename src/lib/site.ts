export const SITE_URL = "https://edmontoncase.ca";
export const EMAIL = "case.edmonton@gmail.com";
export const ORG_NAME = "Cardiac Athletic Society of Edmonton";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About CASE" },
  { to: "/activities", label: "Activities" },
  { to: "/events", label: "Events & News" },
  { to: "/membership", label: "Membership" },
  { to: "/contact", label: "Contact" },
] as const;

/** Builds a unique head() block for a page. */
export function pageHead(opts: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
