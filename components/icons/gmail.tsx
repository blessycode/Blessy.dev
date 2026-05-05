import type { SVGProps } from "react"

/**
 * Minimal, lucide-style Gmail glyph: an envelope outline with the
 * iconic Gmail "M" inside. Uses currentColor + strokeWidth, so it
 * inherits sizing and color from the surrounding text just like the
 * rest of the lucide icons.
 */
export function GmailIcon({
  strokeWidth = 2,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Envelope */}
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      {/* Gmail "M" */}
      <path d="M3 7.5l9 6 9-6" />
      <path d="M7 19V11.2" />
      <path d="M17 19V11.2" />
    </svg>
  )
}
