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
    <section id="about" className="py-24 bg-[#F7F9F8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 justify-center mb-5">
            <div className="h-px w-10 bg-[#111111]/20" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#1F4E3A]">About</span>
            <div className="h-px w-10 bg-[#111111]/20" />
          </div>
          <h2
            className="text-4xl sm:text-5xl text-[#111111]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
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
              <div className="absolute -inset-3 rounded-3xl bg-[#1F4E3A]/6 blur-xl" />
              <div className="relative w-48 h-48 rounded-3xl overflow-hidden border border-[#111111]/10 shadow-lg shadow-[#111111]/8">
                <img src={profileImg} alt="Harshavardhan" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {credentials.map((cred) => {
                const Icon = cred.icon
                return (
                  <div key={cred.label} className="bg-white border border-[#111111]/8 rounded-2xl p-3 text-center">
                    <Icon className="w-5 h-5 text-[#1F4E3A] mx-auto mb-1" />
                    <div className="text-sm font-bold text-[#111111]">{cred.value}</div>
                    <div className="text-xs text-[#111111]/45">{cred.label}</div>
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
            <h3
              className="text-3xl text-[#111111] mb-4"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Hi, I'm{' '}
              <span className="text-[#1F4E3A]">Harshavardhan</span>
            </h3>

            <div className="bg-white border border-[#111111]/8 rounded-3xl p-6 space-y-4 text-[#111111]/65 text-[15px] leading-relaxed">
              <p>
                I spent years watching people struggle with fitness — not because they lacked willpower, but because they were following systems that were never designed for real life.
              </p>
              <p>
                I'm not here to give you a 6-week crash course. I'm here to build you a{' '}
                <strong className="text-[#111111]">sustainable system</strong> — one that works with your job, your family, and your social life.
              </p>
              <p>
                Every client I work with gets a fully personalized plan based on their body, their schedule, and their goals. No cookie-cutter templates. No generic advice.
              </p>
              <div className="pt-2 border-t border-[#111111]/8">
                <p className="text-sm text-[#111111]/40 italic">
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
