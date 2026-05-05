import Link from "next/link"
import { BookOpen, Github, Linkedin, Twitter } from "lucide-react"
import { GmailIcon } from "@/components/icons/gmail"

const socialLinks = [
  { href: "https://github.com/blessycode", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/blessed-zhou-56b3b029b", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/bless13210", icon: Twitter, label: "X (Twitter)" },
  { href: "mailto:zhoublessed16@gmail.com", icon: GmailIcon, label: "Gmail" },
  { href: "https://medium.com/@blessycode", icon: BookOpen, label: "Blog" },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Blessed<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Data Scientist & ML Engineer building intelligent systems that turn complex data into practical software.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Blessed Zhou. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
