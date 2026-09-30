"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { label: "HOME", href: "/"},
    { label: "PEOPLE", href: "/people" },
    { label: "RESEARCH", href: "/researches"},
    { label: "PUBLICATIONS", href: "/publications"},
    { label: "ABOUT", href: "/#about"},
    { label: "CONTACT US", href: "/#contact"},
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const isActive = (href: string) => href === pathname

    return (
        <div className="mt-5 sticky top-5 z-50 isolate [transform:translateZ(0)] px-4 sm:px-6">
            <div className="mx-auto max-w-5xl">
                <div className="flex items-center justify-between gap-4 rounded-xl border border-black/10 dark:border-white/20 bg-black/3 dark:bg-white/5 px-4 py-3 shadow-md backdrop-blur-xl md:justify-around">
                    <Link href="/" className="text-sm font-bold md:hidden">
                        Kakraba Lab
                    </Link>

                    <ul className="hidden items-center justify-around md:flex md:flex-1">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`rounded-lg px-3 py-1.5 text-xs sm:text-sm lg:text-lg font-bold transition-colors duration-300 ${
                                        isActive(link.href)
                                            ? "bg-black/10 dark:bg-white/10"
                                            : "hover:text-black/60 dark:hover:text-white/60"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        className="md:hidden"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
                            {isOpen ? (
                                <path d="M6 6l12 12M18 6l-12 12" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <ul className="mt-3 flex flex-col gap-1 rounded-xl border border-black/10 dark:border-white/20 bg-black/3 dark:bg-white/5 p-4 shadow-md backdrop-blur-xl md:hidden">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block rounded-xl px-3 py-2 text-sm font-bold transition-colors duration-300 ${
                                        isActive(link.href)
                                            ? "bg-black text-white dark:bg-white dark:text-black"
                                            : "hover:text-black/60 dark:hover:text-white/60"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
