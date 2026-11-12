"use client";

import { useActionState } from "react";
import { createProfile } from "../actions";
import { CATEGORIES } from "@/app/lib/categories";

const field =
  "w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] px-3.5 py-2.5 text-[15px] outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-500/15";

export default function NewProfileForm() {
  const [state, formAction, pending] = useActionState(createProfile, null);

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
        <select name="category" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose one…
          </option>
          {CATEGORIES.filter((c) => c !== "Head of the Lab").map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

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
