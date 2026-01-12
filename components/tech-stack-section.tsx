"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const techStacks = [
  {
    category: "Frontend",
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "#000000",
        invert: true,
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        color: "#06B6D4",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        color: "#7952B3",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        color: "#007FFF",
      },
      {
        name: "Shadcn UI",
        icon: "https://ui.shadcn.com/favicon.ico",
        color: "#000000",
        invert: true,
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "#1572B6",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        color: "#764ABC",
      },
        {
          name: "Angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
          color: "#DD0031",
        },
        {
          name: ".NET",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
          color: "#512BD4",
        },
    ],
  },
  {
    category: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#339933",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "#000000",
        invert: true,
      },
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
        color: "#FF2D20",
      },
      {
        name: "Django",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        color: "#092E20",
        invert: true,
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        color: "#777BB4",
      },
      // GraphQL removed
    ],
  },
  {
    category: "Mobile",
    technologies: [
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        color: "#02569B",
      },
      {
        name: "Android",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        color: "#3DDC84",
      },
      {
        name: "iOS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
        color: "#000000",
        invert: true,
      },
    ],
  },
  {
    category: "Database",
    technologies: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#47A248",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "#4169E1",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        color: "#4479A1",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        color: "#DC382D",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        color: "#FFCA28",
      },
    ],
  },
  {
    category: "AI & Cloud",
    technologies: [
      {
        name: "OpenAI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
        color: "#412991",
      },
      {
        name: "Anthropic",
        icon: "https://www.anthropic.com/images/icons/apple-touch-icon.png",
        color: "#D4A574",
      },
      {
        name: "Gemini AI",
        icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
        color: "#4285F4",
      },
      {
        name: "Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        color: "#0078D4",
      },
      {
        name: "Google Cloud",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        color: "#4285F4",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        color: "#FF9900",
      },
      {
        name: "Digital Ocean",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
        color: "#0080FF",
      },
    ],
  },
  {
    category: "DevOps & Tools",
    technologies: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        color: "#2496ED",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        color: "#181717",
        invert: true,
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        color: "#000000",
        invert: true,
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        color: "#FCC624",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "#007ACC",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "#F24E1E",
      },
    ],
  },
]

export function TechStackSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("tech-stack")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="tech-stack" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="space-y-12">
          {techStacks.map((stack, categoryIndex) => (
            <div
              key={stack.category}
              className={`transition-all duration-700 delay-${categoryIndex * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">{stack.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {stack.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className={`group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${
                      isVisible
                        ? `opacity-100 translate-y-0 delay-${(categoryIndex * 100) + (techIndex * 50)}`
                        : "opacity-0 translate-y-4"
                    }`}
                    onMouseEnter={() => setActiveCategory(tech.name)}
                    onMouseLeave={() => setActiveCategory(null)}
                    style={{
                      transitionDelay: isVisible ? `${(categoryIndex * 100) + (techIndex * 50)}ms` : "0ms",
                    }}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="relative w-16 h-16">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={64}
                          height={64}
                          className={`transition-all duration-300 group-hover:scale-110 ${
                            tech.invert ? "dark:filter dark:invert" : ""
                          }`}
                        />
                        {activeCategory === tech.name && (
                          <div
                            className="absolute inset-0 rounded-full blur-xl opacity-50 -z-10"
                            style={{ backgroundColor: tech.color }}
                          />
                        )}
                      </div>
                      <span className="text-sm font-medium text-center">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST API",
              "Microservices",
              "CI/CD",
              "Agile/Scrum",
              "Test-Driven Development",
              "Responsive Design",
              "SEO Optimization",
              "Web Accessibility",
              "Performance Optimization",
              "UI/UX Design",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-full text-sm font-medium transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
