"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, user authentication, and payment integration.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/kirankandel",
    },
    {
      title: "AI-Powered Content Generator",
      description: "A web application that uses machine learning to generate content based on user prompts.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Python", "TensorFlow", "OpenAI API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/kirankandel",
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging platform with features like user presence, read receipts, and file sharing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Socket.io", "Express", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/kirankandel",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management tool with project tracking, deadline notifications, and team collaboration features.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/kirankandel",
    },
  ]

  return (
    <section id="projects" className="w-full py-20 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 noise-bg"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A showcase of my recent work and personal projects.
          </p>
        </motion.div>

        <div className="grid gap-10 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              {/* Project Image */}
              <div className="md:w-1/2">
                <div className="relative group project-card">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 project-overlay">
                      <div className="flex gap-4">
                        <Button asChild size="sm" className="rounded-full">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="rounded-full">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            <span>Code</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 md:hidden">
                  <Button asChild size="sm" className="rounded-full">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

