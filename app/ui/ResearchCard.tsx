import { slugify } from "../lib/slugify"

type ResearchCardProps = {
    title: string
    imageSrc?: string
    imageAlt?: string
    description: string
    id: string
}

export default function ResearchCard({
    title,
    imageSrc,
    imageAlt,
    description,
    id,
}: ResearchCardProps) {
    return (
        <div id={slugify(id)} className="flex scroll-mt-28 gap-10 border-b border-gray-200 py-10 last:border-b-0">
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt={imageAlt ?? title}
                    className="h-60 w-60 shrink-0 object-cover rounded-xl"
                />
            ) : (
                <div className="flex h-60 w-60 shrink-0 items-center justify-center bg-slate-300 text-4xl rounded-3xl">
                    {title}
                </div>
            )}
            <div>
                <h2 className="text-2xl font-bold">
                    {title}
                </h2>
                <p className="mt-3 max-w-4xl leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
