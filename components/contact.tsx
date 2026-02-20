"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function Contact() {
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
          05 &mdash; Say hello
        </p>

        <div
          className={`flex flex-col gap-8 transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="font-serif text-2xl leading-snug font-light text-primary md:text-3xl">
            If you read this far, we should probably talk.
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            <a
              href="mailto:aaryanchawla@outlook.com"
              className="group inline-flex items-center gap-2 border-b border-foreground/20 pb-1 text-lg text-foreground transition-colors hover:border-highlight hover:text-highlight"
            >
              aaryanchawla@outlook.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://linkedin.com/in/aaryan-chawla"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-b border-foreground/20 pb-1 text-lg text-foreground transition-colors hover:border-highlight hover:text-highlight"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
