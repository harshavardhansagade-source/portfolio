import { motion } from 'motion/react'
import { ArrowRight, Users, Star, Award } from 'lucide-react'
import profileImg from '../../imports/image-1.png'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      <div className="absolute top-32 right-0 w-[600px] h-[600px] rounded-full bg-[#1F4E3A]/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#F7F9F8] blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="h-px w-6 bg-[#1F4E3A]" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#1F4E3A]">Accepting New Clients</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E3A] animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              <span className="text-[#111111]">Build A Body</span>
              <br />
              <span className="text-[#1F4E3A]">That Lasts</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-[#111111]/55 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
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
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#1F4E3A] hover:bg-[#17402e] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#1F4E3A]/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Your Transformation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('system')}
                className="flex items-center justify-center gap-2 px-8 py-4 border border-[#111111]/15 text-[#111111] font-semibold rounded-full hover:bg-[#111111]/4 hover:border-[#111111]/25 transition-all duration-300"
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
                  {i > 0 && <div key={`div-${i}`} className="w-px h-10 bg-[#111111]/12" />}
                  <div key={value} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-[#1F4E3A]" />
                    <div>
                      <div className="font-bold text-[#111111] text-lg leading-none">{value}</div>
                      <div className="text-[#111111]/40 text-xs mt-0.5">{label}</div>
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
              <div className="absolute -inset-4 rounded-3xl bg-[#1F4E3A]/6 blur-2xl" />
              <img
                src={profileImg}
                alt="Harshavardhan"
                className="relative w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-3xl border border-[#111111]/10 shadow-xl shadow-[#111111]/8"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              <div className="bg-[#F7F9F8] border border-[#111111]/8 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-[#1F4E3A]">95%</div>
                <div className="text-xs text-[#111111]/45 mt-1 font-medium">Success Rate</div>
              </div>
              <div className="bg-[#F7F9F8] border border-[#111111]/8 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-[#1F4E3A]">12 Wks</div>
                <div className="text-xs text-[#111111]/45 mt-1 font-medium">Avg. Results</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
