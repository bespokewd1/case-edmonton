import { useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

export type Benefit = { title: string; text: string; icon: LucideIcon };

/** Swipeable benefits cards on phones (glass look), grid on desktop. */
export function BenefitCarousel({ benefits }: { benefits: Benefit[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + 16; // card width + gap
    setIndex(Math.min(benefits.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  };

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile: swipeable glass cards */}
      <div className="mt-10 md:hidden">
        <div
          ref={track}
          onScroll={onScroll}
          className="rounded-[2rem] bg-gradient-to-br from-sage-soft via-card to-secondary p-4"
        >
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Benefits of CASE"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`w-[82%] shrink-0 snap-center transition-transform duration-300 ${i === index ? "scale-100" : "scale-[0.96]"}`}
              >
                <div className="h-full rounded-3xl border border-white/70 bg-white/60 p-6 shadow-card backdrop-blur-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-soft text-sage-deep">
                    <b.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl">{b.title}</h3>
                  <p className="mt-2 text-muted-foreground">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-1">
            {benefits.map((b, i) => (
              <button
                key={b.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show benefit ${i + 1} of ${benefits.length}`}
                aria-current={i === index}
                className="flex h-8 w-8 items-center justify-center"
              >
                <span
                  className={`block h-3 rounded-full backdrop-blur-sm transition-all ${i === index ? "w-8 bg-warm" : "w-3 bg-primary/25"}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: grid */}
      <ul className="mt-12 hidden gap-6 sm:grid-cols-2 md:grid lg:grid-cols-6">
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
    </>
  );
}
