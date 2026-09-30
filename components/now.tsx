"use client"

import { Reveal } from "@/components/reveal"

export function Now() {
  return (
    <section id="now" className="relative scroll-mt-20 px-6 py-32 md:px-16 md:py-40 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-16 font-mono text-[11px] tracking-[0.3em] text-highlight uppercase">
            04 &mdash; Now
          </p>
        </Reveal>

        {/* Where I am */}
        <Reveal delay={100}>
          <h2 className="mb-10 max-w-3xl font-serif text-3xl leading-snug font-light text-primary md:text-4xl">
            Right now, I run the plumbing the numbers depend on.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
            I{"'"}m a Data Orchestration Specialist on Manulife{"'"}s Global
            Digital Marketing Measurement &amp; Insights team in Toronto —
            building and running the data pipelines (Databricks, Adobe
            Analytics, Python/SQL) that the measurement sits on top of.
            When the intake data is broken, I{"'"}d rather have the
            uncomfortable conversation than build a dashboard on it.
          </p>
        </Reveal>

        {/* The manifesto statement */}
        <Reveal delay={300}>
          <div className="relative">
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
        </Reveal>
      </div>
    </section>
  )
}
