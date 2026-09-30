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
      className="relative flex min-h-[82svh] flex-col justify-end px-6 pt-24 pb-14 md:px-16 lg:px-24"
    >
      <div className="pointer-events-none absolute top-0 left-1/4 h-[420px] w-[420px] rounded-full bg-highlight/[0.03] blur-[120px]" />

      <div className="relative flex flex-col gap-5">
        <p
          className={`font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Mumbai &middot; Toronto &middot; Wherever the problem is
        </p>

        <h1
          className={`font-serif text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.9] font-light tracking-tight text-primary transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          Aaryan
          <br />
          Chawla
        </h1>

        <div
          className={`h-px bg-highlight transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "w-24 opacity-100" : "w-0 opacity-0"
          }`}
        />

        <div
          className={`flex flex-col gap-2 transition-all duration-1000 delay-[550ms] ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-highlight align-middle" />
            Data Orchestration Specialist &middot; Manulife &middot; Toronto
          </p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            Global Digital Marketing Measurement &amp; Insights
          </p>
        </div>

        <p
          className={`max-w-xl text-xl leading-snug text-foreground transition-all duration-1000 delay-600 ease-out md:text-2xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          I build the pipelines the numbers depend on.
        </p>
      </div>
    </section>
  )
}
