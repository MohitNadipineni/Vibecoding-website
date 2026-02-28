"use client"

import { motion } from "framer-motion"
import { ArrowRight, Cpu, ShieldCheck, Waves } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-[-140px] top-[-140px] h-[520px] w-[520px] rounded-full bg-sovereign-accent/20 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.9, 0.65] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-220px] right-[-220px] h-[700px] w-[700px] rounded-full bg-sovereign-primary/20 blur-3xl"
          animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-sovereign-primary shadow-sm dark:border-white/15 dark:bg-white/5 dark:text-white"
          >
            <Waves className="h-4 w-4 text-sovereign-accent" />
            SOVEREIGN AI • POLICY-ALIGNED • PRIVATE-BY-DESIGN
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="mt-6 text-balance text-4xl font-semibold tracking-tight text-sovereign-primary dark:text-white sm:text-5xl lg:text-6xl"
          >
            BHARAT-OS{" "}
            <span className="bg-gradient-to-r from-sovereign-accent via-cyan-400 to-sovereign-accent bg-clip-text text-transparent">
              Sovereign AI
            </span>{" "}
            for missions that can’t leak, drift, or stall.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-balance text-sm text-slate-600 dark:text-slate-200 sm:text-base"
          >
            Deploy compliant intelligence across cloud, edge, and secure enclaves.
            Build with Indian-first governance controls, auditability, and
            “sovereign mode” operational hardening.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <motion.a
              href="#contact"
              className="relative inline-flex items-center justify-center rounded-full bg-sovereign-accent px-6 py-3 text-xs font-semibold tracking-[0.18em] text-white shadow-lg shadow-blue-500/25"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                REQUEST SANDBOX
                <ArrowRight className="h-4 w-4" />
              </span>
              <span className="absolute inset-0 rounded-full opacity-30 blur-xl bg-sovereign-accent animate-pulse" />
            </motion.a>

            <a
              href="#capabilities"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-sovereign-primary shadow-sm transition hover:border-sovereign-accent/35 dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              EXPLORE CAPABILITIES
            </a>
          </motion.div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Sovereign Controls",
              desc: "Policy enforcement, audit trails, and role-bound intelligence boundaries.",
            },
            {
              icon: Cpu,
              title: "Liquid Performance",
              desc: "Streaming inference, adaptive routing, and reliable low-latency operations.",
            },
            {
              icon: Waves,
              title: "Mesh-native UX",
              desc: "2035-grade interfaces: fluid motion, glass layers, and calm density.",
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 + idx * 0.06 }}
              className="glass rounded-2xl p-5 shadow-sm"
            >
              <card.icon className="h-5 w-5 text-sovereign-accent" />
              <div className="mt-3 text-sm font-semibold text-sovereign-primary dark:text-white">
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
