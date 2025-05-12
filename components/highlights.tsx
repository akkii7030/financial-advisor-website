import { Shield, TrendingUp, Users } from "lucide-react"

export default function Highlights() {
  const highlights = [
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
      title: "10+ Years of Experience",
      description:
        "Our team brings over a decade of expertise in financial advisory services across various market conditions.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "500+ Satisfied Clients",
      description:
        "We've helped hundreds of individuals and businesses achieve their financial goals and secure their future.",
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "100% Transparent Advice",
      description: "We provide clear, honest financial guidance with no hidden fees or conflicts of interest.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
