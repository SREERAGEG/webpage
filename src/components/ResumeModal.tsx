import React, { useEffect } from 'react'
import { X, Download, ExternalLink, FileText } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import './ResumeModal.css'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Resume Preview Modal">
      <div className="modal-container glass-floating specular-top-edge" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-icon-badge">
              <FileText size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="modal-title">{portfolioData.personal.name} — Resume</h3>
              <p className="modal-subtitle">{portfolioData.personal.title}</p>
            </div>
          </div>
          
          <div className="modal-actions">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Sreerag_EG_Full_Stack_Engineer.pdf"
              className="btn-primary modal-action-btn"
              title="Download PDF"
            >
              <Download size={15} />
              <span className="action-text">Download</span>
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary modal-action-btn"
              title="Open in new window"
            >
              <ExternalLink size={15} />
              <span className="action-text">Full View</span>
            </a>

            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body / Viewer */}
        <div className="modal-body">
          <object
            data={portfolioData.personal.resumeUrl}
            type="application/pdf"
            className="resume-pdf-frame"
            aria-label="Resume Document"
          >
            <div className="resume-fallback">
              <p>Your browser does not support embedded PDF preview.</p>
              <a
                href={portfolioData.personal.resumeUrl}
                download="Sreerag_EG_Full_Stack_Engineer.pdf"
                className="btn-primary"
                style={{ marginTop: '1rem' }}
              >
                <Download size={16} /> Download Resume PDF
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  )
}
