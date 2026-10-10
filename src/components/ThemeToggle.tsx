import React from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'
import { useTheme, type ThemeMode } from '../context/ThemeContext'
import './ThemeToggle.css'

export const ThemeToggle: React.FC = () => {
  const { themeMode, effectiveTheme, setThemeMode } = useTheme()

  const modes: { id: ThemeMode; label: string; icon: React.ReactNode }[] = [
    {
      id: 'system',
      label: `System (${effectiveTheme})`,
      icon: <Laptop size={14} aria-hidden="true" />
    },
    {
      id: 'light',
      label: 'Light',
      icon: <Sun size={14} aria-hidden="true" />
    },
    {
      id: 'dark',
      label: 'Dark',
      icon: <Moon size={14} aria-hidden="true" />
    }
  ]

  return (
    <div
      className="theme-toggle-container"
      role="radiogroup"
      aria-label="Theme mode selection"
    >
      {modes.map((mode) => {
        const isActive = themeMode === mode.id
        return (
          <button
            key={mode.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            className={`theme-toggle-btn ${isActive ? 'active' : ''}`}
            onClick={() => setThemeMode(mode.id)}
            title={`Switch to ${mode.id} theme`}
            aria-label={`Switch to ${mode.id} theme`}
          >
            {mode.icon}
            <span className="theme-toggle-label">{mode.id}</span>
          </button>
        )
      })}
    </div>
  )
}
