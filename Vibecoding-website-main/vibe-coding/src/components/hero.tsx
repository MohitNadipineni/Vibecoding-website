"use client"

import { motion } from "framer-motion"
import { ArrowRight, Cpu, ShieldCheck, Waves, Rocket, Globe, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      {/* Background Animated Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-[-140px] top-[-140px] h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.9, 0.65] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-220px] right-[-220px] h-[700px] w-[700px] rounded-full bg-indigo-900/20 blur-3xl"
          animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-900 shadow-sm dark:border-white/15 dark:bg-white/5 dark:text-white"
          >
            <Zap className="h-4 w-4 text-blue-500" />
            INNOVATION • SCALE • EXCELLENCE
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Aroha Technologies{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Engineering
            </span>{" "}
            for the next generation of business.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-balance text-sm text-slate-600 dark:text-slate-200 sm:text-base"
          >
            Empowering global enterprises with bespoke software solutions, 
            AI-driven automation, and scalable cloud architectures. We build 
            the technology that drives your competitive advantage.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <motion.a
              href="#contact"
              className="relative inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-white shadow-lg shadow-blue-500/25"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                START A PROJECT
                <ArrowRight className="h-4 w-4" />
              </span>
              <span className="absolute inset-0 rounded-full opacity-30 blur-xl bg-blue-600 animate-pulse" />
            </motion.a>

            <a
              href="#capabilities"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-slate-900 shadow-sm transition hover:border-blue-500/35 dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              OUR SERVICES
            </a>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            {
              icon: Rocket,
              title: "Rapid Deployment",
              desc: "Accelerated development cycles ensuring your products reach the market faster and more reliably.",
            },
            {
              icon: Globe,
              title: "Global Expertise",
              desc: "A diverse team of engineers delivering high-performance solutions across multiple industries worldwide.",
            },
            {
              icon: Cpu,
              title: "AI & Automation",
              desc: "Integrating advanced machine learning models to streamline workflows and unlock data-driven insights.",
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 + idx * 0.06 }}
              className="glass rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-white/10"
            >
              <card.icon className="h-5 w-5 text-blue-500" />
              <div className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                {card.title}
              </div>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-200">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
