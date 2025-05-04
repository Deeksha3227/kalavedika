import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0b0b5c] text-white py-8 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-white/40 inline-block pb-1">Contact us</h2>
          <div className="text-base leading-relaxed">
            <p className="font-semibold">AJ Institute of Engineering & Technology,</p>
            <div className="flex items-start gap-2 mt-2">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>NH-66, Kottara Chowki, Mangaluru – 575006, Karnataka, India</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> <span>+91 9483026503</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> <span>+91 0824 2862200</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> <span>+91 0824 2455048</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> <span>admissions@ajiet.edu.in</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-white/40 inline-block pb-1">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a href="/" className="hover:text-orange-300 transition-colors">
              Home
            </a>
            <a href="/events" className="hover:text-orange-300 transition-colors">
              Events
            </a>
            <a href="/register" className="hover:text-orange-300 transition-colors">
              Register
            </a>
            <a href="/about" className="hover:text-orange-300 transition-colors">
              About
            </a>
          </div>

          <div className="pt-4">
            <p className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} Kalavedika, AJIET Cultural Committee. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
