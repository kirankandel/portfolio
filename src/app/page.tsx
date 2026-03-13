import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import GitHubSection from "@/components/github-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <GitHubSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </div>
  )
}
