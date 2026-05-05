export interface EducationItem {
  institution: string
  degree: string
  period: string
  highlights?: string[]
}

export const educationData: EducationItem[] = [
  {
    institution: "University of Zimbabwe",
    degree: "Bachelor of Science in Data Science and Systems",
    period: "2020 - 2024",
    highlights: [
      "Specialized in Machine Learning and Data Science",
      "Graduated with honors",
      "Relevant coursework: Statistics, Linear Algebra, Data Structures, Deep Learning, Database Systems",
    ],
  },

]

export function Education() {
  return (
    <div className="space-y-6">
      {educationData.map((edu, index) => (
        <div key={index} className="border-l-2 border-primary/30 pl-4 sm:pl-6 py-1">
          <div className="mb-2">
            <h3 className="text-lg sm:text-xl font-bold">{edu.degree}</h3>
            <p className="text-primary/80 font-semibold text-sm">{edu.institution}</p>
            <p className="text-muted-foreground font-mono text-xs mt-1">{edu.period}</p>
          </div>
          {edu.highlights && (
            <ul className="space-y-2 text-sm text-muted-foreground">
              {edu.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-primary/60 mt-1.5 text-xs">◆</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

