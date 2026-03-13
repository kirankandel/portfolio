"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, MapPin, Coffee, Rocket } from "lucide-react"

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
                  src="/assets/kirankandel.jpg?600x600"
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

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I started coding as a curious teenager in Kathmandu, tinkering with HTML pages that barely worked.
                That spark turned into a career building production software used by real people every day.
              </p>
              <p>
                Over 5+ years, I&apos;ve shipped everything from e-commerce platforms handling thousands of transactions
                to data pipelines crunching millions of records. I care most about writing code that&apos;s fast, readable,
                and easy to maintain &mdash; no clever tricks, just solid engineering.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new frameworks, contributing to open source,
                or chasing the best momo spots in the valley.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Coffee className="h-4 w-4 text-primary shrink-0" />
                <span>5+ Years Exp</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Rocket className="h-4 w-4 text-primary shrink-0" />
                <span>Open Source</span>
              </div>
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
