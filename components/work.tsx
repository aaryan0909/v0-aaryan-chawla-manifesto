"use client"

import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"

function ProjectLink({
  href,
  icon,
  children,
}: {
  href: string
  icon: "github" | "demo"
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-foreground/70 uppercase transition-colors hover:text-highlight"
    >
      {icon === "github" ? (
        <Github className="h-4 w-4" />
      ) : (
        <ExternalLink className="h-4 w-4" />
      )}
      <span className="underline decoration-foreground/20 underline-offset-4 group-hover:decoration-highlight">
        {children}
      </span>
    </a>
  )
}

function SkillTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-sm border border-foreground/[0.08] px-3 py-1.5 font-mono text-[11px] tracking-wider text-foreground/50"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-20 px-6 py-32 md:px-16 md:py-40 lg:px-24">
      <span className="pointer-events-none absolute top-16 right-6 font-serif text-[12rem] leading-none font-light text-foreground/[0.03] md:right-16 md:text-[20rem] lg:right-24">
        03
      </span>

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-8 font-mono text-[11px] tracking-[0.3em] text-highlight uppercase">
            03 &mdash; Work
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mb-6 max-w-3xl font-serif text-3xl leading-snug font-light text-primary md:text-4xl lg:text-5xl">
            Projects I built to answer questions I actually had.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mb-24 max-w-xl text-lg leading-relaxed text-foreground/70">
            Each one is a small data system: something messy goes in, something
            honest comes out.
          </p>
        </Reveal>

        <div className="flex flex-col gap-28 md:gap-36">
          {/* ---- 01 · JobAppTracker ---- */}
          <article>
            <Reveal>
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-serif text-3xl font-light text-highlight/60 md:text-4xl">
                  01
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-highlight uppercase">
                  Self-updating job-search command center
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="mb-6 font-serif text-2xl leading-tight font-light text-primary md:text-4xl">
                Career Decision Board
              </h3>
            </Reveal>

            <Reveal delay={200}>
              <div className="mb-8 grid gap-8 md:grid-cols-2 md:gap-12">
                <p className="text-lg leading-relaxed text-foreground/80">
                  Job searching at volume is a data problem disguised as an
                  inbox problem. This scans Gmail on an hourly schedule,
                  classifies job-related emails, de-duplicates applications by
                  thread, and serves a live dashboard: pipeline, conversion
                  insights, ranked next actions, and recruiter warmth.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  An LLM turns messy emails into structured records; deterministic
                  Python owns de-dup, analytics, and I/O. Scans are idempotent
                  with overlapping windows, and the personal view is AES-encrypted.
                  The live demo runs on anonymized sample data.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mb-8">
                <SkillTags
                  tags={[
                    "Pipeline orchestration",
                    "LLM + deterministic code",
                    "Idempotent ingestion",
                    "Scheduled agents",
                    "Python · JS · launchd",
                  ]}
                />
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mb-10 flex flex-wrap items-center gap-8">
                <ProjectLink
                  href="https://aaryan0909.github.io/JobAppTracker-Gmail2Offers/"
                  icon="demo"
                >
                  Live demo
                </ProjectLink>
                <ProjectLink
                  href="https://github.com/aaryan0909/JobAppTracker-Gmail2Offers"
                  icon="github"
                >
                  GitHub
                </ProjectLink>
              </div>
            </Reveal>

            {/* Browser-framed screenshot from the repo */}
            <Reveal delay={350}>
              <div className="overflow-hidden rounded-sm border border-foreground/[0.1]">
                <div className="flex items-center gap-2 border-b border-foreground/[0.08] bg-card px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                  <span className="ml-3 truncate font-mono text-[11px] tracking-wider text-foreground/40">
                    aaryan0909.github.io/JobAppTracker-Gmail2Offers
                  </span>
                </div>
                <img
                  src="https://raw.githubusercontent.com/aaryan0909/JobAppTracker-Gmail2Offers/main/docs/screenshots/board.png"
                  alt="The Career Decision Board dashboard: ranked next actions pulled from the inbox"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <p className="mt-4 font-mono text-[11px] tracking-wider text-foreground/40">
                The decision board &mdash; ranked next actions: active
                opportunities, offers, stalled apps, contacts to ping.
              </p>
            </Reveal>
          </article>

          {/* ---- 02 · Recipe Cuisine Atlas ---- */}
          <article>
            <Reveal>
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-serif text-3xl font-light text-highlight/60 md:text-4xl">
                  02
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-highlight uppercase">
                  Interactive food atlas
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="mb-6 font-serif text-2xl leading-tight font-light text-primary md:text-4xl">
                Recipe Cuisine Atlas
              </h3>
            </Reveal>

            <Reveal delay={200}>
              <div className="mb-8 max-w-3xl">
                <p className="text-lg leading-relaxed text-foreground/80">
                  An interactive atlas that maps recipes to the cuisines they
                  belong to &mdash; browse dishes across regions and see what
                  different cuisines are made of. It&rsquo;s embedded live
                  below, straight from Replit.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mb-8">
                <SkillTags
                  tags={[
                    "Interactive visualization",
                    "Geographic data",
                    "Recipe / cuisine taxonomy",
                  ]}
                />
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="overflow-hidden rounded-sm border border-foreground/[0.1]">
                <div className="flex items-center gap-2 border-b border-foreground/[0.08] bg-card px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                  <span className="ml-3 truncate font-mono text-[11px] tracking-wider text-foreground/40">
                    replit.com &mdash; Recipe Cuisine Atlas
                  </span>
                </div>
                <iframe
                  src="https://replit.com/@chawlaaaryan280/Recipe-Cuisine-Atlas?embed=true"
                  title="Recipe Cuisine Atlas, embedded live from Replit"
                  loading="lazy"
                  className="h-[480px] w-full bg-card md:h-[600px]"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <p className="font-mono text-[11px] tracking-wider text-foreground/40">
                  Embedded live from Replit. If it doesn&rsquo;t load here,
                  Replit may need you signed in.
                </p>
                <a
                  href="https://replit.com/@chawlaaaryan280/Recipe-Cuisine-Atlas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-foreground/70 uppercase transition-colors hover:text-highlight"
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="underline decoration-foreground/20 underline-offset-4 group-hover:decoration-highlight">
                    Open the atlas on Replit
                  </span>
                </a>
              </div>
            </Reveal>
          </article>

          {/* ---- 03 · EstateMatch-AI ---- */}
          <article>
            <Reveal>
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-serif text-3xl font-light text-highlight/60 md:text-4xl">
                  03
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-highlight uppercase">
                  Cynical listing analyzer
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="mb-6 font-serif text-2xl leading-tight font-light text-primary md:text-4xl">
                EstateMatch-AI
              </h3>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <div className="flex flex-col gap-6">
                  <p className="text-lg leading-relaxed text-foreground/80">
                    A Canadian real estate listing analyzer that plays the
                    grumpy home inspector instead of the listing agent: it scans
                    descriptions for hidden red flags, only reports facts it can
                    quote directly from the text, scores the listing 0&ndash;100
                    against your criteria, and drafts inquiry emails about what
                    the listing hides.
                  </p>
                  <div>
                    <SkillTags
                      tags={[
                        "LLM product design",
                        "Anti-hallucination prompting",
                        "Structured scoring",
                        "TypeScript · React · Gemini",
                      ]}
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-8">
                    <ProjectLink
                      href="https://github.com/aaryan0909/EstateMatch-AI"
                      icon="github"
                    >
                      GitHub
                    </ProjectLink>
                  </div>
                </div>

                {/* The "cynical auditor" panel — things it looks for, from the README */}
                <div className="flex flex-col gap-3 rounded-sm border border-foreground/[0.1] bg-card p-6 md:p-8">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-highlight/70 uppercase">
                    The auditor looks for
                  </p>
                  <ul className="flex flex-col gap-2.5 font-mono text-sm text-foreground/70">
                    {[
                      "Strata fees & special assessments",
                      "Oil tanks",
                      "Knob & tube wiring",
                      "Leasehold status",
                      "Roof age",
                      "Pet deposits & utilities clauses",
                    ].map((flag) => (
                      <li key={flag} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-highlight/70" />
                        {flag}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-foreground/[0.08] pt-4 font-serif text-base text-foreground/50 italic">
                    Most AI tools just summarize. This one audits.
                  </p>
                </div>
              </div>
            </Reveal>
          </article>
        </div>
      </div>
    </section>
  )
}
