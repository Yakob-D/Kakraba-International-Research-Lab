import { slugify } from "../lib/slugify"

type ResearchCardProps = {
    title: string
    imageSrc?: string
    imageAlt?: string
    description: string
    id: string
}

function getInitials(title: string): string {
    return title
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase()
}

export default function ResearchCard({
    title,
    imageSrc,
    imageAlt,
    description,
    id,
}: ResearchCardProps) {
    return (
        <li
            id={slugify(id)}
            className="group relative flex flex-col sm:flex-row gap-5 sm:gap-8 scroll-mt-28 rounded-xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] p-5 sm:p-6 text-center sm:text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400/40 hover:shadow-lg"
        >
            {imageSrc ? (
                <div className="w-32 sm:w-40 shrink-0 self-center sm:self-start mx-auto sm:mx-0">
                    <img
                        src={imageSrc}
                        alt={imageAlt ?? title}
                        className="aspect-[4/5] w-full rounded-xl object-cover"
                    />
                </div>
            ) : (
                <div className="flex aspect-[4/5] w-32 sm:w-40 shrink-0 items-center justify-center rounded-xl bg-red-400/10 text-3xl font-semibold text-red-700 dark:text-red-300 mx-auto sm:mx-0">
                    {getInitials(title)}
                </div>
            )}
            <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-semibold leading-snug">{title}</h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-black/60 dark:text-white/60">
                    {description}
                </p>
            </div>
        </li>
    )
}
