import React from 'react'
import { GraduationCap, Award, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import './Education.css'

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-wrapper education-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Foundation & Values</span>
          </div>
          <h2 className="section-title">
            Education & Core Engineering Principles
          </h2>
          <p className="section-description">
            Academic computer science grounding paired with strict adherence to production engineering discipline and compliance standards.
          </p>
        </div>

        <div className="education-grid">
          
          {/* Education Card */}
          <div className="education-card glass-frosted specular-top-edge">
            <div className="edu-card-top">
              <div className="edu-icon-badge">
                <GraduationCap size={24} className="text-accent" />
              </div>
              <div className="edu-title-block">
                <span className="badge-pill edu-score-pill">
                  <Award size={12} />
                  <span>CGPA: {portfolioData.education[0].score}</span>
                </span>
                <h3 className="edu-degree">{portfolioData.education[0].degree}</h3>
                <p className="edu-field">{portfolioData.education[0].field}</p>
                <p className="edu-institution">{portfolioData.education[0].institution}</p>
              </div>
            </div>

            <div className="edu-highlights">
              <h4 className="edu-subheading">
                <BookOpen size={14} className="text-accent" />
                <span>Core Academic Areas</span>
              </h4>
              <ul className="edu-highlights-list">
                {portfolioData.education[0].highlights?.map((h, i) => (
                  <li key={i} className="edu-highlight-item">
                    <CheckCircle2 size={15} className="edu-check" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Principles Column */}
          <div className="principles-card glass-frosted specular-top-edge">
            <h3 className="principles-title">
              <ShieldCheck size={20} className="text-accent" />
              <span>Engineering Disciplines in Practice</span>
            </h3>

            <div className="principles-list">
              {portfolioData.engineeringPrinciples.map((item, idx) => (
                <div key={idx} className="principle-item glass-panel">
                  <h4 className="principle-name">{item.title}</h4>
                  <p className="principle-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
