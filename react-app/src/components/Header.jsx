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
          <a href="#" className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined text-2xl">flare</span>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">Loli <span className="text-primary">Nails</span></h1>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#galeria">Galería</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#servicios">Servicios</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#sobre-mi">Sobre Mí</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#contacto">Contacto</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/5493513818087" target="_blank" rel="noopener" className="hidden sm:flex px-6 h-11 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 items-center gap-2">
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
