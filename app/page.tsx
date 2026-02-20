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
      <Origin />
      <HowIThink />
      <Proof />
      <WhatNext />
      <Contact />
      <Footer />
    </main>
  )
}
