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
      className="px-6 py-32 md:px-16 md:py-40 lg:px-24"
    >
      <div className="mx-auto max-w-5xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-8 font-mono text-[11px] tracking-[0.3em] text-highlight uppercase">
            05 &mdash; Say hello
          </p>

          <h2 className="mb-16 font-serif text-3xl leading-snug font-light text-primary md:text-5xl">
            If you read this far,
            <br />
            we should probably talk.
          </h2>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
            <a
              href="mailto:aaryanchawla@outlook.com"
              className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-background transition-all hover:bg-highlight hover:text-background"
            >
              <span className="text-base font-medium tracking-wide">Get in touch</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="flex items-center gap-8">
              <a
                href="https://github.com/aaryan0909"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.2em] text-foreground/50 uppercase transition-colors hover:text-highlight"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/aaryan-chawla"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.2em] text-foreground/50 uppercase transition-colors hover:text-highlight"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
