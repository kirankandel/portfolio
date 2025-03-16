"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: "Arthasoft Solutions",
      period: "2021-2024",
      title: "Senior Software Developer",
      description:
        "Led Node.js development initiatives, contributed to open source projects, and implemented security best practices across multiple applications.",
      skills: ["Node.js", "Express", "MongoDB", "Security", "Open Source"],
      highlights: [
        "Architected and implemented RESTful APIs serving 10K+ daily users",
        "Reduced API response time by 40% through optimization techniques",
        "Contributed to 5+ open source projects in the Node.js ecosystem",
        "Implemented security best practices, reducing vulnerabilities by 80%",
      ],
    },
    {
      company: "ReadyToWork Corp",
      period: "2020-2021",
      title: "Frontend Developer",
      description:
        "Developed responsive and interactive user interfaces using Next.js and React.js, ensuring optimal performance and accessibility.",
      skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "UI/UX"],
      highlights: [
        "Built performant SPAs with Next.js, achieving 95+ Lighthouse scores",
        "Implemented responsive designs for 15+ client projects",
        "Reduced bundle size by 35% through code splitting and lazy loading",
        "Created reusable component library used across multiple projects",
      ],
    },
    {
      company: "MBSYS Group",
      period: "2019-2020",
      title: "Backend Developer",
      description:
        "Designed and implemented RESTful services for e-commerce applications, focusing on scalability and performance optimization.",
      skills: ["RESTful APIs", "Java", "Spring Boot", "PostgreSQL", "E-commerce"],
      highlights: [
        "Developed microservices architecture for e-commerce platform handling 1000+ transactions daily",
        "Optimized database queries resulting in 50% faster checkout process",
        "Implemented caching strategies reducing server load by 30%",
        "Created comprehensive API documentation using Swagger",
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

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary"></div>

                {/* Date badge - visible only on mobile */}
                <div className="md:hidden mb-4">
                  <Badge variant="outline" className="text-sm px-3 py-1 rounded-full">
                    {exp.period}
                  </Badge>
                </div>

                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="hidden md:block mb-2">
                    <Badge variant="outline" className="text-sm px-3 py-1 rounded-full">
                      {exp.period}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                  <p className="text-lg text-primary font-medium mb-3">{exp.title}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 justify-start md:justify-end">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Empty space for alignment on desktop */}
                <div className="hidden md:block md:w-2/12"></div>

                {/* Highlights */}
                <div className="md:w-5/12">
                  <div className="bg-secondary/50 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="font-medium mb-3 text-primary">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

