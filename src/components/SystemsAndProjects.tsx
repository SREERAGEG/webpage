import React, { useState } from 'react'
import { 
  Server, 
  Cpu, 
  ShieldCheck, 
  Code2, 
  CheckCircle2, 
  Layers,
  ChevronDown,
  ChevronUp,
  Workflow
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import './SystemsAndProjects.css'

export const SystemsAndProjects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all')
  const [expandedId, setExpandedId] = useState<string | null>('healthcare-copay-platform')

  const filterTabs = [
    { id: 'all', label: 'All Systems', count: portfolioData.featuredSystems.length },
    { id: 'distributed', label: 'Distributed & Cloud', count: portfolioData.featuredSystems.filter(s => s.category === 'distributed').length },
    { id: 'ai-engineering', label: 'AI & LLM Tooling', count: portfolioData.featuredSystems.filter(s => s.category === 'ai-engineering').length },
    { id: 'fullstack', label: 'Full Stack & APIs', count: portfolioData.featuredSystems.filter(s => s.category === 'fullstack').length },
    { id: 'automation', label: 'Automation & Security', count: portfolioData.featuredSystems.filter(s => s.category === 'automation').length }
  ]

  const filteredSystems = filter === 'all' 
    ? portfolioData.featuredSystems 
    : portfolioData.featuredSystems.filter(s => s.category === filter)

  const flagshipSystem = portfolioData.featuredSystems.find(s => s.id === 'healthcare-copay-platform')
  const isFlagshipFiltered = filter === 'all' || filter === 'distributed'

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id))
  }

  return (
    <section id="systems" className="section-wrapper systems-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Workflow size={14} />
            <span>Production Systems</span>
          </div>
          <h2 className="section-title">
            Engineered Systems & Production Architectures.
          </h2>
          <p className="section-description">
            Production platforms, distributed queue pipelines, and in-house developer tooling built with strict compliance, high throughput, and robust fault-tolerance.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="systems-filter-bar">
          <div className="filter-pill-group glass-surface-subtle">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                className={`filter-btn ${filter === tab.id ? 'active' : ''}`}
                onClick={() => setFilter(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="filter-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Feature Layout (When visible in filter) */}
        {flagshipSystem && isFlagshipFiltered && (
          <article className="flagship-case-study glass-tinted specular-top-edge">
            <div className="flagship-header-row">
              <div className="flagship-badge-group">
                <span className="badge-pill flagship-pill">
                  <Server size={12} />
                  <span>Flagship Production Platform</span>
                </span>
                <span className="badge-pill">
                  <span>AWS ECS & SQS</span>
                </span>
              </div>
              <span className="flagship-scope">Primary Author (~73% Commits)</span>
            </div>

            <div className="flagship-content-grid">
              <div className="flagship-main-col">
                <h3 className="flagship-title">{flagshipSystem.title}</h3>
                <p className="flagship-subtitle">{flagshipSystem.subtitle}</p>

                <p className="flagship-summary">{flagshipSystem.summary}</p>

                <div className="flagship-problem-box glass-surface-subtle">
                  <span className="box-tag">Challenge Solved</span>
                  <p className="box-text">{flagshipSystem.problemSolved}</p>
                </div>

                <div className="flagship-tech-row">
                  {flagshipSystem.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag primary-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flagship-stats-col">
                <div className="flagship-stats-card glass-surface-subtle">
                  <h4 className="stats-card-title">Production Telemetry</h4>
                  
                  <div className="flagship-metric-list">
                    <div className="flagship-metric-item">
                      <span className="metric-big text-accent-gradient">233</span>
                      <div className="metric-meta">
                        <span className="metric-name">Active Modules</span>
                        <span className="metric-context">8 extensible workflow base classes</span>
                      </div>
                    </div>

                    <div className="flagship-metric-item">
                      <span className="metric-big text-accent-gradient">500+</span>
                      <div className="metric-meta">
                        <span className="metric-name">Weekly Claims</span>
                        <span className="metric-context">Autoscaled AWS ECS worker pools</span>
                      </div>
                    </div>

                    <div className="flagship-metric-item">
                      <span className="metric-big text-accent-gradient">40+</span>
                      <div className="metric-meta">
                        <span className="metric-name">Payer Portals</span>
                        <span className="metric-context">Automated revenue-cycle workflows</span>
                      </div>
                    </div>
                  </div>

                  <div className="flagship-specs-toggle">
                    <button
                      type="button"
                      className="btn-secondary w-full"
                      onClick={() => toggleExpand(flagshipSystem.id)}
                    >
                      <Layers size={15} />
                      <span>{expandedId === flagshipSystem.id ? 'Hide Specifications' : 'Inspect Specifications'}</span>
                      {expandedId === flagshipSystem.id ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Expandable Specifications in Flagship */}
            {expandedId === flagshipSystem.id && (
              <div className="flagship-expanded-specs">
                <h4 className="specs-heading">Architectural Specifications & Guarantees</h4>
                <div className="specs-grid">
                  {flagshipSystem.architectureHighlights.map((hl, hlIdx) => (
                    <div key={hlIdx} className="spec-card-cell glass-surface-subtle">
                      <CheckCircle2 size={16} className="spec-check-icon" />
                      <span className="spec-cell-text">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        )}

        {/* Secondary Systems Grid */}
        <div className="secondary-systems-grid">
          {filteredSystems
            .filter(s => isFlagshipFiltered ? s.id !== 'healthcare-copay-platform' : true)
            .map(system => {
              const isExpanded = expandedId === system.id
              return (
                <article key={system.id} className="secondary-system-card glass-frosted specular-top-edge">
                  <div className="system-card-header">
                    <div className="system-badge-row">
                      <span className="badge-pill system-cat-badge">
                        {system.category === 'distributed' && <Server size={12} />}
                        {system.category === 'ai-engineering' && <Cpu size={12} />}
                        {system.category === 'fullstack' && <Code2 size={12} />}
                        {system.category === 'automation' && <ShieldCheck size={12} />}
                        <span>{system.category.replace('-', ' ').toUpperCase()}</span>
                      </span>

                      {system.metrics && system.metrics[0] && (
                        <span className="badge-pill stat-badge">
                          <span>{system.metrics[0].label}: {system.metrics[0].value}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="system-card-title">{system.title}</h3>
                    <p className="system-card-subtitle">{system.subtitle}</p>
                  </div>

                  <div className="system-card-body">
                    <p className="system-summary">{system.summary}</p>

                    <div className="problem-solution-box glass-surface-subtle">
                      <span className="box-tag">Challenge Solved</span>
                      <p className="box-text">{system.problemSolved}</p>
                    </div>

                    {isExpanded && (
                      <div className="system-architecture-details">
                        <h4 className="arch-heading">
                          <Layers size={14} className="text-accent" />
                          <span>Key Architecture Highlights</span>
                        </h4>
                        <ul className="arch-list">
                          {system.architectureHighlights.map((hl, hlIdx) => (
                            <li key={hlIdx} className="arch-item">
                              <CheckCircle2 size={15} className="arch-check" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="system-card-footer">
                    <div className="system-tech-tags">
                      {system.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    <div className="system-card-actions">
                      <button
                        type="button"
                        className="btn-ghost expand-btn"
                        onClick={() => toggleExpand(system.id)}
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Less Specs' : 'Architecture Specs'}</span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
        </div>

      </div>
    </section>
  )
}
