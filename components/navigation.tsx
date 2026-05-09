"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Briefcase,
  FolderKanban,
  Mail,
  Github,
  Linkedin,
  BookOpen,
} from "lucide-react"
import { GmailIcon } from "@/components/icons/gmail"

function XIcon({ className }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M13.72 10.62 20.42 3h-1.59l-5.81 6.62L8.37 3H3l7.03 10.02L3 21h1.59l6.15-7 4.91 7H21l-7.28-10.38Zm-2.18 2.48-.71-1L5.16 4.17h2.45l4.57 6.39.71 1 5.95 8.32h-2.45l-4.85-6.78Z" />
    </svg>
  )
}

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/contact", label: "Contact", icon: Mail },
]

const socialLinks = [
  {
    href: "https://github.com/blessycode",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/blessed-zhou-56b3b029b",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://x.com/bless13210",
    label: "X (Twitter)",
    icon: XIcon,
  },
  {
    href: "mailto:zhoublessed16@gmail.com",
    label: "Gmail",
    icon: GmailIcon,
  },
  {
    href: "https://medium.com/@blessycode",
    label: "Blog",
    icon: BookOpen,
  },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-1rem)] max-w-md -translate-x-1/2 sm:bottom-6 sm:w-auto sm:max-w-none">
      <nav className="flex items-center justify-between gap-1 overflow-x-auto rounded-full border border-border/80 bg-card/85 px-2 py-2 shadow-soft-lg backdrop-blur-2xl sm:justify-center sm:overflow-visible sm:px-3">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`group relative flex min-w-10 flex-col items-center gap-0.5 rounded-full px-2 py-1.5 transition-all sm:px-3 ${
                isActive
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={label}
            >
              <Icon className="w-4 h-4" strokeWidth={2.25} />
              <span className="hidden text-[10px] font-medium leading-none tracking-wide min-[420px]:block">
                {label}
              </span>
            </Link>
          )
        })}

        <div className="mx-0.5 h-8 w-px shrink-0 bg-border sm:mx-1" />

        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary sm:p-2.5"
            aria-label={label}
            title={label}
          >
            <Icon className="w-4 h-4" strokeWidth={2.25} />
          </a>
        ))}
      </nav>
    </div>
  )
}
