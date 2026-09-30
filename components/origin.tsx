"use client"

import { Reveal } from "@/components/reveal"

export function Origin() {
  return (
    <section id="origin" className="relative scroll-mt-20 px-6 py-20 md:px-16 md:py-28 lg:px-24">
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-10 font-mono text-[11px] tracking-[0.3em] text-highlight uppercase">
            01 &middot; Origin
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mb-8 font-serif text-3xl leading-snug font-light text-primary md:text-4xl">
            Mumbai first. Data second. Toronto since 2021.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg leading-relaxed text-body md:text-xl">
            As a teenager in Mumbai, I watched opinions spread faster than facts. Data felt like the layer underneath. I moved to Ontario in 2021, studied Honours Mathematics at the University of Waterloo, and now build the measurement pipelines at Manulife.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
            The suspicion came first. The maths caught up.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
