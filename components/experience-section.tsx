import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Lead Full-Stack Engineer",
    company: "EZ Party PH",
    period: "August 2025 – December 2025",
    location: "Remote",
    highlights: [
      "Led distributed engineering team to deliver production-ready mobile platform",
      "Architected Flutter iOS/Android apps supporting merchant and consumer workflows",
      "Designed serverless microservices using Next.js for scalable backend operations",
      "Integrated PayMongo payment processing with secure transaction handling",
      "Implemented real-time chat and notifications using Fastify and WebSockets",
      "Deployed cloud infrastructure using AWS (S3, Beanstalk, Lightsail)",
      "Applied TDD methodologies and mentored junior developers",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "W3Systems",
    period: "February 2025 – Present",
    location: "Remote",
    highlights: [
      "Built and maintained scalable mobile applications using Flutter",
      "Migrated legacy systems from Phalcon PHP to Laravel and React.js microservices",
      "Designed and deployed CI/CD pipelines using GitHub Actions",
      "Integrated Google Gemini AI for automated product volume calculations",
      "Migrated MySQL databases to MongoDB for improved performance",
      "Implemented Redis for caching, Pub/Sub messaging, and real-time events",
      "Built scalable WebSocket notification systems using Fastify",
    ],
  },
  {
    title: "Software Developer",
    company: "Calcmenu Philippines",
    period: "June 2024 – February 2025",
    location: "Remote",
    highlights: [
      "Developed secure RESTful APIs using Flask with JWT authentication",
      "Integrated OpenAI APIs for AI-driven technical support chatbots",
      "Designed and deployed Angular admin dashboards for chatbot management",
      "Implemented Azure Functions for automated AI-powered PDF generation",
      "Developed facial recognition attendance system using AWS Rekognition",
      "Optimized database performance using T-SQL, triggers, and stored procedures",
    ],
  },
  {
    title: "Full-Stack Developer (Freelance)",
    company: "FluxFusionDev",
    period: "December 2023 – Present",
    location: "Remote",
    highlights: [
      "Designed and deployed microservice-based systems for education, retail, and SaaS",
      "Built real-time chat applications using Firebase, Node.js, Flutter, and WebSockets",
      "Developed facial recognition attendance systems with AWS Rekognition",
      "Migrated legacy Java mobile applications to Flutter",
      "Led small teams in delivering SaaS products under tight deadlines",
    ],
  },
  {
    title: "Technical Support Representative",
    company: "Tech Mahindra",
    period: "June 2022 – December 2022",
    location: "Remote",
    highlights: ["Resolved complex technical issues while maintaining high customer satisfaction"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm mb-2">CAREER</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Professional Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-primary font-semibold mb-2">{exp.company}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
