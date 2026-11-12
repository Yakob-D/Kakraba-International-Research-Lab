"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../../lib/supabase/server";
import { CATEGORIES } from "@/app/lib/categories";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/app/lib/supabase-admin";
import { emailAdmin } from "@/app/lib/mailer";

export async function claimProfile(formData: FormData) {
    const memberId = formData.get("memberId");
    if(typeof memberId != "string") return;

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
        .from("profile_claims")
        .insert({ member_id: memberId });

    if (error) throw new Error(error.message);

    // Tell the admin (the user client can't read other members, so use the admin client)
    const { data: member } = await supabaseAdmin
        .from("members")
        .select("name")
        .eq("id", memberId)
        .maybeSingle();
    await emailAdmin(
        "[Kakraba Portal] New profile claim",
        "New profile claim",
        `${user.email} says they are ${member?.name ?? "a lab member"}.`,
    );

    revalidatePath("/portal/profile");
}

export type FormState = { ok: boolean; message: string } | null;

export async function UpdateProfile( _prevState: FormState, formData: FormData): Promise<FormState> {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if(!user) return { ok: false, message: "You're not logged in."};

    const name = String(formData.get("name") ?? "").trim();
    const credential = String(formData.get("credential") ?? "").trim();
    const role = String(formData.get("role") ?? "").trim();
    const category = String(formData.get("category") ?? "").trim();
    const bio = String(formData.get("bio") ?? "").trim();

    if(!name) return { ok: false, message: "Name is a required field."};
    if(!CATEGORIES.includes(category)) return { ok: false, message: "Pick a valid category."};

    const { error } = await supabase
        .from("members")
        .update({
            name,
            credential: credential || null,
            role: role || null,
            category,
            bio,
        })
        .eq("user_id", user.id);
    
    if(error) return { ok: false, message: error.message };

    revalidatePath("/portal/profile");
    revalidatePath("/people");
    return { ok: true, message: "Saved! Your profile is updated." };

}

export async function updateFileUrl(
    kind: "image" | "cv",
    url: string
): Promise<FormState> {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if(!user) return { ok: false, message: "You're not logged in." };

    const allowedStart = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/member-files/${user.id}/`;
    if(!url.startsWith(allowedStart)) {
        return { ok: false, message: "That file location isn't allowed." };
    }

    const column = kind === "image" ? "image_url" : "cv_url";

    const { data, error } = await supabase
        .from("members")
        .update({ [column]: url })
        .eq("user_id", user.id)
        .select("id");

    if(error) return {ok: false, message: error.message };
    if(!data || data.length === 0) return { ok: false, message: "Nothing was updated." };

    revalidatePath("/portal/profile");
    revalidatePath("/people");
    return { ok: true, message: kind === "image" ? "Photo updated." : "CV updated." };
}

export async function createProfile(
    _prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if(!user) return { ok: false, message: "You're not logging in." };

    const name = String(formData.get("name") ?? "").trim();
    const category = String(formData.get("category") ?? "");

    if(!name) return {ok: false, message: "Enter your full name." };
    if (!CATEGORIES.includes(category) || category === "Head of the Lab") {
        return { ok: false, message: "Choose your section."};
    }

    const initials = name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

    const { error } = await supabase
        .from("members")
        .insert({ user_id: user.id, name, category, initials });
    
    if(error){
        if(error.code === "23505") {
            return { ok: false, message: "You already have a profile."};
        }
        return { ok: false, message: error.message};
    }

    await emailAdmin(
        "[Kakraba Portal] New member waiting",
        "A new member signed up",
        `${name} (${user.email}) created a profile in ${category}. It stays hidden until you publish it.`,
    );

    redirect("/portal/profile");
}