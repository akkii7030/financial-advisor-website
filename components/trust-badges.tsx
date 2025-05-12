import { Shield, Award, CheckCircle, Clock } from "lucide-react"

export default function TrustBadges() {
  const badges = [
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Licensed & Regulated",
      description:
        "We operate under all required financial advisory licenses and adhere to strict regulatory standards.",
    },
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: "Certified Advisors",
      description: "Our team consists of certified financial planners with advanced qualifications and expertise.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
      title: "Transparent Fees",
      description: "We maintain complete transparency in our fee structure with no hidden charges or surprises.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "Timely Service",
      description: "We value your time and ensure prompt responses and timely delivery of our services.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the highest quality financial advisory services with integrity and
            professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                {badge.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
