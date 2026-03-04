import { useState, useEffect } from 'react'
import designs from '../data/designs'
import Filters from './Filters'
import DesignCard from './DesignCard'
import DesignModal from './DesignModal'

export default function Gallery() {
  const [activeColor, setActiveColor] = useState('all')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeShape, setActiveShape] = useState('all')
  const [selectedDesign, setSelectedDesign] = useState(null)
  const [showAll, setShowAll] = useState(false)

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

  const filtered = designs.filter(d =>
    (activeColor === 'all' || d.color === activeColor) &&
    (activeCategory === 'all' || d.category === activeCategory) &&
    (activeShape === 'all' || d.shape === activeShape)
  )

  const visible = showAll ? filtered : filtered.slice(0, 8)

  return (
    <section id="galeria" className="max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
      <div className="flex flex-col gap-2 mb-10">
        <span className="text-primary font-bold tracking-widest uppercase text-xs">Portafolio</span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Galería de Diseños</h2>
        <p className="text-lg text-slate-500 max-w-2xl font-medium">Explorá nuestro catálogo y elegí tu favorito para tu próxima cita.</p>
      </div>

      <Filters
        activeColor={activeColor}
        activeCategory={activeCategory}
        activeShape={activeShape}
        onColorChange={setActiveColor}
        onCategoryChange={setActiveCategory}
        onShapeChange={setActiveShape}
      />

      {filtered.length > 0 ? (
        <>
          <div key={`${activeColor}-${activeCategory}-${activeShape}-${showAll}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {visible.map(design => (
              <DesignCard key={design.id} design={design} onClick={selectDesign} />
            ))}
          </div>
          {filtered.length > 8 && (
            <div className="text-center mt-10">
              <button
                onClick={() => {
                  if (showAll) document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' })
                  setShowAll(!showAll)
                }}
                className="px-8 py-3.5 rounded-full border-2 border-primary/20 font-bold hover:bg-primary/5 transition-all inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-primary">{showAll ? 'expand_less' : 'expand_more'}</span>
                {showAll ? 'Ver menos diseños' : 'Ver más diseños'}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <span className="material-symbols-outlined text-5xl text-slate-300 mb-4 block">search_off</span>
          <p className="text-slate-400 font-semibold">No hay diseños con esos filtros</p>
        </div>
      )}

      {selectedDesign && (
        <DesignModal design={selectedDesign} onClose={closeModal} />
      )}
    </section>
  )
}
