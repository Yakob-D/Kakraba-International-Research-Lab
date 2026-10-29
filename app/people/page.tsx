import ProfileCard from "../ui/ProfileCard";
import Footer from "../components/Footer";
import { slugify } from "../lib/slugify";
import { people, categoryOf } from "./data"

const categoryOrder = [
  "Head of the Lab",
  "Doctoral Research Assistants",
  "Graduate Research Assistants",
  "Software Research Assistant",
  "Legal Research Assistant",
  "Medical Officer & Research Affiliate",
];

const groups = categoryOrder
  .map((category) => ({
    category,
    slug: slugify(category),
    members: people.filter((person) => categoryOf(person) === category),
  }))
  .filter((group) => group.members.length > 0);

export default function PeoplePage() {
  const total = people.length;

  return (
    <div className="px-4 sm:px-8 md:px-16 py-6 sm:py-10">
      <div className="relative mx-auto rounded-2xl border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 p-5 sm:p-8 md:p-10 shadow-md backdrop-blur-xl">
        <div className="absolute -top-10 -right-10 -z-10 h-40 w-40 rounded-full bg-red-400/30 dark:bg-zinc-400/30 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-orange-400/10 dark:bg-zinc-400/10 blur-3xl" />

        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">Meet the Team</h1>
        <p className="mt-4 text-center text-base sm:text-lg leading-relaxed text-black/60 dark:text-white/60">
          The Kakraba Research Group brings together faculty, doctoral and
          graduate researchers, and collaborators across biostatistics,
          computational biology, medicine, and law, united by a shared
          commitment to rigorous, reproducible, data-driven science.
        </p>

        <nav className="mt-6 flex flex-wrap items-center gap-2" aria-label="Jump to group">
          {groups.map((group) => (
            <a
              key={group.slug}
              href={`#${group.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-3 py-1.5 text-xs sm:text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            >
              {group.category}
              <span className="rounded-full bg-black/10 dark:bg-white/10 px-1.5 text-xs">
                {group.members.length}
              </span>
            </a>
          ))}
          <span className="px-2 text-xs sm:text-sm text-black/50 dark:text-white/50">
            {total} members
          </span>
        </nav>

        {groups.map((group) => (
          <section key={group.slug} id={group.slug} className="mt-12 scroll-mt-28">
            <h2 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold">
              <span className="h-6 w-1 rounded-full bg-gradient-to-b from-red-400 to-orange-400 dark:from-zinc-300 dark:to-zinc-500" />
              {group.category}
            </h2>
            <ul className="mt-5 space-y-4">
              {group.members.map((person) => (
                <ProfileCard key={person.name} {...person} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
