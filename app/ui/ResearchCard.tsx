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
        <div id={slugify(id)} className="flex flex-col sm:flex-row scroll-mt-28 gap-6 sm:gap-10 border-b border-gray-200 py-10 text-center sm:text-left last:border-b-0">
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt={imageAlt ?? title}
                    className="h-40 w-40 sm:h-60 sm:w-60 shrink-0 object-cover rounded-xl mx-auto sm:mx-0"
                />
            ) : (
                <div className="flex h-40 w-40 sm:h-60 sm:w-60 shrink-0 items-center justify-center bg-slate-300 text-4xl rounded-3xl mx-auto sm:mx-0">
                    {title}
                </div>
            )}
            <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                    {title}
                </h2>
                <p className="mt-3 max-w-4xl leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
