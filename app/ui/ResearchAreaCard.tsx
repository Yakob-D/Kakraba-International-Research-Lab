type ResearchAreaCardProps = {
    title: string
    description: string
    id?: string
}

export default function ResearchAreaCard({ title, description }: ResearchAreaCardProps) {
    return (
        <div className="flex h-60 w-80 sm:h-64 sm:w-96 shrink-0 flex-col rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-orange-500/30 dark:hover:border-zinc-400/30">
            <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-700 dark:from-zinc-300 dark:to-zinc-500" />
            <h2 className="mt-4 text-xl font-semibold line-clamp-2">{title}</h2>
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-black/70 dark:text-white/70">{description}</p>
        </div>
    )
}