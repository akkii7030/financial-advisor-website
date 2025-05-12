"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Aditi Finanz Advisors transformed my approach to financial planning. Their personalized advice helped me create a solid investment strategy that aligns perfectly with my retirement goals.",
      author: "Rajesh Sharma",
      position: "Business Owner",
    },
    {
      quote:
        "I was struggling with tax planning until I found Aditi Finanz. Their team provided clear guidance that helped me optimize my tax strategy while ensuring full compliance with regulations.",
      author: "Priya Patel",
      position: "IT Professional",
    },
    {
      quote:
        "The retirement planning services at Aditi Finanz are exceptional. They took the time to understand my needs and created a comprehensive plan that gives me confidence about my financial future.",
      author: "Amit Desai",
      position: "Senior Manager",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-blue-800 rounded-lg p-8 md:p-12 shadow-lg">
            <Quote className="w-12 h-12 text-blue-400 mb-6" />

            <div className="min-h-[160px] flex items-center">
              <div>
                <p className="text-xl md:text-2xl italic mb-6">"{testimonials[currentIndex].quote}"</p>
                <div>
                  <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-blue-300">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-blue-400"}`}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-blue-700 rounded-full hidden md:flex"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-blue-700 rounded-full hidden md:flex"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
