export type ProjectKind = "web" | "mobile" | "code"

export interface CodeSnippet {
  language: string
  filename: string
  code: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  /** Explicit project kind. Falls back to "web" if omitted. */
  kind?: ProjectKind
  /** Hero image (used as fallback or banner). */
  image?: string
  /** Mobile app screenshots, shown inside a phone frame. */
  screenshots?: string[]
  /** Code snippet for code-only projects (no live demo). */
  codeSnippet?: CodeSnippet
  /**
   * Whether the demoUrl can be embedded in an iframe. Some hosts
   * (Streamlit Cloud, Heroku, etc.) send X-Frame-Options: DENY which
   * blocks the embed. Default true; set to false to render a poster
   * fallback with a "Launch Demo" CTA instead.
   */
  iframeAllowed?: boolean
  accentColor?: string
  date?: string
  codeUrl?: string
  demoUrl?: string
}

export const allProjects: Project[] = [
  {
    title: "Customer Churn Predictor",
    description:
      "Built an end-to-end ML pipeline reducing churn by 23%. Features real-time scoring and a predictive insights dashboard.",
    tags: ["Python", "RandomForest", "FastAPI", "Streamlit"],
    kind: "web",
    image: "/project-images/churn-predictor.png",
    accentColor: "#7c3aed",
    date: "Jan 2024 to March 2024",
    codeUrl: "https://github.com/blessycode/customer-churn/tree/main",
    demoUrl: "https://customerchurntelcho.streamlit.app/",
  },
  {
    title: "Automated Data Cleaning",
    description:
      "Reproducible data preparation suite with async FastAPI. Automatically profiles and cleans datasets for ML-ready output.",
    tags: ["FastAPI", "React", "pandas", "scikit-learn"],
    kind: "web",
    image: "/project-images/data-cleaning.png",
    accentColor: "#0891b2",
    date: "March 2024 to June 2024",
    codeUrl: "https://github.com/blessycode/data-cleaning-pipelines",
    demoUrl: "https://github.com/blessycode/data-cleaning-pipelines",
  },
  {
    title: "CV Rider",
    description:
      "Type-safe CV / resume generator built with Next.js and TypeScript. Supports on-demand PDF generation with professional templates.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    kind: "web",
    image: "/project-images/vision-classifier.png",
    accentColor: "#059669",
    date: "Oct 2024 to Dec 2024",
    codeUrl: "https://github.com/blessycode/CVRider",
    demoUrl: "https://cv-rider.vercel.app",
  },
  {
    title: "NLP Sentiment Dashboard",
    description:
      "Real-time sentiment analysis on large-scale customer feedback. Leverages spaCy for deep linguistic processing and Plotly for rich visualizations.",
    tags: ["NLP", "Streamlit", "spaCy", "Plotly"],
    kind: "web",
    accentColor: "#d97706",
    date: "July 2024 to Sept 2024",
    codeUrl: "https://github.com/yourusername/sentiment-dashboard",
    demoUrl: "https://sentiment-dashboard-demo.vercel.app",
  },
  {
    title: "Recommendation Engine",
    description:
      "High-performance collaborative filtering system handling 500k+ concurrent requests with sub-100ms latency, powered by TensorFlow and Redis caching.",
    tags: ["TensorFlow", "Redis", "Docker", "Go"],
    kind: "code",
    accentColor: "#9333ea",
    date: "Aug 2024 to Nov 2024",
    codeUrl: "https://github.com/yourusername/recommendation-engine",
    codeSnippet: {
      language: "python",
      filename: "recommender.py",
      code: `import tensorflow as tf
from redis import Redis

cache = Redis(host="localhost", port=6379, decode_responses=True)

class CollaborativeFilter(tf.keras.Model):
    def __init__(self, n_users, n_items, dim=64):
        super().__init__()
        self.user_emb = tf.keras.layers.Embedding(n_users, dim)
        self.item_emb = tf.keras.layers.Embedding(n_items, dim)

    def call(self, inputs):
        u, i = inputs
        return tf.reduce_sum(self.user_emb(u) * self.item_emb(i), axis=-1)


def recommend(user_id: int, top_k: int = 10) -> list[int]:
    if cached := cache.get(f"rec:{user_id}"):
        return [int(x) for x in cached.split(",")]
    scores = model.predict_top_k(user_id, top_k)
    cache.setex(f"rec:{user_id}", 3600, ",".join(map(str, scores)))
    return scores
`,
    },
  },
]
