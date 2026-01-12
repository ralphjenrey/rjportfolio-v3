"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  const [theme, setTheme] = useState<string>("default")

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    
    const root = document.documentElement
    
    // Color map using OKLCH format (lightness, chroma, hue)
    const colorMap: Record<string, string> = {
      pink: "oklch(0.75 0.20 330)",
      blue: "oklch(0.65 0.20 250)",
      red: "oklch(0.65 0.25 25)",
      green: "oklch(0.65 0.20 145)",
      purple: "oklch(0.65 0.25 290)",
      orange: "oklch(0.70 0.20 50)",
      yellow: "oklch(0.80 0.18 95)",
      cyan: "oklch(0.70 0.15 200)",
      rose: "oklch(0.70 0.22 15)",
      slate: "oklch(0.60 0.05 250)",
      teal: "oklch(0.75 0.15 180)",
    }
    
    if (newTheme === "dark") {
      root.classList.add("dark")
      // Reset to dark theme colors
      root.style.setProperty("--background", "oklch(0.13 0.01 250)")
      root.style.setProperty("--foreground", "oklch(0.95 0 0)")
      root.style.setProperty("--card", "oklch(0.17 0.01 250)")
      root.style.setProperty("--card-foreground", "oklch(0.95 0 0)")
      root.style.setProperty("--primary", "oklch(0.75 0.15 180)")
      root.style.setProperty("--primary-foreground", "oklch(0.13 0.01 250)")
      root.style.setProperty("--secondary", "oklch(0.22 0.01 250)")
      root.style.setProperty("--secondary-foreground", "oklch(0.95 0 0)")
      root.style.setProperty("--muted", "oklch(0.25 0.01 250)")
      root.style.setProperty("--muted-foreground", "oklch(0.65 0 0)")
      root.style.setProperty("--border", "oklch(0.28 0.01 250)")
    } else if (newTheme === "light") {
      root.classList.remove("dark")
      // Set light theme colors
      root.style.setProperty("--background", "oklch(0.98 0 0)")
      root.style.setProperty("--foreground", "oklch(0.15 0.01 250)")
      root.style.setProperty("--card", "oklch(1 0 0)")
      root.style.setProperty("--card-foreground", "oklch(0.15 0.01 250)")
      root.style.setProperty("--primary", "oklch(0.50 0.15 180)")
      root.style.setProperty("--primary-foreground", "oklch(0.98 0 0)")
      root.style.setProperty("--secondary", "oklch(0.92 0.01 250)")
      root.style.setProperty("--secondary-foreground", "oklch(0.15 0.01 250)")
      root.style.setProperty("--muted", "oklch(0.92 0.01 250)")
      root.style.setProperty("--muted-foreground", "oklch(0.45 0 0)")
      root.style.setProperty("--border", "oklch(0.85 0.01 250)")
    } else if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (systemTheme) {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    } else {
      // Handle color themes
      const colorValue = colorMap[newTheme.toLowerCase()] || colorMap.teal
      root.style.setProperty("--primary", colorValue)
      root.style.setProperty("--accent", colorValue)
      root.style.setProperty("--ring", colorValue)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection theme={theme} />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
      <Chatbot onThemeChange={handleThemeChange} />
    </main>
  )
}
