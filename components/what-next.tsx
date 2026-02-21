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
    <section ref={ref} className="relative px-6 py-32 md:px-16 md:py-40 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <p
          className={`mb-16 font-mono text-[11px] tracking-[0.3em] text-highlight uppercase transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          04 &mdash; What{"'"}s next
        </p>

        {/* The manifesto statement */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="absolute top-0 left-0 h-full w-1 bg-highlight" />
          <div className="pl-8 md:pl-12">
            <p className="text-2xl leading-snug text-foreground md:text-3xl">
              I am not looking for a comfortable job.
            </p>
            <p className="mt-3 text-2xl leading-snug text-highlight font-medium md:text-3xl">
              I am looking for a hard problem, run by people who care whether their numbers are honest.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
