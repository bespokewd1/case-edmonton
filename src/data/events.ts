/**
 * CASE events list.
 *
 * Add only CONFIRMED events here. When this list is empty, the website shows
 * a friendly "events coming soon" message instead.
 *
 * Example:
 * {
 *   id: "spring-breakfast-2027",
 *   title: "Spring Social Breakfast",
 *   date: "2027-04-12",            // YYYY-MM-DD
 *   time: "9:00 a.m. – 11:00 a.m.",
 *   location: "Location name, Edmonton",
 *   category: "Social",            // Social | Education | Recreation | Exercise
 *   description: "A short, friendly description.",
 * }
 */
export type CaseEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: "Social" | "Education" | "Recreation" | "Exercise";
  description: string;
};

export const events: CaseEvent[] = [];

export function upcomingEvents(list: CaseEvent[] = events, today = new Date()) {
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return list
    .filter((e) => new Date(`${e.date}T23:59:59`) >= start)
    .sort((a, b) => a.date.localeCompare(b.date));
}
