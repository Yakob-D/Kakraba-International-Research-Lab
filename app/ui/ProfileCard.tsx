export type ProfileCardProps = {
    name: string
    credential?: string
    role: string
    bio: string
    imageSrc?: string
    imageAlt?: string
    initials?: string
}

export default function ProfileCard({
    name,
    credential,
    role,
    bio,
    imageSrc,
    imageAlt,
    initials,
}: ProfileCardProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-b border-gray-200 py-10 text-center sm:text-left last:border-b-0">
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt={imageAlt ?? name}
                    className="h-40 w-40 sm:h-60 sm:w-60 shrink-0 object-cover rounded-xl mx-auto sm:mx-0"
                />
            ) : (
                <div className="flex h-40 w-40 sm:h-60 sm:w-60 shrink-0 items-center justify-center bg-slate-300 text-4xl rounded-3xl mx-auto sm:mx-0">
                    {initials}
                </div>
            )}
            <div>
                <h2 className="text-xl sm:text-2xl">
                    {name}
                    {credential ? `, ${credential}` : ""}{" "}
                    <span className="text-base sm:text-lg font-normal">{role}</span>
                </h2>
                <p className="mt-3 max-w-4xl leading-relaxed">{bio}</p>
            </div>
        </div>
    )
}
