import { useEffect, useState } from "react";
import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSnow, CloudSun, Sun, Clock } from "lucide-react";

const TZ = "America/Edmonton";

function describe(code: number) {
  if (code === 0) return { label: "Clear", Icon: Sun };
  if (code <= 2) return { label: "Partly cloudy", Icon: CloudSun };
  if (code === 3) return { label: "Cloudy", Icon: Cloud };
  if (code <= 48) return { label: "Foggy", Icon: CloudFog };
  if (code <= 57) return { label: "Drizzle", Icon: CloudDrizzle };
  if (code <= 67 || (code >= 80 && code <= 82)) return { label: "Rain", Icon: CloudRain };
  if (code <= 77 || code === 85 || code === 86) return { label: "Snow", Icon: CloudSnow };
  return { label: "Thunderstorms", Icon: CloudLightning };
}

/** Small footer strip: Edmonton local date/time and current weather (Open-Meteo, no key). */
export function EdmontonNow() {
  const [now, setNow] = useState<Date | null>(null);
  const [wx, setWx] = useState<{ temp: number; code: number } | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    const load = () =>
      fetch("https://api.open-meteo.com/v1/forecast?latitude=53.5461&longitude=-113.4938&current=temperature_2m,weather_code&timezone=America%2FEdmonton")
        .then((r) => r.json())
        .then((d) => d?.current && setWx({ temp: Math.round(d.current.temperature_2m), code: d.current.weather_code }))
        .catch(() => {});
    load();
    const w = setInterval(load, 15 * 60_000);
    return () => { clearInterval(t); clearInterval(w); };
  }, []);

  if (!now) return null;
  const date = now.toLocaleDateString("en-CA", { timeZone: TZ, weekday: "long", month: "long", day: "numeric" });
  const time = now.toLocaleTimeString("en-CA", { timeZone: TZ, hour: "numeric", minute: "2-digit" });
  const w = wx ? describe(wx.code) : null;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground" aria-label="Edmonton local time and weather">
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
        <span>Edmonton · {date} · <span className="font-semibold text-foreground">{time}</span></span>
      </span>
      {w && (
        <span className="inline-flex items-center gap-1.5">
          <w.Icon className="h-4 w-4 text-warm" aria-hidden="true" />
          <span><span className="font-semibold text-foreground">{wx!.temp}°C</span> · {w.label}</span>
        </span>
      )}
    </div>
  );
}
