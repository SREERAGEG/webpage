import React from 'react'
import { Briefcase, Calendar, MapPin, CheckCircle2, Building } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import './Experience.css'

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-wrapper experience-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Track Record</span>
          </div>
          <h2 className="section-title">
            Professional Experience & Career History.
          </h2>
          <p className="section-description">
            Production engineering experience across distributed microservices, regulated healthcare platforms, enterprise REST systems, and full-stack development.
          </p>
        </div>

        {/* Editorial Timeline Container */}
        <div className="editorial-timeline">
          {portfolioData.experiences.map((exp, expIdx) => (
            <article key={exp.id} className="timeline-entry">
              
              {/* Timeline Marker Spine */}
              <div className="timeline-spine">
                <div className={`timeline-node ${exp.isCurrent ? 'current-node' : ''}`}>
                  {exp.isCurrent ? <span className="pulsing-dot" /> : <div className="static-node-dot" />}
                </div>
                {expIdx < portfolioData.experiences.length - 1 && (
                  <div className="timeline-connecting-line" />
                )}
              </div>

              {/* Timeline Content Block */}
              <div className="timeline-content-card glass-frosted specular-top-edge">
                
                {/* Header Row */}
                <div className="timeline-entry-header">
                  <div className="entry-title-wrap">
                    <div className="company-badge-box">
                      <Building size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="entry-company-row">
                        <span className="entry-company">{exp.company}</span>
                        {exp.organizationDetail && (
                          <span className="entry-org-sub">• {exp.organizationDetail}</span>
                        )}
                        {exp.isCurrent && (
                          <span className="badge-pill current-pill">Present Role</span>
                        )}
                      </div>
                      <h3 className="entry-role-title">{exp.title}</h3>
                    </div>
                  </div>

                  <div className="entry-meta-badges">
                    <span className="badge-pill">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                    {exp.location && (
                      <span className="badge-pill">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </span>
                    )}
                    <span className="badge-pill">
                      <span>{exp.type}</span>
                    </span>
                  </div>
                </div>

                {/* Role Overview */}
                <p className="entry-overview-text">{exp.overview}</p>

                {/* Key Accomplishments Breakdown */}
                <div className="entry-accomplishments-block">
                  <h4 className="accomplishments-title">Engineering Accomplishments & Responsibilities</h4>
                  
                  <div className="accomplishments-grid">
                    {exp.bulletPoints.map((point, pIdx) => {
                      // Separate title prefix if present (e.g. "AI-Assisted Development Pipeline: ...")
                      const colonIdx = point.indexOf(':')
                      const hasPrefix = colonIdx > 0 && colonIdx < 35
                      const prefix = hasPrefix ? point.substring(0, colonIdx) : null
                      const rest = hasPrefix ? point.substring(colonIdx + 1) : point

                      return (
                        <div key={pIdx} className="accomplishment-item">
                          <CheckCircle2 size={16} className="accomplishment-icon" />
                          <div className="accomplishment-content">
                            {prefix && <strong className="accomplishment-prefix">{prefix}: </strong>}
                            <span className="accomplishment-text">{rest}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Applied Technologies Footer */}
                <div className="entry-tech-footer">
                  <span className="tech-footer-label">Technologies:</span>
                  <div className="entry-tech-tags">
                    {exp.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag primary-tag">{t}</span>
                    ))}
                  </div>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
