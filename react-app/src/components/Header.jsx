import { useState, useEffect } from 'react'

export default function Header({ onMenuToggle }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full glass-card border-b border-primary/10 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center">
            <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
              <img src="/src/assets/logo.png" alt="Loli Nails" className="size-[60px] object-contain" />
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#galeria">Galería</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#servicios">Servicios</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#sobre-mi">Sobre Mí</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#contacto">Contacto</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/5493513818087?text=Hola!%20Quiero%20reservar%20un%20turno%20%F0%9F%92%85" target="_blank" rel="noopener" className="hidden sm:flex px-6 h-11 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 items-center gap-2">
            <span className="material-symbols-outlined text-lg">calendar_month</span>
            Reservar
          </a>
          <button onClick={onMenuToggle} className="md:hidden p-2">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}
