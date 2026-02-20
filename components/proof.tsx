"use client"

import { useEffect, useRef, useState } from "react"

const proofItems = [
  {
    label: "Waterloo",
    title: "Honours Mathematics",
    description:
      "One of the most rigorous quantitative programs in the world. Co-ops at Loblaw, Community Trust, Questrade, and HDFC Bank in Mumbai.",
  },
  {
    label: "Community Trust",
    title: "Fixed a broken arrears rate formula",
    description:
      "It went live. The reported rate jumped far higher than anyone expected. The number had been wrong for years. Nobody questioned it because it looked reasonable.",
  },
  {
    label: "Manulife",
    title: "Rebuilt a 2-week reporting cycle",
    description:
      "Used Python and SQL to cut it by 50%. Refused to build a dashboard on broken intake data because I\u2019d rather have that conversation than ship a lie.",
  },
  {
    label: "HDFC Bank",
    title: "Mumbai roots, global thinking",
    description:
      "Started in India\u2019s largest private bank. Saw firsthand how capital moves across borders, and where it doesn\u2019t.",
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
          03 &mdash; Proof
        </p>

        <div className="flex flex-col gap-0">
          {proofItems.map((item, index) => (
            <div
              key={item.label}
              className={`group border-b border-border py-8 transition-all duration-700 first:border-t ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex flex-col gap-3 md:flex-row md:gap-8">
                <span className="shrink-0 font-mono text-xs tracking-wider text-highlight uppercase md:w-36 md:pt-1">
                  {item.label}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium text-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
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
