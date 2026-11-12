import "server-only";
import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { resend, notifyEmail } from "./resend";

const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_APP_PASSWORD;

// Gmail sends to members (Resend can only email you without a domain)
const transporter =
  gmailUser && gmailPass
    ? nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: { user: gmailUser, pass: gmailPass },
      })
    : null;

// The site's address for links in emails
export async function siteUrl() {
  // On the live site, always use the real production address.
  // Vercel sets these two variables automatically.
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (process.env.VERCEL_ENV === "production" && productionHost) {
    return `https://${productionHost}`;
  }

  // Anywhere else (your Mac, preview deploys): use the address you're browsing
  const origin = (await headers()).get("origin");
  return origin ?? "http://localhost:3000";
}

// Names come from users, so never put them into HTML unescaped
function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Same look as the login emails
function emailHtml(heading: string, body: string, button?: { label: string; url: string }) {
  const buttonHtml = button
    ? `<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
         <a href="${button.url}" style="display:inline-block;background:#dc2626;color:#ffffff;text-decoration:none;font-size:15px;font-weight:bold;padding:12px 28px;border-radius:4px;">${escapeHtml(button.label)}</a>
       </td></tr></table>`
    : "";

  return `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#ffffff;border-radius:6px;padding:32px;">
      <tr><td>
        <p style="margin:0 0 8px;font-size:13px;letter-spacing:1px;text-transform:uppercase;color:#dc2626;font-weight:bold;">Kakraba Research Group</p>
        <h1 style="margin:0 0 16px;font-size:22px;color:#18181b;">${escapeHtml(heading)}</h1>
        <p style="margin:0 0 24px;font-size:15px;line-height:1.5;color:#52525b;">${escapeHtml(body)}</p>
        ${buttonHtml}
      </td></tr>
    </table>
  </td></tr>
</table>`;
}

// Email a lab member. Never throws: a failed email must not undo an approval.
export async function emailMember(
  to: string | null | undefined,
  subject: string,
  heading: string,
  body: string,
  button?: { label: string; url: string },
) {
  if (!to) return;
  if (!transporter) {
    console.warn("GMAIL_USER / GMAIL_APP_PASSWORD missing, member email skipped.");
    return;
  }
  try {
    await transporter.sendMail({
      from: `"Kakraba Research Group" <${gmailUser}>`,
      to,
      subject,
      html: emailHtml(heading, body, button),
    });
  } catch (error) {
    console.error("Member email failed:", error);
  }
}

// Email you (the admin) through Resend. Never throws either.
export async function emailAdmin(subject: string, heading: string, body: string) {
  try {
    const url = `${await siteUrl()}/portal/admin`;
    const { error } = await resend.emails.send({
      from: "Kakraba Portal <onboarding@resend.dev>",
      to: notifyEmail,
      subject,
      html: emailHtml(heading, body, { label: "Review requests", url }),
    });
    if (error) console.error("Admin email failed:", error);
  } catch (error) {
    console.error("Admin email failed:", error);
  }
}
