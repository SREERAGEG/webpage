import React, { createContext, useContext, useEffect, useState } from 'react'

export type ThemeMode = 'system' | 'dark' | 'light'
export type EffectiveTheme = 'dark' | 'light'

interface ThemeContextType {
  themeMode: ThemeMode
  effectiveTheme: EffectiveTheme
  setThemeMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const STORAGE_KEY = 'portfolio_theme_mode'

function getSystemTheme(): EffectiveTheme {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialThemeMode(): ThemeMode {
  if (typeof window === 'undefined') return 'system'
  const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
  if (saved === 'dark' || saved === 'light' || saved === 'system') {
    return saved
  }
  return 'system'
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(getInitialThemeMode)
  const [systemTheme, setSystemTheme] = useState<EffectiveTheme>(getSystemTheme)

  // Listen for operating system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    // Modern API with fallback
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    } else {
      mediaQuery.addListener(handleChange)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      } else {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [])

  const effectiveTheme: EffectiveTheme = themeMode === 'system' ? systemTheme : themeMode

  // Apply theme class to <html> and <body> and persist
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(effectiveTheme)
    root.setAttribute('data-theme', effectiveTheme)
    root.style.colorScheme = effectiveTheme

    if (themeMode === 'system') {
      localStorage.setItem(STORAGE_KEY, 'system')
    } else {
      localStorage.setItem(STORAGE_KEY, themeMode)
    }
  }, [themeMode, effectiveTheme])

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode)
  }

  return (
    <ThemeContext.Provider value={{ themeMode, effectiveTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

// oxlint-disable-next-line react/only-export-components
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
