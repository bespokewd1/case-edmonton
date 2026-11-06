import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Slide = { src: string; alt: string };

/** Swipeable hero photos with dots. No auto-advance, by design. */
export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = (i + slides.length) % slides.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    if (el.clientWidth === 0) return;
    setIndex(Math.min(slides.length - 1, Math.max(0, Math.round(el.scrollLeft / el.clientWidth))));
  };

  return (
    <div className="relative" role="region" aria-roledescription="carousel" aria-label="Photos of CASE activities">
      <div
        ref={track}
        onScroll={onScroll}
        tabIndex={0}
        aria-label="Activity photos; use arrow keys to change photo"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            goTo(index + (event.key === "ArrowLeft" ? -1 : 1));
          }
        }}
        className="flex aspect-[4/3] w-full snap-x snap-mandatory overflow-x-auto rounded-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:aspect-[5/4]"
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
      <Button
        type="button"
        variant="ghost"
        onClick={() => goTo(index - 1)}
        aria-label="Previous photo"
        className="absolute left-3 top-[calc(50%-1.5rem)] h-11 w-11 -translate-y-1/2 rounded-full bg-card/90 p-0 text-primary shadow-soft hover:bg-card [&_svg]:size-5"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        onClick={() => goTo(index + 1)}
        aria-label="Next photo"
        className="absolute right-3 top-[calc(50%-1.5rem)] h-11 w-11 -translate-y-1/2 rounded-full bg-card/90 p-0 text-primary shadow-soft hover:bg-card [&_svg]:size-5"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </Button>
      <div className="mt-1 flex justify-center">
        {slides.map((s, i) => (
          <Button
            key={s.src}
            type="button"
            variant="ghost"
            onClick={() => goTo(i)}
            aria-label={`Show photo ${i + 1} of ${slides.length}`}
            aria-current={i === index}
            className="h-11 w-11 rounded-full p-0"
          >
            <span className={`block h-2 rounded-full transition-all ${i === index ? "w-5 bg-warm" : "w-2 bg-primary/40"}`} />
          </Button>
        ))}
      </div>
    </div>
  );
}
