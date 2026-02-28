"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function ContactForm() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50/50 dark:bg-transparent">
      <div className="mx-auto max-w-4xl">
        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold dark:text-white">Get in Touch</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Discuss your project with our engineering team.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-white px-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-white px-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium dark:text-white px-1">How can we help?</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your project or requirements..."
                className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25">
              Submit Inquiry <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
