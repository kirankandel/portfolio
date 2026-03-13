"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Server, Brain, Workflow } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built with modern frameworks. From pixel-perfect frontends to robust backend APIs, deployed and ready to scale.",
    highlights: ["React / Next.js", "Node.js / Express", "PostgreSQL / MongoDB"],
  },
  {
    icon: Server,
    title: "API Design & Architecture",
    description:
      "RESTful and GraphQL APIs designed for performance and developer experience. Microservices architecture with proper auth, caching, and documentation.",
    highlights: ["REST / GraphQL / tRPC", "Microservices", "Auth & Security"],
  },
  {
    icon: Brain,
    title: "AI & ML Integration",
    description:
      "Integrating machine learning models into production applications. From LLM-powered features to custom ML pipelines that deliver real business value.",
    highlights: ["LLM Integration", "RAG Systems", "ML Pipelines"],
  },
  {
    icon: Workflow,
    title: "Agentic Systems & MCP",
    description:
      "Building autonomous AI agents and MCP servers that extend LLM capabilities. Designing workflows where AI systems reason, plan, and act on complex tasks.",
    highlights: ["MCP Servers", "Agent Orchestration", "Tool-Use Systems"],
  },
]

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="w-full py-20 relative overflow-hidden bg-muted/30">
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
            What I <span className="gradient-text">Do</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            I turn ideas into production-ready software. Here&apos;s how I can help.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="h-full skill-card backdrop-blur-sm bg-background/80 border-border/60 group">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/15 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground"
                      >
                        {item}
                      </span>
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
