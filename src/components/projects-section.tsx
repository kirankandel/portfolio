"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce platform with product management, user authentication, and Stripe payment integration. Built for performance with server-side rendering.",
      impact: "Handles 1000+ daily transactions",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/kirankandel",
    },
    {
      title: "AI Content Generator",
      description:
        "Web application leveraging machine learning to generate high-quality content from user prompts. Features real-time streaming responses and template management.",
      impact: "Used by 500+ content creators",
      tags: ["React", "Python", "TensorFlow", "OpenAI API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/kirankandel",
    },
    {
      title: "Real-time Chat App",
      description:
        "Messaging platform with real-time communication, user presence indicators, read receipts, file sharing, and end-to-end message history.",
      impact: "Sub-50ms message delivery",
      tags: ["React", "Socket.io", "Express", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/kirankandel",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with Kanban boards, deadline tracking, team assignments, and automated notifications.",
      impact: "Adopted by 3 development teams",
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
            A selection of projects I&apos;ve built and shipped.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="h-full project-card group backdrop-blur-sm bg-background/80 border-border/60 overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {project.impact}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="rounded-full text-xs font-mono px-2.5 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button asChild variant="outline" size="sm" className="rounded-full text-xs h-8">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="ghost" size="sm" className="rounded-full text-xs h-8">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
