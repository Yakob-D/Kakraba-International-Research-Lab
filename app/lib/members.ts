import "server-only"
import { supabaseAdmin } from "./supabase-admin"

export type Member = {
    id: string;
    name: string;
    credential: string | null;
    role: string | null;
    category: string;
    bio: string;
    image_url: string | null;
    cv_url: string | null;
    initials: string | null;
};

export async function getMembers(): Promise<Member[]> {
    const { data, error } = await supabaseAdmin
    .from("members")
    .select("id, name, credential, role, category, bio, image_url, cv_url, initials")
    .order("sort_order")

    if (error) throw new Error(`Failed to load members: ${error.message}`);
    return data;
}