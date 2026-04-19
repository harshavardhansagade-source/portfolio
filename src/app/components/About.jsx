import { motion } from 'motion/react'
import { Award, Users, Clock, Target } from 'lucide-react'
import profileImg from '../../imports/image-1.png'

const credentials = [
  { icon: Award,  label: 'Certified Coach', value: 'IFSA & ACSM' },
  { icon: Users,  label: 'Clients',         value: '200+' },
  { icon: Clock,  label: 'Experience',      value: '5+ Years' },
  { icon: Target, label: 'Specialization',  value: 'Body Recomp' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#111111]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
            About
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Your Coach
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-green-500/10 blur-xl" />
              <div className="relative w-48 h-48 rounded-3xl overflow-hidden border-2 border-green-500/20 shadow-2xl shadow-green-500/10">
                <img src={profileImg} alt="Harshavardhan" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {credentials.map((cred) => {
                const Icon = cred.icon
                return (
                  <div key={cred.label} className="bg-[#161616] border border-white/6 rounded-2xl p-3 text-center">
                    <Icon className="w-5 h-5 text-green-500 mx-auto mb-1" />
                    <div className="text-sm font-bold text-white">{cred.value}</div>
                    <div className="text-xs text-zinc-600">{cred.label}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Hi, I'm{' '}
              <span className="text-green-400">Harshavardhan</span>
            </h3>

            <div className="bg-[#161616] border border-white/6 rounded-3xl p-6 space-y-4 text-zinc-400 text-[15px] leading-relaxed">
              <p>
                I spent years watching people struggle with fitness — not because they lacked willpower, but because they were following systems that were never designed for real life.
              </p>
              <p>
                I'm not here to give you a 6-week crash course. I'm here to build you a{' '}
                <strong className="text-white">sustainable system</strong> — one that works with your job, your family, and your social life.
              </p>
              <p>
                Every client I work with gets a fully personalized plan based on their body, their schedule, and their goals. No cookie-cutter templates. No generic advice.
              </p>
              <div className="pt-2 border-t border-white/6">
                <p className="text-sm text-zinc-600 italic">
                  "Fitness is not a punishment. It's the most powerful investment you'll ever make in yourself."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
