import Link from "next/link"
import { ArrowRight, LineChart, PiggyBank, Calculator, Landmark, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      title: "Financial Planning",
      description: "Comprehensive financial planning tailored to your goals and life stage.",
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-blue-600" />,
      title: "Investment & Mutual Funds",
      description: "Expert investment advisory services to help you build and manage a diversified portfolio.",
    },
    {
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      title: "Tax & Compliance Advisory",
      description: "Strategic tax planning and compliance services to help you minimize tax liability.",
    },
    {
      icon: <Landmark className="w-8 h-8 text-blue-600" />,
      title: "Retirement Planning",
      description: "Comprehensive retirement planning services for a financially secure future.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Insurance Consulting",
      description: "Expert insurance advisory to ensure you have the right coverage to protect your assets.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of financial advisory services designed to help you achieve your financial
            goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
