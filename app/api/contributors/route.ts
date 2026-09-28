import { randomUUID } from "crypto"
import { put } from "@vercel/blob"
import { NextResponse } from "next/server"
import { addContributor, getContributors, type Contributor } from "../../lib/contributors"

const MAX_IMAGE_BYTES = 5 * 1024 * 1024
const ALLOWED_IMAGE_TYPES: Record<string, string> = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/webp": "webp",
    "image/gif": "gif",
}

function cleanOptional(value: FormDataEntryValue | null): string | undefined {
    if (typeof value !== "string") return undefined
    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : undefined
}

async function saveImage(file: File): Promise<string> {
    const extension = ALLOWED_IMAGE_TYPES[file.type]
    if (!extension) {
        throw new Error("Image must be a PNG, JPEG, WEBP, or GIF file.")
    }
    if (file.size > MAX_IMAGE_BYTES) {
        throw new Error("Image must be smaller than 5MB.")
    }

    const blob = await put(`contributors/${randomUUID()}.${extension}`, file, {
        access: "public",
        contentType: file.type,
    })

    return blob.url
}

export async function GET() {
    const contributors = await getContributors()
    return NextResponse.json(contributors)
}

export async function POST(request: Request) {
    const formData = await request.formData().catch(() => null)

    if (!formData) {
        return NextResponse.json(
            { error: "Invalid request body." },
            { status: 400 }
        )
    }

    const name = cleanOptional(formData.get("name"))
    const role = cleanOptional(formData.get("role"))
    const bio = cleanOptional(formData.get("bio"))

    if (!name || !role || !bio) {
        return NextResponse.json(
            { error: "Name, role, and bio are required." },
            { status: 400 }
        )
    }

    let imageSrc: string | undefined
    const image = formData.get("image")
    if (image instanceof File && image.size > 0) {
        try {
            imageSrc = await saveImage(image)
        } catch (err) {
            return NextResponse.json(
                { error: err instanceof Error ? err.message : "Could not save image." },
                { status: 400 }
            )
        }
    }

    const contributor: Contributor = {
        name,
        role,
        bio,
        credential: cleanOptional(formData.get("credential")),
        imageSrc,
        imageAlt: cleanOptional(formData.get("imageAlt")),
        initials: cleanOptional(formData.get("initials")),
    }

    try {
        await addContributor(contributor)
    } catch (err) {
        return NextResponse.json(
            {
                error:
                    err instanceof Error
                        ? err.message
                        : "Could not save contributor.",
            },
            { status: 500 }
        )
    }

    return NextResponse.json(contributor, { status: 201 })
}
