export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <span className="font-mono text-xs tracking-wider text-muted-foreground">
          Aaryan Chawla &mdash; 2026
        </span>
        <div className="flex items-center gap-6">
          <a
            href="mailto:chawlaaaryan280@gmail.com"
            className="font-mono text-sm tracking-wider text-foreground/60 transition-colors hover:text-highlight"
          >
            Email
          </a>
          <a
            href="https://github.com/aaryan0909"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm tracking-wider text-foreground/60 transition-colors hover:text-highlight"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aaryan-chawla"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm tracking-wider text-foreground/60 transition-colors hover:text-highlight"
          >
            LinkedIn
          </a>
        </div>
        <span className="font-mono text-xs tracking-wider text-muted-foreground">
          Mumbai &rarr; Ontario
        </span>
      </div>
    </footer>
  )
}
