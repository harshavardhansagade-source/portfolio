import { motion } from 'motion/react'
import { ArrowRight, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '917021172760'

export default function FinalCTA() {
  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hi! I want to start my transformation.")
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <section className="relative py-28 overflow-hidden bg-[#0a0f0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/40 via-transparent to-emerald-950/30" />
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-green-500/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-600/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to Build Your
            <br />
            <span className="text-green-400">Best Body?</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Spots are limited each month. If you're serious about transforming your body and lifestyle, let's talk today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsApp}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-zinc-400 font-semibold rounded-full hover:bg-white/4 transition-all duration-300"
            >
              View Plans
            </button>
          </div>

          <p className="mt-8 text-zinc-700 text-sm">
            No obligation. No pressure. Just a conversation about your goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
