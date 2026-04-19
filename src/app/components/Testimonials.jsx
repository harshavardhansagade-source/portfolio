import { motion } from 'motion/react'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Rohan M.',     result: 'Lost 14kg in 3 months',           text: "I had tried every gym and diet before. Harshavardhan's system is different — it actually fits into real life. I didn't feel like I was sacrificing everything.",                initials: 'RM' },
  { name: 'Priya S.',     result: 'Gained lean muscle, lost inches',  text: 'The meal plans were foods I actually enjoy. The WhatsApp check-ins kept me accountable without feeling judged. Huge difference from generic trainers.',                        initials: 'PS' },
  { name: 'Arjun K.',     result: 'Reversed pre-diabetes markers',    text: 'My doctor was shocked at my 3-month bloodwork. This program taught me that fitness is medicine, and Harshavardhan made it simple to execute.',                                  initials: 'AK' },
  { name: 'Sneha R.',     result: 'From 0 to 10K run in 8 weeks',    text: 'I was never athletic. Now I run 5KMs as a warm-up. The progressive approach made it feel effortless. Highly recommend for beginners.',                                          initials: 'SR' },
  { name: 'Vikram P.',    result: 'Built 5kg of muscle in 4 months', text: 'Skinny-fat to actually jacked. The nutrition planning was the key I had been missing for years. Science-backed, practical, and actually enjoyable.',                             initials: 'VP' },
  { name: 'Meera T.',     result: 'Lost 9kg post-pregnancy',         text: 'Getting back in shape after pregnancy felt impossible. The gentle but effective approach, combined with real guidance, made all the difference.',                                 initials: 'MT' },
  { name: 'Rahul D.',     result: 'Six-pack in 5 months',            text: "I thought six-packs were for gym freaks. Turns out it's mostly diet and consistency. Harshavardhan showed me exactly how, step by step.",                                       initials: 'RD' },
  { name: 'Ananya B.',    result: 'Lost 11kg, runs marathons now',   text: "Started as a weight loss journey, ended as a complete lifestyle overhaul. I'm fitter at 34 than I was at 24.",                                                                   initials: 'AB' },
  { name: 'Karthik N.',   result: 'From obese to athletic',          text: "The personalized approach is what makes this different. No generic plans, no copy-paste advice. Everything was built specifically for me.",                                       initials: 'KN' },
  { name: 'Divya M.',     result: 'Cured chronic back pain',         text: "My physiotherapist couldn't believe the improvement. Strengthening the right muscles changed everything for my posture and pain levels.",                                         initials: 'DM' },
  { name: 'Suresh P.',    result: 'Lost 18kg in 6 months',           text: 'The accountability check-ins were the game changer. I knew someone was watching my progress and that kept me going on the hardest days.',                                        initials: 'SP' },
  { name: 'Nisha R.',     result: 'Hormonal balance restored',       text: 'PCOS had made weight loss feel impossible. The customized nutrition approach actually worked with my body, not against it. Life-changing.',                                      initials: 'NR' },
  { name: 'Aakash G.',    result: 'Gained 8kg of lean mass',         text: "Finally understand how to eat to grow muscle. I've been trying to bulk for years and nothing worked until this program.",                                                        initials: 'AG' },
  { name: 'Pooja L.',     result: 'Lost inches, not just weight',    text: 'The focus on body composition over scale weight was refreshing. I look and feel completely different even though I only lost 4kg.',                                              initials: 'PL' },
  { name: 'Manish T.',    result: 'Transformed after 40',            text: "I thought my metabolism was ruined. Harshavardhan proved me wrong. At 43, I'm in the best shape of my life.",                                                                   initials: 'MT' },
  { name: 'Kavya H.',     result: 'Completed first triathlon',       text: "Six months ago I couldn't run a kilometer. Now I completed a triathlon. The structured training plan made it possible.",                                                         initials: 'KH' },
  { name: 'Siddharth R.', result: 'Corporate burnout to peak fit',   text: 'The program showed me that fitness reduces stress, not adds to it. The short but effective workouts fit my crazy corporate schedule perfectly.',                                 initials: 'SR' },
  { name: 'Anita J.',     result: 'Maintained results for 2 years',  text: "This is the first time I've kept weight off for more than 3 months. The lifestyle habits taught here are genuinely permanent.",                                                 initials: 'AJ' },
  { name: 'Deepak S.',    result: 'Bodyweight mastery achieved',     text: 'From barely doing 5 push-ups to 50 clean reps. The progressive overload approach was perfectly calibrated to my ability.',                                                      initials: 'DS' },
  { name: 'Riya C.',      result: 'Posture fixed, strength gained',  text: 'Office work had wrecked my posture. The targeted approach to strengthening my back and core changed how I carry myself completely.',                                             initials: 'RC' },
  { name: 'Arun V.',      result: 'Lost 20kg in 8 months',           text: "The longest I'd stayed on a fitness program before this was 3 weeks. The structure and daily support made all the difference.",                                                  initials: 'AV' },
  { name: 'Shruti N.',    result: 'Athletic physique from scratch',   text: 'I was a complete beginner with no idea where to start. The step-by-step guidance made the journey less overwhelming and more enjoyable.',                                      initials: 'SN' },
  { name: 'Rajesh K.',    result: 'Mental health improved',          text: "I didn't expect fitness to change my anxiety levels but it did dramatically. The consistency and routine gave me structure I desperately needed.",                               initials: 'RK' },
  { name: 'Lakshmi P.',   result: 'Reversed fatty liver',            text: 'My liver enzymes normalized within 4 months. The dietary changes were practical and sustainable, not extreme or punishing.',                                                    initials: 'LP' },
  { name: 'Nikhil M.',    result: 'Skinny to strong in 6 months',    text: "I used to hide my body. Now I'm proud of what I've built. The muscle gain was real and the confidence boost was even more real.",                                               initials: 'NM' },
]

const doubled = [...testimonials, ...testimonials]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#090909] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
            Client Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-zinc-500">Real people, real results, real stories.</p>
        </motion.div>
      </div>

      <div className="flex">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="flex gap-5 shrink-0 px-2.5"
        >
          {doubled.map((t, i) => (
            <div key={i} className="w-80 shrink-0 bg-[#141414] border border-white/6 rounded-3xl p-6 hover:border-green-500/15 transition-colors duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-green-400 fill-green-400" />
                ))}
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-green-400 text-xs font-medium">{t.result}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
