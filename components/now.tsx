"use client"

import { Reveal } from "@/components/reveal"
import { Note } from "@/components/note"

export function Now() {
  return (
    <section id="now" className="relative scroll-mt-20 px-6 py-20 md:px-16 md:py-28 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-10 font-mono text-[11px] tracking-[0.3em] text-highlight uppercase">
            04 &middot; Now
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mb-8 max-w-3xl font-serif text-3xl leading-snug font-light text-primary md:text-4xl">
            Right now, I run the plumbing the numbers depend on.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex max-w-3xl flex-col gap-5 text-lg leading-relaxed text-body md:text-xl">
            <p>
              Data Orchestration Specialist, Manulife Global Digital Marketing Measurement &amp; Insights, Toronto.
            </p>
            <p className="font-mono text-sm tracking-[0.15em] text-muted-foreground uppercase">
              Databricks &middot; Adobe Analytics &middot; Python &middot; SQL
            </p>
            <p className="text-foreground">
              I am looking for a hard problem, run by people who care whether their numbers are honest.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
