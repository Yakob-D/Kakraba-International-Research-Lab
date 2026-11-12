import { requireAdmin, emailOf } from "@/app/lib/admin";
import { supabaseAdmin } from "@/app/lib/supabase-admin";
import ProfileCard from "@/app/ui/ProfileCard";
import {
  approveClaim,
  rejectClaim,
  approveProfile,
  rejectProfile,
} from "./actions";

const approveBtn =
  "rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-500/30";
const rejectBtn =
  "rounded-lg border border-black/15 dark:border-white/15 px-4 py-2 text-sm font-semibold transition hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-500/30";

export default async function AdminPage() {
  await requireAdmin();

  // 1. Pending claims, with the member each one is claiming
  const { data: claims } = await supabaseAdmin
    .from("profile_claims")
    .select("id, user_id, created_at, member:members(name, role)")
    .eq("status", "pending")
    .order("created_at");

  // 2. New profiles waiting, and ones you've hidden
  const { data: profiles } = await supabaseAdmin
    .from("members")
    .select(
      "id, user_id, name, credential, role, category, bio, image_url, cv_url, initials, status",
    )
    .in("status", ["pending", "rejected"])
    .order("name");

  // 3. Attach each person's login email
  const claimRows = await Promise.all(
    (claims ?? []).map(async (c) => ({
      ...c,
      // Without generated types, Supabase types a join as an array,
      // even though each claim points to exactly one member
      member: Array.isArray(c.member) ? c.member[0] : c.member,
      email: await emailOf(c.user_id),
    })),
  );
  const profileRows = await Promise.all(
    (profiles ?? []).map(async (p) => ({
      ...p,
      email: await emailOf(p.user_id),
    })),
  );
  const pendingProfiles = profileRows.filter((p) => p.status === "pending");
  const hiddenProfiles = profileRows.filter((p) => p.status === "rejected");

  return (
    <div className="relative min-h-screen px-4 py-12 sm:px-8 sm:py-16 text-black dark:text-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl space-y-12">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Requests
          </h1>
          <p className="mt-2 text-black/60 dark:text-white/60">
            Approve people before they can edit or appear on the People page.
          </p>
        </header>

        {/* Claims */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">
            Profile claims{" "}
            <span className="text-black/40 dark:text-white/40">
              ({claimRows.length})
            </span>
          </h2>
          {claimRows.length === 0 ? (
            <p className="text-sm text-black/50 dark:text-white/50">
              No claims waiting.
            </p>
          ) : (
            <ul className="space-y-3">
              {claimRows.map((c) => (
                <li
                  key={c.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] px-5 py-4 backdrop-blur"
                >
                  <div>
                    <p className="font-medium">{c.email ?? "Unknown email"}</p>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      says they are <strong>{c.member?.name}</strong>
                    </p>
                  </div>
                  <form className="flex gap-2">
                    <input type="hidden" name="id" value={c.id} />
                    <button formAction={rejectClaim} className={rejectBtn}>
                      Reject
                    </button>
                    <button formAction={approveClaim} className={approveBtn}>
                      Approve
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* New profiles */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">
            New members{" "}
            <span className="text-black/40 dark:text-white/40">
              ({pendingProfiles.length})
            </span>
          </h2>
          {pendingProfiles.length === 0 ? (
            <p className="text-sm text-black/50 dark:text-white/50">
              No new members waiting.
            </p>
          ) : (
            <div className="space-y-6">
              {pendingProfiles.map((p) => (
                <div key={p.id} className="space-y-3">
                  <p className="text-sm text-black/60 dark:text-white/60">
                    {p.email} wants to join <strong>{p.category}</strong>
                  </p>
                  <ul className="list-none">
                    <ProfileCard
                      name={p.name}
                      credential={p.credential ?? undefined}
                      role={p.role ?? undefined}
                      bio={p.bio || "No bio yet."}
                      imageSrc={p.image_url ?? undefined}
                      initials={p.initials ?? undefined}
                      cv={p.cv_url ?? undefined}
                    />
                  </ul>
                  <form className="flex justify-end gap-2">
                    <input type="hidden" name="id" value={p.id} />
                    <button formAction={rejectProfile} className={rejectBtn}>
                      Hide
                    </button>
                    <button formAction={approveProfile} className={approveBtn}>
                      Publish
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Hidden (rejected) profiles */}
        {hiddenProfiles.length > 0 && (
          <section>
            <h2 className="mb-4 text-lg font-semibold">Hidden profiles</h2>
            <ul className="space-y-2 text-sm">
              {hiddenProfiles.map((p) => (
                <li
                  key={p.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] px-5 py-3 backdrop-blur"
                >
                  <span>
                    {p.name}{" "}
                    <span className="text-black/50 dark:text-white/50">
                      ({p.email})
                    </span>
                  </span>
                  <form>
                    <input type="hidden" name="id" value={p.id} />
                    <button formAction={approveProfile} className={rejectBtn}>
                      Publish
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
