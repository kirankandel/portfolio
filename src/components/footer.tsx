import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-12 border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 noise-bg"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-bold">
              <span className="gradient-text">Kiran</span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Kiran Kandel. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex items-center space-x-4">
              <Link href="https://github.com/kirankandel" target="_blank" rel="noopener noreferrer">
                <div className="rounded-full p-2 bg-secondary/50 hover:bg-primary/20 transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/kiran-kandel-47460216b/" target="_blank" rel="noopener noreferrer">
                <div className="rounded-full p-2 bg-secondary/50 hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
              <Link href="mailto:kirankandel007@gmail.com">
                <div className="rounded-full p-2 bg-secondary/50 hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </div>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Designed & Built with <Heart className="h-3 w-3 text-red-500 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

