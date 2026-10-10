import React, { useState, useEffect } from 'react'
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { ThemeToggle } from './ThemeToggle'
import './Navbar.css'

interface NavbarProps {
  onOpenResume: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['hero', 'about', 'systems', 'experience', 'skills', 'contact']
      const scrollPosition = window.scrollY + 120

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#systems', label: 'Systems & Projects', id: 'systems' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Monogram */}
        <a href="#hero" className="brand-logo" aria-label="Sreerag E G Homepage">
          <div className="monogram-badge">
            <span className="monogram-text">SE</span>
            <span className="brand-dot" />
          </div>
          <div className="brand-info">
            <span className="brand-name">{portfolioData.personal.preferredName} E G</span>
            <span className="brand-role">Full Stack Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
              {activeSection === link.id && <span className="nav-active-pill" />}
            </a>
          ))}
        </nav>

        {/* Controls: Theme Toggle & Resume Action */}
        <div className="nav-actions">
          <ThemeToggle />

          <button
            type="button"
            className="btn-secondary resume-nav-btn"
            onClick={onOpenResume}
            aria-label="View Resume"
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          <a href="#contact" className="btn-primary contact-nav-btn">
            <span>Connect</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel-elevated" role="dialog" aria-modal="true">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="btn-secondary w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenResume()
                }}
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </button>
              <a
                href="#contact"
                className="btn-primary w-full"
                onClick={handleLinkClick}
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
