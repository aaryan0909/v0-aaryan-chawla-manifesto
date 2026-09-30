"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end px-6 pb-16 pt-24 md:px-16 lg:px-24"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-highlight/[0.03] blur-[120px]" />

      <div className="relative flex flex-col gap-6">
        <p
          className={`font-mono text-[11px] tracking-[0.3em] text-foreground/40 uppercase transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Mumbai &mdash; Ontario &mdash; Wherever the problem is
        </p>

        <h1
          className={`font-serif text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] font-light tracking-tight text-primary transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          Aaryan
          <br />
          Chawla
        </h1>

        <div
          className={`mt-4 h-px w-24 bg-highlight transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "w-24 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* The facts, before the philosophy */}
        <p
          className={`font-mono text-[11px] tracking-[0.2em] text-foreground/60 uppercase transition-all duration-1000 delay-[550ms] ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-highlight align-middle" />
          Data Orchestration Specialist &middot; Manulife &middot; Toronto
        </p>

        <p
          className={`max-w-lg text-lg leading-relaxed text-foreground/70 md:text-xl transition-all duration-1000 delay-600 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Data felt like the thing running underneath everything &mdash;{" "}
          <span className="text-foreground/90">
            and I needed to learn how to read it.
          </span>
        </p>

        <div
          className={`mt-12 flex items-center gap-3 transition-all duration-1000 delay-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="h-8 w-px animate-pulse bg-highlight/60" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/30 uppercase">
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}
