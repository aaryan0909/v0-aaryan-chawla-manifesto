import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Origin } from "@/components/origin"
import { HowIThink } from "@/components/how-i-think"
import { Work } from "@/components/work"
import { Now } from "@/components/now"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-svh">
      <Nav />
      <Hero />

      {/* Divider */}
      <div className="mx-6 h-px bg-border md:mx-16 lg:mx-24" />

      <Origin />

      <div className="mx-6 h-px bg-border md:mx-16 lg:mx-24" />

      <HowIThink />

      <div className="mx-6 h-px bg-border md:mx-16 lg:mx-24" />

      <Work />

      <div className="mx-6 h-px bg-border md:mx-16 lg:mx-24" />

      <Now />

      <div className="mx-6 h-px bg-border md:mx-16 lg:mx-24" />

      <Contact />
      <Footer />
    </main>
  )
}
