"use client"

import type React from "react"

import { X } from "lucide-react"
import { useEffect } from "react"

export default function ModalComponent({
  children,
  onClose,
  title,
}: {
  children: React.ReactNode
  onClose: () => void
  title: string
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="absolute inset-0 bg-background/40 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-5xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden glass-effect border border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_0_100px_-20px_rgba(167,139,250,0.3)] animate-scale-in flex flex-col">
        <div className="flex items-center justify-between p-5 sm:p-8 border-b border-white/10 bg-white/5 backdrop-blur-xl">
          <h2 className="text-xl sm:text-3xl font-bold gradient-text">{title}</h2>
          <button
            onClick={onClose}
            className="group p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
        <div className="p-5 sm:p-8 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  )
}
