import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "People", href: "/people" },
  { label: "Research", href: "/researches" },
  { label: "Publications", href: "/publications" },
  { label: "Conferences", href: "/conferences" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kakrabasamuel/",
    icon: (
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-.99 1.83-2.05 3.77-2.05 4.03 0 4.78 2.5 4.78 5.75V23h-4v-6.7c0-1.6-.03-3.66-2.24-3.66-2.24 0-2.58 1.75-2.58 3.55V23h-4V8z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-20 sm:mt-32 md:mt-48 lg:mt-60 scroll-mt-28 px-4 sm:px-6 md:px-10 pb-5 border-t border-black/10 dark:border-white/10 pt-5">

      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-4 md:gap-0">
          <div className="md:border-r md:pr-10 md:mr-10 border-black/10 dark:border-white/10">
            <h2 className="text-xl font-bold">
              Kakraba Research Group
            </h2>
            <p className="mt-3 text-sm text-black/60 dark:text-white/60">
              Advancing artificial intelligence,
              biostatistics, and data-driven discovery to improve public health
              and biomedical outcomes.
            </p>
          </div>

          <div className="md:border-r md:pr-10 md:mr-10 border-black/10 dark:border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/50 dark:text-white/50">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm underline hover:text-black/60 dark:hover:text-white/60 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:border-r md:pr-10 md:mr-10 border-black/10 dark:border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/50 dark:text-white/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:Kakrabaresearchgroup@gmail.com"
                  className="hover:text-black/60 dark:hover:text-white/60 transition-colors duration-300"
                >
                  Kakrabaresearchgroup@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14236729998"
                  className="hover:text-black/60 dark:hover:text-white/60 transition-colors duration-300"
                >
                  +1 (423) 672-9998
                </a>
              </li>
              <li className="text-black/60 dark:text-white/60">
                1440 Canal St, New Orleans, LA 70112
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/50 dark:text-white/50">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    {link.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 pt-6 text-sm text-black/50 dark:text-white/50 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Kakraba International Research
            Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
