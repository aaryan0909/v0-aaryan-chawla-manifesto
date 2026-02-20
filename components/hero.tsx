"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-svh flex-col justify-between px-6 py-12 md:px-16 lg:px-24">
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Mumbai &mdash; Ontario
        </p>
      </div>

      <div className="flex max-w-4xl flex-col gap-8 py-24 md:py-32">
        <h1
          className={`font-serif text-5xl leading-tight font-light tracking-tight text-primary md:text-7xl lg:text-8xl transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <span className="text-balance">Aaryan Chawla</span>
        </h1>
        <p
          className={`max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          I chose data not to become an analyst.
          <br />
          <span className="text-foreground">
            I chose it because it felt like the thing running underneath
            everything, and I needed to learn how to read it.
          </span>
        </p>
      </div>

      <div
        className={`flex items-center gap-3 transition-all duration-1000 delay-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <ArrowDown className="h-4 w-4 animate-bounce text-muted-foreground" />
        <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
          Keep reading
        </span>
      </div>
    </section>
  )
}
