export type ProfileCardProps = {
    name: string
    credential?: string
    role?: string
    bio: string
    imageSrc?: string
    imageAlt?: string
    initials?: string
    cv?: string
}

function ArrowIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5 shrink-0"
            aria-hidden="true"
        >
            <path d="M7 17L17 7M9 7h8v8" />
        </svg>
    )
}

export default function ProfileCard({
    name,
    credential,
    role,
    bio,
    imageSrc,
    imageAlt,
    initials,
    cv,
}: ProfileCardProps) {
    return (
        <li className="group relative flex flex-col sm:flex-row gap-5 sm:gap-8 rounded-xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] p-5 sm:p-6 text-center sm:text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400/40 dark:hover:border-zinc-400/40 hover:shadow-lg">
            {imageSrc ? (
                <div className="w-32 sm:w-40 shrink-0 self-center sm:self-start mx-auto sm:mx-0">
                    <img
                        src={imageSrc}
                        alt={imageAlt ?? name}
                        className="aspect-[4/5] w-full rounded-xl object-cover"
                    />
                </div>
            ) : (
                <div className="flex aspect-[4/5] w-32 sm:w-40 shrink-0 items-center justify-center rounded-xl bg-red-400/10 dark:bg-zinc-400/10 text-3xl font-semibold text-red-700 dark:text-zinc-300 mx-auto sm:mx-0">
                    {initials}
                </div>
            )}
            <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                    {name}
                    {credential ? `, ${credential}` : ""}
                </h3>
                {role && (
                    <p className="mt-1 text-sm sm:text-base text-black/60 dark:text-white/60">
                        {role}
                    </p>
                )}
                {bio.split("\n\n").map((paragraph, i) => (
                    <p
                        key={i}
                        className="mt-3 text-sm sm:text-base leading-relaxed text-black/60 dark:text-white/60"
                    >
                        {paragraph}
                    </p>
                ))}

                {cv && (
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                        <a
                            href={cv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-3 py-1.5 text-xs sm:text-sm font-semibold text-black/70 dark:text-white/70 transition-colors group-hover:border-red-400/50 dark:group-hover:border-zinc-400/50 hover:bg-red-400/10 dark:hover:bg-zinc-400/10"
                        >
                            Curriculum Vitae
                            <ArrowIcon />
                        </a>
                    </div>
                )}
            </div>
        </li>
    )
}
