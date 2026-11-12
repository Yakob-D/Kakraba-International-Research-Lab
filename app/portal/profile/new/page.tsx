import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import NewProfileForm from "./NewProfileForm";

export default async function NewProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/portal/login");

  // Already have a profile, or waiting on a claim? This page isn't for you.
  const { data: member } = await supabase
    .from("members").select("id").eq("user_id", user.id).maybeSingle();
  if (member) redirect("/portal/profile");

  const { data: claim } = await supabase
    .from("profile_claims").select("id")
    .eq("user_id", user.id).eq("status", "pending").maybeSingle();
  if (claim) redirect("/portal/profile");

  return (
    <div className="relative min-h-screen flex items-center px-4 text-black dark:text-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
      </div>

      <main className="mx-auto w-full max-w-md rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] px-6 py-10 shadow-md backdrop-blur-xl sm:px-8">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome to the lab</h1>
        <p className="mt-2 mb-8 text-sm text-black/60 dark:text-white/60">
          Start with your name and section. Next you&apos;ll add your bio, photo
          and CV. Your profile goes public once an admin approves it.
        </p>
        <NewProfileForm />
      </main>
    </div>
  );
}