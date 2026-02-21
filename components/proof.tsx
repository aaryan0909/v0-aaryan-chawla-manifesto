"use client"

import { useEffect, useRef, useState } from "react"

const proofItems = [
  {
    num: "01",
    label: "Community Trust",
    title: "Fixed a broken arrears rate formula.",
    description:
      "It went live. The reported rate jumped far higher than anyone expected. The number had been wrong for years. Nobody questioned it because it looked reasonable.",
  },
  {
    num: "02",
    label: "Manulife",
    title: "Rebuilt a 2-week reporting cycle from scratch.",
    description:
      "Python and SQL. Cut it by 50%. Then refused to build a dashboard on broken intake data \u2014 I\u2019d rather have the uncomfortable conversation than ship a beautiful lie.",
  },
  {
    num: "03",
    label: "HDFC Bank",
    title: "Explored sentiment analysis and ML applications.",
    description:
      "At India\u2019s largest private bank in Mumbai, I worked with customer service data to explore how machine learning could surface patterns in unstructured interactions.",
  },
  {
    num: "04",
    label: "Questrade",
    title: "Data infrastructure at scale.",
    description:
      "One of Canada\u2019s fastest-growing fintechs. Sharpened my instinct for how data powers financial products.",
  },
]

export function Proof() {
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
      <span className="pointer-events-none absolute top-16 right-6 font-serif text-[12rem] leading-none font-light text-foreground/[0.03] md:right-16 md:text-[20rem] lg:right-24">
        03
      </span>

      <div className="relative mx-auto max-w-5xl">
        <p
          className={`mb-16 font-mono text-[11px] tracking-[0.3em] text-highlight uppercase transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Proof of work
        </p>

        <div className="flex flex-col gap-0">
          {proofItems.map((item, index) => (
            <div
              key={item.label}
              className={`group relative border-t border-foreground/[0.08] py-10 transition-all duration-700 last:border-b ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-12">
                {/* Number + label */}
                <div className="flex items-baseline gap-4 md:w-52 md:shrink-0">
                  <span className="font-serif text-3xl font-light text-highlight/60 md:text-4xl">
                    {item.num}
                  </span>
                  <span className="font-mono text-xs tracking-[0.2em] text-highlight uppercase">
                    {item.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-medium text-foreground md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
