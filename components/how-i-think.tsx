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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-32 md:px-16 md:py-40 lg:px-24">
      {/* Full-width background quote */}
      <div
        className={`mb-20 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <p className="font-mono text-[11px] tracking-[0.3em] text-highlight uppercase mb-8">
          02 &mdash; How I think
        </p>
        <blockquote className="font-serif text-[clamp(1.8rem,4.5vw,4rem)] leading-[1.1] font-light text-primary">
          <span className="text-highlight">{'"'}</span>
          A number that looks credible and isn{"'"}t is more dangerous than no number at all.
          <span className="text-highlight">{'"'}</span>
        </blockquote>
      </div>

      {/* Two-column layout for the thinking patterns */}
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div
            className={`flex flex-col gap-4 transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="font-mono text-[11px] tracking-[0.2em] text-foreground/40 uppercase">
              Systems
            </h3>
            <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
              When something breaks, I don{"'"}t reach for the fix. I reach for the reason. Most people want dashboards. I want to know if the data feeding the dashboard is honest first.
            </p>
          </div>

          <div
            className={`flex flex-col gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="font-mono text-[11px] tracking-[0.2em] text-foreground/40 uppercase">
              Stories
            </h3>
            <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
              The 50/50 brain means I never approach a problem from one direction. I can build the model and tell the story about why it matters. I can write the SQL and know which question the business actually needs answered.
            </p>
          </div>
        </div>

        <div
          className={`mt-20 border-t border-foreground/[0.08] pt-8 transition-all duration-700 delay-[400ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="max-w-xl text-lg leading-relaxed text-foreground/90 font-medium md:text-xl">
            I feel in stories. I think in data. The tension between those two is where everything interesting happens.
          </p>
        </div>
      </div>
    </section>
  )
}
