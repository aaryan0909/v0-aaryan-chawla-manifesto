"use client"

import { useEffect, useState } from "react"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 md:px-16 lg:px-24 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        AC
      </span>
      <div className="flex gap-6">
        <a
          href="mailto:aaryanchawla@outlook.com"
          className="font-mono text-xs tracking-wider text-muted-foreground uppercase transition-colors hover:text-highlight"
        >
          Contact
        </a>
        <a
          href="https://linkedin.com/in/aaryan-chawla"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-wider text-muted-foreground uppercase transition-colors hover:text-highlight"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  )
}
