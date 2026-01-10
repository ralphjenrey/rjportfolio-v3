const skillCategories = [
  {
    title: "Frontend & Web",
    skills: ["Flutter", "React.js", "Next.js", "Angular", "TypeScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Fastify", "PHP/Laravel", "Django", "Flask", "RESTful APIs", "OpenAPI"],
  },
  {
    title: "AI-Assisted Development",
    skills: ["OpenAI API", "Google Gemini", "AWS Rekognition", "Facial Recognition", "AI Testing", "Code Generation"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS (S3, Beanstalk, Lightsail)", "Google Cloud", "Azure", "Docker", "GitHub Actions", "CI/CD", "Git"],
  },
  {
    title: "Databases & Real-time",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "WebSockets", "Pub/Sub", "MySQL", "T-SQL"],
  },
  {
    title: "Leadership & Process",
    skills: ["AGILE/Scrum", "TDD", "Mentoring", "Technical Leadership", "Cross-team Collaboration"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm mb-2">EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Core Skills & Technologies</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
