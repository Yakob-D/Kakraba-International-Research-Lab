import Link from "next/link"

const links = [
    { label: "HOME", href: "/"},
    { label: "PEOPLE", href: "/people" },
    { label: "RESEARCH", href: "/researches"},
    { label: "PUBLICATIONS", href: "/publications"},
    { label: "ABOUT", href: "/#about"},
    { label: "CONTACT US", href: "/#contact"},
]

export default function Navbar() {
    return(
        <div className="mt-5 sticky top-5 z-50 isolate [transform:translateZ(0)]">
            <ul className="mx-90 mb-20 flex items-center justify-around rounded-xl border border-black/10 dark:border-white/20 bg-black/3 dark:bg-white/5 px-4 py-3 shadow-md backdrop-blur-xl">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-xs sm:text-sm md:text-lg font-bold hover:text-black/60 dark:hover:text-white/60 transition-color duration-300">{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}