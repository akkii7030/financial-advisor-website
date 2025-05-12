import { LineChart, PiggyBank, Calculator, Landmark, ShieldCheck } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Financial Planning",
      icon: <LineChart className="w-12 h-12 text-blue-600" />,
      description:
        "Comprehensive financial planning tailored to your goals and life stage. We analyze your current financial situation and develop strategies to help you achieve short and long-term objectives.",
      features: [
        "Personal financial assessment",
        "Goal-based planning",
        "Cash flow management",
        "Debt reduction strategies",
        "Education funding",
      ],
    },
    {
      title: "Investment & Mutual Funds",
      icon: <PiggyBank className="w-12 h-12 text-blue-600" />,
      description:
        "Expert investment advisory services to help you build and manage a diversified portfolio aligned with your risk tolerance and financial goals.",
      features: [
        "Portfolio design and management",
        "Mutual fund selection",
        "Risk assessment",
        "Regular performance reviews",
        "Market trend analysis",
      ],
    },
    {
      title: "Tax & Compliance Advisory",
      icon: <Calculator className="w-12 h-12 text-blue-600" />,
      description:
        "Strategic tax planning and compliance services to help you minimize tax liability while ensuring adherence to all regulatory requirements.",
      features: [
        "Tax-efficient investment strategies",
        "Income tax planning",
        "Tax return preparation",
        "Regulatory compliance",
        "Tax-saving investment options",
      ],
    },
    {
      title: "Retirement Planning",
      icon: <Landmark className="w-12 h-12 text-blue-600" />,
      description:
        "Comprehensive retirement planning services to help you prepare for a financially secure and fulfilling retirement.",
      features: [
        "Retirement needs analysis",
        "Pension planning",
        "Social security optimization",
        "Retirement income strategies",
        "Estate planning coordination",
      ],
    },
    {
      title: "Insurance Consulting",
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
      description:
        "Expert insurance advisory to ensure you have the right coverage to protect yourself, your family, and your assets.",
      features: [
        "Insurance needs assessment",
        "Policy review and analysis",
        "Coverage recommendations",
        "Premium optimization",
        "Claims assistance",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of financial advisory services designed to help you achieve your financial
          goals and secure your future.
        </p>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center mb-6">
                  <div className="mb-4 md:mb-0 md:mr-6">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-blue-700">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
