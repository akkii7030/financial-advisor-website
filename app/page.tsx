import Hero from "../components/hero"
import Highlights from "../components/highlights"
import Services from "../components/services"
import Testimonials from "../components/testimonials"
import TrustBadges from "../components/trust-badges"
import CTA from "../components/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Services />
      <Testimonials />
      <TrustBadges />
      <CTA />
    </>
  )
}
