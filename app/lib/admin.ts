import "server-only";
import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";
import { supabaseAdmin } from "./supabase-admin";

// Use at the top of every admin page AND every admin action
export async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/portal/login");

  // RLS lets users read their own row, including is_admin
  const { data: me } = await supabase
    .from("members")
    .select("is_admin")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!me?.is_admin) redirect("/portal/profile");

  return user;
}

// Find the login email for an account (auth users live outside your tables)
export async function emailOf(userId: string | null) {
  if (!userId) return null;
  const { data } = await supabaseAdmin.auth.admin.getUserById(userId);
  return data.user?.email ?? null;
}
