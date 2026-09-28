"use client"

import { useEffect, useRef, useState } from "react"
import ResearchAreaCard from "./ResearchAreaCard"

type ResearchArea = {
    title: string
    description: string
    id?: string
}

type ResearchAreaMarqueeProps = {
    items: ResearchArea[]
}

const SPEED_PX_PER_SEC = 20
const CLICK_SUPPRESS_THRESHOLD_PX = 5

export default function ResearchAreaMarquee({ items }: ResearchAreaMarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const firstCopyRef = useRef<HTMLDivElement>(null)
    const offsetRef = useRef(0)
    const copyWidthRef = useRef(0)
    const maxDragOffsetRef = useRef(0)
    const draggingRef = useRef(false)
    const pointerIdRef = useRef<number | null>(null)
    const dragStartXRef = useRef(0)
    const dragStartOffsetRef = useRef(0)
    const dragDistanceRef = useRef(0)
    const suppressClickRef = useRef(false)
    const hoveringRef = useRef(false)
    const [isDragging, setIsDragging] = useState(false)

    const applyOffset = () => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`
        }
    }

    const normalizeOffset = () => {
        const width = copyWidthRef.current
        if (width <= 0) return
        offsetRef.current = ((offsetRef.current % width) + width) % width
    }

    useEffect(() => {
        const measure = () => {
            if (firstCopyRef.current) {
                copyWidthRef.current = firstCopyRef.current.offsetWidth
            }
            if (containerRef.current) {
                maxDragOffsetRef.current = Math.max(
                    0,
                    copyWidthRef.current - containerRef.current.offsetWidth
                )
            }
        }
        measure()
        window.addEventListener("resize", measure)
        return () => window.removeEventListener("resize", measure)
    }, [])

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
        if (prefersReducedMotion) return

        let frameId: number
        let lastTime: number | null = null

        const tick = (time: number) => {
            if (lastTime === null) lastTime = time
            const dt = (time - lastTime) / 1000
            lastTime = time

            if (!draggingRef.current && !hoveringRef.current) {
                offsetRef.current += SPEED_PX_PER_SEC * dt
                normalizeOffset()
                applyOffset()
            }

            frameId = requestAnimationFrame(tick)
        }

        frameId = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frameId)
    }, [])

    const handlePointerDown = (e: React.PointerEvent) => {
        const width = copyWidthRef.current
        const maxOffset = maxDragOffsetRef.current

        // offsetRef can be sitting in the autoplay "wrap" zone (between the
        // last card and the duplicated first card) when the drag starts.
        // Snap to whichever real boundary (last card vs. first card) is closer
        // instead of jumping straight to the last-card bound every time.
        if (width > 0 && offsetRef.current > maxOffset) {
            const distToLastCard = offsetRef.current - maxOffset
            const distToFirstCard = width - offsetRef.current
            offsetRef.current = distToLastCard <= distToFirstCard ? maxOffset : 0
            applyOffset()
        }

        pointerIdRef.current = e.pointerId
        dragStartXRef.current = e.clientX
        dragStartOffsetRef.current = offsetRef.current
        dragDistanceRef.current = 0
        // Don't capture the pointer or mark this as a drag yet. Capturing
        // immediately would retarget the eventual compatibility "click"
        // event to this track element instead of whatever's actually under
        // the cursor (e.g. a "Read More" link), silently breaking normal
        // clicks. We only promote this to a drag once real movement happens.
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (pointerIdRef.current !== e.pointerId) return
        const delta = dragStartXRef.current - e.clientX
        dragDistanceRef.current = Math.abs(delta)

        if (!draggingRef.current) {
            if (dragDistanceRef.current <= CLICK_SUPPRESS_THRESHOLD_PX) return
            draggingRef.current = true
            setIsDragging(true)
            e.currentTarget.setPointerCapture(e.pointerId)
        }

        const nextOffset = dragStartOffsetRef.current + delta
        offsetRef.current = Math.min(
            Math.max(nextOffset, 0),
            maxDragOffsetRef.current
        )
        applyOffset()
    }

    const endDrag = (e: React.PointerEvent) => {
        if (pointerIdRef.current !== e.pointerId) return
        pointerIdRef.current = null

        if (!draggingRef.current) return

        draggingRef.current = false
        setIsDragging(false)
        suppressClickRef.current = true
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId)
        }
    }

    const handleClickCapture = (e: React.MouseEvent) => {
        if (suppressClickRef.current) {
            e.preventDefault()
            e.stopPropagation()
            suppressClickRef.current = false
        }
    }

    return (
        <div ref={containerRef} className="mt-8 overflow-hidden">
            <div
                ref={trackRef}
                className={`flex w-max select-none ${
                    isDragging ? "cursor-grabbing" : "cursor-grab"
                }`}
                style={{ touchAction: "pan-y", willChange: "transform" }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onPointerEnter={() => {
                    hoveringRef.current = true
                }}
                onPointerLeave={() => {
                    hoveringRef.current = false
                }}
                onClickCapture={handleClickCapture}
                onDragStart={(e) => e.preventDefault()}
            >
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        ref={copy === 0 ? firstCopyRef : undefined}
                        className="flex gap-8 pr-8"
                        aria-hidden={copy === 1}
                    >
                        {items.map((area) => (
                            <ResearchAreaCard key={area.title} {...area} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
