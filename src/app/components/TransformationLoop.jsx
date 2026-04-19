import { motion } from 'motion/react'

const items = [
  'Weight Loss', 'Fat Loss', 'Muscle Gain', 'Strength Increase',
  'Body Toning', 'Inch Loss', 'Endurance Improvement', 'Better Mobility',
  'Injury Recovery', 'Habit Building', 'Consistency', 'Lifestyle Transformation',
]

const doubled = [...items, ...items]

export default function TransformationLoop() {
  return (
    <section className="py-8 bg-[#111111] border-y border-white/6 overflow-hidden">
      <div className="flex">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="flex gap-4 shrink-0"
        >
          {doubled.map((item, i) => (
            <div key={i} className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white/4 border border-white/8 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
              <span className="text-sm font-medium text-zinc-300 whitespace-nowrap">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
