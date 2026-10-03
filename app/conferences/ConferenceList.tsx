"use client";

import { useState, type ReactNode } from "react";
import type { Presentation, YearGroup } from "./data";

type Category = "All" | "Talks" | "Posters" | "Panels" | "Workshops";

function categoryOf(type: string): Exclude<Category, "All"> {
  const t = type.toLowerCase();
  if (t.includes("poster")) return "Posters";
  if (t.includes("panel")) return "Panels";
  if (t.includes("workshop")) return "Workshops";
  return "Talks";
}

const badgeStyles: Record<Exclude<Category, "All">, string> = {
  Talks: "bg-red-400/10 dark:bg-zinc-400/10 text-red-700 dark:text-zinc-300",
  Posters: "bg-orange-400/15 dark:bg-zinc-400/15 text-orange-700 dark:text-zinc-300",
  Panels: "bg-amber-400/15 text-amber-700 dark:text-amber-300",
  Workshops: "bg-rose-400/15 text-rose-700 dark:text-rose-300",
};

// Italicize species names.
function withItalics(text: string): ReactNode {
  const parts = text.split(/(C\. elegans)/);
  return parts.map((p, i) => (i % 2 === 1 ? <em key={i}>{p}</em> : p));
}

// Bold Dr. Kakraba's name in author lists.
function Authors({ authors }: { authors: string }) {
  const parts = authors.split(/(Kakraba, S\.|Samuel Kakraba)/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-semibold text-black dark:text-white">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function PresentationCard({ item }: { item: Presentation }) {
  const category = categoryOf(item.type);
  const isKeynote = item.type.toLowerCase().includes("keynote");
  return (
    <li
      className={`relative rounded-xl border bg-white/40 dark:bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
        isKeynote
          ? "border-red-400/50 dark:border-zinc-400/50 shadow-md"
          : "border-black/10 dark:border-white/10 hover:border-red-400/40 dark:hover:border-zinc-400/40"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            isKeynote
              ? "bg-gradient-to-r from-red-500 to-orange-400 text-white dark:from-zinc-300 dark:to-zinc-500 dark:text-black"
              : badgeStyles[category]
          }`}
        >
          {item.type}
        </span>
        <span className="font-mono text-xs text-black/50 dark:text-white/50">
          {item.date}
        </span>
      </div>

      <h3 className="mt-3 text-base sm:text-lg font-semibold leading-snug">
        {withItalics(item.title)}
      </h3>

      <p className="mt-2 flex items-start gap-2 text-sm sm:text-base text-black/70 dark:text-white/70">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-1 h-4 w-4 shrink-0 text-red-400 dark:text-zinc-400"
          aria-hidden="true"
        >
          <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        <span>{withItalics(item.venue)}</span>
      </p>

      <p className="mt-2 text-sm text-black/55 dark:text-white/55">
        <Authors authors={item.authors} />
      </p>
    </li>
  );
}

export default function ConferenceList({ data }: { data: YearGroup[] }) {
  const [filter, setFilter] = useState<Category>("All");

  const all = data.flatMap((y) => y.items);
  const counts: Record<Category, number> = {
    All: all.length,
    Talks: 0,
    Posters: 0,
    Panels: 0,
    Workshops: 0,
  };
  all.forEach((p) => counts[categoryOf(p.type)]++);

  const filters: Category[] = ["All", "Talks", "Posters", "Panels", "Workshops"];
  const visible = data
    .map((y) => ({
      ...y,
      items: y.items.filter(
        (p) => filter === "All" || categoryOf(p.type) === filter
      ),
    }))
    .filter((y) => y.items.length > 0);

  return (
    <>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Presentations", value: counts.All },
          { label: "Talks & keynotes", value: counts.Talks },
          { label: "Posters", value: counts.Posters },
          {
            label: "Years active",
            value: `${data[data.length - 1].year}–${data[0].year}`,
          },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] p-4"
          >
            <div className="whitespace-nowrap text-xl sm:text-3xl font-semibold">{s.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-black/55 dark:text-white/55">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by type">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs sm:text-sm transition-colors ${
              filter === f
                ? "border-transparent bg-black text-white dark:bg-white dark:text-black"
                : "border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            {f}
            <span
              className={`rounded-full px-1.5 text-xs font-mono ${
                filter === f ? "bg-white/20 dark:bg-black/10" : "bg-black/10 dark:bg-white/10"
              }`}
            >
              {counts[f]}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-10">
        {visible.map((y) => (
          <section
            key={y.year}
            id={`year-${y.year}`}
            className="relative grid gap-4 pb-10 md:grid-cols-[7rem_1fr] scroll-mt-28"
          >
            <div className="md:sticky md:top-28 h-fit">
              <h2 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold">
                <span className="h-6 w-1 rounded-full bg-gradient-to-b from-red-400 to-orange-400 dark:from-zinc-300 dark:to-zinc-500" />
                {y.year}
              </h2>
              <p className="mt-1 pl-4 text-xs text-black/50 dark:text-white/50">
                {y.items.length} {y.items.length === 1 ? "event" : "events"}
              </p>
            </div>
            <ul className="space-y-4">
              {y.items.map((item, i) => (
                <PresentationCard key={`${y.year}-${i}`} item={item} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
