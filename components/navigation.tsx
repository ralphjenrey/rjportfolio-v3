"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{
        background: 'linear-gradient(120deg, var(--background,rgba(255,255,255,0.85)) 0%, var(--card,rgba(200,200,255,0.7)) 100%)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        boxShadow: '0 4px 32px 0 rgba(31, 38, 135, 0.12)',
      }}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
            <span style={{ color: 'var(--primary)' }}>{"<"}</span>
            Ralph
            <span style={{ color: 'var(--primary)' }}>{"/>"}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm transition-colors"
                style={{ color: 'var(--muted-foreground)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" asChild>
              <Link href="#contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm transition-colors"
                  style={{ color: 'var(--muted-foreground)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button size="sm" asChild className="w-fit">
                <Link href="#contact">Let's Talk</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
