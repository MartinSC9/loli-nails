import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer id="contacto" className="mt-auto py-12 border-t border-primary/10 bg-background-light">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-6">
            <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Loli Nails" className="size-[52px] object-contain" />
            </div>
          </div>
          <p className="text-slate-500 max-w-sm mb-6">Elevando el estándar del cuidado de uñas con arte y sofisticación en cada detalle.</p>
          <div className="flex gap-4">
            <a className="size-10 rounded-full glass-card flex items-center justify-center text-primary hover:scale-110 transition-transform" href="https://www.instagram.com/lolittanailsl/" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-6 text-slate-900">Links Rápidos</h3>
          <ul className="flex flex-col gap-3 text-slate-500">
            <li><Link className="hover:text-primary transition-colors" to="/galeria">Catálogo Digital</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/#servicios">Servicios & Precios</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/#info-importante">Info Importante</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/#sobre-mi">Sobre Mí</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-primary/5 text-center text-slate-400 text-sm">
Hecho con 💅 en Córdoba, Argentina
      </div>
    </footer>
  )
}
