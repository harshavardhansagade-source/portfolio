import { motion } from 'motion/react'
import { TrendingDown, TrendingUp, Zap, Heart } from 'lucide-react'

const stats = [
  { icon: TrendingDown, value: '8–15kg', label: 'Average Fat Lost' },
  { icon: TrendingUp,  value: '3–6kg',  label: 'Muscle Gained' },
  { icon: Zap,         value: '4x',     label: 'Energy Increase' },
  { icon: Heart,       value: '100%',   label: 'Feel-Good Guarantee' },
]

const transformations = [
  { name: 'Lost 12kg', detail: 'in 3 months', desc: 'Office worker, no prior gym experience' },
  { name: 'Gained muscle', detail: 'while eating more', desc: 'Skinny-fat transformation, 4 months' },
  { name: 'Ran first 10K', detail: 'from zero cardio base', desc: 'Built endurance in 8 weeks' },
  { name: 'Reversed pre-diabetes', detail: 'through diet & training', desc: 'Lifestyle overhaul, 5 months' },
]

export default function LifestyleTransformation() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 justify-center mb-5">
            <div className="h-px w-10 bg-[#111111]/20" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#1F4E3A]">Real Results</span>
            <div className="h-px w-10 bg-[#111111]/20" />
          </div>
          <h2
            className="text-4xl sm:text-5xl text-[#111111] mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Transformations That Speak
          </h2>
          <p className="text-lg text-[#111111]/50 max-w-2xl mx-auto">
            Numbers don't lie. Here's what clients typically achieve in their first 90 days.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F7F9F8] border border-[#111111]/8 rounded-3xl p-6 text-center"
              >
                <Icon className="w-8 h-8 text-[#1F4E3A] mx-auto mb-3" />
                <div
                  className="text-3xl text-[#1F4E3A] mb-1"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-[#111111]/50 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {transformations.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F7F9F8] border border-[#111111]/8 rounded-2xl p-5 hover:border-[#1F4E3A]/25 transition-all duration-300"
            >
              <div className="text-xl font-bold text-[#111111] mb-1">{t.name}</div>
              <div className="text-sm font-medium text-[#1F4E3A] mb-3">{t.detail}</div>
              <p className="text-sm text-[#111111]/45">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
