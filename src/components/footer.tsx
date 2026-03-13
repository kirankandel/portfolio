import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 noise-bg"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-1">
            <Link href="/" className="text-lg font-bold font-mono">
              <span className="gradient-text">&lt;K /&gt;</span>
            </Link>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Kiran Kandel
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/kirankandel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/kiran-kandel-47460216b/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:kirankandel007@gmail.com"
              className="rounded-full p-2 bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
