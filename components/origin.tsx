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
            I grew up in Mumbai. At 14, I watched two elections reshape the world 
            before I had any framework to understand it. Modi. Trump. I wasn{"'"}t 
            following political science. I was a kid on Instagram watching ideas 
            spark, spread, mutate, and suddenly become what everyone believed.
          </p>

          <p
            className={`text-lg leading-relaxed text-foreground/90 md:text-xl transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Propaganda moving in real time. Consensus forming out of nowhere.
            Something invisible underneath the surface of what people were
            saying was shaping what they thought.{" "}
            <span className="text-foreground font-medium">
              I didn{"'"}t know what it was. I just knew it was real and I needed to understand it.
            </span>
          </p>

          <p
            className={`text-lg leading-relaxed text-foreground/90 md:text-xl transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            That{"'"}s why I chose data. Not to become an analyst. Because data felt
            like the thing running underneath everything &mdash; the layer beneath the
            headlines, the opinions, the noise &mdash; and I needed to learn how to read it.
          </p>

          <p
            className={`text-lg leading-relaxed text-foreground/90 md:text-xl transition-all duration-700 delay-[400ms] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            I was tested as a kid and told both sides of my brain fire equally.
            50/50 &mdash; analytical and creative. ADD diagnosis on top. I don{"'"}t know
            if the test was real. I know the feeling is. I have never been a
            master of one thing. I have been a student of everything. History
            obsessive. Home cook. Music lover. I play sports rather than watch
            them &mdash; football, basketball, tennis, boxing, Muay Thai.
          </p>

          <p
            className={`text-lg leading-relaxed text-foreground/90 md:text-xl transition-all duration-700 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            In 2021, I moved from Mumbai to Ontario. I arrived during COVID when
            the city was still frozen and built a life here anyway. I took that
            instinct &mdash; the need to understand what{"'"}s underneath &mdash; to the
            University of Waterloo, one of the most rigorous quantitative programs
            in the world, and studied Honours Mathematics. Co-ops at Loblaw,
            Community Trust, Questrade, HDFC Bank, and Manulife. Each one taught
            me something the classroom couldn{"'"}t.
          </p>

          <p
            className={`text-lg leading-relaxed text-foreground/90 md:text-xl transition-all duration-700 delay-[600ms] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span className="text-foreground font-medium">
              The thread from that 14-year-old in Mumbai watching the world shift
              to the person writing this is the same thread. I{"'"}m still chasing the
              thing underneath.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
