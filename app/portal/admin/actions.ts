"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin, emailOf } from "@/app/lib/admin";
import { emailMember, siteUrl } from "@/app/lib/mailer";
import { supabaseAdmin } from "@/app/lib/supabase-admin";

// Every action checks again: Server Actions are public endpoints,
// so hiding the buttons is not enough.

function refresh() {
  revalidatePath("/portal/admin");
  revalidatePath("/people");
}

function getId(formData: FormData) {
  const id = formData.get("id");
  if (typeof id !== "string" || !id) throw new Error("Missing id.");
  return id;
}

// Link the claimant's account to the member profile
export async function approveClaim(formData: FormData) {
  await requireAdmin();
  const claimId = getId(formData);

  const { data: claim } = await supabaseAdmin
    .from("profile_claims")
    .select("id, member_id, user_id, status")
    .eq("id", claimId)
    .maybeSingle();
  if (!claim || claim.status !== "pending") {
    throw new Error("This claim is no longer pending.");
  }

  // Only link if nobody has claimed this profile yet
  const { data: linked, error: linkError } = await supabaseAdmin
    .from("members")
    .update({ user_id: claim.user_id })
    .eq("id", claim.member_id)
    .is("user_id", null)
    .select("id, name");
  if (linkError) {
    if (linkError.code === "23505") {
      throw new Error("This account is already linked to another profile.");
    }
    throw new Error(linkError.message);
  }
  if (!linked || linked.length === 0) {
    throw new Error("This profile has already been claimed by someone else.");
  }

  await supabaseAdmin
    .from("profile_claims")
    .update({ status: "approved" })
    .eq("id", claim.id);

  // Any other pending claims for the same profile can't win anymore
  await supabaseAdmin
    .from("profile_claims")
    .update({ status: "rejected" })
    .eq("member_id", claim.member_id)
    .eq("status", "pending");

  await emailMember(
    await emailOf(claim.user_id),
    "You can now edit your lab profile",
    "Your profile is ready to edit",
    `Your claim for ${linked[0].name} was approved. You can now update your bio, photo and CV.`,
    { label: "Edit my profile", url: `${await siteUrl()}/portal/profile` },
  );

  refresh();
}

export async function rejectClaim(formData: FormData) {
  await requireAdmin();
  const { data, error } = await supabaseAdmin
    .from("profile_claims")
    .update({ status: "rejected" })
    .eq("id", getId(formData))
    .eq("status", "pending")
    .select("user_id");
  if (error) throw new Error(error.message);

  if (data?.[0]) {
    await emailMember(
      await emailOf(data[0].user_id),
      "About your lab profile request",
      "We couldn't confirm your request",
      "Your request to claim a profile wasn't approved. If you think this is a mistake, contact the lab admin, or log in again to choose a different profile.",
      { label: "Open the portal", url: `${await siteUrl()}/portal/profile` },
    );
  }
  refresh();
}

// Publish a new member's profile on the People page
export async function approveProfile(formData: FormData) {
  await requireAdmin();
  const { data, error } = await supabaseAdmin
    .from("members")
    .update({ status: "published" })
    .eq("id", getId(formData))
    .select("user_id");
  if (error) throw new Error(error.message);

  if (data?.[0]) {
    await emailMember(
      await emailOf(data[0].user_id),
      "Your profile is live",
      "Welcome to the lab",
      "Your profile was approved and now appears on the People page. You can update it any time from the member portal.",
      { label: "See the People page", url: `${await siteUrl()}/people` },
    );
  }
  refresh();
}

// Hide it (kept, so it can be approved later)
export async function rejectProfile(formData: FormData) {
  await requireAdmin();
  const { data, error } = await supabaseAdmin
    .from("members")
    .update({ status: "rejected" })
    .eq("id", getId(formData))
    .eq("status", "pending")
    .select("user_id");
  if (error) throw new Error(error.message);

  if (data?.[0]) {
    await emailMember(
      await emailOf(data[0].user_id),
      "About your lab profile",
      "Your profile wasn't published",
      "An admin reviewed your profile and didn't publish it. If you think this is a mistake, contact the lab admin.",
    );
  }
  refresh();
}
