"use client"
import { motion } from "framer-motion"
import { Laptop, Activity, ShieldCheck, Users, Database, Cloud, Smartphone, Search, FileText, Settings, Clock } from "lucide-react"

const arohaOfficialServices = [
  { title: "Software Development", desc: "Aroha is having a software development division.", icon: Laptop },
  { title: "Health Care", desc: "Specialists at connecting you with clinical and non-clinical experts.", icon: Activity },
  { title: "Engineering", desc: "Develop and execute a clear and strategic IT roadmap.", icon: ShieldCheck },
  { title: "HR & Payroll", desc: "Comprehensive, powerful, and easy-to-use services.", icon: Users },
  { title: "ERP", desc: "Business management software to manage, collect, and store data.", icon: Database },
  { title: "Cloud Computing", desc: "Scalable cloud architectures designed for enterprise flexibility and performance.", icon: Cloud },
  { title: "Mobile Apps", desc: "Custom mobile solutions tailored to your business needs.", icon: Smartphone },
  { title: "Software Testing", desc: "Comprehensive quality assurance and testing services.", icon: Search }
]

const coreProducts = [
  { 
    title: "DMS", 
    fullName: "Document Management System",
    desc: "A cloud based file Hosting software designed by Aroha Technologies Inc Head quartered at Dublin CA. It has unique features like File Syncronization file Merging File retrieving File Storage.",
    icon: FileText 
  },
  { 
    title: "AMS", 
    fullName: "Application Management System",
    desc: "Application Management System tool is designed for needs of the various Clients across the Globe which increases the quality of your business. It automates your complete process",
    icon: Settings 
  },
  { 
    title: "TMS", 
    fullName: "Time Management System",
    desc: "Time Management System is one more advanced product designed for the productive business aspect. It got advanced features like Automatic Time Tracking, Task Tracking, on time tracking, Accurate",
    icon: Clock 
  }
]

export function Services() {
  return (
    <>
      <section id="capabilities" className="py-24 px-6">
        <div className="mx-auto max-w-6xl text-center mb-16">
          <h2 className="text-3xl font-bold dark:text-white uppercase tracking-wider">Services</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {arohaOfficialServices.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:border-blue-500/30 transition-colors"
            >
              <s.icon className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-lg font-semibold dark:text-white mb-4">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="products" className="py-24 px-6 bg-slate-50/5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold dark:text-white uppercase tracking-wider"
            >
              Core Systems
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-4 text-slate-600 dark:text-slate-300"
            >
              Flagship products engineered for enterprise excellence
            </motion.p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {coreProducts.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl border border-white/10 flex flex-col hover:border-blue-500/50 transition-all"
              >
                <div className="mb-4">
                  <product.icon className="h-14 w-14 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-2">{product.title}</h3>
                <p className="text-xs font-semibold text-blue-400 mb-4">{product.fullName}</p>
                <p className="text-sm text-slate-300 leading-relaxed flex-grow">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
