import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Gallery from './components/Gallery'
import Services from './components/Services'
import InfoSection from './components/InfoSection'
import About from './components/About'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import GalleryGrid from './components/GalleryGrid'

function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Gallery />
      <Services />
      <InfoSection />
      <About />
      <Reviews />
      <CTA />
    </>
  )
}

function ScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const savedScroll = sessionStorage.getItem('gallery-scroll')
      if (pathname === '/' && savedScroll) {
        sessionStorage.removeItem('gallery-scroll')
        setTimeout(() => window.scrollTo(0, parseInt(savedScroll)), 50)
      } else {
        window.scrollTo(0, 0)
      }
    }
  }, [hash, pathname])
  return null
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isGallery = location.pathname === '/galeria'

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-clip">
      <ScrollToHash />
      {!isGallery && (
        <>
          <Header onMenuToggle={() => setMenuOpen(!menuOpen)} />
          <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
      )}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<GalleryGrid />} />
          </Routes>
        </main>
        <Footer />
        {!isGallery && <WhatsAppFAB />}
      </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
