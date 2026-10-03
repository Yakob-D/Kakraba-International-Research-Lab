"use client";

import { useRef, useState, type DragEvent, type SubmitEvent } from "react";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ContributorModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function close() {
    setIsOpen(false);
    setStatus("idle");
    setErrorMessage(null);
    setCvFile(null);
  }

  function setFile(file: File | null) {
    setCvFile(file);
    const input = fileInputRef.current;
    if (!input) return;
    if (file) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      input.files = dataTransfer.files;
    } else {
      input.value = "";
    }
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) setFile(file);
  }

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/apply", { method: "POST", body: formData });
      const result = await response.json();
      if(!response.ok){
        setStatus("error");
        setErrorMessage(result.error);
      }else{
        setStatus("success")
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xl px-4 py-10 [animation:overlayIn_0.2s_ease-out]"
          onClick={close}
        >
          <div
            className="relative max-h-full w-full max-w-lg overflow-y-auto rounded-3xl border border-white/50 dark:border-white/10 bg-white/70 dark:bg-white/[0.06] backdrop-blur-lg p-6 sm:p-9 shadow-2xl shadow-black/20 ring-1 ring-black/10 dark:ring-white/10 text-left [animation:panelIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center border border-black/10 bg-black/10 rounded-full text-black/50 transition-colors hover:bg-black/5 hover:text-black dark:text-white/50 dark:hover:bg-white/10 dark:hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold tracking-tight">
              Join Our Team
            </h2>

            {status === "success" ? (
              <p className="mt-3 text-black/60 dark:text-white/60">
                Thanks for applying! We&apos;ll be in touch soon.
              </p>
            ) : (
              <>
                <p className="mt-2 text-black/60 dark:text-white/60">
                  Tell us a bit about yourself and upload your CV.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-4"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium"
                      >
                        First name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        className="mt-1.5 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/10 dark:bg-white/5 px-3.5 py-2.5 outline-none transition-colors focus:border-black/40 focus:bg-white/80 dark:focus:border-white/40 dark:focus:bg-white/10"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium"
                      >
                        Last name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        className="mt-1.5 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/10 dark:bg-white/5 px-3.5 py-2.5 outline-none transition-colors focus:border-black/40 focus:bg-white/80 dark:focus:border-white/40 dark:focus:bg-white/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-1.5 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/10 dark:bg-white/5 px-3.5 py-2.5 outline-none transition-colors focus:border-black/40 focus:bg-white/80 dark:focus:border-white/40 dark:focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mt-2">
                      How did you hear about us? (Please mention the name of the team member if you were recommended by one.)
                    </label>
                    <input
                      id="how_did_you_hear_about_us"
                      name="how_did_you_hear_about_us"
                      type="text"
                      className="mt-1.5 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/10 dark:bg-white/5 px-3.5 py-2.5 outline-none transition-colors focus:border-black/40 focus:bg-white/80 dark:focus:border-white/40 dark:focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-sm font-medium"
                    >
                      Why do you want to join us? *
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      required
                      rows={4}
                      className="mt-1.5 w-full resize-none rounded-xl border border-black/10 dark:border-white/10 bg-white/10 dark:bg-white/5 px-3.5 py-2.5 outline-none transition-colors focus:border-black/40 focus:bg-white/80 dark:focus:border-white/40 dark:focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <span className="block text-sm font-medium">Upload your CV (in .pdf format only) *</span>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => fileInputRef.current?.click()}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          fileInputRef.current?.click();
                        }
                      }}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      className={`mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors ${
                        isDragging
                          ? "border-black/50 bg-black/5 dark:border-white/50 dark:bg-white/10"
                          : "border-black/15 bg-white/40 hover:bg-white/60 dark:border-white/15 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                      }`}
                    >
                      {cvFile ? (
                        <>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-7 w-7 text-black/60 dark:text-white/60"
                          >
                            <path
                              d="M7 3h7l3 3v15H7V3Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14 3v3h3"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="max-w-full truncate text-sm font-medium">
                            {cvFile.name}
                          </p>
                          <p className="text-xs text-black/50 dark:text-white/50">
                            {formatFileSize(cvFile.size)} &middot; click or drop
                            to replace
                          </p>
                        </>
                      ) : (
                        <>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-7 w-7 text-black/50 dark:text-white/50"
                          >
                            <path
                              d="M12 15V4m0 0 4 4m-4-4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="text-sm">
                            <span className="font-medium underline">
                              Click to browse
                            </span>{" "}
                            or drag &amp; drop
                          </p>
                          <p className="text-xs text-black/50 dark:text-white/50">
                            PDF only
                          </p>
                        </>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      id="cv"
                      name="cv"
                      type="file"
                      required
                      accept=".pdf,application/pdf"
                      className="sr-only"
                      onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    />
                  </div>

                  {status === "error" && errorMessage && (
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 block w-full rounded-full bg-black px-6 py-3 text-center text-white transition-colors duration-300 hover:bg-black/80 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-white/80"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
