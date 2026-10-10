import React, { useState } from 'react'
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  MapPin, 
  ExternalLink,
  Sparkles
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { portfolioData } from '../data/portfolioData'
import './Contact.css'

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [copiedMessage, setCopiedMessage] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleSendMailto = (e: React.FormEvent) => {
    e.preventDefault()
    const encodedSubject = encodeURIComponent(subject.trim() || `Inquiry from ${name || 'Portfolio Visitor'}`)
    const encodedBody = encodeURIComponent(
      `Hi Sreerag,\n\n${message}\n\nBest regards,\n${name || 'Recruiter / Engineering Leader'}`
    )
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${encodedSubject}&body=${encodedBody}`
  }

  const handleCopyDraft = () => {
    const draft = `To: ${portfolioData.personal.email}\nSubject: ${subject || 'Inquiry'}\n\n${message}\n\n- ${name || 'Sender'}`
    navigator.clipboard.writeText(draft)
    setCopiedMessage(true)
    setTimeout(() => setCopiedMessage(false), 2500)
  }

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's Discuss Opportunities & Systems
          </h2>
          <p className="section-description">
            Whether you are hiring for full-stack, distributed backend, or platform engineering roles, or want to discuss architecture trade-offs, my inbox is open.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Direct Verified Details Column */}
          <div className="contact-info-col">
            <div className="contact-info-card glass-frosted specular-top-edge">
              <h3 className="contact-col-title">Verified Contact Channels</h3>
              <p className="contact-col-subtitle">
                Direct communication links verified from resume. Feel free to copy or reach out directly.
              </p>

              {/* Email Card */}
              <div className="channel-box glass-panel">
                <div className="channel-icon-wrap">
                  <Mail size={20} className="text-accent" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Email Address</span>
                  <a href={`mailto:${portfolioData.personal.email}`} className="channel-val">
                    {portfolioData.personal.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-action-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="channel-box glass-panel">
                <div className="channel-icon-wrap">
                  <LinkedinIcon size={20} className="text-accent" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">LinkedIn Profile</span>
                  <span className="channel-val">linkedin.com/in/{portfolioData.personal.linkedin}</span>
                </div>
                <a
                  href={portfolioData.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-action-btn"
                  title="Open LinkedIn profile"
                  aria-label="Open LinkedIn"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* GitHub Card */}
              <div className="channel-box glass-panel">
                <div className="channel-icon-wrap">
                  <GithubIcon size={20} className="text-accent" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">GitHub Repository</span>
                  <span className="channel-val">github.com/{portfolioData.personal.github}</span>
                </div>
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-action-btn"
                  title="Open GitHub profile"
                  aria-label="Open GitHub"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Location Card */}
              <div className="channel-box glass-panel">
                <div className="channel-icon-wrap">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Current Location</span>
                  <span className="channel-val">{portfolioData.personal.location}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Native Message Composer */}
          <div className="contact-form-col">
            <div className="composer-card glass-frosted specular-top-edge">
              <div className="composer-header">
                <div className="composer-badge">
                  <Sparkles size={14} className="text-accent" />
                  <span>Direct Mailto Composer</span>
                </div>
                <h3 className="composer-title">Compose a Quick Message</h3>
                <p className="composer-note">
                  Opens directly in your default email client with pre-filled parameters. Zero fake server submissions.
                </p>
              </div>

              <form onSubmit={handleSendMailto} className="composer-form">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Jane Doe / Engineering Manager"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="e.g. Opportunity: Full Stack / Backend Engineer"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Hi Sreerag, I noticed your work with distributed AWS microservices and LLM agent pipelines..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-input form-textarea"
                  />
                </div>

                <div className="composer-actions">
                  <button type="submit" className="btn-primary composer-submit-btn">
                    <Send size={16} />
                    <span>Open in Email App</span>
                  </button>

                  <button
                    type="button"
                    className="btn-secondary copy-draft-btn"
                    onClick={handleCopyDraft}
                    title="Copy full message text to clipboard"
                  >
                    {copiedMessage ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    <span>{copiedMessage ? 'Copied Draft' : 'Copy Text'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
