"use client"
import { motion } from "framer-motion"
import { Laptop, Activity, ShieldCheck, Users, Database, Cloud, Smartphone, Search } from "lucide-react"

const arohaOfficialServices = [
  { title: "Software Development", desc: "Aroha is having a software development division.", icon: Laptop },
  { title: "Health Care", desc: "At Aroha, we are specialists at connecting you with both clinical and non-clinical experts who will surely become invaluable additions to your team.", icon: Activity },
  { title: "Engineering", desc: "Aroha Technologies works with their clients to develop and execute a clear and strategic IT roadmap with priorities that are closely linked to business goals.", icon: ShieldCheck },
  { title: "HR & Payroll", desc: "Aroha is proud to offer our partners HR and payroll services that are comprehensive, powerful, and easy-to-use. We do much more than just setting you up on software.", icon: Users },
  { title: "ERP", desc: "Enterprise Resource Planning is a business management software which is designed for companies or organisations to manage, collect, store and interpret data from different business activities...", icon: Database },
  { title: "Cloud Computing", desc: "AROHA can help you Navigate through the Cloud Hype In today's challenging business environment, it is imperative that IT leaders find solutions that can help with lowering capital expenses...", icon: Cloud },
  { title: "Mobile Apps", desc: "Powerful Mobile App Solution for Meeting, Event & Conference Marketing We understand how important your event is and we work closely with you to improve your events marketing using our mobile app solutions...", icon: Smartphone },
  { title: "Software Testing", desc: "Software Testing Services India - Risk Free Pilot Our approach to application testing enables IT to integrate On Demand testing to any stage of the life cycle and provide visibility into project quality...", icon: Search }
]

export function Services() {
  return (
    <section id="capabilities" className="py-24 px-6">
      <div className="mx-auto max-w-6xl text-center mb-16">
        <h2 className="text-3xl font-bold dark:text-white uppercase tracking-wider">Services</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {arohaOfficialServices.map((s, i) => (
          <div key={i} className="glass p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <s.icon className="h-12 w-12 text-blue-500 mb-6" />
            <h3 className="text-lg font-semibold dark:text-white mb-4">{s.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
