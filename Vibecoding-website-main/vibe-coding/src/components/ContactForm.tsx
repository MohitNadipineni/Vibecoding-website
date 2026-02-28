"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setSubmitted(true)
        // Auto redirect after 2 seconds
        setTimeout(() => {
          window.location.href = "/"
        }, 2000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="py-24 px-6 lg:px-8 bg-slate-50/50 dark:bg-transparent">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-white/10 text-center"
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-semibold dark:text-white mb-4">Thank You!</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              We've received your inquiry and will get back to you shortly.
            </p>
            <motion.a
              href="/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-2xl transition-all shadow-lg shadow-blue-500/25"
            >
              Back to Home
            </motion.a>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50/50 dark:bg-transparent">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-white/10"
        >
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold dark:text-white"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-3 text-slate-600 dark:text-slate-400"
            >
              Discuss your project with our engineering team.
            </motion.p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Web3Forms access key */}
            <input
              type="hidden"
              name="access_key"
              value="35d50beb-f3da-4ad7-986e-06eed25bf120"
            />
            {/* Redirect URL after submission */}
            <input
              type="hidden"
              name="redirect_url"
              value="/"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <label className="text-sm font-medium dark:text-white px-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <label className="text-sm font-medium dark:text-white px-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  required
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <label className="text-sm font-medium dark:text-white px-1">
                How can we help?
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project or requirements..."
                required
                className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ y: loading ? 0 : -2 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              viewport={{ once: true }}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500 disabled:opacity-75 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25"
            >
              {loading ? "Sending..." : "Submit Inquiry"} {!loading && <Send className="h-4 w-4" />}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
