import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { FileSearch, Github } from "lucide-react";

const techTags = [
  "Python",
  "R",
  "SQL",
  "Pandas",
  "NumPy",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "MLflow",
  "Docker",
  "FastAPI",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Airflow",
  "Power BI",
  "Azure",
];

type GitHubEvent = {
  type: string;
  created_at: string;
  payload?: {
    commits?: unknown[];
  };
};

async function getGitHubCommitDays() {
  const days = Array.from({ length: 21 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (20 - index));

    return {
      key: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString("en", {
        month: "short",
        day: "numeric",
      }),
      count: 0,
    };
  });

  try {
    const response = await fetch(
      "https://api.github.com/users/blessycode/events/public",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "blessy-dev-portfolio",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return days;
    }

    const events = (await response.json()) as GitHubEvent[];
    const dayMap = new Map(days.map((day) => [day.key, day]));

    for (const event of events) {
      if (event.type !== "PushEvent") continue;

      const key = event.created_at.slice(0, 10);
      const day = dayMap.get(key);

      if (day) {
        day.count += event.payload?.commits?.length ?? 0;
      }
    }
  } catch {
    return days;
  }

  return days;
}

async function GitHubCommitActivity() {
  const days = await getGitHubCommitDays();
  const maxCommits = Math.max(...days.map((day) => day.count), 1);
  const totalCommits = days.reduce((total, day) => total + day.count, 0);
  const commitLabel = totalCommits === 1 ? "commit" : "commits";

  return (
    <div className="mx-auto w-full max-w-xl rounded-lg border border-primary/20 bg-card/60 p-3 shadow-soft backdrop-blur lg:mx-0">
      <div className="mb-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-left">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Github className="h-4 w-4" />
          </span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              GitHub activity
            </p>
            <p className="text-[0.95rem] font-semibold text-foreground">
              {totalCommits} recent public {commitLabel}
            </p>
          </div>
        </div>
        <a
          href="https://github.com/blessycode"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-border bg-background/40 px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:inline-flex"
        >
          @blessycode
        </a>
      </div>

      <div
        className="grid h-16 items-end gap-1.5 sm:h-20"
        style={{
          gridTemplateColumns: `repeat(${days.length}, minmax(0, 1fr))`,
        }}
        aria-label="Recent GitHub commits"
      >
        {days.map((day) => {
          const height =
            day.count === 0 ? 10 : 18 + (day.count / maxCommits) * 70;

          return (
            <div
              key={day.key}
              className="group relative flex h-full items-end justify-center"
            >
              <div
                className={`w-1.5 rounded-sm transition-all group-hover:opacity-100 sm:w-2 ${
                  day.count > 0
                    ? "bg-gradient-to-t from-primary to-[var(--accent-coral)] opacity-90"
                    : "bg-muted opacity-70"
                }`}
                style={{ height: `${height}%` }}
              />
              <span className="pointer-events-none absolute -top-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-[11px] text-popover-foreground shadow-soft group-hover:block">
                {day.count} on {day.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative h-dvh min-h-dvh overflow-hidden bg-background">
        {/* Subtle background glows */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl bg-[var(--accent-coral-soft)]" />
        </div>

        {/* Hero / About combined */}
        <section className="relative flex h-full items-start px-4 pb-28 pt-16 sm:px-6 sm:pt-20 lg:items-center lg:px-12 lg:pt-24">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-5 sm:gap-7 lg:grid-cols-[auto_1fr] lg:gap-14">
            {/* Profile status card */}
            <div className="relative justify-self-center lg:justify-self-end w-full max-w-[20rem] sm:max-w-sm">
              <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-card/70 shadow-soft-lg backdrop-blur">
                <div className="relative flex min-h-48 sm:min-h-60 items-center justify-center border-b border-border/70 bg-gradient-to-b from-primary/5 to-transparent">
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
                        AI Audit Assistant
                      </p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                      <FileSearch className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 rounded-lg bg-background/40 p-4 min-[420px]:grid-cols-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Focus
                      </p>
                      <p className="mt-2 text-xs font-semibold leading-relaxed text-foreground sm:text-sm">
                        Audit Automation
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Stack
                      </p>
                      <p className="mt-2 text-xs font-semibold leading-relaxed text-foreground sm:text-sm">
                        Next.js / FastAPI
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Engine
                      </p>
                      <p className="mt-2 text-xs font-semibold leading-relaxed text-foreground sm:text-sm">
                        ML + Documents
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/70 pt-4">
                    <p className="text-xs text-muted-foreground">
                      Remote contracts, consulting, and product collaborations
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
            <div className="max-w-2xl space-y-3 text-center sm:space-y-4 lg:text-left">
              {/* Role badge */}
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary sm:px-4 sm:text-sm">
                Data Scientist | ML Engineer | Full-Stack Developer
              </div>

              {/* Headline */}
              <div className="mx-auto max-w-xl font-display font-bold leading-[1.06] text-balance lg:mx-0">
                <h1 className="text-[2.3rem] text-foreground sm:text-5xl md:text-[3.25rem]">
                  <span className="block">Transforming data</span>
                  <span className="block">into scalable</span>
                </h1>
                <h1 className="text-[2.3rem] gradient-cyan-magenta sm:text-5xl md:text-[3.25rem]">
                  digital solutions.
                </h1>
              </div>

              {/* Short bio */}
              <p className="mx-auto max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground text-pretty sm:text-[1.05rem] md:text-lg lg:mx-0">
                Hi, I&apos;m{" "}
                <span className="text-primary font-semibold">Blessed Zhou</span>
                . I build intelligent products across analytics, machine
                learning, and full-stack software, turning complex data into
                practical systems with Python, PyTorch, TensorFlow, and
                TypeScript.
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap justify-center gap-1.5 lg:justify-start">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card/70 px-2.5 py-1 font-mono text-xs text-foreground/90 shadow-soft md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <GitHubCommitActivity />
            </div>
          </div>
        </section>

        {/* Tagline footer */}
        <p className="absolute bottom-24 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 text-center font-mono text-xs tracking-wide text-muted-foreground/70 md:w-auto md:whitespace-nowrap md:text-sm md:tracking-wider">
          Building useful systems from data, code, and careful engineering.
        </p>
      </main>
    </>
  );
}
