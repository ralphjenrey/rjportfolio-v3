"use client"

import { useRef } from "react"
import { GraduationCap, Award, FileText } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useScrollAnimation(sectionRef as React.RefObject<HTMLElement>)

  return (
    <section ref={sectionRef} id="education" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-mono text-sm mb-2">EDUCATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Degree & Certifications</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Degree */}
          <div className={`lg:col-span-2 p-8 rounded-lg bg-card border border-border hover:shadow-lg hover:scale-[1.02] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '150ms' }}>
            <div className="flex gap-4 mb-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Bachelor of Science in Information Technology</h3>
                <p className="text-primary font-semibold">Cebu Eastern College</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Location:</span> Cebu City, Philippines
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Graduation:</span> April 2025
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Honors:</span> Cum Laude
              </p>
            </div>
          </div>

          {/* Resume Download */}
          <div className={`p-8 rounded-lg bg-card border border-border flex flex-col justify-between hover:shadow-lg hover:scale-[1.02] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '300ms' }}>
            <div>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Full Resume</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Download my comprehensive resume with detailed experience and skills.
              </p>
            </div>
            <a
              href="/resume.pdf"
              download="Ralph_Jenrey_Loquellano_Resume.pdf"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-center"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Certifications */}
        <div className={`mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '450ms' }}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: "Responsive Web Design", issuer: "FreeCodeCamp" },
              { name: "Data Structures & Algorithms", issuer: "FreeCodeCamp" },
            ].map((cert, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:scale-105 hover:shadow-lg transition-all duration-500 flex items-start gap-4 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                style={{ transitionDelay: `${600 + (idx * 150)}ms` }}
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
