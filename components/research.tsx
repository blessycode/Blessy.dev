export interface ResearchPaper {
    title: string
    authors: string
    venue: string
    year: string
    abstract: string
    url?: string
    tags: string[]
}

export const researchPapers: ResearchPaper[] = [
    {
        title: "Optimizing Credit Risk Assessment in Emerging Markets using Hybrid SMOTE-XGBoost Architectures",
        authors: "Blessed Zhou, et al.",
        venue: "International Journal of Data Science and Analytics",
        year: "2024",
        abstract: "This study proposes a novel hybrid resampling strategy to address extreme class imbalance in financial credit datasets, achieving a 15% improvement in F1-score over baseline models.",
        tags: ["Financial ML", "Class Imbalance", "XGBoost", "SMOTE"],
        url: "#"
    },
    {
        title: "Automated Feature Engineering for High-Dimensional Genomic Data: A Deep Learning Approach",
        authors: "Blessed Zhou",
        venue: "Data Intelligence Conference (DIC)",
        year: "2023",
        abstract: "Exploring the use of Variational Autoencoders (VAEs) for dimensionality reduction in sparse genomic feature spaces to improve downstream classification accuracy.",
        tags: ["Bioinformatics", "Deep Learning", "VAEs", "Feature Engineering"],
        url: "#"
    }
];
