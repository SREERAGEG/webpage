import React from 'react'
import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { portfolioData } from '../data/portfolioData'
import './Footer.css'

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        
        {/* Footer Top / Info */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-monogram">SE</span>
            </div>
            <div>
              <span className="footer-name">{portfolioData.personal.preferredName} E G</span>
              <p className="footer-tagline">{portfolioData.personal.headline}</p>
            </div>
          </div>

          <div className="footer-socials">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="footer-social-link"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {CURRENT_YEAR} {portfolioData.personal.name}. Built with React, TypeScript & Vanilla CSS tokens.
          </p>

          <div className="footer-actions">
            <button
              type="button"
              className="back-to-top-btn glass-panel"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
