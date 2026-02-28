import { ExternalLink, Github, Mail, Shield } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-12 border-t border-slate-200/70 bg-white/40 px-4 py-12 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sovereign-primary to-sovereign-accent text-white shadow-md shadow-blue-500/20">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.18em] text-sovereign-primary dark:text-white">
                  BHARAT-OS
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-300">
                  Sovereign AI Platform
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm">
              Privacy-preserving intelligence, designed for governance. Built for
              mission outcomes across public sector and enterprise environments.
            </p>
          </div>

          <div className="grid gap-2">
            <div className="text-xs font-semibold tracking-[0.18em] text-slate-500 dark:text-slate-300">
              LINKS
            </div>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 hover:text-sovereign-accent"
            >
              Capabilities <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 hover:text-sovereign-accent"
            >
              Request Access <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="mailto:access@bharat-os.ai"
              className="inline-flex items-center gap-2 hover:text-sovereign-accent"
            >
              access@bharat-os.ai <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-2">
            <div className="text-xs font-semibold tracking-[0.18em] text-slate-500 dark:text-slate-300">
              ENGINEERING
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 hover:text-sovereign-accent"
            >
              Security posture <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 hover:text-sovereign-accent"
            >
              Open integrations <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200/70 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} BHARAT-OS. All rights reserved.</p>
          <p>Built with Next.js 16 • React 19 • Sovereign Mode</p>
        </div>
      </div>
    </footer>
  )
}
