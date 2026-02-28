"use client"

import { motion } from "framer-motion"
import { Code2, Cog, Layout, LineChart, MessageSquare, Shield } from "lucide-react"

const services = [
  {
    title: "Custom Software Development",
    description: "Building scalable, high-performance applications tailored to your specific business requirements.",
    icon: Code2,
  },
  {
    title: "AI & Machine Learning",
    description: "Integrating intelligent automation and predictive analytics to drive data-informed decisions.",
    icon: Cog,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive, user-centric interfaces that enhance engagement and simplify complex workflows.",
    icon: Layout,
  },
  {
    title: "Digital Strategy",
    description: "Consulting on technology roadmaps and architecture to future-proof your digital ecosystem.",
    icon: LineChart,
  },
  {
    title: "Enterprise Solutions",
    description: "Robust, secure, and compliant software for large-scale operations and public sector needs.",
    icon: Shield,
  },
  {
    title: "Cloud Engineering",
    description: "Designing resilient cloud-native architectures for seamless scale and reliability.",
    icon: MessageSquare,
  },
]

export function Services() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold dark:text-white">Our Capabilities</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Driving digital excellence through specialized technology services.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-slate-200 dark:border-white/10"
            >
              <service.icon className="h-10 w-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-semibold dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
