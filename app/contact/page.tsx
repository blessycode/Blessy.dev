"use client"

import { useState } from "react"
import {
  BookOpen,
  CheckCircle,
  Github,
  Linkedin,
  MapPin,
  Send,
  Twitter,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { GmailIcon } from "@/components/icons/gmail"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/blessycode",
    icon: Github,
    username: "@blessycode",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/blessed-zhou-56b3b029b",
    icon: Linkedin,
    username: "Blessed Zhou",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/bless13210",
    icon: Twitter,
    username: "@bless13210",
  },
  {
    name: "Gmail",
    href: "mailto:zhoublessed16@gmail.com",
    icon: GmailIcon,
    username: "zhoublessed16@gmail.com",
  },
  {
    name: "Blog",
    href: "https://medium.com/@blessycode",
    icon: BookOpen,
    username: "medium.com/@blessycode",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen bg-background pb-32 overflow-hidden">
        {/* Background glows */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl bg-[var(--accent-coral-soft)]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-24 lg:pt-28">
          {/* Header */}
          <div className="mb-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 border border-border rounded-full text-xs font-mono text-muted-foreground">
              <span className="text-primary">//</span> CONTACT
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Let&apos;s build something{" "}
              <span className="gradient-cyan-magenta">great</span>.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Have a project in mind, want to collaborate, or just want to say
              hi? Drop a message below or reach out on any channel.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
            {/* Contact form */}
            <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/70 shadow-soft-lg">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto shadow-soft">
                    <CheckCircle className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold">
                    Message sent
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Thanks for reaching out. I&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm text-primary hover:underline mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background/60 border border-border/80 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background/60 border border-border/80 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-background/60 border border-border/80 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-background/60 border border-border/80 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-soft-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 text-sm">
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-sm">
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Side info */}
            <div className="space-y-4">
              {/* Availability */}
              <div className="bg-gradient-to-br from-primary/15 to-primary/[0.03] rounded-2xl p-5 border border-primary/25 shadow-soft-lg">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <span className="font-semibold text-primary text-sm">
                    Available for hire
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Open to new opportunities, freelance projects and
                  collaborations.
                </p>
              </div>

              {/* Location */}
              <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-5 border border-border/70 shadow-soft">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-soft">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm mb-0.5">Location</h3>
                    <p className="text-xs text-muted-foreground">
                      Harare, Zimbabwe
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">
                      Remote-friendly worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Channels */}
              <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-5 border border-border/70 shadow-soft">
                <h3 className="font-semibold text-sm mb-3">Channels</h3>
                <div className="space-y-1.5">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        s.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-3 p-2 rounded-lg hover:bg-muted/60 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/70 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors shadow-soft">
                        <s.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold group-hover:text-primary transition-colors">
                          {s.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground truncate font-mono">
                          {s.username}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
