import { Link } from 'react-router-dom'
import designs from '../data/designs'
import DesignCard from './DesignCard'

export default function Gallery() {
  const visible = designs.slice(0, 4)

  const saveScroll = () => sessionStorage.setItem('gallery-scroll', String(window.scrollY))

  return (
    <section id="galeria" className="max-w-7xl mx-auto w-full px-6 py-12 md:py-16">
      <div className="flex flex-col gap-2 mb-10">
        <span className="text-primary font-bold tracking-widest uppercase text-xs">Portafolio</span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Galería de Diseños</h2>
        <p className="text-lg text-slate-500 max-w-2xl font-medium">Explorá nuestro catálogo y elegí tu favorito para tu próxima cita.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
        {visible.map((design, i) => (
          <Link key={design.id} to="/galeria" onClick={saveScroll} className={i >= 2 ? 'hidden sm:block' : ''}>
            <DesignCard design={design} />
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/galeria"
          onClick={saveScroll}
          className="px-8 py-3.5 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all inline-flex items-center gap-2 shadow-lg shadow-primary/25"
        >
          <span className="material-symbols-outlined">grid_view</span>
          Ver todos los diseños
        </Link>
      </div>
    </section>
  )
}
