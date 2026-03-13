"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code2,
  Layout,
  Server,
  Cloud,
  Database,
  GitBranch,
  Terminal,
  Globe,
  Cpu,
  Layers,
  Palette,
  Container,
  Brain,
  Bot,
  Workflow,
  Sparkles,
} from "lucide-react"

type Skill = {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

type SkillCategory = {
  category: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  skills: Skill[]
}

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      icon: Layout,
      description: "Building responsive, performant user interfaces",
      skills: [
        { name: "React.js", icon: Code2 },
        { name: "Next.js", icon: Globe },
        { name: "TypeScript", icon: Code2 },
        { name: "Tailwind CSS", icon: Palette },
        { name: "Framer Motion", icon: Layers },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      description: "Designing scalable APIs and server architectures",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Express.js", icon: Terminal },
        { name: "Spring Boot", icon: Cpu },
        { name: "Python", icon: Code2 },
        { name: "Java", icon: Code2 },
        { name: "Rust", icon: Code2 },
      ],
    },
    {
      category: "Database & Infra",
      icon: Database,
      description: "Managing data and cloud infrastructure",
      skills: [
        { name: "MongoDB", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "Redis", icon: Layers },
        { name: "Docker", icon: Container },
        { name: "AWS", icon: Cloud },
        { name: "Git", icon: GitBranch },
        { name: "CI/CD", icon: Terminal },
      ],
    },
    {
      category: "AI & Agentic Systems",
      icon: Brain,
      description: "Building intelligent, autonomous applications",
      skills: [
        { name: "Machine Learning", icon: Brain },
        { name: "LLM Integration", icon: Sparkles },
        { name: "MCP Servers", icon: Workflow },
        { name: "Agentic Workflows", icon: Bot },
        { name: "RAG Pipelines", icon: Layers },
        { name: "Prompt Engineering", icon: Terminal },
        { name: "TensorFlow", icon: Cpu },
      ],
    },
  ]

  return (
    <section id="skills" className="w-full py-20 relative overflow-hidden">
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
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Technologies and tools I work with daily.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="h-full skill-card backdrop-blur-sm bg-background/80 border-border/60">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{category.category}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.1 * (index + 1) + 0.05 * i }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/40 text-sm font-medium hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all cursor-default"
                      >
                        <skill.icon className="h-3.5 w-3.5 text-muted-foreground" />
                        {skill.name}
                      </motion.div>
                    ))}
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
