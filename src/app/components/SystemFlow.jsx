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
    <section id="system" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 justify-center mb-5">
            <div className="h-px w-10 bg-[#111111]/20" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#1F4E3A]">The System</span>
            <div className="h-px w-10 bg-[#111111]/20" />
          </div>
          <h2
            className="text-4xl sm:text-5xl text-[#111111]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            How Your Transformation Works
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#1F4E3A]/40 via-[#1F4E3A]/15 to-transparent" />
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
                  <div className="w-12 h-12 rounded-full bg-[#F7F9F8] border border-[#1F4E3A]/20 flex items-center justify-center text-xl">
                    {step.emoji}
                  </div>
                </div>
                <div className="bg-[#F7F9F8] border border-[#111111]/8 rounded-2xl p-5 flex-1 hover:border-[#1F4E3A]/25 transition-all duration-300">
                  <span className="text-[10px] font-bold text-[#1F4E3A] uppercase tracking-wider">Step {i + 1}</span>
                  <h3 className="font-semibold text-[#111111] text-lg mt-1 mb-2">{step.title}</h3>
                  <p className="text-sm text-[#111111]/55 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
