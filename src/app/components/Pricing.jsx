import { motion } from 'motion/react'
import { Check, X, ArrowRight } from 'lucide-react'

const WHATSAPP_NUMBER = '917021172760'

const openWhatsApp = (plan) => {
  const msg = encodeURIComponent(`Hi! I'm interested in the ${plan} coaching plan.`)
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
}

const plans = [
  {
    name: 'Foundation',
    price: '₹2,121',
    validity: '1 month validity',
    badge: null,
    description: 'Best for: Self-driven individuals who just need the right plan.',
    features: [
      { text: 'Personalized Workout Plan', included: true },
      { text: 'Custom Meal Plan', included: true },
      { text: 'Macro Tracking Sheet', included: true },
      { text: 'Monthly Check-in Call', included: true },
      { text: 'Email Support', included: true },
      { text: 'Weekly Video Check-ins', included: false },
      { text: '24/7 WhatsApp Support', included: false },
    ],
    cta: 'Get Started',
    cardClass: 'bg-white/5 border border-white/10',
    btnClass: 'border border-white/20 text-white hover:bg-white/10',
    highlight: false,
  },
  {
    name: 'Structured Coaching',
    price: '₹9,696',
    validity: '1 month validity',
    badge: 'RECOMMENDED',
    description: 'Best for: People who struggle with consistency and need guidance.',
    features: [
      { text: 'Everything in Foundation', included: true },
      { text: 'Weekly Video Check-ins', included: true },
      { text: '24/7 WhatsApp Support', included: true },
      { text: 'Progress Tracking Dashboard', included: true },
      { text: 'Form Correction Feedback', included: true },
      { text: 'Habit Building Framework', included: true },
      { text: 'Daily 1-on-1 Sessions', included: false },
    ],
    cta: 'Apply for Coaching',
    cardClass: 'bg-gradient-to-b from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/40',
    btnClass: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30',
    highlight: true,
  },
  {
    name: 'Complete Transformation',
    price: '₹21,212',
    validity: '1 month validity',
    badge: null,
    description: 'Best for: Individuals who want high-level support and hands-on coaching.',
    features: [
      { text: 'Everything in Structured', included: true },
      { text: 'Daily WhatsApp Check-ins', included: true },
      { text: 'Weekly Strategy Calls', included: true },
      { text: 'Lifestyle & Mindset Coaching', included: true },
      { text: 'Grocery & Meal Prep Guide', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Extended Program Access', included: true },
    ],
    cta: 'Apply for Coaching',
    cardClass: 'bg-white/5 border border-blue-400/30',
    btnClass: 'border border-blue-400/40 text-blue-300 hover:bg-blue-500/10',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
            Investment
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-6 backdrop-blur-sm ${plan.cardClass} ${plan.highlight ? 'md:scale-105 shadow-2xl shadow-cyan-500/20' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-cyan-500/30">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-bold text-white text-xl mb-3">{plan.name}</h3>
                <div className="text-4xl font-bold text-white">{plan.price}</div>
                <div className="text-xs font-medium text-cyan-400 mt-1">{plan.validity}</div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feat) => (
                  <li key={feat.text} className="flex items-start gap-3">
                    {feat.included ? (
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-slate-700 mt-0.5 shrink-0" />
                    )}
                    <span className={`text-sm leading-snug ${feat.included ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feat.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/5">
                <p className="text-sm text-slate-400 leading-relaxed">{plan.description}</p>
              </div>

              <button
                onClick={() => openWhatsApp(plan.name)}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-sm transition-all duration-200 ${plan.btnClass}`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm italic max-w-xl mx-auto mb-6">
            "This is not about workouts. It's about building a system your body can sustain."
          </p>
          <button
            onClick={() => openWhatsApp('coaching')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Apply for Coaching →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
