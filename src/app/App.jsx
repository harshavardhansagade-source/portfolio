import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TransformationLoop from './components/TransformationLoop.jsx'
import SystemFlow from './components/SystemFlow.jsx'
import WhatYouGet from './components/WhatYouGet.jsx'
import Pricing from './components/Pricing.jsx'
import LifestyleTransformation from './components/LifestyleTransformation.jsx'
import Testimonials from './components/Testimonials.jsx'
import About from './components/About.jsx'
import ContactForm from './components/ContactForm.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import FloatingNav from './components/FloatingNav.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#090909]">
      <Header />
      <Hero />
      <TransformationLoop />
      <SystemFlow />
      <WhatYouGet />
      <Pricing />
      <LifestyleTransformation />
      <Testimonials />
      <About />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <FloatingNav />
      <WhatsAppButton />
    </div>
  )
}
