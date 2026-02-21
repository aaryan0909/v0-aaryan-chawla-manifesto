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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative px-6 py-32 md:px-16 md:py-40 lg:px-24">
      {/* Section number as background watermark */}
      <span className="pointer-events-none absolute top-16 right-6 font-serif text-[12rem] leading-none font-light text-foreground/[0.03] md:right-16 md:text-[20rem] lg:right-24">
        01
      </span>

      <div className="relative mx-auto max-w-3xl">
        <p
          className={`mb-16 font-mono text-[11px] tracking-[0.3em] text-highlight uppercase transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Origin
        </p>

        {/* The hook -- large serif */}
        <h2
          className={`mb-16 font-serif text-3xl leading-snug font-light text-primary md:text-4xl lg:text-5xl transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-balance">
            At 14, I watched two elections reshape the world before I had any framework to understand it.
          </span>
        </h2>

        {/* Tight paragraphs */}
        <div className="flex flex-col gap-6">
          <p
            className={`text-lg leading-relaxed text-foreground/80 md:text-xl transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Modi. Trump. I wasn{"'"}t following political science. I was a kid on Instagram watching ideas spark, spread, mutate, and become what everyone believed. Propaganda in real time. Consensus from nowhere. Something invisible shaping what people thought.
          </p>

          <p
            className={`text-lg leading-relaxed text-foreground/80 md:text-xl transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            I didn{"'"}t know what it was. I just knew it was real. That{"'"}s why I chose data &mdash; not to become an analyst, but because data felt like the layer beneath the headlines, the opinions, the noise.
          </p>
        </div>

        {/* Visual break -- the 50/50 brain */}
        <div
          className={`my-16 flex items-start gap-6 border-l-2 border-highlight/40 pl-6 transition-all duration-700 delay-[400ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div>
            <p className="mb-2 font-mono text-[11px] tracking-[0.2em] text-highlight/70 uppercase">
              50 / 50
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
              Tested as a kid. Both sides of the brain fire equally &mdash; analytical and creative. ADD on top. I don{"'"}t know if the test was real. I know the feeling is. Never a master of one thing. Always a student of everything.
            </p>
          </div>
        </div>

        {/* Tags as visual texture */}
        <div
          className={`mb-16 flex flex-wrap gap-3 transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {["History", "Cooking", "Music", "Football", "Basketball", "Tennis", "Boxing", "Muay Thai"].map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-foreground/[0.08] px-3 py-1.5 font-mono text-[11px] tracking-wider text-foreground/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* The bridge to now */}
        <div className="flex flex-col gap-6">
          <p
            className={`text-lg leading-relaxed text-foreground/80 md:text-xl transition-all duration-700 delay-[600ms] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            In 2021, I moved from Mumbai to Ontario. Arrived during COVID when the city was still frozen. Built a life anyway. Took that instinct to the University of Waterloo &mdash; Honours Mathematics, one of the most rigorous quant programs in the world. Co-ops at Loblaw, Community Trust, Questrade, HDFC Bank, and Manulife.
          </p>

          <p
            className={`text-xl leading-relaxed text-foreground font-medium md:text-2xl transition-all duration-700 delay-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            The thread from that 14-year-old watching the world shift to the person writing this is the same thread.
          </p>
        </div>
      </div>
    </section>
  )
}
