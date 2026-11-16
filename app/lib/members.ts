import "server-only"
import { supabaseAdmin } from "./supabase-admin"
import { orderSections } from "./categories"

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
    .eq("status", "published")
    .order("sort_order");

    if (error) throw new Error(`Failed to load members: ${error.message}`);
    return data;
}

// Every section that can be chosen: the built-in ones plus any new
// sections used by published members (in display order)
export async function getSections(): Promise<string[]> {
    const { data } = await supabaseAdmin
    .from("members")
    .select("category")
    .eq("status", "published");

    return orderSections((data ?? []).map((row) => row.category));
}
