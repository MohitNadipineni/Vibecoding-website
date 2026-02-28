import { Twitter, Facebook, Linkedin, Github, Pin as Pinterest } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6 bg-[#020617]">
      <div className="mx-auto max-w-6xl">
        {/* Clients Section */}
        <div className="mb-16">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Our Clients</h3>
          <div className="flex flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
             <span className="text-xl font-bold text-white">DELTA DENTAL</span>
             <span className="text-xl font-bold text-white">CalOptima Health</span>
             <span className="text-xl font-bold text-white">Walmart</span>
             <span className="text-xl font-bold text-white">pwc</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Menus */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase border-b border-orange-500 w-fit mb-6">Menus</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">About Us</a>
              <a href="#" className="hover:text-white">Contact Us</a>
              <a href="#" className="hover:text-white">Services</a>
              <a href="#" className="hover:text-white">Immigration</a>
              <a href="#" className="hover:text-white">Unsubscribe</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms and Conditions</a>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase border-b border-orange-500 w-fit mb-6">Get social</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full text-blue-400"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-blue-600"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-blue-500"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-red-500"><Pinterest className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase border-b border-orange-500 w-fit mb-6">More</h4>
            <p className="text-xs text-slate-500">© 2025 Aroha Technologies. All Rights Reserved....</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
