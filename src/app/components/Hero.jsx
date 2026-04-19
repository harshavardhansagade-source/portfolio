import { motion } from 'motion/react'
import { ArrowRight, Users, Star, Award } from 'lucide-react'
import logo from '../../imports/logo.png'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#090909] pt-16">
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-green-500/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-emerald-600/6 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-green-900/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Accepting New Clients
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Build A Body
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                That Lasts
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I build a complete system — nutrition, training, recovery, and mindset — tailored to your life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollTo('pricing')}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Your Transformation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('system')}
                className="flex items-center justify-center gap-2 px-8 py-4 border border-white/12 text-zinc-300 font-semibold rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                See How It Works
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { icon: Users, value: '200+', label: 'Clients' },
                { icon: Star, value: '4.9/5', label: 'Rating' },
                { icon: Award, value: '5+ Yrs', label: 'Experience' },
              ].map(({ icon: Icon, value, label }, i) => (
                <>
                  {i > 0 && <div key={`div-${i}`} className="w-px h-10 bg-white/8" />}
                  <div key={value} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-bold text-white text-lg leading-none">{value}</div>
                      <div className="text-zinc-600 text-xs mt-0.5">{label}</div>
                    </div>
                  </div>
                </>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-8 rounded-full bg-green-500/8 blur-3xl" />
              <img
                src={logo}
                alt="Harshavardhan Logo"
                className="relative w-72 h-72 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              <div className="bg-white/4 border border-white/8 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-xs text-zinc-600 mt-1 font-medium">Success Rate</div>
              </div>
              <div className="bg-white/4 border border-white/8 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">12 Wks</div>
                <div className="text-xs text-zinc-600 mt-1 font-medium">Avg. Results</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
