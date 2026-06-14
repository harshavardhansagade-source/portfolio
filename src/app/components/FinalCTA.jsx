import { motion } from 'motion/react'
import { ArrowRight, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '917021172760'

export default function FinalCTA() {
  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hi! I want to start my transformation.")
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <section className="relative py-28 overflow-hidden bg-[#1F4E3A]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#17402e]/60 via-transparent to-[#0f2d1e]/40" />
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="h-px w-10 bg-white/30" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/60">Ready to Start</span>
            <div className="h-px w-10 bg-white/30" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Ready to Build Your
            <br />
            <span className="text-white/80 italic">Best Body?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Spots are limited each month. If you're serious about transforming your body and lifestyle, let's talk today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsApp}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-[#F7F9F8] text-[#1F4E3A] font-bold rounded-full hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white/80 font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              View Plans
            </button>
          </div>

          <p className="mt-8 text-white/35 text-sm">
            No obligation. No pressure. Just a conversation about your goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
