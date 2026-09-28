import Link from "next/link"
import { slugify } from "../lib/slugify"

type ResearchAreaCardProps = {
    title: string
    description: string
    id?: string
}

export default function ResearchAreaCard({ title, description, id }: ResearchAreaCardProps) {
    const href = id ? `/researches#${slugify(id)}` : "/researches"

    return (
        <div className="flex h-64 w-72 shrink-0 flex-col rounded-2xl border border-black/10 dark:border-white/10 p-6">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-black/70 dark:text-white/70">{description}</p>
            <Link href={href} className="mt-auto w-25 self-end whitespace-nowrap text-sm px-4 py-2 bg-black text-white dark:text-black dark:bg-white rounded-full hover:bg-black/80 dark:hover:bg-white/80 transition-colors duration-300">Read More</Link>
        </div>
    )
}