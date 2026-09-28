import { getSql } from "./db"
import type { ProfileCardProps } from "../ui/ProfileCard"

export type Contributor = ProfileCardProps

type ContributorRow = {
    name: string
    role: string
    bio: string
    credential: string | null
    image_src: string | null
    image_alt: string | null
    initials: string | null
}

let schemaReady: Promise<void> | null = null

function ensureSchema(): Promise<void> {
    if (!schemaReady) {
        const sql = getSql()
        schemaReady = sql`
            CREATE TABLE IF NOT EXISTS contributors (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                role TEXT NOT NULL,
                bio TEXT NOT NULL,
                credential TEXT,
                image_src TEXT,
                image_alt TEXT,
                initials TEXT,
                created_at TIMESTAMPTZ NOT NULL DEFAULT now()
            )
        `.then(() => undefined)
    }
    return schemaReady
}

function toContributor(row: ContributorRow): Contributor {
    return {
        name: row.name,
        role: row.role,
        bio: row.bio,
        credential: row.credential ?? undefined,
        imageSrc: row.image_src ?? undefined,
        imageAlt: row.image_alt ?? undefined,
        initials: row.initials ?? undefined,
    }
}

export async function getContributors(): Promise<Contributor[]> {
    await ensureSchema()
    const sql = getSql()
    const rows = (await sql`
        SELECT name, role, bio, credential, image_src, image_alt, initials
        FROM contributors
        ORDER BY created_at ASC
    `) as ContributorRow[]

    return rows.map(toContributor)
}

export async function addContributor(contributor: Contributor): Promise<void> {
    await ensureSchema()
    const sql = getSql()
    await sql`
        INSERT INTO contributors (name, role, bio, credential, image_src, image_alt, initials)
        VALUES (
            ${contributor.name},
            ${contributor.role},
            ${contributor.bio},
            ${contributor.credential ?? null},
            ${contributor.imageSrc ?? null},
            ${contributor.imageAlt ?? null},
            ${contributor.initials ?? null}
        )
    `
}
