import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import { supabaseAdmin } from "../../lib/supabase-admin";
import { claimProfile } from "./actions";
import ProfileForm from "./ProfileForm";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/portal/login");

  const { data: member } = await supabase
    .from("members")
    .select(
      "id, name, credential, role, category, bio, image_url, cv_url, initials, status",
    )
    .eq("user_id", user.id)
    .maybeSingle();

  if (member) {
    const firstName = member.name.split(" ")[0];
    const lastName = member.name.split(" ")[1];
    const isLive = member.status === "published";

    return (
      <div className="relative min-h-screen px-4 py-12 sm:px-8 sm:py-16 text-black dark:text-white">
        {/* Grid background + glow, same as the login page */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Hi, {firstName} {lastName}
              </h1>
              <p className="mt-2 max-w-xl text-black/60 dark:text-white/60">
                Keep your lab profile current. Saved changes go straight to the
                People page.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1.5 text-sm backdrop-blur">
                <span
                  className={`h-2 w-2 rounded-full ${isLive ? "bg-green-500" : "bg-amber-500"}`}
                />
                {isLive ? "Live on the People page" : "Waiting for approval"}
              </span>
              {isLive && (
                <a
                  href="/people"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/15 dark:border-white/15 px-4 py-1.5 text-sm font-semibold transition hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-500/30"
                >
                  View People page
                </a>
              )}
            </div>
          </header>

          {!isLive && (
            <p className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-300">
              Your profile isn&apos;t public yet. You can keep editing; it goes
              live once an admin approves it.
            </p>
          )}

          <ProfileForm member={member} userId={user.id}/>
        </div>
      </div>
    );
  }

  const { data: claim } = await supabase
    .from("profile_claims")
    .select("id")
    .eq("user_id", user.id)
    .eq("status", "pending")
    .maybeSingle();

  if (claim) {
    return (
      <p className="flex min-h-screen items-center justify-center lg:text-4xl">
        WAITING FOR APPROVAL TO CLAIM THE PROFILE
      </p>
    );
  }

  const { data: unclaimed } = await supabaseAdmin
    .from("members")
    .select("id, name, role")
    .eq("status", "published")
    .is("user_id", null)
    .order("name");

  return (
    <main className="mx-auto w-full px-4 py-16">
      <h1 className="text-2xl font-semibold text-center">Find yourself</h1>
      <p className="mt-1 mb-6 text-sm text-black/60 dark:text-white/60 text-center">
        Pick your name to claim your profile. An admin will approve it.
      </p>

      <div className="w-full max-w-lg mx-auto">
        <ul className="space-y-5">
          {unclaimed?.map((m) => (
            <li
              key={m.id}
              className="flex items-center justify-between gap-4 rounded-lg border border-black/10 dark:border-white/10 px-4 py-3"
            >
              <div>
                <p className="font-medium">{m.name}</p>
                <p className="text-sm text-black/60 dark:text-white/60">
                  {m.role}
                </p>
              </div>
              <form action={claimProfile}>
                <input type="hidden" name="memberId" value={m.id} />
                <button className="rounded-md bg-green-600 hover:bg-green-700 transition-colors duration-300 px-3 py-1.5 text-sm font-semibold text-white dark:text-black">
                  This is me
                </button>
              </form>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-center text-sm">
        Not on the list?{" "}
        <a
          href="/portal/profile/new"
          className="font-semibold rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold text-white"
        >
          I&apos;m new to the lab
        </a>
      </p>
    </main>
  );
}
