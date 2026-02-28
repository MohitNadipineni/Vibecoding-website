import { CheckCircle, Gavel, LockKeyhole, Network, ScanEye } from "lucide-react"

const capabilities = [
  {
    icon: Gavel,
    title: "Policy & Governance Layer",
    description:
      "Codify sovereign policy, RBAC, and guardrails directly into AI workflows—built for audits, traceability, and accountable automation.",
    features: [
      "Policy-as-code guardrails",
      "Human-in-the-loop approvals",
      "Immutable audit trails",
      "Data boundary enforcement",
    ],
  },
  {
    icon: LockKeyhole,
    title: "Private-by-Design Intelligence",
    description:
      "Operate on sensitive datasets with principled access controls, encryption-first posture, and secure deployment patterns.",
    features: [
      "Secure enclaves / private runtimes",
      "Secretless workload patterns",
      "Tenant isolation",
      "Threat-modelled defaults",
    ],
  },
  {
    icon: Network,
    title: "Edge + Cloud Orchestration",
    description:
      "Route inference across cloud, edge, and constrained environments with consistent observability and SLO-driven controls.",
    features: [
      "Adaptive routing & fallbacks",
      "Streaming inference",
      "SLO / latency budgets",
      "Unified telemetry",
    ],
  },
]

export function Services() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-sovereign-primary shadow-sm dark:border-white/15 dark:bg-white/5 dark:text-white">
            <ScanEye className="h-4 w-4 text-sovereign-accent" />
            PLATFORM CAPABILITIES
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-sovereign-primary dark:text-white sm:text-4xl">
            Built for sovereignty, at the speed of 2035.
          </h2>
          <p className="mt-3 text-balance text-sm text-slate-600 dark:text-slate-200 sm:text-base">
            BHARAT-OS provides the secure primitives needed to deploy AI across
            public sector and enterprise environments—without sacrificing
            control, compliance, or usability.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon
            return (
              <div
                key={capability.title}
                className="glass group rounded-2xl border border-slate-200/70 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-sovereign-accent/30 hover:shadow-md dark:border-white/15"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-sovereign-accent/10 text-sovereign-accent dark:bg-white/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200">
                    BHARAT-OS
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-sovereign-primary dark:text-white">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-200">
                  {capability.description}
                </p>

                <div className="mt-5 space-y-2">
                  {capability.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-sovereign-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

