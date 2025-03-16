"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="w-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 noise-bg"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            ref={ref}
            className="md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl"></div>
              <div className="relative aspect-square overflow-hidden rounded-2xl animated-gradient-border">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Kiran Kandel"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-3/5 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            </div>

            <div className="space-y-4 text-lg">
              <p>
                I am a skilled software developer with extensive experience in web development, RESTful API integration,
                full-stack development, and machine learning applications. My passion lies in creating efficient,
                user-friendly applications that solve real-world problems.
              </p>
              <p>
                Throughout my career, I have worked on various projects ranging from e-commerce platforms to data
                analysis tools, always focusing on writing clean, maintainable code and implementing best practices. I
                enjoy collaborating with teams to deliver high-quality software solutions that meet client requirements.
              </p>
              <p>
                When I'm not coding, I share my knowledge as a lecturer at Yeti International College, helping to shape
                the next generation of software developers. I am constantly learning and exploring new technologies to
                stay at the forefront of the rapidly evolving tech landscape.
              </p>
            </div>

            <div className="pt-4">
              <Button asChild className="rounded-full px-6">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

