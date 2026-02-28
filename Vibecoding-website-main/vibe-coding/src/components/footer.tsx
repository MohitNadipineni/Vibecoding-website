import { Twitter, Facebook, Linkedin, Globe, Pin as Pinterest } from "lucide-react"

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
            <h4 className="text-sm font-bold text-white uppercase border-b border-blue-500 w-fit mb-6">Menus</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#hero" className="hover:text-white">Home</a>
              <a href="#about" className="hover:text-white">Corporate Profile</a>
              <a href="#capabilities" className="hover:text-white">Services</a>
              <a href="#products" className="hover:text-white">Products</a>
              <a href="#careers" className="hover:text-white">Careers</a>
              <a href="#clients" className="hover:text-white">Clients</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms and Conditions</a>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase border-b border-blue-500 w-fit mb-6">Get social</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full text-blue-400" title="Twitter"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-blue-600" title="Facebook"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-blue-500" title="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-red-500" title="Google+"><Globe className="h-4 w-4" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-red-500" title="Pinterest"><Pinterest className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase border-b border-blue-500 w-fit mb-6">Contact</h4>
            <p className="text-xs text-slate-400">Headquartered at Dublin, CA</p>
            <p className="text-xs text-slate-400 mt-2">India Operations: Madhapur, Hyderabad</p>
            <p className="text-xs text-slate-500 mt-6">© 2025 Aroha Technologies. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
