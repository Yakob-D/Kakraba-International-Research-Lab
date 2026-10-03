import "server-only";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY
if(!resendApiKey){
    throw new Error("RESEND_API_KEY is missing!");
}

const rawNotifyEmail = process.env.NOTIFY_EMAIL;
if(!rawNotifyEmail){
    throw new Error("NOTIFY_EMAIL address is missing!");
}

export const resend = new Resend(resendApiKey);
export const notifyEmail = rawNotifyEmail;