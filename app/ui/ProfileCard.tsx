export type ProfileCardProps = {
    name: string
    credential?: string
    role: string
    bio: string
    imageSrc?: string
    imageAlt?: string
    initials?: string
    cv?: string
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
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-b border-black/10 dark:border-white/10 py-10 text-center sm:text-left last:border-b-0">
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt={imageAlt ?? name}
                    className="w-40 sm:w-60 h-auto shrink-0 self-start rounded-xl mx-auto sm:mx-0"
                />
            ) : (
                <div className="flex h-40 w-40 sm:h-60 sm:w-60 shrink-0 items-center justify-center bg-slate-300 text-4xl rounded-3xl mx-auto sm:mx-0">
                    {initials}
                </div>
            )}
            <div>
                <h2 className="text-xl font-semibold sm:text-2xl">
                    {name}
                    {credential ? `, ${credential}` : ""}{" "}
                    <span className="text-base sm:text-lg font-normal">{role}</span>
                </h2>
                <p className="mt-3 max-w-4xl leading-relaxed">{bio}</p>
                {cv && (
                    <a
                        href={cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block whitespace-nowrap px-4 py-2 bg-black text-white dark:bg-white/90 dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-colors duration-300 rounded-full text-sm font-semibold"
                    >
                        Curriculum Vitae
                    </a>
                )}
            </div>
        </div>
    )
}
