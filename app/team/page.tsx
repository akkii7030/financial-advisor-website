import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

export default function TeamPage() {
  const team = [
    {
      name: "Pratima Manoj Mishra",
      position: "Director & Chief Financial Strategist",
      bio: "With over 15 years of experience in financial planning and wealth management, Pratima leads our strategic financial advisory services. Her expertise in creating personalized financial roadmaps has helped hundreds of clients achieve their financial goals.",
      expertise: ["Financial Planning", "Wealth Management", "Estate Planning"],
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Ajay Durgaprasad Mishra",
      position: "Director & Investment Specialist",
      bio: "Ajay specializes in investment strategies and portfolio management with a focus on sustainable growth. His deep understanding of market dynamics and investment vehicles helps clients optimize their investment portfolios for both growth and security.",
      expertise: ["Investment Analysis", "Portfolio Management", "Risk Assessment"],
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Manoj Durgaprasad Mishra",
      position: "Director & Tax Compliance Expert",
      bio: "Manoj is our tax planning and compliance expert with extensive knowledge of financial regulations. He helps clients navigate complex tax laws to minimize liabilities while ensuring full compliance with regulatory requirements.",
      expertise: ["Tax Planning", "Regulatory Compliance", "Financial Analysis"],
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Priya Sharma",
      position: "Senior Financial Advisor",
      bio: "Priya brings 10 years of experience in retirement planning and insurance consulting. She works closely with clients to develop comprehensive retirement strategies that ensure financial security and peace of mind.",
      expertise: ["Retirement Planning", "Insurance Advisory", "Financial Education"],
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Rahul Patel",
      position: "Investment Analyst",
      bio: "Rahul specializes in market research and investment analysis. His data-driven approach helps identify investment opportunities that align with clients' financial goals and risk tolerance.",
      expertise: ["Market Research", "Investment Analysis", "Economic Forecasting"],
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Ananya Desai",
      position: "Client Relations Manager",
      bio: "Ananya ensures our clients receive exceptional service throughout their journey with us. She coordinates between clients and our advisory team to deliver seamless, personalized financial guidance.",
      expertise: ["Client Communication", "Relationship Management", "Financial Services"],
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Team</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Meet our team of experienced financial advisors dedicated to helping you achieve your financial goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-700 mb-1">{member.name}</h2>
                <p className="text-gray-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Areas of Expertise:</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="p-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
