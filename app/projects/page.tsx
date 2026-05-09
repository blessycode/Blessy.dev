"use client"

import { useState } from "react"
import {
  Globe,
  Smartphone,
  Code2,
  ExternalLink,
  Github,
  Calendar,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { allProjects, type Project, type ProjectKind } from "@/components/projects"
import { PhonePreview } from "@/components/phone-preview"
import { CodePreview } from "@/components/code-preview"

function inferKind(project: Project): ProjectKind {
  if (project.kind) return project.kind
  const t = project.tags.map((x) => x.toLowerCase()).join(" ")
  if (
    t.includes("flutter") ||
    t.includes("mobile") ||
    t.includes("android") ||
    t.includes("ios")
  )
    return "mobile"
  if (project.codeSnippet && !project.demoUrl) return "code"
  return "web"
}

const kindLabel: Record<ProjectKind, string> = {
  web: "Web App",
  mobile: "Mobile App",
  code: "Code Project",
}

const kindIcon: Record<ProjectKind, typeof Globe> = {
  web: Globe,
  mobile: Smartphone,
  code: Code2,
}

const dotColors = [
  "bg-emerald-400",
  "bg-cyan-400",
  "bg-violet-400",
  "bg-amber-400",
  "bg-rose-400",
  "bg-blue-400",
  "bg-pink-400",
]

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = allProjects[activeIndex]
  const activeKind = inferKind(active)
  const ActiveIcon = kindIcon[activeKind]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pb-32">
        {/* Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl bg-[var(--accent-coral-soft)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-24 lg:pt-28">
          {/* Header */}
          <div className="flex items-start justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-border rounded-full text-xs font-mono text-muted-foreground">
                <span className="text-primary">//</span> PROJECTS
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Show me the{" "}
                <span className="gradient-cyan-magenta">code</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-3 max-w-lg">
                Web apps, mobile apps, and code previewed live, mocked up, or
                shown directly.
              </p>
            </div>
            <a
              href="https://github.com/blessycode"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/40 hover:text-primary transition-all shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              Visit my GitHub
            </a>
          </div>

          {/* Split view */}
          <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-6">
            {/* Project list */}
            <div className="space-y-3 lg:max-h-[75vh] lg:overflow-y-auto lg:pr-2">
              {allProjects.map((project, index) => {
                const kind = inferKind(project)
                const Icon = kindIcon[kind]
                const isActive = index === activeIndex
                const dotColor = dotColors[index % dotColors.length]

                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isActive
                        ? "bg-primary/5 border-primary/50 shadow-soft-lg"
                        : "bg-card/40 border-border hover:border-border hover:bg-card/80"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${dotColor}`}
                        />
                        <h3
                          className={`font-semibold truncate ${
                            isActive ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>
                      <Icon className="w-4 h-4 text-muted-foreground shrink-0" />
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground pl-4">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.date?.split(" to ").pop() || ""}
                      </span>
                      <span>&middot;</span>
                      <span>{kindLabel[kind]}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Preview pane */}
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl overflow-hidden flex flex-col">
              {/* Preview header (varies per kind) */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-card/60 border border-border text-xs font-mono text-muted-foreground">
                  <ActiveIcon className="w-3.5 h-3.5 text-primary" />
                  {kindLabel[activeKind]}
                </div>
                {activeKind === "web" && (
                  <div className="flex-1 px-3 py-1 bg-background border border-border rounded-md text-xs font-mono text-muted-foreground truncate">
                    {active.demoUrl || active.codeUrl || "https://example.com"}
                  </div>
                )}
                {activeKind !== "web" && <div className="flex-1" />}
                {active.demoUrl && activeKind === "web" && (
                  <a
                    href={active.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
                    aria-label="Open in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Preview content */}
              <div className="relative aspect-[16/10] bg-background">
                {activeKind === "web" && active.demoUrl && (
                  <iframe
                    key={active.demoUrl}
                    src={active.demoUrl}
                    title={active.title}
                    className="w-full h-full"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    loading="lazy"
                  />
                )}
                {activeKind === "web" && !active.demoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                    No live preview available for this project.
                  </div>
                )}
                {activeKind === "mobile" && (
                  <PhonePreview
                    screenshots={active.screenshots}
                    title={active.title}
                  />
                )}
                {activeKind === "code" && active.codeSnippet && (
                  <CodePreview snippet={active.codeSnippet} />
                )}
                {activeKind === "code" && !active.codeSnippet && (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                    No code snippet available.
                  </div>
                )}
              </div>

              {/* Project info */}
              <div className="p-6 border-t border-border space-y-4">
                <div>
                  <h2 className="font-display text-xl font-bold mb-2">
                    {active.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {active.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-muted/60 border border-border rounded-md text-xs font-medium text-foreground font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {active.codeUrl && (
                    <a
                      href={active.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/40 hover:text-primary transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  )}
                  {active.demoUrl && (
                    <a
                      href={active.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
