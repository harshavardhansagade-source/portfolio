import { Instagram, Youtube, Mail } from 'lucide-react'
import logo from '../../imports/logo.png'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
              <span className="font-bold text-white text-lg">Harshavardhan</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Building bodies that last through science-backed, lifestyle-first coaching.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[['home', 'Home'], ['system', 'The System'], ['results', 'Results'], ['pricing', 'Pricing'], ['about', 'About']].map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-slate-500 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="mailto:harshavardhansagade@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-slate-600 text-xs">DM for coaching enquiries</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© 2024 Harshavardhan Fitness. All rights reserved.</p>
          <p className="text-slate-600 text-sm">Built for transformations that last.</p>
        </div>
      </div>
    </footer>
  )
}
