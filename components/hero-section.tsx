"use client"

import { useEffect, useState, useRef, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  theme?: string
}

export function HeroSection({ theme = "default" }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [stars, setStars] = useState<{ id: number; left: number; top: number; delay: number }[]>([])
  const [celestialPosition, setCelestialPosition] = useState(theme === 'light' ? 16 : 16)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const prevThemeRef = useRef(theme)

  // Dynamic color palette based on theme
  const colors = useMemo(() => {
    const baseColors = {
      sky1: "#1a2a3a",
      sky2: "#2d4a5a",
      sky3: "#4a6670",
      mountain1: "#3a5060",
      mountain2: "#4a6670",
      mountain3: "#5a7a80",
      mountain4: "#6a8a90",
      mountain5: "#7a9a9f",
      ground: "#8aaa9f",
      accent: "#acd4c8",
      text: "#c8e0d8",
    }

    if (theme === "pink") {
      return {
        sky1: "#2a1a2a",
        sky2: "#4a2d4a",
        sky3: "#6a4a6a",
        mountain1: "#503050",
        mountain2: "#704070",
        mountain3: "#905090",
        mountain4: "#b060b0",
        mountain5: "#d070d0",
        ground: "#e080e0",
        accent: "#ff69b4",
        text: "#ffc0e0",
      }
    } else if (theme === "blue") {
      return {
        sky1: "#1a1a3a",
        sky2: "#2d2d5a",
        sky3: "#4a4a70",
        mountain1: "#303060",
        mountain2: "#404080",
        mountain3: "#5050a0",
        mountain4: "#6060c0",
        mountain5: "#7070e0",
        ground: "#8080ff",
        accent: "#4080ff",
        text: "#c0d0ff",
      }
    } else if (theme === "red") {
      return {
        sky1: "#3a1a1a",
        sky2: "#5a2d2d",
        sky3: "#704a4a",
        mountain1: "#603030",
        mountain2: "#804040",
        mountain3: "#a05050",
        mountain4: "#c06060",
        mountain5: "#e07070",
        ground: "#ff8080",
        accent: "#ff4040",
        text: "#ffc0c0",
      }
    } else if (theme === "green") {
      return {
        sky1: "#1a2a1a",
        sky2: "#2d4a2d",
        sky3: "#4a6a4a",
        mountain1: "#305030",
        mountain2: "#407040",
        mountain3: "#509050",
        mountain4: "#60b060",
        mountain5: "#70d070",
        ground: "#80ff80",
        accent: "#40ff40",
        text: "#c0ffc0",
      }
    } else if (theme === "purple") {
      return {
        sky1: "#1a1a2a",
        sky2: "#2d2d4a",
        sky3: "#4a4a6a",
        mountain1: "#303050",
        mountain2: "#404070",
        mountain3: "#505090",
        mountain4: "#6060b0",
        mountain5: "#7070d0",
        ground: "#8080e0",
        accent: "#9370db",
        text: "#d0c0ff",
      }
    } else if (theme === "orange") {
      return {
        sky1: "#2a1a1a",
        sky2: "#4a2d1a",
        sky3: "#6a4a2a",
        mountain1: "#503020",
        mountain2: "#704030",
        mountain3: "#905040",
        mountain4: "#b06050",
        mountain5: "#d07060",
        ground: "#ff8060",
        accent: "#ff8c00",
        text: "#ffd0c0",
      }
    } else if (theme === "cyan") {
      return {
        sky1: "#1a2a2a",
        sky2: "#2d4a4a",
        sky3: "#4a6a6a",
        mountain1: "#305050",
        mountain2: "#407070",
        mountain3: "#509090",
        mountain4: "#60b0b0",
        mountain5: "#70d0d0",
        ground: "#80ffff",
        accent: "#00ffff",
        text: "#c0ffff",
      }
    } else if (theme === "light") {
      return {
        sky1: "#87CEEB",
        sky2: "#b0d4e8",
        sky3: "#d4e8f0",
        mountain1: "#8fa8b0",
        mountain2: "#a0b8c0",
        mountain3: "#b0c8d0",
        mountain4: "#c0d8e0",
        mountain5: "#d0e8f0",
        ground: "#e0f0e8",
        accent: "#4a9090",
        text: "#2a4a4a",
      }
    }

    return baseColors
  }, [theme])

  // Generate star positions once to avoid hydration mismatch
  useEffect(() => {
    // Only runs on client
    setStars(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 40,
        delay: Math.random() * 3,
      }))
    )
  }, [])

  // Animate celestial body (sun/moon) on theme change
  useEffect(() => {
    const prevTheme = prevThemeRef.current
    
    if (prevTheme !== theme) {
      setIsTransitioning(true)
      
      // Animate from current position
      if (theme === 'light' && prevTheme === 'dark') {
        // Sunrise: Moon sets (goes down), Sun rises (comes up)
        setCelestialPosition(150) // Start below viewport
        setTimeout(() => setCelestialPosition(16), 50) // Rise to normal position
      } else if (theme === 'dark' && prevTheme === 'light') {
        // Sunset: Sun sets (goes down), Moon rises (comes up from below)
        setCelestialPosition(150) // Sun goes down
        setTimeout(() => setCelestialPosition(16), 1000) // Moon rises after sun sets
      } else {
        setCelestialPosition(16)
      }
      
      setTimeout(() => setIsTransitioning(false), 2000)
      prevThemeRef.current = theme
    }
  }, [theme])


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Trigger fade-in animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Sky gradient background */}
      <div
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)`,
          background: `linear-gradient(to bottom, ${colors.sky1}, ${colors.sky2}, ${colors.sky3})`
        }}
      />

      {/* Stars layer - slowest */}
      <div className="absolute inset-0 opacity-60" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-white/70 rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div
        className="absolute top-16 right-[15%] w-20 h-20 rounded-full opacity-90 blur-[1px]"
        style={{ 
          transform: `translateY(${scrollY * 0.08}px)`,
          background: `linear-gradient(to bottom right, ${theme === 'light' ? '#FFE87C' : '#f5f0e6'}, ${theme === 'light' ? '#FFC125' : '#d4c9b5'})`
        }}
      >
        <div className="absolute top-3 left-4 w-4 h-4 rounded-full opacity-40" style={{ backgroundColor: theme === 'light' ? '#e0c080' : '#c9bfab' }} />
        <div className="absolute bottom-4 right-3 w-3 h-3 rounded-full opacity-30" style={{ backgroundColor: theme === 'light' ? '#e0c080' : '#c9bfab' }} />
      </div>

      {/* Floating clouds - slow movement */}
      <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${scrollY * 0.12}px)` }}>
        <Image
          src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=200&h=100&fit=crop&auto=format"
          alt=""
          width={200}
          height={100}
          className="absolute top-24 left-[10%] opacity-30 blur-sm"
        />
        <Image
          src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=150&h=80&fit=crop&auto=format"
          alt=""
          width={150}
          height={80}
          className="absolute top-32 right-[20%] opacity-25 blur-sm"
        />
        <Image
          src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=180&h=90&fit=crop&auto=format"
          alt=""
          width={180}
          height={90}
          className="absolute top-40 left-[60%] opacity-20 blur-sm"
        />
        {/* Extra creative cloud */}
        <Image
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=120&h=60&fit=crop&auto=format"
          alt=""
          width={120}
          height={60}
          className="absolute top-16 right-[10%] opacity-20 blur-sm"
        />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
        <Image
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=80&h=80&fit=crop&auto=format"
          alt=""
          width={80}
          height={80}
          className="absolute top-[20%] left-[15%] opacity-40 animate-pulse rounded-full"
        />
        <Image
          src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=60&h=60&fit=crop&auto=format"
          alt=""
          width={60}
          height={60}
          className="absolute top-[30%] right-[25%] opacity-30 animate-pulse rounded-full"
        />
        {/* Extra decorative element */}
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=70&h=70&fit=crop&auto=format"
          alt=""
          width={70}
          height={70}
          className="absolute bottom-[25%] left-[30%] opacity-30 animate-pulse rounded-full"
        />
      </div>

      {/* Far mountains - slowest parallax (0.15) */}
      <svg
        className="absolute bottom-0 w-full h-[70%] pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <path
          d="M0 600V350L120 280L240 320L360 250L480 300L600 220L720 280L840 200L960 260L1080 180L1200 240L1320 190L1440 230V600H0Z"
          fill={colors.mountain1}
          fillOpacity="0.7"
        />
      </svg>

      {/* Mid-far mountains - slow parallax (0.25) */}
      <svg
        className="absolute bottom-0 w-full h-[65%] pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        viewBox="0 0 1440 550"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <path
          d="M0 550V320L100 260L200 300L350 200L500 270L650 180L800 250L950 160L1100 220L1250 150L1350 200L1440 170V550H0Z"
          fill={colors.mountain2}
          fillOpacity="0.85"
        />
      </svg>

      {/* Mid mountains - medium parallax (0.35) */}
      <svg
        className="absolute bottom-0 w-full h-[55%] pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
        viewBox="0 0 1440 480"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <path
          d="M0 480V280L80 240L180 280L320 180L450 250L580 160L720 230L860 140L1000 200L1140 120L1280 180L1380 140L1440 170V480H0Z"
          fill={colors.mountain3}
        />
        {/* Mountain details/snow caps */}
        <path d="M320 180L350 200L380 185L320 180Z" fill={colors.accent} fillOpacity="0.5" />
        <path d="M860 140L890 165L920 150L860 140Z" fill={colors.accent} fillOpacity="0.5" />
      </svg>

      {/* Near-mid hills - faster parallax (0.45) */}
      <svg
        className="absolute bottom-0 w-full h-[45%] pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.45}px)` }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <path
          d="M0 400V220C100 200 200 240 300 200C400 160 500 190 600 170C700 150 800 180 900 160C1000 140 1100 170 1200 150C1300 130 1400 160 1440 140V400H0Z"
          fill={colors.mountain4}
        />
      </svg>

      {/* Foreground hills - fastest parallax (0.6) */}
      <svg
        className="absolute bottom-0 w-full h-[35%] pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.6}px)` }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <path
          d="M0 320V180C150 160 250 200 400 170C550 140 650 180 800 150C950 120 1050 160 1200 130C1300 110 1400 140 1440 120V320H0Z"
          fill={colors.mountain5}
        />
      </svg>

      {/* Ground/path layer - fastest (0.7) */}
      <svg
        className="absolute bottom-0 w-full h-[25%] pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.7}px)` }}
        viewBox="0 0 1440 240"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <path
          d="M0 240V120C200 100 400 130 600 100C800 70 1000 110 1200 80C1350 60 1400 90 1440 70V240H0Z"
          fill={colors.ground}
        />
        {/* Path/trail */}
        <path d="M700 240L720 180L750 240" fill={colors.accent} fillOpacity="0.6" />
        <path d="M710 180L730 140L760 180" fill={colors.text} fillOpacity="0.4" />
      </svg>

      {/* Mist/fog layer */}
      <div
        className="absolute bottom-[15%] left-0 right-0 h-32"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          background: `linear-gradient(to top, ${colors.ground}4D, transparent)`
        }}
      />

      {/* Main content - moves with slight parallax */}
      <div
        className="relative z-20 min-h-screen flex items-center justify-center px-6 pt-20"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`space-y-6 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Profile Image */}
            <div
              className={`flex justify-center mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
              <div className="relative">
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-50 animate-pulse" 
                  style={{ background: `linear-gradient(to right, ${colors.accent}, ${colors.text})` }}
                />
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&auto=format"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="relative rounded-full border-4 shadow-2xl"
                  style={{ borderColor: `${colors.accent}4D` }}
                  priority
                />
                {/* Extra creative profile overlay */}
                <Image
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=60&h=60&fit=crop&auto=format"
                  alt=""
                  width={60}
                  height={60}
                  className="absolute -top-6 -right-6 rounded-full border-2 border-white shadow-lg opacity-70"
                />
              </div>
            </div>

            <p
              className={`font-mono text-sm tracking-widest uppercase transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ color: colors.accent }}
            >
              Hello, I'm
            </p>

            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ color: theme === 'light' ? '#1a3a3a' : 'white' }}
            >
              Ralph Jenrey
            </h1>

            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-wide transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ color: colors.text }}
            >
              Full-Stack Developer
            </h2>

            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ color: colors.text }}
            >
              Crafting beautiful digital experiences through code.
              <br className="hidden md:block" />
              Mobile apps, web platforms, and everything in between.
            </p>

            <div
              className={`flex flex-wrap justify-center gap-4 pt-6 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <Button 
                asChild 
                size="lg" 
                className="font-medium px-8"
                style={{ 
                  backgroundColor: colors.accent, 
                  color: colors.sky1,
                }}
              >
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="px-8 bg-transparent"
                style={{ 
                  borderColor: `${colors.accent}80`, 
                  color: colors.accent,
                }}
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>

            <div
              className={`flex items-center justify-center gap-6 pt-10 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <Link
                href="https://github.com/ralphjenrey"
                target="_blank"
                className="hover:opacity-70 transition-opacity duration-300"
                style={{ color: colors.text }}
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ralph-jenrey-loquellano-78a169256"
                target="_blank"
                className="hover:opacity-70 transition-opacity duration-300"
                style={{ color: colors.text }}
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:loquellanoralphjenrey@gmail.com"
                className="hover:opacity-70 transition-opacity duration-300"
                style={{ color: colors.text }}
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>


          </div>
        </div>

        {/* Decorative geometric shapes */}
        <div className="absolute top-1/4 left-[5%] opacity-20 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=100&h=100&fit=crop&auto=format"
            alt=""
            width={100}
            height={100}
            className="animate-spin-slow rounded-lg"
          />
        </div>
        <div className="absolute bottom-1/4 right-[8%] opacity-15 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=120&h=120&fit=crop&auto=format"
            alt=""
            width={120}
            height={120}
            className="animate-pulse rounded-full"
          />
        </div>
        {/* Extra geometric shape */}
        <div className="absolute top-[10%] right-[12%] opacity-10 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=80&h=80&fit=crop&auto=format"
            alt=""
            width={80}
            height={80}
            className="animate-bounce rounded-lg"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-2 left-1/2 z-30 transition-all duration-700 delay-1000 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
        style={{ transform: `translateX(-50%) translateY(${scrollY * 0.8}px)` }}
      >
        <div className="flex flex-col items-center gap-2" style={{ color: colors.text }}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}