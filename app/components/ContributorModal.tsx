"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, DragEvent, SyntheticEvent } from "react";
import Link from "next/link";

type FormState = {
  name: string;
  credential: string;
  role: string;
  reason: string;
  initials: string;
};

const initialState: FormState = {
  name: "",
  credential: "",
  role: "",
  reason: "",
  initials: "",
};

const ALLOWED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_CV_BYTES = 5 * 1024 * 1024;

const inputClasses =
  "mt-1 w-full rounded-lg border border-black/20 dark:border-white/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-black dark:focus:border-white";

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export default function ContributorModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvPreviewUrl, setCvPreviewUrl] = useState<string | null>(null);
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (cvPreviewUrl) URL.revokeObjectURL(cvPreviewUrl);
    };
  }, [cvPreviewUrl]);

  const close = () => {
    setIsOpen(false);
    setStatus("idle");
    setError(null);
    setForm(initialState);
    setCvFile(null);
    setCvPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const applyCvFile = (file: File | null) => {
    if (!file) return;

    if (!ALLOWED_CV_TYPES.includes(file.type)) {
      setError("CV must be a PDF or Word document (.pdf, .doc, .docx).");
      return;
    }
    if (file.size > MAX_CV_BYTES) {
      setError("CV must be smaller than 5MB.");
      return;
    }

    setError(null);
    setCvFile(file);
    setCvPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(file);
    });
  };

  const removeCv = () => {
    setCvFile(null);
    setCvPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    applyCvFile(e.target.files?.[0] ?? null);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingFile(false);
    applyCvFile(e.dataTransfer.files?.[0] ?? null);
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const body = new FormData();
      body.append("name", form.name);
      body.append("role", form.role);
      body.append("reason", form.reason);
      body.append("credential", form.credential);
      body.append("initials", form.initials);
      if (cvFile) body.append("cv", cvFile);

      const res = await fetch("/api/contributors", {
        method: "POST",
        body,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

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
          onClick={close}
        >
          <div
            className="relative max-h-full w-full max-w-lg overflow-y-auto rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 sm:p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
            >
              ✕
            </button>

            {status === "success" ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold">Thank you!</h2>
                <p className="mt-3 text-black/60 dark:text-white/60">
                  Your information has been submitted and will now appear on the{" "}
                  <Link href="/people" onClick={close} className="underline">
                    People
                  </Link>{" "}
                  page.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-6 w-full rounded-full bg-black px-6 py-3 text-white transition-colors duration-300 hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <h2 className="text-2xl font-semibold">Join Our Team</h2>
                <p className="text-sm text-black/60 dark:text-white/60">
                  Fill in your details below. Our team will review your submission and reach back if we're interested.
                </p>

                <div>
                  <label className="block text-sm font-medium" htmlFor="name">
                    Name *
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium" htmlFor="role">
                    Role *
                  </label>
                  <input
                    id="role"
                    required
                    placeholder="e.g. Ph.D. Student, Research Assistant"
                    value={form.role}
                    onChange={handleChange("role")}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium"
                    htmlFor="credential"
                  >
                    Credential
                  </label>
                  <input
                    id="credential"
                    placeholder="e.g. Ph.D., M.S."
                    value={form.credential}
                    onChange={handleChange("credential")}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium" htmlFor="reason">
                    Why are you interested in joining us?
                  </label>
                  <textarea
                    id="reason"
                    required
                    rows={4}
                    value={form.reason}
                    onChange={handleChange("reason")}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <span className="block text-sm font-medium">CV / Resume</span>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDraggingFile(true);
                    }}
                    onDragLeave={() => setIsDraggingFile(false)}
                    onDrop={handleDrop}
                    className={`mt-1 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 text-center transition-colors duration-200 ${
                      isDraggingFile
                        ? "border-black bg-black/5 dark:border-white dark:bg-white/10"
                        : "border-black/20 dark:border-white/20"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept={[...ALLOWED_CV_TYPES, ...ALLOWED_CV_EXTENSIONS].join(
                        ","
                      )}
                      onChange={handleFileInputChange}
                      className="hidden"
                    />

                    {cvFile ? (
                      <>
                        <span className="text-3xl">📄</span>
                        <p className="text-sm font-medium">{cvFile.name}</p>
                        <p className="text-xs text-black/50 dark:text-white/50">
                          {formatFileSize(cvFile.size)}
                        </p>
                        <div className="flex items-center gap-3 text-sm">
                          {cvPreviewUrl && (
                            <a
                              href={cvPreviewUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="underline text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                            >
                              Preview
                            </a>
                          )}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeCv();
                            }}
                            className="underline text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                          >
                            Remove
                          </button>
                        </div>
                      </>
                    ) : (
                      <p className="text-sm text-black/60 dark:text-white/60">
                        Drag and drop your CV here, or{" "}
                        <span className="underline">click to browse</span>
                        <br />
                        PDF, DOC, or DOCX — up to 5MB
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium"
                    htmlFor="initials"
                  >
                    Initials
                  </label>
                  <input
                    id="initials"
                    maxLength={3}
                    placeholder="e.g. JD"
                    value={form.initials}
                    onChange={handleChange("initials")}
                    className={inputClasses}
                  />
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-black px-6 py-3 text-white transition-colors duration-300 hover:bg-black/80 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-white/80"
                >
                  {status === "submitting" ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
