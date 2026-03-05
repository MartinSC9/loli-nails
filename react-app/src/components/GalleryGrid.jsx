import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import designs from '../data/designs'
import Filters from './Filters'
import DesignModal from './DesignModal'

export default function GalleryGrid() {
  const [activeColor, setActiveColor] = useState('all')
  const [selectedDesign, setSelectedDesign] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash)
    if (hash.startsWith('#diseño/')) {
      const id = hash.replace('#diseño/', '')
      const found = designs.find(d => d.id === id)
      if (found) setSelectedDesign(found)
    }
  }, [])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const filtered = designs.filter(d =>
    activeColor === 'all' || d.color === activeColor
  )

  const selectDesign = (design) => {
    window.history.replaceState(null, '', `/galeria#diseño/${design.id}`)
    setSelectedDesign(design)
  }

  const closeModal = () => {
    window.history.replaceState(null, '', '/galeria')
    setSelectedDesign(null)
  }

  return (
    <section className="max-w-5xl mx-auto w-full px-4">
      <div className="pt-4 pb-2 -mx-4 px-4">
        <div className="flex items-center gap-3 mb-2">
          <Link
            to="/"
            className="size-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-slate-600">arrow_back</span>
          </Link>
          <h1>
            <span className="text-2xl font-black text-slate-900">Todos los </span>
            <span className="text-2xl font-script text-primary">diseños</span>
          </h1>
        </div>
      </div>
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md -mx-4 px-4 py-2 min-h-[52px]">
        <Filters activeColor={activeColor} onColorChange={setActiveColor} backLink={scrolled} />
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
          {filtered.map(design => (
            <button
              key={design.id}
              onClick={() => selectDesign(design)}
              className="aspect-square overflow-hidden rounded-sm md:rounded-lg cursor-pointer group relative"
            >
              <img
                src={design.image}
                alt={design.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-1.5 right-1.5 md:top-2 md:right-2 bg-black/50 text-white text-[10px] md:text-xs font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full backdrop-blur-sm">
                {design.price}
              </span>
              <span className="absolute bottom-1.5 left-1.5 md:bottom-2 md:left-2 text-white/80 text-sm md:text-base drop-shadow-lg">
                ♡
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <span className="material-symbols-outlined text-5xl text-slate-300 mb-4 block">search_off</span>
          <p className="text-slate-400 font-semibold">No hay diseños con ese filtro</p>
        </div>
      )}

      {selectedDesign && (
        <DesignModal design={selectedDesign} onClose={closeModal} />
      )}
    </section>
  )
}
