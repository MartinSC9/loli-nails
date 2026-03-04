import { useState } from 'react'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Gallery from './components/Gallery'
import Services from './components/Services'
import About from './components/About'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Gallery />
        <Services />
        <About />
        <Reviews />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}

export default App
