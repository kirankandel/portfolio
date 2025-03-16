"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      <div className="blob blob-1 animate-float"></div>
      <div className="blob blob-2 animate-float" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute inset-0 noise-bg"></div>
      <div className="absolute inset-0 grid-pattern"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <p className="text-lg md:text-xl text-muted-foreground">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter gradient-text">Kiran Kandel</h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground">Software Developer</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-xl"
          >
            <p className="text-lg text-muted-foreground">
              I build exceptional digital experiences with clean, efficient code. Specializing in web development,
              RESTful APIs, and full-stack solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-6">
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center justify-center gap-6 pt-4"
          >
            <Link href="https://github.com/kirankandel" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/kirankandel" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:kirankandel007@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
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
        transition={{ delay: 0.9, duration: 0.5 }}
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

