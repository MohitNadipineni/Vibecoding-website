"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, Shield, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("aroha:dark-mode")
    const enabled = saved === "1"
    setDarkMode(enabled)
    document.documentElement.classList.toggle("dark", enabled)
    document.documentElement.setAttribute("data-mode", enabled ? "dark" : "light")
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev
      localStorage.setItem("aroha:dark-mode", next ? "1" : "0")
      document.documentElement.classList.toggle("dark", next)
      document.documentElement.setAttribute("data-mode", next ? "dark" : "light")
      return next
    })
  }

  const navLinks = useMemo(
    () => [
      { href: "#hero", label: "Home" },
      { href: "#about", label: "Corporate Profile" },
      { href: "#capabilities", label: "Services" },
      { href: "#products", label: "Products" },
      { href: "#careers", label: "Careers" },
      { href: "#clients", label: "Clients" },
    ],
    [],
  )

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={[
            "mt-3 flex h-14 items-center justify-between rounded-2xl px-4 transition-all",
            isScrolled ? "glass shadow-lg shadow-black/5" : "glass",
          ].join(" ")}
        >
          <a href="#hero" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20">
              <Shield className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-xs font-semibold tracking-[0.18em] text-blue-600 dark:text-white/90">
                AROHA TECHNOLOGIES
              </div>
              <div className="text-[0.7rem] text-slate-600 dark:text-slate-200/80">
                Digital Engineering Solutions
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600 dark:text-slate-200 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={toggleDarkMode}
              className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/60 px-3 py-2 text-xs font-semibold text-blue-600 shadow-sm transition hover:border-blue-400/40 hover:bg-white/80 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white/25"
              aria-pressed={darkMode}
            >
              <span className="tracking-[0.18em]">DARK MODE</span>
              <motion.span
                className="relative inline-flex h-6 w-10 items-center rounded-full bg-slate-200 dark:bg-white/15"
                animate={{
                  backgroundColor: darkMode
                    ? "rgba(0,128,255,0.45)"
                    : "rgba(226,232,240,1)",
                }}
                transition={{ duration: 0.25 }}
              >
                <motion.span
                  className="absolute left-1 h-4 w-4 rounded-full bg-white shadow"
                  animate={{ x: darkMode ? 16 : 0 }}
                  transition={{ type: "spring", stiffness: 520, damping: 34 }}
                />
              </motion.span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
            >
              CONTACT US
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/60 p-2 text-blue-600 transition hover:border-blue-400/40 hover:bg-white/80 dark:border-white/15 dark:bg-white/5 dark:text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-3 rounded-2xl glass p-4 shadow-lg shadow-black/5 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600 dark:text-slate-100 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}

                <button
                  type="button"
                  onClick={toggleDarkMode}
                  className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-xs font-semibold tracking-[0.18em] text-blue-600 transition hover:border-blue-400/40 dark:border-white/15 dark:bg-white/5 dark:text-white"
                >
                  <span>DARK MODE</span>
                  <motion.span
                    className="relative inline-flex h-6 w-10 items-center rounded-full bg-slate-200 dark:bg-white/15"
                    animate={{
                      backgroundColor: darkMode
                        ? "rgba(0,128,255,0.45)"
                        : "rgba(226,232,240,1)",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <motion.span
                      className="absolute left-1 h-4 w-4 rounded-full bg-white shadow"
                      animate={{ x: darkMode ? 16 : 0 }}
                      transition={{ type: "spring", stiffness: 520, damping: 34 }}
                    />
                  </motion.span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className=\"inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold tracking-[0.18em] text-white transition hover:bg-blue-700\"
                >
                  CONTACT US
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

