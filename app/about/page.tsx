import Image from "next/image"
import { Building, Award, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">About Javi Finanz Advisors</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in February 2025, Javi Finanz Advisors Pvt. Ltd. was established with a clear vision: to provide
              transparent, client-focused financial advisory services that empower individuals and businesses to achieve
              their financial goals.
            </p>
            <p className="text-gray-700">
              Based in Borivali West, Mumbai, we combine deep industry expertise with personalized attention to deliver
              financial solutions tailored to each client's unique circumstances and aspirations.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Javi Finanz Advisors Office"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Pratima Manoj Mishra",
                position: "Director",
                bio: "With over 15 years of experience in financial planning and wealth management.",
              },
              {
                name: "Ajay Durgaprasad Mishra",
                position: "Director",
                bio: "Specializes in investment strategies and portfolio management with a focus on sustainable growth.",
              },
              {
                name: "Manoj Durgaprasad Mishra",
                position: "Director",
                bio: "Expert in tax planning and compliance with extensive knowledge of financial regulations.",
              },
            ].map((director, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={director.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{director.name}</h3>
                <p className="text-blue-600 text-center mb-3">{director.position}</p>
                <p className="text-gray-600 text-center">{director.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-blue-700 mr-3" />
              <h2 className="text-2xl font-semibold text-blue-700">Our Mission</h2>
            </div>
            <p className="text-gray-700">
              To empower our clients with the knowledge, tools, and strategies they need to achieve financial security
              and growth. We are committed to providing honest, transparent advice that puts our clients' interests
              first.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-blue-700 mr-3" />
              <h2 className="text-2xl font-semibold text-blue-700">Our Vision</h2>
            </div>
            <p className="text-gray-700">
              To be the most trusted financial advisory firm, recognized for our integrity, expertise, and
              client-centered approach. We aim to set new standards in the industry for transparency and excellence in
              financial services.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Building className="w-8 h-8 text-blue-700 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-700">Company Details</h2>
          </div>
          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-medium">Company Name:</span> Javi Finanz Advisors Private Limited
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Founded:</span> February 2025
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Registration Number:</span> JFA20250214IN
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Registered Office:</span> Flat 03, Sunita Park Building, B Wing,
              Chandavarkar Lane, Borivali West, Mumbai 400092
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
