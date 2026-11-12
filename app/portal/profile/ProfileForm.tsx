"use client";

import { useActionState, useState } from "react";
import { UpdateProfile, type FormState } from "./actions";
import { CATEGORIES } from "@/app/lib/categories";
import ProfileCard from "@/app/ui/ProfileCard";
import FileUpload from "./FileUpload";

type Member = {
  name: string;
  credential: string | null;
  role: string | null;
  category: string;
  bio: string;
  image_url: string | null;
  cv_url: string | null;
  initials: string | null;
};

// Shared styles
const panel =
  "space-y-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-5 sm:p-7 backdrop-blur-xl";
const field =
  "w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] px-3.5 py-2.5 text-[15px] text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/30 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-500/15";
const labelText = "text-sm font-medium";
const hint = "text-xs leading-relaxed text-black/50 dark:text-white/45";

export default function ProfileForm({
  member,
  userId,
}: {
  member: Member;
  userId: string;
}) {
  // Controlled fields, so the preview can update as you type
  const [name, setName] = useState(member.name);
  const [credential, setCredential] = useState(member.credential ?? "");
  const [role, setRole] = useState(member.role ?? "");
  const [category, setCategory] = useState(member.category);
  const [bio, setBio] = useState(member.bio);
  const [imageUrl, setImageUrl] = useState(member.image_url);
  const [cvUrl, setCvUrl] = useState(member.cv_url);

  // The values as they were at the last successful save
  const [saved, setSaved] = useState({
    name: member.name,
    credential: member.credential ?? "",
    role: member.role ?? "",
    category: member.category,
    bio: member.bio,
  });

  // Run the server action, and on success remember what was just saved
  async function saveAction(prevState: FormState, formData: FormData) {
    const result = await UpdateProfile(prevState, formData);
    if (result?.ok) setSaved({ name, credential, role, category, bio });
    return result;
  }

  const [state, formAction, pending] = useActionState(saveAction, null);

  // Only someone already in "Head of the Lab" sees that option
  const categories = CATEGORIES.filter(
    (c) => c !== "Head of the Lab" || member.category === c,
  );

  // Has anything changed since the last save?
  const dirty =
    name !== saved.name ||
    credential !== saved.credential ||
    role !== saved.role ||
    category !== saved.category ||
    bio !== saved.bio;

  const words = bio.trim().split(/\s+/).filter(Boolean).length;

  // What the save bar says
  let status = "No changes yet";
  let statusTone = "text-black/50 dark:text-white/50";
  if (pending) {
    status = "Saving…";
  } else if (state && !state.ok) {
    status = state.message;
    statusTone = "text-red-600 dark:text-red-400";
  } else if (dirty) {
    status = "You have unsaved changes";
    statusTone = "text-amber-700 dark:text-amber-400";
  } else if (state?.ok) {
    status = state.message;
    statusTone = "text-green-700 dark:text-green-400";
  }

  return (
    <div className="grid gap-10 xl:grid-cols-2 xl:items-start">
      <form action={formAction} className="space-y-6">
        <section className={panel}>
          <div>
            <h2 className="text-lg font-semibold">How you&apos;re listed</h2>
            <p className={hint}>
              Your name line, and the section of the People page you appear in.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_10rem]">
            <label className="flex flex-col gap-1.5">
              <span className={labelText}>Full name</span>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={field}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className={labelText}>Credential</span>
              <input
                name="credential"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                placeholder="Ph.D., MPH"
                className={field}
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className={labelText}>Role</span>
            <input
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Doctoral Research Assistant | Kakraba Research Group"
              className={field}
            />
            <span className={hint}>
              End your role with &ldquo; | Kakraba Research Group&rdquo;.
            </span>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className={labelText}>Section on the People page</span>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={field}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className={panel}>
          <div>
            <h2 className="text-lg font-semibold">About your work</h2>
            <p className={hint}>
              Your research interests and what you do in the lab.
            </p>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="sr-only">Bio</span>
            <textarea
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={12}
              className={`${field} resize-y leading-relaxed`}
            />
            <span className={`text-right tabular-nums ${hint}`}>
              {words} words
            </span>
          </label>
        </section>

        <section className={panel}>
          <div>
            <h2 className="text-lg font-semibold">Photo and CV</h2>
            <p className={hint}>Uploads save immediately.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <FileUpload
              kind="image"
              userId={userId}
              label="Profile photo"
              help="JPG, PNG or WebP, up to 5 MB. A portrait (4:5) photo looks best."
              accept="image/jpeg,image/png,image/webp"
              allowedTypes={["image/jpeg", "image/png", "image/webp"]}
              maxMB={5}
              currentUrl={imageUrl}
              onUploaded={setImageUrl}
            />
            <FileUpload
              kind="cv"
              userId={userId}
              label="CV"
              help="PDF or Word (.docx), up to 10 MB."
              accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              allowedTypes={[
                "application/pdf",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              ]}
              maxMB={10}
              currentUrl={cvUrl}
              onUploaded={setCvUrl}
            />
          </div>
        </section>

        {/* Save bar: stays visible at the bottom while scrolling */}
        <div className="sticky bottom-4 z-10 flex items-center justify-between gap-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/70 px-4 py-3 shadow-lg backdrop-blur-xl">
          <p aria-live="polite" className={`text-sm ${statusTone}`}>
            {status}
          </p>
          <button
            type="submit"
            disabled={pending || !dirty}
            className="shrink-0 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-500/30 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {pending ? "Saving…" : "Save changes"}
          </button>
        </div>
      </form>

      {/* Live preview: the real card component from the People page */}
      <aside className="xl:sticky xl:top-8">
        <div className="mb-3 flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold">Preview</h2>
          <p className={hint}>How your card looks on the People page</p>
        </div>
        <ul className="list-none">
          <ProfileCard
            name={name || "Your name"}
            credential={credential || undefined}
            role={role || undefined}
            bio={bio || "Your bio will appear here."}
            imageSrc={imageUrl ?? undefined}
            initials={member.initials ?? undefined}
            cv={cvUrl ?? undefined}
          />
        </ul>
      </aside>
    </div>
  );
}
