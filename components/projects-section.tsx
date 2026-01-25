"use client"

import { useRef } from "react"
import { ProjectCard } from "@/components/project-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { link } from "fs"

const projects = [
  {
    title: "EZ Party",
    description:
      "Full-stack party booking platform with mobile apps and admin dashboard. Users can browse venues, book events, and manage reservations seamlessly.",
    tags: ["Flutter", "Next.js", "Node.js", "AWS", "MongoDB"],
    links: {
      ios: "https://apps.apple.com/ph/app/ez-party/id6749178864",
      android: "https://play.google.com/store/apps/details?id=com.ezpartyph.ezparty",
      admin: "https://admin.ezpartyph.com/",
      website: "https://ezpartyph.com",
    },
    image: "/ez-party.png",
    featured: true,
  },
  {
    title: "Toby's Estate Coffee",
    description:
      "Loyalty app and website for a premium coffee brand. Features rewards tracking, store locator, and seamless ordering experience.",
    tags: ["Flutter", "React", "PostgreSQL", "Firebase", "PHP"],
    links: {
      website: "https://www.tobysestateph.com/",
      android: "https://play.google.com/store/apps/details?id=com.efren.tobyestateloyaltyapp",
      ios: "https://apps.apple.com/ph/app/tobys-estate-ph/id1292175438",
    },
    image: "/toby.png",
    featured: true,
  },
  {
    title: "Euromovers",
    description:
      "Moving services platform with customer and admin apps. Complete logistics solution for booking, tracking, and managing relocations.",
    tags: ["Laravel", "Flutter", "VPS", "MySQL", "MongoDB", "React", "Node.js"],
    links: {
      web: "https://euromovers.dk",
      android: "https://play.google.com/store/apps/details?id=io.eumovedk.survey",
      ios: "https://apps.apple.com/ph/app/euromovers-dk/id6743671730",
    },
    image: "/euromovers.png",
    featured: false,
  },
  {
    title: "CalcMenu Lab AI",
    description:
      "AI-powered recipe management platform featuring Recipe Converter and Recipe Creator tools. Built with Flask, Angular 18, and Azure Cloud Functions.",
    tags: ["Flask", "Angular 18", "Azure", "OPEN AI", ".NET"],
    links: {
      website: "https://www.calcmenulab.ai/",
    },
    image: "/calcmenu.png",
    featured: true,
  },
  {
    title: "TabLU",
    description:
      "Event tabulation app for organizing and managing event seating arrangements. Built with Flutter, Mongodb, Express JS and Firebase.",
    tags: ["Flutter", "MongoDB", "Express JS", "Firebase"],
    links: {
      android: "https://play.google.com/store/apps/details?id=com.tab.lu"
    },
    image: "/tablu.png",
    featured: false,
  },
  {
    title: "Kain-ta",
    description:
      "Food discovery and social networking app that connects food enthusiasts. Built with React Native, Express JS, and MongoDB.",
    tags: ["React Native", "Express JS", "MongoDB"],
    image: "/kain-ta.png",
    featured: false,
    links: {
    }
  }
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useScrollAnimation(sectionRef as React.RefObject<HTMLElement>)
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-mono text-sm mb-2">SELECTED WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className={`mt-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
            <h3 className="text-xl font-semibold text-foreground mb-8">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(index + 1) * 150 + 700}ms` }}
                >
                  <ProjectCard project={project} index={index} compact />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
