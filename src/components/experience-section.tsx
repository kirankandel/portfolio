"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: "Arthasoft Solutions",
      period: "2021 - Present",
      title: "Software Developer",
      description:
        "Led Node.js development, contributed to open source projects, and implemented security best practices across multiple production applications.",
      skills: ["Node.js", "Express", "MongoDB", "Security", "Open Source"],
      highlights: [
        "Architected RESTful APIs for high-traffic applications",
        "Optimized API performance through caching strategies",
        "Implemented comprehensive security best practices",
      ],
    },
    {
      company: "ReadyToWork Corp",
      period: "2020 - 2021",
      title: "Frontend Developer",
      description:
        "Built responsive, performant user interfaces with Next.js and React, focusing on core web vitals and accessibility.",
      skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Built SPAs focusing on core web vitals",
        "Created reusable component library",
        "Optimized bundles through code splitting",
      ],
    },
    {
      company: "MBSYS Group",
      period: "2019 - 2020",
      title: "Backend Developer",
      description:
        "Designed and implemented microservices for e-commerce platforms, focusing on scalability and performance.",
      skills: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      highlights: [
        "Developed microservices for e-commerce platform",
        "Optimized database queries for checkout flow",
        "Created API documentation with Swagger",
      ],
    },
  ]

  return (
    <section id="experience" className="w-full py-20 relative overflow-hidden bg-muted/30">
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            My professional journey in software development.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-16 md:pl-20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.15 * (index + 1) }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3.5 md:left-5.5 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <Briefcase className="h-2.5 w-2.5 text-primary" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <Badge variant="outline" className="text-xs px-2.5 py-0.5 rounded-full w-fit font-mono">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium">{exp.title}</p>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>

                    <ul className="space-y-1.5 pt-1">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0"></span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs rounded-full font-mono px-2.5 py-0.5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
