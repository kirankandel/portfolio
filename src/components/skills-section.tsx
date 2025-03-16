"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"

type Skill = {
  name: string
  level: number
  label?: string
}

type SkillCategory = {
  category: string
  skills: Skill[]
}

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories: SkillCategory[] = [
    {
      category: "Core Expertise",
      skills: [
        { name: "System Design", level: 90 },
        { name: "Web Development", level: 95 },
        { name: "Data Analysis", level: 85 },
        { name: "Prompt Engineering", level: 80 },
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 95, label: "Expert" },
        { name: "Java", level: 85, label: "Advanced" },
        { name: "Python", level: 85, label: "Advanced" },
        { name: "Rust", level: 70, label: "Intermediate" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 90 },
        { name: "Spring Boot", level: 80 },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            My technical expertise and proficiency levels.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="h-full skill-card backdrop-blur-sm bg-background/80">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 gradient-text">{category.category}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground text-sm">{skill.label || `${skill.level}%`}</span>
                        </div>
                        <div className="relative h-2 w-full rounded-full overflow-hidden bg-secondary">
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.2 * (i + 1) }}
                          />
                        </div>
                      </div>
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

