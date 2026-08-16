import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import profileImg from '../../imports/image-2.jpeg'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      <div className="absolute top-32 right-0 w-[600px] h-[600px] rounded-full bg-[#1F4E3A]/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#F7F9F8] blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-8xl leading-tight mb-6"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              <span className="text-[#111111]">Build A Body</span>
              <br />
              <span className="text-[#1F4E3A]">That Lasts</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#111111]/55 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I build a complete system. Nutrition, training, recovery, and mindset tailored to your life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollTo('contact')}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#1F4E3A] hover:bg-[#17402e] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#1F4E3A]/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('system')}
                className="flex items-center justify-center gap-2 px-8 py-4 border border-[#111111]/15 text-[#111111] font-semibold rounded-full hover:bg-[#111111]/4 hover:border-[#111111]/25 transition-all duration-300"
              >
                See How It Works
              </button>
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
