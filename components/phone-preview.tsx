"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react"

interface PhonePreviewProps {
  screenshots?: string[]
  title: string
}

export function PhonePreview({ screenshots, title }: PhonePreviewProps) {
  const [index, setIndex] = useState(0)
  const hasShots = screenshots && screenshots.length > 0
  const total = screenshots?.length ?? 0

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  return (
    <div className="relative w-full h-full flex items-center justify-center py-10 code-grid-bg">
      {/* Soft glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-primary/15 blur-3xl" />
      </div>

      {/* Phone frame */}
      <div className="relative">
        <div className="relative w-[260px] h-[540px] rounded-[2.5rem] bg-neutral-900 border-[10px] border-neutral-800 shadow-2xl overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-neutral-900 rounded-b-2xl z-20" />

          {/* Screen */}
          <div className="relative w-full h-full bg-black overflow-hidden">
            {hasShots ? (
              <Image
                key={screenshots![index]}
                src={screenshots![index]}
                alt={`${title} screenshot ${index + 1}`}
                fill
                sizes="240px"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground p-6 text-center">
                <Smartphone className="w-10 h-10 opacity-50" />
                <p className="text-xs">
                  Screenshots coming soon. Add Flutter app images to{" "}
                  <code className="font-mono text-foreground/80">
                    /public/project-images
                  </code>
                  .
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation arrows */}
        {hasShots && total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute top-1/2 -left-14 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next screenshot"
              className="absolute top-1/2 -right-14 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {hasShots && total > 1 && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {screenshots!.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Screenshot ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
