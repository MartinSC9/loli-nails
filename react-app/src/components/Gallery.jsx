import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import designs from '../data/designs'
import DesignCard from './DesignCard'
import DesignModal from './DesignModal'

export default function Gallery() {
  const [selectedDesign, setSelectedDesign] = useState(null)

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash)
    if (hash.startsWith('#diseño/')) {
      const id = hash.replace('#diseño/', '')
      const found = designs.find(d => d.id === id)
      if (found) setSelectedDesign(found)
    }
  }, [])

  const selectDesign = (design) => {
    window.history.replaceState(null, '', `#diseño/${design.id}`)
    setSelectedDesign(design)
  }

  const closeModal = () => {
    window.history.replaceState(null, '', window.location.pathname)
    setSelectedDesign(null)
  }

  const visible = designs.slice(0, 4)

  return (
    <section id="galeria" className="max-w-7xl mx-auto w-full px-6 py-12 md:py-16">
      <div className="flex flex-col gap-2 mb-10">
        <span className="text-primary font-bold tracking-widest uppercase text-xs">Portafolio</span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Galería de Diseños</h2>
        <p className="text-lg text-slate-500 max-w-2xl font-medium">Explorá nuestro catálogo y elegí tu favorito para tu próxima cita.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
        {visible.map((design, i) => (
          <div key={design.id} className={i >= 2 ? 'hidden sm:block' : ''}>
            <DesignCard design={design} onClick={selectDesign} />
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/galeria"
          className="px-8 py-3.5 rounded-full border-2 border-primary/20 font-bold hover:bg-primary/5 transition-all inline-flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-primary">grid_view</span>
          Ver todos los diseños
        </Link>
      </div>

      {selectedDesign && (
        <DesignModal design={selectedDesign} onClose={closeModal} />
      )}
    </section>
  )
}
