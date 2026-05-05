import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Smartphone } from "lucide-react"

const techTags = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "FastAPI",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Pandas",
  "LangChain",
  "MLflow",
  "Airflow",
  "Azure",
  "React",
  "SQL",
]

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen bg-background overflow-hidden">
        {/* Subtle background glows */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl bg-[var(--accent-coral-soft)]" />
        </div>

        {/* Hero / About combined */}
        <section className="relative px-6 lg:px-12 pt-24 lg:pt-28 pb-32 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-center">
            {/* Profile status card */}
            <div className="relative justify-self-center lg:justify-self-end w-full max-w-sm">
              <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-card/70 shadow-soft-lg backdrop-blur">
                <div className="relative flex min-h-60 items-center justify-center border-b border-border/70 bg-gradient-to-b from-primary/5 to-transparent">
                  <div className="absolute inset-0 code-grid-bg opacity-30" />
                  <div className="absolute h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                  <div className="profile-glow relative h-32 w-32 overflow-hidden rounded-full sm:h-36 sm:w-36">
                    <Image
                      src="/profile.png"
                      alt="Blessed Zhou"
                      fill
                      sizes="144px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="relative space-y-5 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                        Currently working on
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        Kura Nhaka Mobile App
                      </p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                      <Smartphone className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 rounded-lg bg-background/40 p-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Focus
                      </p>
                      <p className="mt-2 text-xs font-semibold leading-relaxed text-foreground sm:text-sm">
                        Mobile Apps &amp; Chatbots
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Stack
                      </p>
                      <p className="mt-2 text-xs font-semibold leading-relaxed text-foreground sm:text-sm">
                        Flutter / Python
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Region
                      </p>
                      <p className="mt-2 text-xs font-semibold leading-relaxed text-foreground sm:text-sm">
                        International
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/70 pt-4">
                    <p className="text-xs text-muted-foreground">
                      Available for remote contracts &amp; consulting
                    </p>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Open
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="space-y-7 max-w-2xl">
              {/* Role badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/40 rounded-full bg-primary/5 text-primary text-sm font-mono">
                Data Scientist &amp; ML Engineer
              </div>

              {/* Headline */}
              <div className="font-display font-bold leading-[1.05] text-balance">
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-foreground">
                  Talk is cheap.
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl gradient-cyan-magenta">
                  Show me the code.
                </h1>
              </div>

              {/* Short bio */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                Hi, I&apos;m{" "}
                <span className="text-primary font-semibold">Blessed Zhou</span>
                . 5+ years building production-ready ML systems, predictive
                models, and data-driven products across Python, PyTorch,
                TensorFlow and TypeScript &mdash; designing systems that are
                scalable, reliable, and intentionally engineered.
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-card/70 border border-border rounded-full text-xs md:text-sm text-foreground/90 font-mono shadow-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tagline footer */}
        <p className="absolute bottom-28 left-1/2 -translate-x-1/2 text-xs md:text-sm text-muted-foreground/70 font-mono tracking-wider whitespace-nowrap">
          Building the future, one commit at a time
        </p>
      </main>
    </>
  )
}
