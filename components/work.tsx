"use client"

import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"
import { Note } from "@/components/note"

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
      className="group/link relative z-10 inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-body uppercase transition-colors hover:text-highlight"
    >
      {icon === "github" ? (
        <Github className="h-4 w-4" />
      ) : (
        <ExternalLink className="h-4 w-4" />
      )}
      <span className="underline decoration-border underline-offset-4 group-hover/link:decoration-highlight">
        {children}
      </span>
    </a>
  )
}

type Project = {
  number: string
  kicker: string
  title: string
  description: string
  stat?: { value: string; label: string }
  demoHref?: string
  githubHref?: string
  unavailableNote?: string
}

const projects: Project[] = [
  {
    number: "01",
    kicker: "TTC delays, with receipts",
    title: "Toronto Transit Data Platform",
    description:
      "Live data-quality-checked view of Toronto subway delays, from an open pipeline anyone can rerun.",
    stat: { value: "71,942", label: "delay records, quality-checked" },
    demoHref: "https://toronto-transit-data-platform.vercel.app",
    githubHref: "https://github.com/aaryan0909/aryan0909-toronto-transit-data-platfor",
  },
  {
    number: "02",
    kicker: "Self-updating job board",
    title: "Career Decision Board",
    description:
      "Reads your job-search emails and turns applications and interviews into one board that tells you what to do next.",
    demoHref: "https://career-decision-board-demo.vercel.app/",
    githubHref: "https://github.com/aaryan0909/JobAppTracker-Gmail2Offers",
  },
  {
    number: "03",
    kicker: "Interactive food atlas",
    title: "Recipe Cuisine Atlas",
    description:
      "Follow chili, tomato, potato, coffee, and sugar across the world through history, then explore 472 recipes by cuisine and ingredient.",
    stat: { value: "472", label: "recipes, 29 cuisines" },
    demoHref: "https://recipe-atlas-taupe.vercel.app",
    githubHref: "https://github.com/aaryan0909/recipe-atlas",
  },
  {
    number: "04",
    kicker: "Cynical listing analyzer",
    title: "EstateMatch-AI",
    description:
      "Paste a listing and get its red flags, hidden costs, and a match score against what you actually want.",
    demoHref: "https://estatematch-ai-drab.vercel.app/",
    githubHref: "https://github.com/aaryan0909/EstateMatch-AI",
  },
  {
    number: "05",
    kicker: "An office for AI agents",
    title: "Agent Office",
    description:
      "A playable model of the office my AI agents work in, desks, statuses, and coffee breaks included.",
    stat: { value: "12", label: "named agents, each with a job" },
    demoHref: "https://agent-office-tawny.vercel.app",
    githubHref: "https://github.com/aaryan0909/agent-office",
  },
]

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-20 px-6 py-20 md:px-16 md:py-28 lg:px-24">
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-8 font-mono text-[11px] tracking-[0.3em] text-highlight uppercase">
            03 &middot; Work
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mb-5 font-serif text-3xl leading-snug font-light text-primary md:text-4xl">
            Work that answers real questions.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="max-w-xl text-lg leading-relaxed text-body">
            Small data systems. Messy input, honest output.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <Note>
            Everything here exists because I refused to do the same annoying thing by hand twice.
          </Note>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => {
            const titleHref = project.demoHref ?? project.githubHref
            return (
              <article
                key={project.number}
                className="group relative rounded-md border border-border bg-card p-6 shadow-sm transition-colors hover:border-highlight md:p-10"
              >
                <Reveal delay={Math.min(index * 75, 225)}>
                  <div className="mb-5 flex items-start justify-between gap-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-serif text-3xl font-light text-highlight">
                        {project.number}
                      </span>
                      <span className="font-mono text-xs tracking-[0.2em] text-highlight uppercase">
                        {project.kicker}
                      </span>
                    </div>

                    {project.stat ? (
                      <div className="shrink-0 text-right">
                        <p className="font-serif text-3xl leading-none font-light text-highlight md:text-4xl">
                          {project.stat.value}
                        </p>
                        <p className="mt-2 font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                          {project.stat.label}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  <h3 className="mb-4 font-serif text-3xl leading-tight font-light text-primary md:text-5xl">
                    {titleHref ? (
                      <a
                        href={titleHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors after:absolute after:inset-0 group-hover:text-highlight"
                      >
                        {project.title}
                        <ArrowUpRight className="ml-2 inline-block h-7 w-7 align-baseline text-highlight transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:h-9 md:w-9" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="mb-8 max-w-3xl text-lg leading-relaxed text-body">
                    {project.description}
                  </p>

                  {project.unavailableNote ? (
                    <p className="max-w-2xl font-mono text-[11px] leading-relaxed tracking-wider text-muted-foreground">
                      {project.unavailableNote}
                    </p>
                  ) : (
                    <div className="flex flex-wrap items-center gap-8">
                      {project.demoHref ? (
                        <ProjectLink href={project.demoHref} icon="demo">
                          Live demo
                        </ProjectLink>
                      ) : null}
                      {project.githubHref ? (
                        <ProjectLink href={project.githubHref} icon="github">
                          GitHub
                        </ProjectLink>
                      ) : null}
                    </div>
                  )}
                </Reveal>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
