import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import heroVideo1 from '../assets/video/1.mp4'
import heroVideo2 from '../assets/video/2.mp4'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true))
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background-light to-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className={`flex-1 max-w-2xl transition-all duration-700 ease-out ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <span className={`inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-4 bg-primary/10 px-4 py-2 rounded-full transition-all duration-500 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Turnos disponibles esta semana
          </span>
          <h2 className={`text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1] transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Encontrá tu próximo <span className="font-script text-primary">diseño</span>
          </h2>
          <p className={`text-lg text-slate-500 max-w-lg font-medium mb-8 transition-all duration-700 delay-[400ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Catálogo premium de nail art para la estética moderna. Filtrá por tu estilo favorito y reservá tu turno.
          </p>
          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <Link to="/galeria" className="px-8 py-3.5 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-105 active:scale-95">
              <span className="material-symbols-outlined">palette</span>
              Ver Diseños
            </Link>
            <a href="#servicios" className="px-8 py-3.5 rounded-full border-2 border-primary/20 font-bold hover:bg-primary/5 transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
              <span className="material-symbols-outlined text-primary">spa</span>
              Servicios
            </a>
          </div>
        </div>
        <div className={`flex-1 grid grid-cols-2 gap-4 max-w-md transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
              <video
                ref={video1Ref}
                className="w-full h-full object-cover"
                src={heroVideo1}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className={`rounded-2xl overflow-hidden aspect-[3/4] shadow-xl transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <video
                ref={video2Ref}
                className="w-full h-full object-cover"
                src={heroVideo2}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
