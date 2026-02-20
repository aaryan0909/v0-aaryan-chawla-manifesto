import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Origin } from "@/components/origin"
import { HowIThink } from "@/components/how-i-think"
import { Proof } from "@/components/proof"
import { WhatNext } from "@/components/what-next"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-svh">
      <Nav />
      <Hero />

      {/* Divider */}
      <div className="mx-6 h-px bg-foreground/[0.06] md:mx-16 lg:mx-24" />

      <Origin />

      <div className="mx-6 h-px bg-foreground/[0.06] md:mx-16 lg:mx-24" />

      <HowIThink />

      <div className="mx-6 h-px bg-foreground/[0.06] md:mx-16 lg:mx-24" />

      <Proof />

      <div className="mx-6 h-px bg-foreground/[0.06] md:mx-16 lg:mx-24" />

      <WhatNext />

      <div className="mx-6 h-px bg-foreground/[0.06] md:mx-16 lg:mx-24" />

      <Contact />
      <Footer />
    </main>
  )
}
