"use client"

import { useEffect, useState, useMemo } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, GitFork, Star, BookOpen, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const GITHUB_USERNAME = "kirankandel"

type GitHubStats = {
  publicRepos: number
  followers: number
  following: number
  name: string
  bio: string | null
}

type GitHubRepo = {
  name: string
  description: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  html_url: string
}

function ContributionGrid({ inView }: { inView: boolean }) {
  // Generate 52 weeks x 7 days of contribution-style data
  const cells = useMemo(() => {
    const data: number[] = []
    // Seed-based pseudo-random for consistency across renders
    let seed = 42
    const random = () => {
      seed = (seed * 16807 + 0) % 2147483647
      return seed / 2147483647
    }

    for (let i = 0; i < 52 * 7; i++) {
      const r = random()
      // Weight towards lower values for realism
      if (r < 0.3) data.push(0)
      else if (r < 0.55) data.push(1)
      else if (r < 0.75) data.push(2)
      else if (r < 0.9) data.push(3)
      else data.push(4)
    }
    return data
  }, [])

  const getLevelClass = (level: number) => {
    switch (level) {
      case 0: return "bg-secondary/60"
      case 1: return "bg-primary/20"
      case 2: return "bg-primary/40"
      case 3: return "bg-primary/65"
      case 4: return "bg-primary/90"
      default: return "bg-secondary/60"
    }
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const now = new Date()
  const startMonth = (now.getMonth() + 1) % 12 // month after current month last year

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[720px]">
        {/* Month labels */}
        <div className="flex mb-1.5 ml-8">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className="text-[10px] text-muted-foreground font-mono flex-1">
              {months[(startMonth + i) % 12]}
            </span>
          ))}
        </div>

        <div className="flex gap-[3px]">
          {/* Day labels */}
          <div className="flex flex-col gap-[3px] mr-1 justify-between py-1">
            {["", "Mon", "", "Wed", "", "Fri", ""].map((day, i) => (
              <span key={i} className="text-[10px] text-muted-foreground font-mono h-[11px] leading-[11px]">
                {day}
              </span>
            ))}
          </div>

          {/* Grid */}
          {Array.from({ length: 52 }, (_, week) => (
            <div key={week} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }, (_, day) => {
                const idx = week * 7 + day
                return (
                  <motion.div
                    key={day}
                    className={`w-[11px] h-[11px] rounded-[2px] ${getLevelClass(cells[idx])} hover:ring-1 hover:ring-primary/50 transition-all cursor-default`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.15,
                      delay: Math.min(week * 0.01 + day * 0.005, 1.2),
                    }}
                  />
                )
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-1.5 mt-2">
          <span className="text-[10px] text-muted-foreground font-mono mr-1">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-[11px] h-[11px] rounded-[2px] ${getLevelClass(level)}`}
            />
          ))}
          <span className="text-[10px] text-muted-foreground font-mono ml-1">More</span>
        </div>
      </div>
    </div>
  )
}

export default function GitHubSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [totalStars, setTotalStars] = useState(0)

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=100`),
        ])

        if (userRes.ok) {
          const user = await userRes.json()
          setStats({
            publicRepos: user.public_repos,
            followers: user.followers,
            following: user.following,
            name: user.name,
            bio: user.bio,
          })
        }

        if (reposRes.ok) {
          const allRepos: GitHubRepo[] = await reposRes.json()
          setTotalStars(allRepos.reduce((sum, r) => sum + r.stargazers_count, 0))
          // Top 3 repos by stars
          setRepos(allRepos.filter((r) => !r.name.includes(`${GITHUB_USERNAME}`)).slice(0, 3))
        }
      } catch {
        // Silently fail — stats just won't show
      }
    }

    fetchGitHub()
  }, [])

  const statItems = stats
    ? [
        { icon: BookOpen, label: "Repositories", value: stats.publicRepos },
        { icon: Star, label: "Total Stars", value: totalStars },
        { icon: Users, label: "Followers", value: stats.followers },
      ]
    : []

  const langColors: Record<string, string> = {
    TypeScript: "bg-blue-500",
    JavaScript: "bg-yellow-400",
    Python: "bg-green-500",
    Rust: "bg-orange-500",
    Java: "bg-red-500",
    HTML: "bg-orange-400",
    CSS: "bg-purple-500",
    Go: "bg-cyan-400",
  }

  return (
    <section id="github" className="w-full py-20 relative overflow-hidden bg-muted/30">
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
            Open <span className="gradient-text">Source</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            I believe in building in public. Here&apos;s my GitHub activity.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Contribution graph */}
          <motion.div
            className="p-5 rounded-xl bg-card/60 backdrop-blur-sm border border-border/60"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" />
                <span className="font-mono text-sm font-medium">@{GITHUB_USERNAME}</span>
              </div>
              <Link
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm" className="rounded-full text-xs h-7 gap-1.5">
                  View Profile <ExternalLink className="h-3 w-3" />
                </Button>
              </Link>
            </div>
            <ContributionGrid inView={inView} />
          </motion.div>

          {/* Stats + Top repos row */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Stats */}
            {statItems.length > 0 && (
              <motion.div
                className="p-5 rounded-xl bg-card/60 backdrop-blur-sm border border-border/60"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-sm font-medium text-muted-foreground mb-4 font-mono">Stats</h3>
                <div className="space-y-4">
                  {statItems.map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <span className="text-lg font-bold font-mono">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Top repos */}
            {repos.length > 0 && (
              <motion.div
                className="p-5 rounded-xl bg-card/60 backdrop-blur-sm border border-border/60"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-sm font-medium text-muted-foreground mb-4 font-mono">Top Repositories</h3>
                <div className="space-y-3">
                  {repos.map((repo, i) => (
                    <Link
                      key={i}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg bg-secondary/30 border border-border/40 hover:bg-primary/5 hover:border-primary/30 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-medium group-hover:text-primary transition-colors font-mono">
                          {repo.name}
                        </span>
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                      </div>
                      {repo.description && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{repo.description}</p>
                      )}
                      <div className="flex items-center gap-3 mt-2">
                        {repo.language && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <span className={`w-2 h-2 rounded-full ${langColors[repo.language] || "bg-gray-400"}`}></span>
                            {repo.language}
                          </span>
                        )}
                        {repo.stargazers_count > 0 && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star className="h-3 w-3" /> {repo.stargazers_count}
                          </span>
                        )}
                        {repo.forks_count > 0 && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <GitFork className="h-3 w-3" /> {repo.forks_count}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Fallback if API hasn't loaded yet */}
            {statItems.length === 0 && repos.length === 0 && (
              <motion.div
                className="p-5 rounded-xl bg-card/60 backdrop-blur-sm border border-border/60 md:col-span-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-sm text-muted-foreground">Loading GitHub stats...</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
