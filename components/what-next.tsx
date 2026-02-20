"use client"

import { useEffect, useRef, useState } from "react"

export function WhatNext() {
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
          04 &mdash; What{"'"}s next
        </p>

        <div className="flex flex-col gap-8">
          <p
            className={`font-serif text-2xl leading-snug font-light text-primary md:text-3xl lg:text-4xl transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="text-balance">
              I still think about India constantly.
            </span>
          </p>

          <p
            className={`text-lg leading-relaxed text-foreground/90 md:text-xl transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            About founders in Bangalore and Mumbai that North American capital
            hasn{"'"}t found yet. That gap feels like an opportunity nobody is
            working on seriously enough. I want to be the person who closes it.
          </p>

          <div
            className={`mt-4 rounded-md border border-border bg-secondary/50 p-6 transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              I am not looking for a comfortable job.
              <br />
              <span className="text-highlight font-medium">
                I am looking for a hard problem, run by people who care whether
                their numbers are honest.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
