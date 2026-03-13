"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const roles = [
  "I build fast, scalable web apps.",
  "I craft clean RESTful APIs.",
  "I ship full-stack solutions.",
  "I build agentic AI systems.",
]

function useTypingEffect(strings: string[], typingSpeed = 55, deletingSpeed = 35, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentString = strings[currentIndex]

    if (!isDeleting) {
      setDisplayText(currentString.substring(0, displayText.length + 1))
      if (displayText.length === currentString.length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
        return
      }
    } else {
      setDisplayText(currentString.substring(0, displayText.length - 1))
      if (displayText.length === 0) {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % strings.length)
      }
    }
  }, [displayText, currentIndex, isDeleting, strings, pauseTime])

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting, typingSpeed, deletingSpeed])

  return displayText
}

function ParticleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = []
    const mouse = { x: -1000, y: -1000 }

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const init = () => {
      resize()
      particles = []
      const count = Math.min(60, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 15000))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Get computed primary color
      const style = getComputedStyle(document.documentElement)
      const primary = style.getPropertyValue("--primary").trim()
      const [h, s, l] = primary.split(" ").map((v) => parseFloat(v))

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, 0.4)`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x
          const dy = p.y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${0.08 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // Mouse interaction
        const mdx = p.x - mouse.x
        const mdy = p.y - mouse.y
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mDist < 200) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${0.15 * (1 - mDist / 200)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      })

      animationId = requestAnimationFrame(draw)
    }

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    init()
    draw()

    window.addEventListener("resize", init)
    canvas.addEventListener("mousemove", handleMouse)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", init)
      canvas.removeEventListener("mousemove", handleMouse)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const typedText = useTypingEffect(roles)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      <ParticleGrid />
      <div className="blob blob-1 animate-float"></div>
      <div className="blob blob-2 animate-float" style={{ animationDelay: "-3s" }}></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-mono">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for work
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Hey, I&apos;m <span className="gradient-text glow-text">Kiran</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full max-w-2xl"
          >
            {/* Terminal-style typing block */}
            <div className="bg-card/60 backdrop-blur-md rounded-lg border border-border/60 overflow-hidden glow">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/40 bg-secondary/30">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                <span className="ml-2 text-xs text-muted-foreground font-mono">~/kiran/portfolio</span>
              </div>
              <div className="px-5 py-5 font-mono text-left">
                <span className="text-primary">$</span>{" "}
                <span className="text-lg md:text-xl lg:text-2xl">
                  {typedText}
                  <span className="typing-effect ml-0.5">&nbsp;</span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-xl text-lg text-muted-foreground"
          >
            Software developer from Nepal building production software with modern web technologies, AI integrations, and agentic systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-8 glow">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-center gap-4 pt-2"
          >
            <Link href="https://github.com/kirankandel" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-primary/10 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/kiran-kandel-47460216b/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-primary/10 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:kirankandel007@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-primary/10 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button variant="ghost" size="icon" asChild className="rounded-full animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
