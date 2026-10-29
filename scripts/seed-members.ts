import { createClient } from "@supabase/supabase-js"
import { people, categoryOf } from "../app/people/data"

process.loadEnvFile(".env.local");

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
)

async function main() {
    const rows = people.map((p, i) => ({
        name: p.name,
        credential: p.credential ?? null,
        role: p.role ?? null,
        category: categoryOf(p),
        bio: p.bio,
        image_url: p.imageSrc ?? null,
        cv_url: p.cv ?? null,
        initials: p.initials || null,
        sort_order: i,
    }))

    const { data, error } = await supabase
    .from("members")
    .insert(rows)
    .select("id, name");

    if(error) {
        console.error("Seed failed: ", error.message);
        process.exit(1);
    }
    console.log(`Inserted ${data.length} members`);
}

main()