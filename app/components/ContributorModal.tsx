"use client"

import { useEffect, useRef, useState } from "react"
import type { ChangeEvent, DragEvent, SyntheticEvent } from "react"
import Link from "next/link"

type FormState = {
    name: string
    credential: string
    role: string
    bio: string
    imageAlt: string
    initials: string
}

const initialState: FormState = {
    name: "",
    credential: "",
    role: "",
    bio: "",
    imageAlt: "",
    initials: "",
}

const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"]
const MAX_IMAGE_BYTES = 5 * 1024 * 1024

const inputClasses =
    "mt-1 w-full rounded-lg border border-black/20 dark:border-white/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-black dark:focus:border-white"

export default function ContributorModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [form, setForm] = useState<FormState>(initialState)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)
    const [isDraggingFile, setIsDraggingFile] = useState(false)
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
        "idle"
    )
    const [error, setError] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        return () => {
            if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl)
        }
    }, [imagePreviewUrl])

    const close = () => {
        setIsOpen(false)
        setStatus("idle")
        setError(null)
        setForm(initialState)
        setImageFile(null)
        setImagePreviewUrl((prev) => {
            if (prev) URL.revokeObjectURL(prev)
            return null
        })
    }

    const handleChange =
        (field: keyof FormState) =>
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm((prev) => ({ ...prev, [field]: e.target.value }))
        }

    const applyImageFile = (file: File | null) => {
        if (!file) return

        if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
            setError("Image must be a PNG, JPEG, WEBP, or GIF file.")
            return
        }
        if (file.size > MAX_IMAGE_BYTES) {
            setError("Image must be smaller than 5MB.")
            return
        }

        setError(null)
        setImageFile(file)
        setImagePreviewUrl((prev) => {
            if (prev) URL.revokeObjectURL(prev)
            return URL.createObjectURL(file)
        })
    }

    const removeImage = () => {
        setImageFile(null)
        setImagePreviewUrl((prev) => {
            if (prev) URL.revokeObjectURL(prev)
            return null
        })
        if (fileInputRef.current) fileInputRef.current.value = ""
    }

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        applyImageFile(e.target.files?.[0] ?? null)
    }

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDraggingFile(false)
        applyImageFile(e.dataTransfer.files?.[0] ?? null)
    }

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("submitting")
        setError(null)

        try {
            const body = new FormData()
            body.append("name", form.name)
            body.append("role", form.role)
            body.append("bio", form.bio)
            body.append("credential", form.credential)
            body.append("imageAlt", form.imageAlt)
            body.append("initials", form.initials)
            if (imageFile) body.append("image", imageFile)

            const res = await fetch("/api/contributors", {
                method: "POST",
                body,
            })

            if (!res.ok) {
                const data = await res.json().catch(() => null)
                throw new Error(data?.error ?? "Something went wrong.")
            }

            setStatus("success")
        } catch (err) {
            setStatus("error")
            setError(err instanceof Error ? err.message : "Something went wrong.")
        }
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="w-56 whitespace-nowrap px-6 py-3 border border-black dark:border-white/70 hover:bg-black/10 dark:hover:bg-white/10 transition-color duration-300 rounded-full"
            >
                Become a contributor
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-10"
                    onClick={close}
                >
                    <div
                        className="relative max-h-full w-full max-w-lg overflow-y-auto rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-8 shadow-xl"
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
                                    Your information has been submitted and will now appear on
                                    the{" "}
                                    <Link
                                        href="/people"
                                        onClick={close}
                                        className="underline"
                                    >
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
                                <h2 className="text-2xl font-semibold">
                                    Become a Contributor
                                </h2>
                                <p className="text-sm text-black/60 dark:text-white/60">
                                    Fill in your details below. This will be used to display
                                    your profile on the People page.
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
                                    <label className="block text-sm font-medium" htmlFor="bio">
                                        Bio *
                                    </label>
                                    <textarea
                                        id="bio"
                                        required
                                        rows={4}
                                        value={form.bio}
                                        onChange={handleChange("bio")}
                                        className={inputClasses}
                                    />
                                </div>

                                <div>
                                    <span className="block text-sm font-medium">Photo</span>
                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        onDragOver={(e) => {
                                            e.preventDefault()
                                            setIsDraggingFile(true)
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
                                            accept={ALLOWED_IMAGE_TYPES.join(",")}
                                            onChange={handleFileInputChange}
                                            className="hidden"
                                        />

                                        {imagePreviewUrl ? (
                                            <>
                                                <img
                                                    src={imagePreviewUrl}
                                                    alt="Selected preview"
                                                    className="h-24 w-24 rounded-full object-cover"
                                                />
                                                <p className="text-sm text-black/60 dark:text-white/60">
                                                    {imageFile?.name}
                                                </p>
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        removeImage()
                                                    }}
                                                    className="text-sm underline text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                                                >
                                                    Remove photo
                                                </button>
                                            </>
                                        ) : (
                                            <p className="text-sm text-black/60 dark:text-white/60">
                                                Drag and drop a photo here, or{" "}
                                                <span className="underline">click to browse</span>
                                                <br />
                                                PNG, JPEG, WEBP, or GIF — up to 5MB
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        className="block text-sm font-medium"
                                        htmlFor="imageAlt"
                                    >
                                        Photo Alt Text
                                    </label>
                                    <input
                                        id="imageAlt"
                                        value={form.imageAlt}
                                        onChange={handleChange("imageAlt")}
                                        className={inputClasses}
                                    />
                                </div>

                                <div>
                                    <label
                                        className="block text-sm font-medium"
                                        htmlFor="initials"
                                    >
                                        Initials (used if no photo)
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

                                {error && (
                                    <p className="text-sm text-red-600">{error}</p>
                                )}

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
    )
}
