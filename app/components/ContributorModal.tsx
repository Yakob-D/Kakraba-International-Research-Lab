"use client";

import { useState } from "react";

const CONTACT_EMAIL = "Kakrabaresearchgroup@gmail.com";

export default function ContributorModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-56 whitespace-nowrap px-6 py-3 border border-black dark:border-white/70 hover:bg-black/10 dark:hover:bg-white/10 transition-color duration-300 rounded-full"
      >
        Join our team
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-10"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-full w-full max-w-lg overflow-y-auto rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 sm:p-8 shadow-xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold">Join Our Team</h2>
            <p className="mt-3 text-black/60 dark:text-white/60">
              To be considered, please email your name, why you're interested
              in joining the team, and your CV to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 block w-full rounded-full bg-black px-6 py-3 text-center text-white transition-colors duration-300 hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
            >
              Send Email
            </a>
          </div>
        </div>
      )}
    </>
  );
}
