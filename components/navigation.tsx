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
  Twitter,
  BookOpen,
} from "lucide-react"
import { GmailIcon } from "@/components/icons/gmail"

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
    icon: Twitter,
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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 px-3 py-2 bg-card/85 backdrop-blur-2xl border border-border/80 rounded-full shadow-soft-lg">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`group relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full transition-all ${
                isActive
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={label}
            >
              <Icon className="w-4 h-4" strokeWidth={2.25} />
              <span className="text-[10px] font-medium leading-none tracking-wide">
                {label}
              </span>
            </Link>
          )
        })}

        <div className="w-px h-8 bg-border mx-1" />

        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="p-2.5 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
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
