import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'system', label: 'System' },
  { id: 'results', label: 'Results' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'about', label: 'About' },
]

export default function FloatingNav() {
  const [active, setActive] = useState('home')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id)
        if (el && el.offsetTop <= scrollY) {
          setActive(navItems[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-0.5 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50 px-2 py-1.5">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className="relative px-3 py-1.5 rounded-full text-[11px] font-medium transition-colors duration-150"
              >
                {active === id && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${active === id ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
