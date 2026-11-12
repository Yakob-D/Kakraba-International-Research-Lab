"use client";

import { useRef, useState } from "react";
import { createClient } from "@/app/lib/supabase/client";
import { updateFileUrl } from "./actions";

type Props = {
  kind: "image" | "cv";
  userId: string;
  label: string;
  help: string;
  accept: string;
  allowedTypes: string[];
  maxMB: number;
  currentUrl: string | null;
  onUploaded: (url: string) => void;
};

export default function FileUpload({
  kind,
  userId,
  label,
  help,
  accept,
  allowedTypes,
  maxMB,
  currentUrl,
  onUploaded,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ ok: Boolean; text: string } | null>(
    null,
  );

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      setMessage({ ok: false, text: `That file type isn't allowed. ${help}` });
      return;
    }

    if (file.size > maxMB * 1024 * 1024) {
      setMessage({
        ok: false,
        text: `File is too large. Maximum is ${maxMB} MB.`,
      });
      return;
    }

    setBusy(true);
    setMessage(null);

    const ext = file.name.split(".").pop()?.toLowerCase() ?? "bin";
    const path = `${userId}/${kind}-${Date.now()}.${ext}`;
    const supabase = await createClient();
    const { error } = await supabase.storage
      .from("member-files")
      .upload(path, file, { contentType: file.type });

    if (error) {
      setBusy(false);
      setMessage({ ok: false, text: error.message });
      return;
    }

    const { data } = supabase.storage.from("member-files").getPublicUrl(path);
    const result = await updateFileUrl(kind, data.publicUrl);
    setBusy(false);

    if (!result?.ok) {
      setMessage({
        ok: false,
        text: result?.message ?? "Something went wrong.",
      });
      return;
    }
    onUploaded(data.publicUrl);
    setMessage({ ok: true, text: result.message });
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
          className="rounded-lg border border-black/15 dark:border-white/15 px-4 py-2 text-sm font-semibold transition hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-500/30 disabled:opacity-50"
        >
          {busy ? "Uploading…" : currentUrl ? "Replace" : "Upload"}
        </button>
        {currentUrl && (
          <a
            href={currentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-black/60 underline underline-offset-4 dark:text-white/60"
          >
            View current
          </a>
        )}
      </div>
      <span className="text-xs text-black/50 dark:text-white/45">{help}</span>
      {message && (
        <span
          aria-live="polite"
          className={`text-sm ${message.ok ? "text-green-700 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
        >
          {message.text}
        </span>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}
