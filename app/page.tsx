import Image from "next/image"
import { Navigation } from "@/components/navigation"

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
            {/* Profile photo with glowing ring */}
            <div className="relative justify-self-center lg:justify-self-end">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl" />
                <div className="profile-glow relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Blessed Zhou"
                    fill
                    className="object-cover"
                    priority
                  />
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
