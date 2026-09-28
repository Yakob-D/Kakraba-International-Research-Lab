import { neon, type NeonQueryFunction } from "@neondatabase/serverless"

let cachedSql: NeonQueryFunction<false, false> | null = null

export function getSql(): NeonQueryFunction<false, false> {
    if (cachedSql) return cachedSql

    const connectionString =
        process.env.DATABASE_URL ??
        process.env.POSTGRES_URL ??
        process.env.DATABASE_URL_UNPOOLED

    if (!connectionString) {
        throw new Error(
            "Missing database connection string. Connect a Postgres (Neon) database to this project in the Vercel dashboard, then set DATABASE_URL (or POSTGRES_URL) in your environment."
        )
    }

    cachedSql = neon(connectionString)
    return cachedSql
}
