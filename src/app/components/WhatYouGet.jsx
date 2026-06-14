import { motion } from 'motion/react'

function DotRating({ filled, total = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={`w-2 h-2 rounded-full ${i < filled ? 'bg-[#1F4E3A]' : 'bg-[#111111]/12'}`} />
      ))}
    </div>
  )
}

function NutritionBar({ label, value, max, unit, color }) {
  const pct = Math.min((value / max) * 100, 100)
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-[#111111]/50">{label}</span>
        <span className="text-xs font-semibold text-[#111111]">
          {label === 'Calories' ? `${value} / ${max}` : `${value}${unit}`}
        </span>
      </div>
      <div className="h-1.5 bg-[#111111]/8 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const habits = [
  { name: 'Morning walk', done: [1,1,1,1,1,0,1] },
  { name: '8h sleep',     done: [1,0,1,1,1,1,0] },
  { name: 'No alcohol',   done: [1,1,1,1,0,1,1] },
  { name: 'Cold shower',  done: [1,1,1,1,1,1,1] },
]

export default function WhatYouGet() {
  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center gap-4 justify-center mb-5">
            <div className="h-px w-10 bg-[#111111]/20" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#1F4E3A]">Everything Included</span>
            <div className="h-px w-10 bg-[#111111]/20" />
          </div>
          <h2
            className="text-4xl sm:text-5xl text-[#111111]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            What You Get
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Daily Check-ins */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0 }}
            className="bg-[#F7F9F8] border border-[#111111]/8 rounded-3xl p-5 hover:border-[#1F4E3A]/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#1F4E3A]/8 border border-[#1F4E3A]/15 flex items-center justify-center text-base">✅</div>
              <h3 className="font-semibold text-[#111111] text-sm">Daily Check-ins</h3>
            </div>
            <div className="space-y-3.5">
              {[{ label: 'Morning weigh-in', dots: 4 }, { label: 'Sleep quality', dots: 5 }, { label: 'Energy level', dots: 4 }, { label: 'Readiness', dots: 5 }].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-xs text-[#111111]/50">{row.label}</span>
                  <DotRating filled={row.dots} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Workout Tracking */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-[#F7F9F8] border border-[#111111]/8 rounded-3xl p-5 hover:border-[#1F4E3A]/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#1F4E3A]/8 border border-[#1F4E3A]/15 flex items-center justify-center text-base">🏋️</div>
              <h3 className="font-semibold text-[#111111] text-sm">Workout Tracking</h3>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold text-[#111111]/40 uppercase tracking-wider">Today · Push A</span>
              <span className="text-[10px] font-bold text-[#1F4E3A]">Week 4</span>
            </div>
            <div className="space-y-2">
              {[
                { name: 'Bench Press · 4×8 · 90kg', active: true },
                { name: 'Incline DB · 3×10 · 32kg', active: true },
                { name: 'Lat Pulldown · 4×10 · 70kg', active: false },
                { name: 'Cable Row · 3×12', active: false },
              ].map((ex) => (
                <div key={ex.name} className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs ${ex.active ? 'bg-[#1F4E3A]/8 border border-[#1F4E3A]/15 text-[#111111] font-medium' : 'text-[#111111]/30'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${ex.active ? 'bg-[#1F4E3A]' : 'bg-[#111111]/15'}`} />
                  {ex.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Nutrition */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.16 }}
            className="bg-[#F7F9F8] border border-[#111111]/8 rounded-3xl p-5 hover:border-[#1F4E3A]/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#1F4E3A]/8 border border-[#1F4E3A]/15 flex items-center justify-center text-base">🍎</div>
              <h3 className="font-semibold text-[#111111] text-sm">Nutrition</h3>
            </div>
            <div className="space-y-3.5">
              <NutritionBar label="Calories" value={2180} max={2400} unit="" color="bg-[#1F4E3A]" />
              <NutritionBar label="Protein"  value={188}  max={210}  unit="g" color="bg-[#1F4E3A]/80" />
              <NutritionBar label="Carbs"    value={241}  max={320}  unit="g" color="bg-[#1F4E3A]/60" />
              <NutritionBar label="Fat"      value={72}   max={110}  unit="g" color="bg-[#111111]/25" />
            </div>
          </motion.div>

          {/* Habit Tracking */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.24 }}
            className="bg-[#F7F9F8] border border-[#111111]/8 rounded-3xl p-5 hover:border-[#1F4E3A]/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#1F4E3A]/8 border border-[#1F4E3A]/15 flex items-center justify-center text-base">🌙</div>
              <h3 className="font-semibold text-[#111111] text-sm">Habit Tracking</h3>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-x-2 gap-y-2 items-center">
              <div />
              <div className="grid grid-cols-7 gap-1">
                {days.map((d, i) => <span key={i} className="text-[9px] font-semibold text-[#111111]/35 text-center">{d}</span>)}
              </div>
              {habits.map((h) => (
                <>
                  <span key={h.name + '_l'} className="text-[11px] text-[#111111]/50 truncate">{h.name}</span>
                  <div key={h.name + '_d'} className="grid grid-cols-7 gap-1">
                    {h.done.map((filled, i) => (
                      <span key={i} className={`w-3.5 h-3.5 rounded-sm ${filled ? 'bg-[#1F4E3A]' : 'bg-[#111111]/10'}`} />
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
