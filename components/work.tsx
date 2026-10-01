"use client"

import { ExternalLink, Github } from "lucide-react"
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
      className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-body uppercase transition-colors hover:text-highlight"
    >
      {icon === "github" ? (
        <Github className="h-4 w-4" />
      ) : (
        <ExternalLink className="h-4 w-4" />
      )}
      <span className="underline decoration-border underline-offset-4 group-hover:decoration-highlight">
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
          className="rounded-sm border border-border px-3 py-1.5 font-mono text-[11px] tracking-wider whitespace-nowrap text-muted-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

type Project = {
  number: string
  kicker: string
  title: string
  description: string
  tags: string[]
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
    tags: ["Python", "DuckDB · dbt", "Data-quality checks"],
    demoHref: "https://toronto-transit-data-platform.vercel.app",
    githubHref: "https://github.com/aaryan0909/aryan0909-toronto-transit-data-platfor",
  },
  {
    number: "02",
    kicker: "Self-updating job board",
    title: "Career Decision Board",
    description:
      "Reads your job-search emails and turns applications and interviews into one board that tells you what to do next.",
    tags: ["Python", "Gmail ingestion", "Idempotent scans"],
    demoHref: "https://career-decision-board-demo.vercel.app/",
    githubHref: "https://github.com/aaryan0909/JobAppTracker-Gmail2Offers",
  },
  {
    number: "03",
    kicker: "Interactive food atlas",
    title: "Recipe Cuisine Atlas",
    description:
      "Follow chili, tomato, potato, coffee, and sugar across the world through history, then explore 472 recipes by cuisine and ingredient.",
    tags: ["React", "D3", "Food data"],
    demoHref: "https://recipe-atlas-taupe.vercel.app",
    githubHref: "https://github.com/aaryan0909/recipe-atlas",
  },
  {
    number: "04",
    kicker: "Cynical listing analyzer",
    title: "EstateMatch-AI",
    description:
      "Paste a listing and get its red flags, hidden costs, and a match score against what you actually want.",
    tags: ["TypeScript", "React", "Gemini"],
    demoHref: "https://estatematch-ai-drab.vercel.app/",
    githubHref: "https://github.com/aaryan0909/EstateMatch-AI",
  },
  {
    number: "05",
    kicker: "An office for AI agents",
    title: "Agent Office",
    description:
      "A playable model of the office my AI agents work in, desks, statuses, and coffee breaks included.",
    tags: ["AI agents", "Character UI", "Activity feed"],
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

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className="border-t border-border py-10 first:mt-4 md:py-12"
            >
              <Reveal delay={Math.min(index * 75, 225)}>
                <div className="mb-5 flex items-baseline gap-4">
                  <span className="font-serif text-3xl font-light text-highlight">
                    {project.number}
                  </span>
                  <span className="font-mono text-xs tracking-[0.2em] text-highlight uppercase">
                    {project.kicker}
                  </span>
                </div>

                <h3 className="mb-4 font-serif text-2xl leading-tight font-light text-primary md:text-4xl">
                  {project.title}
                </h3>

                <p className="mb-6 max-w-3xl text-lg leading-relaxed text-body">
                  {project.description}
                </p>

                <div className="mb-7">
                  <SkillTags tags={project.tags} />
                </div>

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
          ))}
        </div>
      </div>
    </section>
  )
}
