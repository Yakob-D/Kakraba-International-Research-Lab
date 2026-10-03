import "server-only";
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL;
if(!supabaseUrl){
    throw new Error("SUPABASE_URL is missing!");
}

const supabaseKey = process.env.SUPABASE_SECRET_KEY;
if(!supabaseKey){
    throw new Error("SUPABASE_SECRET_KEY is missing!");
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseKey);