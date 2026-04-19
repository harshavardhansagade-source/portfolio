import { motion } from 'motion/react'

function DotRating({ filled, total = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={`w-2 h-2 rounded-full ${i < filled ? 'bg-amber-400' : 'bg-slate-700'}`} />
      ))}
    </div>
  )
}

function NutritionBar({ label, value, max, unit, color }) {
  const pct = Math.min((value / max) * 100, 100)
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-slate-400">{label}</span>
        <span className="text-xs font-semibold text-white">
          {label === 'Calories' ? `${value} / ${max}` : `${value}${unit}`}
        </span>
      </div>
      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const habits = [
  { name: 'Morning walk', done: [1, 1, 1, 1, 1, 0, 1] },
  { name: '8h sleep',     done: [1, 0, 1, 1, 1, 1, 0] },
  { name: 'No alcohol',   done: [1, 1, 1, 1, 0, 1, 1] },
  { name: 'Cold shower',  done: [1, 1, 1, 1, 1, 1, 1] },
]

export default function WhatYouGet() {
  return (
    <section id="results" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
            Everything Included
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            What You Get
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Daily Check-ins */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-5 hover:border-amber-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-lg">✅</div>
              <h3 className="font-bold text-white text-sm">Daily Check-ins</h3>
            </div>
            <div className="space-y-3.5">
              {[{ label: 'Morning weigh-in', dots: 4 }, { label: 'Sleep quality', dots: 5 }, { label: 'Energy level', dots: 4 }, { label: 'Readiness', dots: 5 }].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{row.label}</span>
                  <DotRating filled={row.dots} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Workout Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-5 hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-lg">🏋️</div>
              <h3 className="font-bold text-white text-sm">Workout Tracking</h3>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Today · Push A</span>
              <span className="text-[10px] font-bold text-blue-400">Week 4</span>
            </div>
            <div className="space-y-2">
              {[
                { name: 'Bench Press · 4×8 · 90kg', active: true },
                { name: 'Incline DB · 3×10 · 32kg', active: true },
                { name: 'Lat Pulldown · 4×10 · 70kg', active: false },
                { name: 'Cable Row · 3×12', active: false },
              ].map((ex) => (
                <div key={ex.name} className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs ${ex.active ? 'bg-blue-500/10 border border-blue-500/20 text-white font-medium' : 'text-slate-600'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${ex.active ? 'bg-blue-400' : 'bg-slate-700'}`} />
                  {ex.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Nutrition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-5 hover:border-green-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-lg">🍎</div>
              <h3 className="font-bold text-white text-sm">Nutrition</h3>
            </div>
            <div className="space-y-3.5">
              <NutritionBar label="Calories" value={2180} max={2400} unit="" color="bg-green-500" />
              <NutritionBar label="Protein"  value={188}  max={210}  unit="g" color="bg-green-400" />
              <NutritionBar label="Carbs"    value={241}  max={320}  unit="g" color="bg-blue-400" />
              <NutritionBar label="Fat"      value={72}   max={110}  unit="g" color="bg-yellow-500" />
            </div>
          </motion.div>

          {/* Habit Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-5 hover:border-purple-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-lg">🌙</div>
              <h3 className="font-bold text-white text-sm">Habit Tracking</h3>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-x-2 gap-y-2 items-center">
              <div />
              <div className="grid grid-cols-7 gap-1">
                {days.map((d, i) => (
                  <span key={i} className="text-[9px] font-semibold text-slate-600 text-center">{d}</span>
                ))}
              </div>
              {habits.map((h) => (
                <>
                  <span key={h.name + '_label'} className="text-[11px] text-slate-400 truncate">{h.name}</span>
                  <div key={h.name + '_dots'} className="grid grid-cols-7 gap-1">
                    {h.done.map((filled, i) => (
                      <span key={i} className={`w-3.5 h-3.5 rounded-sm ${filled ? 'bg-purple-400' : 'bg-slate-800'}`} />
                    ))}
                  </div>
                </>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
