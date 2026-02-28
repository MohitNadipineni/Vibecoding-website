import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ContactForm } from "@/components/ContactForm"

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-0px)]">
      <section id="hero">
        <Hero />
      </section>
      <section id="capabilities">
        <Services />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  )
}
