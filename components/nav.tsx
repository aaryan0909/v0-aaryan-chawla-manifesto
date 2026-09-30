"use client"

import { useEffect, useState } from "react"

const links = [
  { label: "Origin", href: "#origin" },
  { label: "Think", href: "#how-i-think" },
  { label: "Work", href: "#work" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
]

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
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <a
        href="#top"
        className="font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-highlight"
      >
        AC
      </a>
      <div className="flex items-center gap-5 md:gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`font-mono text-xs tracking-wider text-foreground/70 uppercase transition-colors hover:text-highlight ${
              // Keep the nav compact on small screens: anchors 1,2 collapse away
              link.href === "#origin" || link.href === "#how-i-think"
                ? "hidden sm:inline"
                : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
