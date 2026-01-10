import Link from "next/link"
import { Mail, Linkedin, Github, MapPin, MessageCircle, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-2">CONTACT</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{"Let's Work Together"}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          If you would like to discuss a project or just say hi, I'm always down to chat. Feel free to reach out through
          any of the channels below.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button size="lg" asChild>
            <Link href="mailto:loquellanoralphjenrey@gmail.com">
              <Mail className="h-4 w-4 mr-2" />
              Send an Email
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://wa.me/639222164402" target="_blank">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://www.facebook.com/MIssJInkz" target="_blank">
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://www.linkedin.com/in/ralph-jenrey-loquellano-78a169256" target="_blank">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Email</p>
            <Link href="mailto:loquellanoralphjenrey@gmail.com" className="text-foreground hover:text-primary transition-colors break-words">
              loquellanoralphjenrey@gmail.com
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">WhatsApp</p>
            <Link href="https://wa.me/639222164402" target="_blank" className="text-foreground hover:text-primary transition-colors">
              +63 922 216 4402
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Social</p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/ralphjenrey"
                target="_blank"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ralph-jenrey-loquellano-78a169256"
                target="_blank"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/MIssJInkz"
                target="_blank"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="text-foreground flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Philippines
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
