import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true })

export const metadata: Metadata = {
  title: "Aroha Technologies | Digital Engineering Solutions",
  description: "Aroha Technologies: Bespoke software solutions, AI-driven automation, and scalable cloud architectures for global enterprises.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.add('dark');
                document.documentElement.setAttribute('data-mode', 'dark');
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#020617] text-white antialiased`}>
        <div className="relative min-h-screen flex flex-col">
          {/* Ensuring the mesh has a high z-index but stays behind content */}
          <div className="mesh fixed inset-0 z-0" />
          <Navbar />
          <main className="relative z-10 flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
