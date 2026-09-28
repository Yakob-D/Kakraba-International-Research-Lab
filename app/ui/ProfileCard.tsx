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
        <div className="flex gap-10 border-b border-gray-200 py-10 last:border-b-0">
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt={imageAlt ?? name}
                    className="h-60 w-60 shrink-0 object-cover rounded-xl"
                />
            ) : (
                <div className="flex h-60 w-60 shrink-0 items-center justify-center bg-slate-300 text-4xl rounded-3xl">
                    {initials}
                </div>
            )}
            <div>
                <h2 className="text-2xl">
                    {name}
                    {credential ? `, ${credential}` : ""}{" "}
                    <span className="text-lg font-normal">{role}</span>
                </h2>
                <p className="mt-3 max-w-4xl leading-relaxed">{bio}</p>
            </div>
        </div>
    )
}
