"use client"

import Image from "next/image"
import Link from "next/link"
import { Apple, Smartphone, Globe, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectLinks {
  ios?: string
  android?: string
  website?: string
  admin?: string
  web?: string
}

interface Project {
  title: string
  description: string
  tags: string[]
  links: ProjectLinks
  image: string
  featured: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
  compact?: boolean
}

export function ProjectCard({ project, index, compact = false }: ProjectCardProps) {
  const isEven = index % 2 === 0

  if (compact) {
    return (
      <div className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
        <div className="aspect-video relative mb-4 rounded-md overflow-hidden bg-secondary">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <ProjectLinks links={project.links} />
      </div>
    )
  }

  return (
    <div className={`group grid lg:grid-cols-2 gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
      <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-secondary border border-border">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
      <div className={`space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <ProjectLinks links={project.links} />
      </div>
    </div>
  )
}

function ProjectLinks({ links }: { links: ProjectLinks }) {
  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {links.ios && (
        <Button variant="outline" size="sm" asChild>
          <Link href={links.ios} target="_blank">
            <Apple className="h-4 w-4 mr-1" />
            iOS
          </Link>
        </Button>
      )}
      {links.android && (
        <Button variant="outline" size="sm" asChild>
          <Link href={links.android} target="_blank">
            <Smartphone className="h-4 w-4 mr-1" />
            Android
          </Link>
        </Button>
      )}
      {(links.website || links.web) && (
        <Button variant="outline" size="sm" asChild>
          <Link href={links.website || links.web || "#"} target="_blank">
            <Globe className="h-4 w-4 mr-1" />
            Website
          </Link>
        </Button>
      )}
      {links.admin && (
        <Button variant="outline" size="sm" asChild>
          <Link href={links.admin} target="_blank">
            <ShieldCheck className="h-4 w-4 mr-1" />
            Admin
          </Link>
        </Button>
      )}
    </div>
  )
}
