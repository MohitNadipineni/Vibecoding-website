"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    bio: "15+ years in enterprise IT architecture and cloud solutions",
    image: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Security & Compliance Lead",
    bio: "Expert in cybersecurity frameworks and regulatory compliance",
    image: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Transformation Director",
    bio: "Specialized in enterprise modernization and automation",
    image: "ER"
  },
  {
    name: "David Park",
    role: "Data & Analytics Lead",
    bio: "Machine learning and big data analytics expert",
    image: "DP"
  },
  {
    name: "Jessica Williams",
    role: "Cloud Architecture Engineer",
    bio: "AWS and Azure certified solutions architect",
    image: "JW"
  },
  {
    name: "Robert Thompson",
    role: "DevOps & Infrastructure",
    bio: "Kubernetes and containerization specialist",
    image: "RT"
  }
]

export function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">OUR TEAM</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Expert Professionals
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Meet our talented team of IT consultants and technology experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold mb-4">
                  {member.image}
                </div>
                <CardTitle>{member.name}</CardTitle>
                <Badge variant="outline" className="w-fit">{member.role}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{member.bio}</p>
                <div className="flex gap-2">
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition" />
                  <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
