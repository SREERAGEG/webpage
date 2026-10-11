import React, { useState } from 'react'
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Server, 
  Cpu, 
  ShieldCheck, 
  Network,
  Activity,
  Layers,
  ArrowUpRight
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { portfolioData } from '../data/portfolioData'
import './Hero.css'

interface HeroProps {
  onOpenResume: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activePipeline, setActivePipeline] = useState<'distributed' | 'llm-agent' | 'resilience'>('distributed')

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        {/* Executive Split Viewport: Composed 2-column primary screen */}
        <div className="hero-split-viewport">
          
          {/* Left Column: Authoritative Engineering Narrative & Action Controls */}
          <div className="hero-narrative-col">
            {/* Top Eyebrow Bar */}
            <div className="hero-top-eyebrow">
              <div className="status-pill glass-surface-subtle">
                <span className="pulsing-dot" />
                <span className="status-text">Production Platform Engineer</span>
                <span className="status-divider">•</span>
                <span className="status-location">{portfolioData.personal.location}</span>
              </div>

              <div className="discipline-badge">
                <Layers size={13} className="text-accent" />
                <span>Distributed Systems & AI</span>
              </div>
            </div>

            {/* Master Headline */}
            <h1 className="hero-title">
              Architecting Resilient <span className="text-gradient">Distributed Engines</span> & AI-Driven Platforms.
            </h1>

            {/* Lead Narrative */}
            <p className="hero-description">
              Backend Software Engineer and primary author (roughly 73% of commits) of the production platform orchestrating <strong>233 automation modules across 40+ US payer portals</strong> on AWS ECS & SQS under strict HIPAA controls. Architect of custom LLM agent pipelines delivering compliant, high-velocity engineering.
            </p>

            {/* Action Controls */}
            <div className="hero-actions-row">
              <a href="#systems" className="btn-primary hero-main-cta">
                <span>Explore Systems</span>
                <ArrowRight size={16} />
              </a>

              <a href="#architecture" className="btn-secondary hero-secondary-cta">
                <Network size={16} />
                <span>Architecture Blueprint</span>
              </a>

              <button
                type="button"
                className="btn-ghost resume-pill-btn"
                onClick={onOpenResume}
              >
                <FileText size={15} />
                <span>Inspect Resume</span>
              </button>
            </div>

            {/* Direct Channels */}
            <div className="hero-channels-strip">
              <span className="channels-label">Verified Links:</span>
              
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-channel-link"
                title="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>github.com/{portfolioData.personal.github}</span>
                <ArrowUpRight size={12} className="link-arrow" />
              </a>

              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-channel-link"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} className="link-arrow" />
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="hero-channel-link"
                title="Direct Email"
              >
                <Mail size={16} />
                <span>{portfolioData.personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Executive Platform Telemetry Console (Signature Focal Point) */}
          <div className="hero-console-col">
            <div className="console-wrapper-relative">
              <div className="console-backlight-aura" aria-hidden="true" />
              <div className="hero-telemetry-console glass-frosted specular-top-edge">
            <div className="console-header-bar">
            <div className="console-title-group">
              <Activity size={16} className="text-accent pulse-icon" />
              <div>
                <span className="console-eyebrow">Production Platform Architecture</span>
                <h2 className="console-title">US Healthcare Copay, Claim & Revenue-Cycle Engine</h2>
              </div>
            </div>

            <div className="console-tab-controls" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activePipeline === 'distributed'}
                className={`console-tab-btn ${activePipeline === 'distributed' ? 'active' : ''}`}
                onClick={() => setActivePipeline('distributed')}
              >
                <Server size={14} />
                <span>AWS ECS / SQS Pipeline</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activePipeline === 'llm-agent'}
                className={`console-tab-btn ${activePipeline === 'llm-agent' ? 'active' : ''}`}
                onClick={() => setActivePipeline('llm-agent')}
              >
                <Cpu size={14} />
                <span>2,100 LoC LLM Agent</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activePipeline === 'resilience'}
                className={`console-tab-btn ${activePipeline === 'resilience' ? 'active' : ''}`}
                onClick={() => setActivePipeline('resilience')}
              >
                <ShieldCheck size={14} />
                <span>Typed Resilience Registry</span>
              </button>
            </div>
          </div>

          {/* Console Active Content Display */}
          <div className="console-stage-body">
            {activePipeline === 'distributed' && (
              <div className="console-pipeline-view">
                <div className="pipeline-flow-diagram">
                  <div className="flow-step-box">
                    <span className="step-num">01</span>
                    <span className="step-name">FastAPI Gateway</span>
                    <span className="step-sub">100+ daily runs routed</span>
                  </div>
                  <div className="flow-connector">──►</div>
                  <div className="flow-step-box">
                    <span className="step-num">02</span>
                    <span className="step-name">4 SQS / Celery Queues</span>
                    <span className="step-sub">Workload class isolation</span>
                  </div>
                  <div className="flow-connector">──►</div>
                  <div className="flow-step-box">
                    <span className="step-num">03</span>
                    <span className="step-name">AWS ECS Worker Fleet</span>
                    <span className="step-sub">Autoscaled containers</span>
                  </div>
                  <div className="flow-connector">──►</div>
                  <div className="flow-step-box active-node">
                    <span className="step-num">04</span>
                    <span className="step-name">233 Automation Modules</span>
                    <span className="step-sub">Across 40+ payer portals</span>
                  </div>
                </div>

                <div className="pipeline-specs-summary">
                  <div className="spec-item">
                    <span className="spec-label">Throughput</span>
                    <span className="spec-value text-accent-gradient">500+ Weekly Claims</span>
                    <span className="spec-desc">Sustained horizontal execution with zero downtime</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Compliance Boundary</span>
                    <span className="spec-value">HIPAA & PHI Masking</span>
                    <span className="spec-desc">Typed maskers intercepting logs at runtime boundaries</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Architecture</span>
                    <span className="spec-value">Extensible OOP Core</span>
                    <span className="spec-desc">8 workflow base classes eliminating per-script duplication</span>
                  </div>
                </div>
              </div>
            )}

            {activePipeline === 'llm-agent' && (
              <div className="console-pipeline-view">
                <div className="pipeline-flow-diagram">
                  <div className="flow-step-box">
                    <span className="step-num">01</span>
                    <span className="step-name">Browser Recording</span>
                    <span className="step-sub">Session interaction trace</span>
                  </div>
                  <div className="flow-connector">──►</div>
                  <div className="flow-step-box">
                    <span className="step-num">02</span>
                    <span className="step-name">Zero-PHI Sanitizer</span>
                    <span className="step-sub">Strip all patient credentials</span>
                  </div>
                  <div className="flow-connector">──►</div>
                  <div className="flow-step-box active-node">
                    <span className="step-num">03</span>
                    <span className="step-name">LLM AST Generator</span>
                    <span className="step-sub">Synthesize Page Object Model</span>
                  </div>
                  <div className="flow-connector">──►</div>
                  <div className="flow-step-box">
                    <span className="step-num">04</span>
                    <span className="step-name">Pytest Validation Gate</span>
                    <span className="step-sub">Unit tests & peer review</span>
                  </div>
                </div>

                <div className="pipeline-specs-summary">
                  <div className="spec-item">
                    <span className="spec-label">Turnaround Impact</span>
                    <span className="spec-value text-accent-gradient">Days → Hours</span>
                    <span className="spec-desc">Collapsed new-portal onboarding from days to hours</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Custom Tooling Size</span>
                    <span className="spec-value">2,100 Lines of Code</span>
                    <span className="spec-desc">Proprietary in-house developer tool built in Python</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Safety Mandate</span>
                    <span className="spec-value">100% Human & CI Gated</span>
                    <span className="spec-desc">No unverified AI output ever merged without review</span>
                  </div>
                </div>
              </div>
            )}

            {activePipeline === 'resilience' && (
              <div className="console-pipeline-view">
                <div className="pipeline-flow-diagram">
                  <div className="flow-step-box">
                    <span className="step-num">01</span>
                    <span className="step-name">Runtime Exception</span>
                    <span className="step-sub">Portal UI change or network drop</span>
                  </div>
                  <div className="flow-connector">──►</div>
                  <div className="flow-step-box active-node">
                    <span className="step-num">02</span>
                    <span className="step-name">Typed Error Classifier</span>
                    <span className="step-sub">Severity & retryability analysis</span>
                  </div>
                  <div className="flow-connector">──►</div>
                  <div className="flow-step-box">
                    <span className="step-num">03</span>
                    <span className="step-name">Exponential Backoff</span>
                    <span className="step-sub">Jitter & dead-letter queue</span>
                  </div>
                  <div className="flow-connector">──►</div>
                  <div className="flow-step-box">
                    <span className="step-num">04</span>
                    <span className="step-name">Okta 2FA Resolver</span>
                    <span className="step-sub">Watermark-based email OTP</span>
                  </div>
                </div>

                <div className="pipeline-specs-summary">
                  <div className="spec-item">
                    <span className="spec-label">Maintenance Overhead</span>
                    <span className="spec-value text-accent-gradient">-30% Maintenance</span>
                    <span className="spec-desc">Systematic failure triage instead of ad-hoc call sites</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">2FA Freshness</span>
                    <span className="spec-value">Consume-Once OTP</span>
                    <span className="spec-desc">Restored automated login after payer portal Okta migration</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Observability</span>
                    <span className="spec-value">Centralized Telemetry</span>
                    <span className="spec-desc">Error class analytics driving engineering prioritization</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
          </div>
        </div>

        {/* Integrated Editorial Telemetry Strip */}
        <div className="telemetry-strip-wrapper glass-frosted specular-top-edge">
          <div className="telemetry-metrics-grid">
            {portfolioData.verifiedMetrics.map((metric, idx) => (
              <div key={idx} className="telemetry-metric-item">
                <div className="metric-number-display text-accent-gradient">
                  {metric.value}
                </div>
                <div className="metric-label-display">{metric.label}</div>
                <p className="metric-context-display">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
