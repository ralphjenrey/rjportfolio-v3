"use client"

import { useEffect, useState } from "react"
import { Code2, Smartphone, Globe, Database, Brain, Users } from "lucide-react"

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Flutter iOS & Android apps for enterprise and consumer platforms",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Modern web apps with Next.js, React, and Angular architectures",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Scalable APIs with Node.js, Express, Fastify, Flask, and Laravel",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "OpenAI, Google Gemini, AWS Rekognition, and AI-assisted workflows",
  },
  {
    icon: Code2,
    title: "Admin Dashboards",
    description: "Comprehensive management systems with real-time data sync",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description: "Mentoring developers, AGILE/Scrum, cross-functional collaboration",
  },
]

export function AboutSection() {
  const [cardOffsets, setCardOffsets] = useState<number[]>(new Array(highlights.length).fill(0))

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about")
      if (!aboutSection) return

      const rect = aboutSection.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))

      setCardOffsets(
        highlights.map((_, index) => {
          const delay = index * 0.1
          return (progress - delay) * 30
        }),
      )
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="about" className="py-24 px-6 border-t border-border relative">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-primary font-mono text-sm">ABOUT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Full-Stack Engineer & Technical Leader</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a full-stack engineer with 3+ years of experience building and scaling web and mobile applications
                in remote-first, cross-functional teams. Based in Cebu City, Philippines and open to remote
                opportunities worldwide.
              </p>
              <p>
                Expert in Flutter, Next.js, TypeScript, and API-driven architectures. I specialize in integrating AI
                tools to accelerate development, testing, and documentation workflows. Proven leader with strong
                ownership mindset, delivering secure, scalable, and well-documented systems.
              </p>
              <p>
                I've built everything from party booking platforms with real-time chat to AI-powered recipe tools with
                cloud functions, always focusing on performance, security, and exceptional user experiences.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                style={{
                  transform: `translateY(${cardOffsets[index]}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
