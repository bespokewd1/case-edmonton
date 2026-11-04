import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = { src: string; alt: string };

/** Swipeable hero photos with dots. No auto-advance, by design. */
export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = (i + slides.length) % slides.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="relative" role="region" aria-roledescription="carousel" aria-label="Photos of CASE activities">
      <div
        ref={track}
        onScroll={onScroll}
        className="flex aspect-[5/4] w-full snap-x snap-mandatory overflow-x-auto rounded-3xl shadow-card [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:max-h-[calc(100vh-11rem)]"
      >
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1280}
            height={1024}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            aria-hidden={i !== index}
            className="h-full w-full shrink-0 snap-center object-cover"
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-primary shadow-card hover:bg-card sm:flex"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-primary shadow-card hover:bg-card sm:flex"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="mt-4 flex justify-center gap-1">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show photo ${i + 1} of ${slides.length}`}
            aria-current={i === index}
            className="flex h-8 w-8 items-center justify-center"
          >
            <span className={`block h-3 rounded-full transition-all ${i === index ? "w-8 bg-warm" : "w-3 bg-primary/30"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
