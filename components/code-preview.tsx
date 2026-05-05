"use client"

import { useState } from "react"
import { Highlight, themes } from "prism-react-renderer"
import { Check, Copy, FileCode2 } from "lucide-react"
import type { CodeSnippet } from "@/components/projects"

interface CodePreviewProps {
  snippet: CodeSnippet
}

export function CodePreview({ snippet }: CodePreviewProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.log("[v0] Copy failed:", err)
    }
  }

  return (
    <div className="relative w-full h-full p-4 sm:p-6 code-grid-bg overflow-auto">
      {/* Soft accent glow */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[var(--accent-coral-soft)] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      {/* Editor card */}
      <div className="relative max-w-2xl mx-auto rounded-xl overflow-hidden border border-border/80 bg-[#0b0f17] shadow-2xl">
        {/* Editor chrome */}
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-white/5 bg-[#0b0f17]/90">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex gap-1.5 shrink-0">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-muted-foreground min-w-0">
              <FileCode2 className="w-3.5 h-3.5 shrink-0 text-primary/80" />
              <span className="truncate">{snippet.filename}</span>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground hover:text-primary hover:bg-white/5 transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-primary" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy
              </>
            )}
          </button>
        </div>

        {/* Highlighted code */}
        <Highlight
          code={snippet.code.trimEnd()}
          language={snippet.language}
          theme={themes.vsDark}
        >
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre
              className="m-0 px-0 py-4 text-[13px] leading-6 overflow-auto bg-transparent font-mono"
              style={{ background: "transparent" }}
            >
              {tokens.map((line, i) => {
                const { key: lineKey, ...lineProps } = getLineProps({ line })
                return (
                  <div
                    key={i}
                    {...lineProps}
                    className="flex hover:bg-white/[0.02] px-4"
                  >
                    <span className="select-none w-8 mr-4 text-right text-muted-foreground/40 tabular-nums shrink-0">
                      {i + 1}
                    </span>
                    <span className="min-w-0">
                      {line.map((token, key) => {
                        const { key: tokenKey, ...tokenProps } = getTokenProps({
                          token,
                        })
                        return <span key={key} {...tokenProps} />
                      })}
                    </span>
                  </div>
                )
              })}
            </pre>
          )}
        </Highlight>

        {/* Status bar */}
        <div className="flex items-center justify-between gap-3 px-4 py-2 border-t border-white/5 bg-white/[0.02] text-[11px] font-mono text-muted-foreground">
          <span className="capitalize">{snippet.language}</span>
          <span className="text-primary/70">
            // showing the code &mdash; not just talking about it
          </span>
        </div>
      </div>
    </div>
  )
}
