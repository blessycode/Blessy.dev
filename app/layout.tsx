import type React from "react"
import type { Metadata } from "next"
import { Inter_Tight, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://blessy-io.vercel.app/"),
  title: {
    default: "Blessed Zhou - Data Scientist & ML Engineer",
    template: "%s | Blessed Zhou",
  },
  description:
    "Data Scientist & ML Engineer specializing in machine learning, predictive analytics, and building production-ready AI systems. Experience in Python, PyTorch, TensorFlow, and end-to-end ML pipelines.",
  keywords: [
    "Data Scientist",
    "Blessed Zhou",
    "Machine Learning Engineer",
    "ML Engineer",
    "Python",
    "PyTorch",
    "TensorFlow",
    "Data Science",
    "AI",
    "Predictive Analytics",
    "MLOps",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Zimbabwe",
  ],
  authors: [{ name: "Blessed Zhou", url: "https://github.com/blessycode" }],
  creator: "Blessed Zhou",
  publisher: "Blessed Zhou",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Blessed Zhou - Portfolio",
    title: "Blessed Zhou - Data Scientist & ML Engineer",
    description:
      "Data Scientist & ML Engineer specializing in machine learning, predictive analytics, and building production-ready AI systems.",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Blessed Zhou - Data Scientist & ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blessed Zhou - Data Scientist & ML Engineer",
    description:
      "Data Scientist & ML Engineer specializing in machine learning, predictive analytics, and building production-ready AI systems.",
    creator: "@bless13210",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "64x64" },
    ],
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Blessed Zhou",
    jobTitle: "Data Scientist & Machine Learning Engineer",
    description:
      "Data Scientist & ML Engineer specializing in machine learning, predictive analytics, and building production-ready AI systems.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://blessy-io.vercel.app/",
    sameAs: [
      "https://www.linkedin.com/in/blessed-zhou-56b3b029b",
      "https://github.com/blessycode",
      "https://x.com/bless13210",
    ],
    email: "zhoublessed16@gmail.com",
    knowsAbout: [
      "Machine Learning",
      "Data Science",
      "Python",
      "PyTorch",
      "TensorFlow",
      "Deep Learning",
      "Predictive Analytics",
      "MLOps",
      "Natural Language Processing",
      "Computer Vision",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Zimbabwe",
    },
  }

  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body
        className={`${interTight.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
