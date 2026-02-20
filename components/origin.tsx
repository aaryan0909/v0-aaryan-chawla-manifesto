"use client"

import { useEffect, useRef, useState } from "react"

export function Origin() {
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
          01 &mdash; Origin
        </p>

        <div className="flex flex-col gap-8">
          <p
            className={`text-lg leading-relaxed text-foreground/90 md:text-xl transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            At 14, I watched two elections reshape the world before I had any
            framework to understand it. Modi. Trump. I wasn{"'"}t following political
            science. I was a kid on Instagram watching ideas spark, spread, mutate,
            and suddenly become what everyone believed.
          </p>

          <p
            className={`text-lg leading-relaxed text-foreground/90 md:text-xl transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Propaganda moving in real time. Consensus forming out of nowhere.
            Something invisible underneath the surface of what people were
            saying was shaping what they thought.
          </p>

          <p
            className={`text-lg leading-relaxed text-foreground/90 md:text-xl transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span className="text-foreground font-medium">
              I didn{"'"}t know what it was. I just knew it was real.
            </span>
          </p>

          <p
            className={`text-lg leading-relaxed text-muted-foreground md:text-xl transition-all duration-700 delay-[400ms] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            I was tested as a kid and told both sides of my brain fire equally.
            50/50 &mdash; analytical and creative. ADD diagnosis on top. I don{"'"}t know
            if the test was real. I know the feeling is. I have never been a
            master of one thing. I have been a student of everything.
          </p>

          <div
            className={`mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-wider text-muted-foreground transition-all duration-700 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span>History obsessive</span>
            <span className="text-border">/</span>
            <span>Home cook</span>
            <span className="text-border">/</span>
            <span>Music lover</span>
            <span className="text-border">/</span>
            <span>Football</span>
            <span className="text-border">/</span>
            <span>Basketball</span>
            <span className="text-border">/</span>
            <span>Tennis</span>
            <span className="text-border">/</span>
            <span>Boxing</span>
            <span className="text-border">/</span>
            <span>Muay Thai</span>
          </div>
        </div>
      </div>
    </section>
  )
}
