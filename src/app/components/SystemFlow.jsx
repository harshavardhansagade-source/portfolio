import { motion } from 'motion/react'

const steps = [
  { emoji: '🎯', title: 'Assessment', desc: 'We analyze your current body composition, lifestyle, sleep patterns, and habits to understand where you truly stand.' },
  { emoji: '🗺️', title: 'Goal Mapping', desc: 'We set realistic, measurable milestones tailored to your timeline — no guesswork, no generic targets.' },
  { emoji: '📋', title: 'Program Design', desc: 'A fully personalized workout and nutrition plan built around your schedule, equipment, and body type.' },
  { emoji: '📊', title: 'Daily Tracking', desc: "Every meal, workout, and recovery metric is tracked and logged so we always know exactly what's working." },
  { emoji: '🔄', title: 'Optimization', desc: 'Weekly reviews and data-driven adjustments ensure your plan evolves as your body does.' },
  { emoji: '🌟', title: 'Lifestyle Integration', desc: "We build sustainable habits that don't disappear after the program ends — this is a life upgrade, not a quick fix." },
]

export default function SystemFlow() {
  return (
    <section id="system" className="py-24 bg-[#080d1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
            The System
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            How Your Transformation Works
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 items-start"
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 flex items-center justify-center text-xl">
                    {step.emoji}
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex-1 hover:bg-white/8 hover:border-cyan-500/20 transition-all duration-300">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Step {i + 1}</span>
                  <h3 className="font-semibold text-white text-lg mt-1 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
