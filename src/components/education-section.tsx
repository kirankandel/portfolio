"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Code } from "lucide-react"

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: "Masters in Information Technology",
      institution: "CDCSIT, Tribhuwan University",
      period: "2023-present",
      icon: GraduationCap,
      description:
        "Currently pursuing advanced studies in Information Technology, focusing on modern software development methodologies and emerging technologies.",
      courses: ["Advanced Algorithms", "Distributed Systems", "Machine Learning", "Cloud Computing"],
    },
    {
      degree: "Bachelors in Computer Engineering",
      institution: "Himalaya College of Engineering",
      period: "2015-2019",
      icon: GraduationCap,
      description:
        "Completed undergraduate studies with a focus on software engineering, database systems, and web technologies.",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Web Technologies",
      ],
    },
    {
      degree: "Lecturer",
      institution: "Yeti International College",
      period: "2020-present",
      icon: BookOpen,
      description:
        "Teaching computer science and programming courses, mentoring students, and developing curriculum for undergraduate programs.",
      courses: ["Web Development", "Programming Fundamentals", "Database Design", "Software Project Management"],
    },
  ]

  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            <code className="font-mono">class Education &#123;</code>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My academic background and teaching experience.
          </p>
        </motion.div>
        <div className="grid gap-8 mt-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-muted p-6 flex flex-col justify-between">
                    <div>
                      <div className="rounded-full bg-primary/10 p-3 w-fit">
                        <edu.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mt-4">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <Badge variant="outline" className="mt-2">
                        {edu.period}
                      </Badge>
                    </div>
                    <div className="hidden md:block mt-6">
                      <Code className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <p className="text-base leading-relaxed">{edu.description}</p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2 font-mono text-primary">Key Courses & Topics:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.courses.map((course, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            <code className="font-mono">&#125;</code>
          </div>
        </div>
      </div>
    </section>
  )
}

