import { ExternalLink, Code } from "lucide-react"

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  accentColor,
  date,
  codeUrl,
  demoUrl,
}: {
  title: string
  description: string
  tags: string[]
  image?: string
  accentColor?: string
  date?: string
  codeUrl?: string
  demoUrl?: string
}) {
  const accent = accentColor ?? "#7c3aed"

  return (
    <div className="group relative rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Image / Banner area */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          background: image
            ? `${accent}22`
            : `linear-gradient(135deg, ${accent}33, ${accent}11)`,
          height: "180px",
        }}
      >
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black opacity-40"
              style={{ background: `${accent}33`, color: accent }}
            >
              {title[0]}
            </div>
          </div>
        )}
        {/* Subtle overlay gradient at bottom of image */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(15,15,20,0.9))",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 bg-card/80 backdrop-blur-sm">
        <h3 className="text-base font-semibold text-foreground mb-1 leading-snug group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        {date && (
          <p className="text-xs text-muted-foreground/60 mb-3 font-medium">{date}</p>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium border"
              style={{
                background: `${accent}15`,
                borderColor: `${accent}40`,
                color: accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(codeUrl || demoUrl) && (
          <div className="flex gap-3 pt-3 border-t border-white/5">
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Code className="w-3.5 h-3.5" />
                Code
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium hover:opacity-80 transition-opacity font-semibold"
                style={{ color: accent }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
