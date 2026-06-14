import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import logo from '../../imports/logo.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#111111]/8 shadow-sm shadow-[#111111]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5">
            <img src={logo} alt="Harshavardhan Logo" className="w-10 h-10 object-contain" />
            <span className="font-semibold text-[#111111] text-lg tracking-tight">Harshavardhan</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {[['home','Home'],['system','System'],['results','Results'],['pricing','Pricing'],['about','About']].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="px-4 py-2 text-sm font-medium text-[#111111]/50 hover:text-[#111111] hover:bg-[#111111]/5 rounded-full transition-all duration-200"
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo('pricing')}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#1F4E3A] hover:bg-[#17402e] rounded-full hover:shadow-lg hover:shadow-[#1F4E3A]/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            Apply Now
          </button>
        </div>
      </div>
    </motion.header>
  )
}
