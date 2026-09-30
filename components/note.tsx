import type { ReactNode } from 'react'

/**
 * Margin-note aside: the site's dry commentary track.
 * The main copy stays precise; the personality lives here.
 * Ruled with the accent, set in mono, coloured with the muted text
 * token (WCAG AA in every theme).
 */
export function Note({ children }: { children: ReactNode }) {
  return (
    <aside className="my-10 flex max-w-md items-start gap-3 border-l-2 border-highlight pl-4">
      <span
        aria-hidden="true"
        className="mt-0.5 shrink-0 font-mono text-[10px] tracking-[0.25em] text-highlight uppercase"
      >
        Note
      </span>
      <p className="font-mono text-xs leading-relaxed text-muted-foreground md:text-[13px]">
        {children}
      </p>
    </aside>
  )
}
