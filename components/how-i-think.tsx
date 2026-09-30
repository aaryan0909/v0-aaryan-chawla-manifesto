"use client"

import { Reveal } from "@/components/reveal"

const principles = [
  {
    title: "Systems",
    line: "Find the reason before the fix.",
  },
  {
    title: "Sources",
    line: "Show me where the data came from. Then we can talk dashboards.",
  },
  {
    title: "Stories",
    line: "A model nobody understands is expensive decoration.",
  },
  {
    title: "Tools",
    line: "Tools come last. Usually apologising.",
  },
]

export function HowIThink() {
  return (
    <section id="how-i-think" className="relative scroll-mt-20 overflow-hidden px-6 py-20 md:px-16 md:py-28 lg:px-24">
      <Reveal>
        <div className="mb-14">
          <p className="mb-8 font-mono text-[11px] tracking-[0.3em] text-highlight uppercase">
            02 &middot; How I think
          </p>
          <blockquote className="max-w-5xl text-pretty font-serif text-[clamp(1.6rem,4.5vw,3.5rem)] leading-[1.2] font-light text-primary">
            <span className="text-highlight">{'"'}</span>
            A number that looks credible and isn{"'"}t is more dangerous than no number at all.
            <span className="text-highlight">{'"'}</span>
          </blockquote>
        </div>
      </Reveal>

      <div className="mx-auto max-w-5xl">
        <div className="grid gap-x-16 md:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={150 + index * 75}>
              <div className="flex items-baseline gap-5 border-t border-border py-5">
                <h3 className="w-20 shrink-0 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {principle.title}
                </h3>
                <p className="text-lg leading-snug text-body">
                  {principle.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
