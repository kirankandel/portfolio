"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Home,
  User,
  Briefcase,
  Code2,
  FolderKanban,
  Github,
  Mail,
  Linkedin,
  Sun,
  Moon,
  BookOpen,
  PenLine,
  Workflow,
  FileText,
  ArrowUpRight,
} from "lucide-react"

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const navigate = (href: string) => {
    setOpen(false)
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      window.open(href, "_blank")
    } else {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const switchTheme = (theme: string) => {
    setTheme(theme)
    setOpen(false)
  }

  return (
    <>
      {/* Floating hint button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/60 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all shadow-lg"
        aria-label="Open command palette"
      >
        <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-secondary border border-border/60">
          Cmd
        </kbd>
        <span>+</span>
        <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-secondary border border-border/60">
          K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => navigate("#home")}>
              <Home className="mr-2 h-4 w-4" />
              Home
            </CommandItem>
            <CommandItem onSelect={() => navigate("#about")}>
              <User className="mr-2 h-4 w-4" />
              About
            </CommandItem>
            <CommandItem onSelect={() => navigate("#services")}>
              <Workflow className="mr-2 h-4 w-4" />
              What I Do
            </CommandItem>
            <CommandItem onSelect={() => navigate("#experience")}>
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </CommandItem>
            <CommandItem onSelect={() => navigate("#skills")}>
              <Code2 className="mr-2 h-4 w-4" />
              Tech Stack
            </CommandItem>
            <CommandItem onSelect={() => navigate("#projects")}>
              <FolderKanban className="mr-2 h-4 w-4" />
              Projects
            </CommandItem>
            <CommandItem onSelect={() => navigate("#github")}>
              <Github className="mr-2 h-4 w-4" />
              Open Source
            </CommandItem>
            <CommandItem onSelect={() => navigate("#blog")}>
              <PenLine className="mr-2 h-4 w-4" />
              Blog
            </CommandItem>
            <CommandItem onSelect={() => navigate("#contact")}>
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => switchTheme("light")}>
              <Sun className="mr-2 h-4 w-4" />
              Light Mode
            </CommandItem>
            <CommandItem onSelect={() => switchTheme("dark")}>
              <Moon className="mr-2 h-4 w-4" />
              Dark Mode
            </CommandItem>
            <CommandItem onSelect={() => switchTheme("reading")}>
              <BookOpen className="mr-2 h-4 w-4" />
              Reading Mode
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Links">
            <CommandItem onSelect={() => navigate("https://github.com/kirankandel")}>
              <Github className="mr-2 h-4 w-4" />
              GitHub
              <CommandShortcut><ArrowUpRight className="h-3 w-3" /></CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => navigate("https://www.linkedin.com/in/kiran-kandel-47460216b/")}>
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
              <CommandShortcut><ArrowUpRight className="h-3 w-3" /></CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => navigate("mailto:kirankandel007@gmail.com")}>
              <Mail className="mr-2 h-4 w-4" />
              Send Email
              <CommandShortcut><ArrowUpRight className="h-3 w-3" /></CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => navigate("/resume.pdf")}>
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
              <CommandShortcut><ArrowUpRight className="h-3 w-3" /></CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
