import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Financial Future?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Take the first step towards financial freedom. Schedule a consultation with one of our expert advisors
            today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link href="/services">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
