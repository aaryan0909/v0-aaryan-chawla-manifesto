'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { DraftingCompass, Moon, Sun } from 'lucide-react'

const THEMES = [
  { value: 'paper', label: 'Paper', Icon: Sun },
  { value: 'ink', label: 'Ink', Icon: Moon },
  { value: 'blueprint', label: 'Blueprint', Icon: DraftingCompass },
] as const

/**
 * Always-visible colour scheme switch. Lives in the fixed nav, so it is
 * on screen at all times. Choice persists via next-themes (localStorage);
 * before any choice is made it follows the OS: light -> Paper, dark -> Ink.
 */
export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const active = !mounted
    ? undefined
    : theme === 'system' || !theme
      ? resolvedTheme === 'dark'
        ? 'ink'
        : 'paper'
      : theme

  return (
    <div
      role="group"
      aria-label="Colour scheme"
      className="flex items-center gap-1 rounded-full border border-border bg-card/90 p-1 shadow-sm backdrop-blur-md"
    >
      {THEMES.map(({ value, label, Icon }) => {
        const isActive = active === value
        return (
          <button
            key={value}
            type="button"
            title={`${label} theme`}
            aria-label={`${label} theme`}
            aria-pressed={isActive}
            onClick={() => setTheme(value)}
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase transition-colors ${
              isActive
                ? 'bg-highlight text-accent-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            <span className="hidden md:inline">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
