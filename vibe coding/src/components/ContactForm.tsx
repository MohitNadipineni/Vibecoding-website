"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BadgeCheck, KeyRound, Send, Shield } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", company: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="px-4 pb-24 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-sovereign-primary shadow-sm dark:border-white/15 dark:bg-white/5 dark:text-white">
            <Shield className="h-4 w-4 text-sovereign-accent" />
            REQUEST PLATFORM ACCESS
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-sovereign-primary dark:text-white sm:text-4xl">
            Get a BHARAT-OS sandbox and reference architecture.
          </h2>
          <p className="mt-3 text-balance text-sm text-slate-600 dark:text-slate-200 sm:text-base">
            Tell us what you’re building. We’ll respond with an access pathway,
            deployment pattern recommendations, and governance baseline options.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
          <aside className="glass rounded-2xl p-6">
            <h3 className="text-sm font-semibold tracking-tight text-sovereign-primary dark:text-white">
              What you’ll receive
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 h-5 w-5 text-sovereign-accent" />
                <p>
                  A sandbox environment, plus deployment templates for secure
                  environments.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <KeyRound className="mt-0.5 h-5 w-5 text-sovereign-accent" />
                <p>
                  Governance primitives: auditability, policy controls, and role
                  boundaries.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 text-sovereign-accent" />
                <p>
                  A security posture baseline aligned to sovereign deployment
                  requirements.
                </p>
              </div>
            </div>
          </aside>

          <div className="glass rounded-2xl border border-slate-200/70 p-6 shadow-sm dark:border-white/15 sm:p-8">
            {submitted && (
              <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-400/25 dark:bg-emerald-500/10 dark:text-emerald-200">
                Request received. We’ll follow up with sandbox access details.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-sovereign-primary dark:text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-sovereign-primary outline-none transition focus:border-sovereign-accent/50 focus:ring-2 focus:ring-sovereign-accent/25 dark:border-white/15 dark:bg-white/5 dark:text-white"
                    placeholder="Ananya Singh"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-sovereign-primary dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-sovereign-primary outline-none transition focus:border-sovereign-accent/50 focus:ring-2 focus:ring-sovereign-accent/25 dark:border-white/15 dark:bg-white/5 dark:text-white"
                    placeholder="ananya@org.in"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-sovereign-primary dark:text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-sovereign-primary outline-none transition focus:border-sovereign-accent/50 focus:ring-2 focus:ring-sovereign-accent/25 dark:border-white/15 dark:bg-white/5 dark:text-white"
                    placeholder="Department / Enterprise"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-sovereign-primary dark:text-white mb-2">
                    Track *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-sovereign-primary outline-none transition focus:border-sovereign-accent/50 focus:ring-2 focus:ring-sovereign-accent/25 dark:border-white/15 dark:bg-white/5 dark:text-white"
                  >
                    <option value="">Select a track</option>
                    <option value="public-sector">Public Sector</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="defence">Defence / Critical Infra</option>
                    <option value="research">Research / Academia</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-sovereign-primary dark:text-white mb-2">
                  What are you building? *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  suppressHydrationWarning
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-sovereign-primary outline-none transition focus:border-sovereign-accent/50 focus:ring-2 focus:ring-sovereign-accent/25 dark:border-white/15 dark:bg-white/5 dark:text-white"
                  placeholder="Use-cases, data sensitivity level, deployment environment, and timelines…"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                suppressHydrationWarning
                className="w-full rounded-xl bg-sovereign-primary text-white shadow-sm transition hover:bg-sovereign-accent font-semibold flex items-center justify-center gap-2"
              >
                Submit request
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
