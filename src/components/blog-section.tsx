"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "Building Agentic Systems with MCP: A Practical Guide",
    excerpt:
      "How Model Context Protocol is changing the way we build AI-powered applications, and how to implement your first MCP server from scratch.",
    date: "Mar 2026",
    readTime: "8 min read",
    tags: ["AI", "MCP", "Agentic"],
    href: "#",
  },
  {
    title: "Why I Switched from REST to tRPC (and When You Shouldn't)",
    excerpt:
      "A deep dive into the trade-offs between REST APIs and tRPC for full-stack TypeScript apps, with real benchmarks from production.",
    date: "Feb 2026",
    readTime: "6 min read",
    tags: ["TypeScript", "API Design"],
    href: "#",
  },
  {
    title: "RAG Pipelines at Scale: Lessons from Production",
    excerpt:
      "What I learned building retrieval-augmented generation systems that handle thousands of queries per day without falling apart.",
    date: "Jan 2026",
    readTime: "10 min read",
    tags: ["AI", "RAG", "Architecture"],
    href: "#",
  },
  {
    title: "The Case for Rust in Backend Microservices",
    excerpt:
      "Performance benchmarks, developer experience notes, and real-world lessons from introducing Rust into a Node.js-heavy stack.",
    date: "Dec 2025",
    readTime: "7 min read",
    tags: ["Rust", "Backend", "Performance"],
    href: "#",
  },
]

export default function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="blog" className="w-full py-20 relative overflow-hidden">
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
            Latest <span className="gradient-text">Writing</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Thoughts on engineering, AI, and building things that matter.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Link href={post.href} className="block h-full">
                <Card className="h-full blog-card backdrop-blur-sm bg-background/80 border-border/60 group cursor-pointer overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="rounded-full text-xs font-mono px-2.5 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
