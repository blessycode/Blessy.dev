import { Briefcase, Trophy, GraduationCap, Building2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { competitionsData } from "@/components/competitions"
import { educationData } from "@/components/education"

interface ExperienceItem {
  company: string
  role: string
  period: string
  status: "current" | "past"
  summary: string
  tech: string[]
  bullets: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "Freelance / Independent",
    role: "Data Scientist & ML Engineer",
    period: "2024 to Present",
    status: "current",
    summary:
      "Building production-grade ML systems across credit risk, NLP, and predictive analytics for clients across multiple sectors.",
    tech: ["Python", "PyTorch", "FastAPI", "Docker", "PostgreSQL"],
    bullets: [
      "Shipped end-to-end credit risk models with FastAPI deployment and drift monitoring.",
      "Built automated data cleaning pipelines reducing manual prep time by 80%.",
      "Designed scalable ML architectures for real-time inference at production load.",
    ],
  },
  {
    company: "International Data Analytics Consultancy (IDAC)",
    role: "Data Analyst Intern",
    period: "2022 to 2023",
    status: "past",
    summary:
      "Developed machine learning models for credit risk assessment and built analytics solutions for financial clients.",
    tech: ["Python", "Scikit-learn", "Pandas", "SQL", "Power BI"],
    bullets: [
      "Designed custom SMOTE variations for imbalanced financial datasets.",
      "Built credit risk models meeting predictive accuracy and compliance standards.",
      "Delivered Power BI dashboards translating ML output into business insights.",
    ],
  },
]

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pb-32">
        {/* Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-24 lg:pt-32">
          {/* Header */}
          <div className="mb-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-border rounded-full text-xs font-mono text-muted-foreground">
              <span className="text-primary">//</span> EXPERIENCE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Experience
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A track record of building data and ML systems from concept to
              deployment across financial services, analytics, and
              real-world AI problems.
            </p>
          </div>

          {/* Work Experience Timeline */}
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Briefcase className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-bold">Work</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <article
                  key={index}
                  className="group relative bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/40 transition-all"
                >
                  {/* Status dot */}
                  <span
                    className={`absolute top-7 left-0 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-background ${
                      exp.status === "current"
                        ? "bg-primary shadow-[0_0_12px_oklch(0.82_0.15_158_/_0.6)]"
                        : "bg-muted-foreground"
                    }`}
                  />

                  <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
                    {/* Left side */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold leading-tight">
                            {exp.company}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {exp.role} &middot; {exp.period}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.summary}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-muted/60 border border-border rounded-full text-xs font-medium text-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right side - bullets */}
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="text-primary mt-1.5 shrink-0">
                            <span className="block w-1.5 h-1.5 rounded-full bg-primary" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {educationData.map((edu, index) => (
                <article
                  key={index}
                  className="group bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-base font-bold leading-tight group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {edu.institution}
                  </p>
                  {edu.highlights && (
                    <ul className="space-y-2">
                      {edu.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-xs text-muted-foreground leading-relaxed"
                        >
                          <span className="text-primary mt-1 shrink-0">
                            <span className="block w-1 h-1 rounded-full bg-primary" />
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Competitions */}
          <section>
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                <Trophy className="w-3 h-3" /> Hackathons
              </div>
              <h2 className="text-3xl font-bold mb-3">Competition Experience</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Showcasing my participation in national and international ML
                competitions, where I&apos;ve collaborated, innovated, and competed
                with talented developers from around the world.
              </p>
            </div>

            <div className="space-y-5">
              {competitionsData.map((c, index) => (
                <article
                  key={index}
                  className="group bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-lg font-bold leading-tight">
                        {c.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {c.organizer}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground shrink-0">
                      {c.date}
                    </span>
                  </div>

                  {(c.position || c.participants) && (
                    <p className="text-sm font-semibold text-foreground mt-4 mb-2">
                      {c.position}
                      {c.position && c.participants && (
                        <span className="text-muted-foreground font-normal">
                          {" "}
                          &middot; {c.participants}+ participants
                        </span>
                      )}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {c.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {c.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-muted/60 border border-border rounded-full text-xs font-medium text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
