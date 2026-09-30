"use client"

import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-32 md:px-16 md:py-40 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div>
            <p className="mb-8 font-mono text-[11px] tracking-[0.3em] text-highlight uppercase">
              05 &mdash; Say hello
            </p>

            <h2 className="mb-8 font-serif text-3xl leading-snug font-light text-primary md:text-5xl">
              If you read this far,
              <br />
              we should probably talk.
            </h2>

            <p className="mb-12 max-w-lg text-lg leading-relaxed text-foreground/80 md:text-xl">
              Reach me at{" "}
              <a
                href="mailto:chawlaaaryan280@gmail.com"
                className="text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-highlight hover:decoration-highlight"
              >
                chawlaaaryan280@gmail.com
              </a>
              {" "}or find me on{" "}
              <a
                href="https://www.linkedin.com/in/aaryan-chawla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-highlight hover:decoration-highlight"
              >
                LinkedIn
              </a>.
            </p>

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
              <a
                href="mailto:chawlaaaryan280@gmail.com"
                className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-background transition-all hover:bg-highlight hover:text-background"
              >
                <span className="text-base font-medium tracking-wide">Say hello</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="flex items-center gap-8">
                <a
                  href="https://github.com/aaryan0909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm tracking-[0.15em] text-foreground/70 uppercase transition-colors hover:text-highlight"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/aaryan-chawla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm tracking-[0.15em] text-foreground/70 uppercase transition-colors hover:text-highlight"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Sign-off */}
            <p className="mt-20 font-serif text-base text-foreground/40 italic md:text-lg">
              Still chasing the thing underneath. Always will be.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
