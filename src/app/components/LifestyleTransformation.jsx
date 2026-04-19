import { motion } from 'motion/react'
import { TrendingDown, TrendingUp, Zap, Heart } from 'lucide-react'

const stats = [
  { icon: TrendingDown, value: '8–15kg', label: 'Average Fat Lost', color: 'text-green-400' },
  { icon: TrendingUp,  value: '3–6kg',  label: 'Muscle Gained',    color: 'text-emerald-400' },
  { icon: Zap,         value: '4x',     label: 'Energy Increase',  color: 'text-green-400' },
  { icon: Heart,       value: '100%',   label: 'Feel-Good Guarantee', color: 'text-emerald-400' },
]

const transformations = [
  { name: 'Lost 12kg', detail: 'in 3 months', desc: 'Office worker, no prior gym experience' },
  { name: 'Gained muscle', detail: 'while eating more', desc: 'Skinny-fat transformation, 4 months' },
  { name: 'Ran first 10K', detail: 'from zero cardio base', desc: 'Built endurance in 8 weeks' },
  { name: 'Reversed pre-diabetes', detail: 'through diet & training', desc: 'Lifestyle overhaul, 5 months' },
]

export default function LifestyleTransformation() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
            Real Results
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent mb-4">
            Transformations That Speak
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
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
                className="bg-[#161616] border border-white/6 rounded-3xl p-6 text-center"
              >
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl font-extrabold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
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
              className="bg-[#161616] border border-white/6 rounded-2xl p-5 hover:border-green-500/20 transition-all duration-300"
            >
              <div className="text-xl font-bold text-white mb-1">{t.name}</div>
              <div className="text-sm font-medium text-green-400 mb-3">{t.detail}</div>
              <p className="text-sm text-zinc-600">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
