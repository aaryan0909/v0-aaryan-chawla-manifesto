"use client"

import { useEffect, useRef, useState } from "react"

export function HowIThink() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="border-t border-border px-6 py-24 md:px-16 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-3xl">
        <p
          className={`mb-12 font-mono text-xs tracking-widest text-highlight uppercase transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          02 &mdash; How I think
        </p>

        <blockquote
          className={`mb-12 border-l-2 border-highlight pl-6 font-serif text-2xl leading-snug font-light text-primary md:text-3xl transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          A number that looks credible and isn{"'"}t is more dangerous than no
          number at all.
        </blockquote>

        <div className="flex flex-col gap-8">
          <p
            className={`text-lg leading-relaxed text-foreground/90 md:text-xl transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            I think in systems. When something breaks, I don{"'"}t reach for the fix.
            I reach for the reason. Most people want dashboards. I want to know
            if the data feeding the dashboard is honest first.
          </p>

          <p
            className={`text-lg leading-relaxed text-foreground/90 md:text-xl transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            The 50/50 brain means I never approach a problem from one direction.
            I can build the model and tell the story about why it matters. I can
            write the SQL and know which question the business actually needs
            answered. Most people are one or the other. I{"'"}m wired to be both,
            and I{"'"}ve stopped apologizing for it.
          </p>

          <p
            className={`text-lg leading-relaxed text-foreground/90 md:text-xl transition-all duration-700 delay-[400ms] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span className="text-foreground font-medium">
              I feel in stories. I think in data. The tension between those two
              things is where everything interesting happens.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
