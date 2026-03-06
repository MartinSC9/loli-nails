import { Link } from 'react-router-dom'
import heroVideo1 from '../assets/video/1.mp4'
import heroVideo2 from '../assets/video/2.mp4'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background-light to-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Turnos disponibles esta semana
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Encontrá tu próximo <span className="font-script text-primary">diseño</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-lg font-medium mb-8">
            Catálogo premium de nail art para la estética moderna. Filtrá por tu estilo favorito y reservá tu turno.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/galeria" className="px-8 py-3.5 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
              <span className="material-symbols-outlined">palette</span>
              Ver Diseños
            </Link>
            <a href="#servicios" className="px-8 py-3.5 rounded-full border-2 border-primary/20 font-bold hover:bg-primary/5 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">spa</span>
              Servicios
            </a>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4 max-w-md">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
              <video className="w-full h-full object-cover" src={heroVideo1} autoPlay loop muted playsInline />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
              <video className="w-full h-full object-cover" src={heroVideo2} autoPlay loop muted playsInline />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
