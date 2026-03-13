"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const links = [
    {
      icon: Mail,
      label: "Email",
      value: "kirankandel007@gmail.com",
      href: "mailto:kirankandel007@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kirankandel",
      href: "https://github.com/kirankandel",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kiran-kandel",
      href: "https://www.linkedin.com/in/kiran-kandel-47460216b/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kathmandu, Nepal",
      href: "https://maps.google.com/?q=Kathmandu,Nepal",
    },
  ]

  return (
    <section id="contact" className="w-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 noise-bg"></div>
      <div className="blob blob-1 animate-float" style={{ top: "auto", bottom: "-100px", right: "-100px" }}></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/40 hover:bg-primary/5 hover:border-primary/30 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-sm font-medium truncate">{link.value}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="mailto:kirankandel007@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Send me an email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
