export interface CompetitionItem {
  name: string
  organizer: string
  date: string
  field: string
  position?: string
  participants?: number
  tools: string[]
  description: string
}

export const competitionsData: CompetitionItem[] = [
  {
    name: "Claxon Data Science Challenge: Loan Default Risk Prediction",
    organizer: "Claxon Actuaries",
    date: "2024",
    field: "Data Science / Machine Learning / AI",
    position: "5th Place in Zimbabwe",
    participants: 140,
    tools: ["Python", "Scikit-learn", "XGBoost", "FastAPI", "Imbalanced-learn", "Pandas"],
    description: "Developed an end-to-end credit risk prediction system using machine learning, including data preprocessing, PD modeling, API deployment with FastAPI, and data drift monitoring.",
  },
]

export function Competitions() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-8 text-sm text-pretty max-w-xl leading-relaxed">
        Participating in hackathons and competitions has been a great way to push my limits, learn new technologies, and solve real-world problems under time constraints.
      </p>
      <div className="space-y-6">
        {competitionsData.map((competition, index) => (
          <div key={index} className="group p-5 sm:p-8 bg-card/10 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-primary/30 transition-all glow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors leading-tight">{competition.name}</h3>
              <span className="text-xs font-mono text-primary/60 bg-primary/5 px-2 py-1 rounded border border-primary/20 self-start">{competition.date}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
              <div className="space-y-1">
                <p className="text-primary/80 font-semibold">{competition.organizer}</p>
                <p className="text-muted-foreground/60 text-xs font-mono tracking-tight">{competition.field}</p>
              </div>
              <div className="space-y-1 sm:text-right">
                {competition.position && (
                  <p className="text-primary font-bold">Position: {competition.position}</p>
                )}
                {competition.participants && (
                  <p className="text-muted-foreground/40 text-xs">Participants: {competition.participants.toLocaleString()}</p>
                )}
              </div>
            </div>

            <p className="text-muted-foreground mb-6 text-sm text-pretty leading-relaxed font-medium">{competition.description}</p>

            <div className="flex flex-wrap gap-2.5">
              {competition.tools.map((tool) => (
                <span key={tool} className="px-3 py-1 bg-white/5 text-primary/60 border border-white/10 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

