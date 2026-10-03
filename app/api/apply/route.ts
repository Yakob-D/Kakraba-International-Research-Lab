import { supabaseAdmin } from "@/app/lib/supabase-admin";
import { resend, notifyEmail } from "@/app/lib/resend";

const MAX_CV_SIZE = 4 * 1024 * 1024;

export async function POST(request: Request) {
    const formData = await request.formData();

    const first_name = formData.get("firstName");
    const last_name = formData.get("lastName");
    const email = formData.get("email");
    const how_did_you_hear_about_us = formData.get("how_did_you_hear_about_us");
    const reason = formData.get("reason");
    const cv = formData.get("cv");

    // Validations
    if(typeof first_name !== "string" || first_name.trim() === ""){
        return Response.json({ ok: false, error: "First Name is required!" }, { status: 400 });
    }

    if(typeof last_name !== "string" || last_name.trim() === ""){
        return Response.json({ ok: false, error: "Last Name is required!" }, { status: 400 });
    }

    if(typeof email !== "string" || email.trim() === "" || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))){
        return Response.json({ ok: false, error: "You must input a valid email address! Example: Turing@example.com" }, { status: 400 });
    }

    if(typeof how_did_you_hear_about_us !== "string"){
        return Response.json({ ok: false, error: "How did you hear about us needs to be a text!"});
    }

    if(typeof reason !== "string" || reason.trim() === ""){
        return Response.json({ ok: false, error: "Reason is required!" }, { status: 400 });
    }

    if(!(cv instanceof File) || cv.type !== "application/pdf" || cv.size > MAX_CV_SIZE || cv.size === 0){
        return Response.json({ ok: false, error: "Your cv must be in .pdf format and not larger than 4MB!" }, { status: 400 });
    }

    const firstName = first_name.trim();
    const lastName = last_name.trim();
    const trimmedEmail = email.trim();
    const trimmedReason = reason.trim();

    // Create the path for the bucket
    const path = `${crypto.randomUUID()}.pdf`;

    // Store it in the file bucket in supabase and get the data
    const {data, error: uploadError} = await supabaseAdmin.storage.from("cvs").upload(path, cv, {contentType: "application/pdf"});
    if(uploadError){
        console.error(uploadError);
        return Response.json({ ok: false, error: "Could not upload CV." }, { status: 500 })
    }

    // Store the other information on the database
    const { error: insertionError } = await supabaseAdmin.from("applications").insert(
        {
            first_name: firstName,
            last_name: lastName,
            email: trimmedEmail,
            how_did_you_hear_about_us: how_did_you_hear_about_us,
            reason: trimmedReason,
            cv_path: data.path,
        }
    )
    if(insertionError){
        console.error(insertionError);
        await supabaseAdmin.storage.from("cvs").remove([path]);
        return Response.json({ ok: false, error: "Something went wrong. Please try again later." }, { status: 500 });
    }

    const {error: emailError} = await resend.emails.send({
        from: "Applications <onboarding@resend.dev>",
        to: notifyEmail,
        subject: `[Kakraba Research Group] New Applicant: ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${trimmedEmail}\nReason: ${trimmedReason}\nReview the application in Supabase.`
    })
    if(emailError){
        console.error(emailError);
    }

    return Response.json({ ok: true});
}