import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ArchitectureDeepDive } from './components/ArchitectureDeepDive'
import { SystemsAndProjects } from './components/SystemsAndProjects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ResumeModal } from './components/ResumeModal'
import './App.css'

export function AppContent() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  useEffect(() => {
    let rafId: number | null = null

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
        rafId = null
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="portfolio-app-root">
      {/* Multi-Layered Atmospheric Ambient Lighting */}
      <div className="bg-ambient-mesh" aria-hidden="true">
        <div className="mesh-orb mesh-orb-hero" />
        <div className="mesh-orb mesh-orb-hero-cyan" />
        <div className="mesh-orb mesh-orb-architecture" />
        <div className="mesh-orb mesh-orb-systems" />
        <div className="mesh-orb mesh-orb-closing" />
      </div>

      {/* Dynamic Cursor Spotlight Reflection */}
      <div className="bg-cursor-spotlight" aria-hidden="true" />

      {/* Tactile Frosted Glass Micro-Grain Texture */}
      <div className="bg-glass-grain" aria-hidden="true" />

      {/* Subtle Focus Vignette */}
      <div className="bg-vignette" aria-hidden="true" />

      {/* Subtle Engineering Grid Backdrop */}
      <div className="bg-grid-pattern" aria-hidden="true" />

      {/* Floating Translucent Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Page Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <ArchitectureDeepDive />
        <SystemsAndProjects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Resume Viewer / Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
