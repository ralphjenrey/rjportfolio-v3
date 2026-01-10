import { GraduationCap, Award, FileText } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm mb-2">EDUCATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Degree & Certifications</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Degree */}
          <div className="lg:col-span-2 p-8 rounded-lg bg-card border border-border">
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
          <div className="p-8 rounded-lg bg-card border border-border flex flex-col justify-between">
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
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: "Responsive Web Design", issuer: "FreeCodeCamp" },
              { name: "Data Structures & Algorithms", issuer: "FreeCodeCamp" },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors flex items-start gap-4"
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
