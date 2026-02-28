import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true })

export const metadata: Metadata = {
  title: "BHARAT-OS | Sovereign AI Platform",
  description:
    "BHARAT-OS Sovereign AI: privacy-preserving, policy-aligned intelligence for public sector and enterprise workloads.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* FOUC Prevention: Inline script runs before styles are loaded */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const mode = localStorage.getItem('bharat-os:sovereign-mode') === '1' ? 'dark' : 'light';
                document.documentElement.classList.toggle('dark', mode === 'dark');
                document.documentElement.setAttribute('data-mode', mode);
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="mesh min-h-screen bg-background text-foreground">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
