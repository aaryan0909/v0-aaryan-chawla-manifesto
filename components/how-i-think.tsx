"use client"

import { Reveal } from "@/components/reveal"
import { Note } from "@/components/note"

export function HowIThink() {
  return (
    <section id="how-i-think" className="relative scroll-mt-20 overflow-hidden px-6 py-32 md:px-16 md:py-40 lg:px-24">
      {/* Full-width background quote */}
      <Reveal>
        <div className="mb-20">
          <p className="font-mono text-[11px] tracking-[0.3em] text-highlight uppercase mb-8">
            02 &mdash; How I think
          </p>
          <blockquote className="text-pretty font-serif text-[clamp(1.5rem,4.5vw,4rem)] leading-[1.2] font-light text-primary">
            <span className="text-highlight">{'"'}</span>
            A number that looks credible and isn{"'"}t is more dangerous than no number at all.
            <span className="text-highlight">{'"'}</span>
          </blockquote>
        </div>
      </Reveal>

      {/* Two-column layout for the thinking patterns */}
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal delay={200}>
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Systems
              </h3>
              <p className="text-lg leading-relaxed text-body md:text-xl">
                When something breaks, I don{"'"}t reach for the fix. I reach for the reason. Most people want dashboards. I want to know if the data feeding the dashboard is honest first.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Stories
              </h3>
              <p className="text-lg leading-relaxed text-body md:text-xl">
                The 50/50 brain means I never approach a problem from one direction. I can build the model and tell the story about why it matters. I can write the SQL and know which question the business actually needs answered.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={350}>
          <Note>
            Step one is never {"\""}buy a tool.{"\""} Step one is {"\""}show me where the data comes from.{"\""} Tools come later, apologising.
          </Note>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-20 border-t border-border pt-8">
            <p className="max-w-xl text-xl leading-relaxed text-foreground font-medium md:text-2xl">
              I feel in stories. I think in data. The tension between those two is where everything interesting happens.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
