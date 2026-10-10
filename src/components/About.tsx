import React from 'react'
import { Compass, Check, Shield, Layers, Cpu, GitBranch } from 'lucide-react'
import './About.css'

export const About: React.FC = () => {
  const disciplines = [
    {
      num: '01',
      title: 'End-to-End Distributed Ownership',
      subtitle: 'From database schema to queue workers and React interfaces',
      description: 'Owns systems from API contract design and relational schemas up to containerized AWS ECS worker pools, SQS queue orchestration, and React front ends. Primary author of ~73% of platform commits with full operational accountability.',
      icon: <Layers size={18} />
    },
    {
      num: '02',
      title: 'Regulated Healthcare & HIPAA Controls',
      subtitle: 'Guaranteed PHI sanitization and least-privilege security',
      description: 'Operating in US healthcare copay-assistance requires absolute compliance. Enforces runtime PHI masking filters at the logging boundary, IAM least-privilege policies, and zero patient data leakage.',
      icon: <Shield size={18} />
    },
    {
      num: '03',
      title: 'Pragmatic, Human-Gated AI Acceleration',
      subtitle: 'Custom LLM agent pipelines delivering verified production code',
      description: 'Built a 2,100 LoC in-house LLM agent that converts recorded browser sessions into framework-compliant Page Object Model code. Every output is gated by peer code review, automated testing, and zero-credential screening.',
      icon: <Cpu size={18} />
    },
    {
      num: '04',
      title: 'Systematic Fault Tolerance & Observability',
      subtitle: 'Typed error hierarchies replacing brittle ad-hoc handlers',
      description: 'Replaced fragile call-site try/catch logic with a centralized typed error registry. Severity, retryability, and exponential backoff are first-class properties of classified errors, reducing maintenance overhead by 30%.',
      icon: <GitBranch size={18} />
    }
  ]

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>Engineering Profile</span>
          </div>
          <h2 className="section-title">
            Bridging Architecture, Reliability & Production Velocity.
          </h2>
          <p className="section-description">
            A developer who balances backend distributed rigor with clean front-end contracts, building high-throughput systems that solve complex enterprise workflow challenges.
          </p>
        </div>

        {/* Editorial Profile Grid */}
        <div className="about-editorial-grid">
          
          {/* Left Column: Narrative Story */}
          <div className="about-narrative-col">
            <div className="narrative-lead-card glass-frosted specular-top-edge">
              <span className="narrative-tag">Architectural Philosophy</span>
              <h3 className="narrative-heading">
                Designing Maintainable Abstractions for Real-World Constraints
              </h3>

              <div className="narrative-body-text">
                <p>
                  Over the course of engineering scalable systems, my focus has been on designing resilient backend architectures that remain stable under real-world constraints. As the primary author and technical owner of our production platform at <strong>GetCopayHelp (Kalki Safalya)</strong>, I architected the core OOP framework powering <strong>233 automation modules across 40+ US payer portals</strong>.
                </p>
                <p>
                  Rather than treating software engineering as isolated ticket delivery, I prioritize maintainable abstractions, typed error classifications, and automated safety gates. In an environment processing sensitive patient claims, every line of code matters — from HIPAA compliance masking at the logging layer to idempotent retry handling across distributed worker pools.
                </p>
                <p>
                  When payer portals migrated to Okta two-factor authentication, I designed a portal-agnostic email-OTP retrieval layer with watermark-based freshness and consume-once semantics, restoring automated workflows without race conditions.
                </p>
              </div>

              <div className="narrative-highlights-row">
                <div className="highlight-pill">
                  <Check size={14} className="text-accent" />
                  <span>~73% Platform Ownership</span>
                </div>
                <div className="highlight-pill">
                  <Check size={14} className="text-accent" />
                  <span>2,100 LoC LLM Tooling</span>
                </div>
                <div className="highlight-pill">
                  <Check size={14} className="text-accent" />
                  <span>Zero-PHI Safeguards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The 4 Disciplines */}
          <div className="about-disciplines-col">
            <div className="disciplines-list">
              {disciplines.map((item, idx) => (
                <div key={idx} className="discipline-spec-item glass-frosted specular-top-edge">
                  <div className="discipline-top-row">
                    <div className="discipline-header-left">
                      <span className="discipline-num">{item.num}</span>
                      <h4 className="discipline-name">{item.title}</h4>
                    </div>
                    <div className="discipline-icon-box">
                      {item.icon}
                    </div>
                  </div>

                  <span className="discipline-subtitle">{item.subtitle}</span>
                  <p className="discipline-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
