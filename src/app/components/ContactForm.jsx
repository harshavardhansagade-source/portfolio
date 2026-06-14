import { useState } from 'react'
import { motion } from 'motion/react'
import { Send, CheckCircle } from 'lucide-react'

const COACH_EMAIL = 'harshavardhansagade@gmail.com'

const inputClass = `
  w-full bg-white border border-[#111111]/12 rounded-2xl px-4 py-3.5
  text-[#111111] placeholder-[#111111]/30 text-sm
  focus:outline-none focus:border-[#1F4E3A]/40 focus:ring-1 focus:ring-[#1F4E3A]/15
  transition-all duration-200
`.trim()

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || 'Coaching Enquiry')
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:${COACH_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center gap-4 justify-center mb-5">
            <div className="h-px w-10 bg-[#111111]/20" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#1F4E3A]">Get In Touch</span>
            <div className="h-px w-10 bg-[#111111]/20" />
          </div>
          <h2
            className="text-4xl sm:text-5xl text-[#111111] mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Contact Me
          </h2>
          <p className="text-[#111111]/50 text-lg">Have a question? Fill the form and I'll get back to you.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-[#F7F9F8] border border-[#111111]/8 rounded-3xl p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-semibold text-[#111111]/45 uppercase tracking-wider mb-2">Name</label>
              <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-[#111111]/45 uppercase tracking-wider mb-2">Phone Number</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-semibold text-[#111111]/45 uppercase tracking-wider mb-2">Email</label>
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
          </div>

          <div>
            <label className="block text-[10px] font-semibold text-[#111111]/45 uppercase tracking-wider mb-2">Subject</label>
            <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="e.g. Interested in Structured Coaching" className={inputClass} />
          </div>

          <div>
            <label className="block text-[10px] font-semibold text-[#111111]/45 uppercase tracking-wider mb-2">Message</label>
            <textarea name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Tell me about your fitness goals..." className={`${inputClass} resize-none`} />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-[#1F4E3A] hover:bg-[#17402e] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#1F4E3A]/20 transition-all duration-300 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
          >
            {sent ? <><CheckCircle className="w-5 h-5" />Opening Email Client…</> : <><Send className="w-5 h-5" />Send Message</>}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
