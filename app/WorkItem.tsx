export default function WorkItemComponent({
  company,
  role,
  period,
  highlights,
}: {
  company: string
  role: string
  period: string
  highlights: string[]
}) {
  return (
    <div className="relative border-l-2 border-primary/20 pl-4 sm:pl-6 py-2 group hover:border-primary/50 transition-colors duration-500">
      {/* Glow dot */}
      <div className="absolute -left-[5px] top-6 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(167,139,250,0.8)] opacity-50 group-hover:opacity-100 transition-opacity" />

      <div className="mb-4">
        <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">{role}</h3>
        <div className="flex flex-wrap items-center gap-x-3 text-sm mt-1">
          <p className="text-primary/80 font-semibold">{company}</p>
          <span className="text-muted-foreground/30 hidden sm:inline">•</span>
          <p className="text-muted-foreground font-mono text-xs">{period}</p>
        </div>
      </div>
      <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex gap-3 items-start">
            <span className="text-primary/60 mt-1.5 text-xs">◆</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
