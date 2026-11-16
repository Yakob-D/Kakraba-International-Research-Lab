"use client";

import { useActionState, useState } from "react";
import { createProfile } from "../actions";
import { OTHER_SECTION } from "@/app/lib/categories";

const field =
  "w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] px-3.5 py-2.5 text-[15px] outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-500/15";

export default function NewProfileForm({ sections }: { sections: string[] }) {
  const [state, formAction, pending] = useActionState(createProfile, null);
  const [choice, setChoice] = useState("");

  return (
    <form action={formAction} className="flex flex-col gap-5 text-left">
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium">Full name</span>
        <input
          name="name"
          required
          placeholder="As it should appear on the website"
          className={field}
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium">
          Your section on the People page
        </span>
        <select
          name="category"
          required
          value={choice}
          onChange={(e) => setChoice(e.target.value)}
          className={field}
        >
          <option value="" disabled>
            Choose one…
          </option>
          {sections.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
          <option value={OTHER_SECTION}>Other (add a new section)</option>
        </select>
      </label>

      {/* Only shown when "Other" is picked */}
      {choice === OTHER_SECTION && (
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium">New section name</span>
          <input
            name="customCategory"
            required
            autoFocus
            maxLength={60}
            placeholder="e.g. Postdoctoral Researchers"
            className={field}
          />
          <span className="text-xs text-black/50 dark:text-white/45">
            An admin reviews new sections before they appear on the website.
          </span>
        </label>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2.5 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Creating…" : "Create my profile"}
      </button>

      {state && !state.ok && (
        <p
          aria-live="polite"
          className="text-sm text-red-600 dark:text-red-400"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
