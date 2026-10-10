import React, { useState, useMemo } from 'react'
import { 
  Code2, 
  Search, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Cloud, 
  Database, 
  ShieldCheck, 
  Layout,
  X
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import './Skills.css'

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'languages': return <Terminal size={17} />
      case 'backend': return <Code2 size={17} />
      case 'cloud-devops': return <Cloud size={17} />
      case 'data-messaging': return <Database size={17} />
      case 'ai-engineering': return <Cpu size={17} />
      case 'frontend': return <Layout size={17} />
      case 'reliability-security': return <ShieldCheck size={17} />
      default: return <Sparkles size={17} />
    }
  }

  const filteredCategories = useMemo(() => {
    return portfolioData.skillCategories
      .filter(category => {
        if (selectedCategory !== 'all' && category.id !== selectedCategory) {
          return false
        }
        return true
      })
      .map(category => {
        if (!searchQuery.trim()) return category

        const query = searchQuery.toLowerCase()
        const matchingSkills = category.skills.filter(s => 
          s.name.toLowerCase().includes(query) || 
          (s.context && s.context.toLowerCase().includes(query))
        )

        return {
          ...category,
          skills: matchingSkills
        }
      })
      .filter(cat => cat.skills.length > 0)
  }, [searchQuery, selectedCategory])

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Technologies, Frameworks & Engineering Stack.
          </h2>
          <p className="section-description">
            A verified inventory of technologies utilized in production systems, distributed cloud environments, and compliance-driven automation.
          </p>
        </div>

        {/* Filter Controls HUD */}
        <div className="skills-filter-hud">
          <div className="skills-search-wrap glass-surface-subtle">
            <Search size={15} className="search-icon" />
            <input
              id="skills-search"
              name="skillsSearch"
              type="text"
              placeholder="Search technologies or production context (e.g. AWS, Python, Celery, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
              aria-label="Filter skills"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear filter"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="category-scroll-pills">
            <button
              type="button"
              className={`cat-pill ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              <span>All Categories</span>
            </button>
            {portfolioData.skillCategories.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`cat-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Technical Stack Grid Matrix */}
        <div className="skills-matrix-grid">
          {filteredCategories.map(category => (
            <div key={category.id} className="skill-category-matrix glass-frosted specular-top-edge">
              <div className="matrix-header">
                <div className="matrix-icon-box">
                  {getCategoryIcon(category.id)}
                </div>
                <div className="matrix-title-wrap">
                  <h3 className="matrix-title">{category.name}</h3>
                  <p className="matrix-desc">{category.description}</p>
                </div>
              </div>

              <div className="matrix-skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`skill-matrix-item ${skill.isPrimary ? 'primary-cell' : ''}`}
                  >
                    <div className="skill-item-header">
                      <span className="skill-name">{skill.name}</span>
                      {skill.isPrimary && (
                        <span className="core-badge" title="Core Production Focus">Core</span>
                      )}
                    </div>
                    {skill.context && (
                      <p className="skill-context">{skill.context}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="no-skills-found glass-panel">
              <p>No technologies matched "{searchQuery}". Try searching for Python, AWS, Docker, or React.</p>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all') }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
