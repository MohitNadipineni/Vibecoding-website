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
    // Added 'dark' class here to force dark mode by default
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const mode = localStorage.getItem('bharat-os:sovereign-mode') || 'dark';
                  document.documentElement.classList.toggle('dark', mode === 'dark');
                  document.documentElement.setAttribute('data-mode', mode);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      {/* Added bg-slate-950 to ensure the background is dark even before mesh loads */}
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        <div className="mesh min-h-screen bg-background text-foreground transition-colors duration-500">
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
