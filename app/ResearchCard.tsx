import { FileText, ExternalLink, GraduationCap } from "lucide-react"

export default function ResearchCard({
    title,
    authors,
    venue,
    year,
    abstract,
    url,
    tags
}: {
    title: string
    authors: string
    venue: string
    year: string
    abstract: string
    url?: string
    tags: string[]
}) {
    return (
        <div className="group relative bg-card/10 backdrop-blur-xl rounded-2xl transition-all duration-700 hover-lift glow-card gradient-border overflow-hidden flex flex-col h-full border border-white/5">
            {/* HUD Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-secondary/40" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-secondary/40" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-secondary/40" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-secondary/40" />

            <div className="flex-1 p-5 sm:p-8 flex flex-col relative z-20">
                <div className="mb-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-2 py-0.5 bg-secondary/20 border border-secondary/30 rounded text-[9px] font-mono font-bold tracking-[0.2em] text-secondary">ARCHIVE_DOC_SRL</div>
                        <div className="h-px flex-1 bg-gradient-to-r from-secondary/30 to-transparent" />
                        <span className="text-[10px] font-mono text-secondary/60">{year}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-all duration-500 tracking-tight leading-tight">
                        {title}
                    </h3>

                    <div className="flex items-center gap-2 mb-4 text-xs font-mono text-muted-foreground/60 italic">
                        <GraduationCap className="w-3 h-3" />
                        <span>{authors}</span>
                    </div>

                    <div className="mb-4">
                        <span className="text-[10px] font-mono uppercase bg-white/5 px-2 py-1 rounded border border-white/5 text-muted-foreground/80">
                            {venue}
                        </span>
                    </div>

                    <p className="text-muted-foreground/80 mb-8 text-xs leading-relaxed line-clamp-3">
                        {abstract}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 bg-white/5 text-secondary/60 border border-white/10 rounded text-[9px] font-mono font-bold uppercase tracking-wider backdrop-blur-md"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {url && (
                    <div className="pt-6 border-t border-white/5">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 text-[10px] font-black font-mono tracking-widest text-muted-foreground hover:text-secondary transition-all duration-300"
                        >
                            <FileText className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                            DOWNLOAD_PREPRINT
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
