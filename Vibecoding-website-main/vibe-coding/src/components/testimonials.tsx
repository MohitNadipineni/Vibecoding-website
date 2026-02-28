"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    author: "John Smith",
    company: "TechCorp Industries",
    quote: "TechVision transformed our entire infrastructure. Their expertise and support were invaluable.",
    rating: 5
  },
  {
    author: "Lisa Anderson",
    company: "Global Finance Solutions",
    quote: "The security audit and implementation exceeded our expectations. Highly recommend!",
    rating: 5
  },
  {
    author: "Mark Davidson",
    company: "Innovation Labs",
    quote: "Outstanding digital transformation strategy. The team truly understands enterprise needs.",
    rating: 5
  },
  {
    author: "Jennifer Lee",
    company: "Healthcare Plus",
    quote: "Professional, responsive, and results-driven. They delivered ahead of schedule.",
    rating: 5
  },
  {
    author: "Robert Martinez",
    company: "E-Commerce Giants",
    quote: "Their data analytics solution helped us increase revenue by 40%. Exceptional work!",
    rating: 5
  },
  {
    author: "Amanda Brooks",
    company: "Manufacturing Co.",
    quote: "Best consulting investment we made. The team is knowledgeable and easy to work with.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">TESTIMONIALS</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by leading companies across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
