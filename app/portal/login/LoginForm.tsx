"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function LoginForm({ linkError }: { linkError: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/portal/auth/confirm`,
      },
    });

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
    } else {
      setStatus("sent");
    }
  }

  if (status == "sent") {
    return (
      <p className="text-black/90 dark:text-white/90">
        An email has been sent to <strong>{email}</strong> with a login link.
        Click the link to login. Thank you!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {linkError && (
        <p className="text-sm text-red-600">
          That login link is invalid or expired. Please request a new one.
        </p>
      )}

      <label htmlFor="email" className="text-sm font-medium text-start mt-3">
        Email
      </label>
      <input
        id="email"
        type="email"
        required
        onInvalid={(e) =>
          e.currentTarget.setCustomValidity("Please enter your email.")
        }
        onInput={(e) => e.currentTarget.setCustomValidity("")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@tulane.edu"
        className="rounded-md border border-black/15 dark:border-white/15 bg-white/50 dark:bg-white/5 px-3 py-2 text-left outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-red-600 px-4 py-2 font-semibold text-white disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send login link"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
