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
    cardClass: 'bg-[#F7F9F8] border border-[#111111]/10',
    btnClass: 'border border-[#111111]/15 text-[#111111] hover:bg-[#111111]/5',
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
    cardClass: 'bg-white border-2 border-[#1F4E3A]/35',
    btnClass: 'bg-[#1F4E3A] hover:bg-[#17402e] text-white hover:shadow-lg hover:shadow-[#1F4E3A]/15',
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
      { text: 'Monthly 12 Sessions', included: true },
      { text: 'Daily 1-on-1 Sessions', included: true },
    ],
    cta: 'Apply for Coaching',
    cardClass: 'bg-[#F7F9F8] border border-[#1F4E3A]/20',
    btnClass: 'border border-[#1F4E3A]/30 text-[#1F4E3A] hover:bg-[#1F4E3A]/8',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#F7F9F8]">
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
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#1F4E3A]">Investment</span>
            <div className="h-px w-10 bg-[#111111]/20" />
          </div>
          <h2
            className="text-4xl sm:text-5xl text-[#111111]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
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
              className={`relative rounded-3xl p-6 ${plan.cardClass} ${plan.highlight ? 'md:scale-105 shadow-xl shadow-[#1F4E3A]/8' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-[#1F4E3A] text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-[#1F4E3A]/20">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-[#111111] text-xl mb-3">{plan.name}</h3>
                <div
                  className="text-4xl text-[#111111]"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {plan.price}
                </div>
                <div className="text-xs font-medium text-[#1F4E3A] mt-1">{plan.validity}</div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feat) => (
                  <li key={feat.text} className="flex items-start gap-3">
                    {feat.included
                      ? <Check className="w-4 h-4 text-[#1F4E3A] mt-0.5 shrink-0" />
                      : <X className="w-4 h-4 text-[#111111]/15 mt-0.5 shrink-0" />}
                    <span className={`text-sm leading-snug ${feat.included ? 'text-[#111111]/75' : 'text-[#111111]/25'}`}>{feat.text}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#1F4E3A]/5 rounded-xl p-4 mb-6 border border-[#1F4E3A]/10">
                <p className="text-sm text-[#111111]/55 leading-relaxed">{plan.description}</p>
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
          <p className="text-[#111111]/40 text-sm italic max-w-xl mx-auto mb-6">
            "This is not about workouts. It's about building a system your body can sustain."
          </p>
          <button
            onClick={() => openWhatsApp('coaching')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1F4E3A] hover:bg-[#17402e] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#1F4E3A]/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Apply for Coaching →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
