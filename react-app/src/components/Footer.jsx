export default function Footer() {
  return (
    <footer id="contacto" className="mt-auto py-12 border-t border-primary/10 bg-background-light">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-6">
            <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
              <img src="/src/assets/logo.png" alt="Loli Nails" className="size-[52px] object-contain" />
            </div>
          </div>
          <p className="text-slate-500 max-w-sm mb-6">Elevando el estándar del cuidado de uñas con arte y sofisticación en cada detalle.</p>
          <div className="flex gap-4">
            <a className="size-10 rounded-full glass-card flex items-center justify-center text-primary hover:scale-110 transition-transform" href="https://www.instagram.com/lolittanailsl/" target="_blank" rel="noopener">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a className="size-10 rounded-full glass-card flex items-center justify-center text-primary hover:scale-110 transition-transform" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a className="size-10 rounded-full glass-card flex items-center justify-center text-primary hover:scale-110 transition-transform" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-6 text-slate-900">Links Rápidos</h3>
          <ul className="flex flex-col gap-3 text-slate-500">
            <li><a className="hover:text-primary transition-colors" href="#galeria">Catálogo Digital</a></li>
            <li><a className="hover:text-primary transition-colors" href="#servicios">Servicios & Precios</a></li>
            <li><a className="hover:text-primary transition-colors" href="#sobre-mi">Sobre Mí</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Cuidados Post-Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-6 text-slate-900">Contacto</h3>
          <ul className="flex flex-col gap-3 text-slate-500">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">location_on</span> Córdoba, Argentina</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">mail</span> hola@lolinails.com</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">schedule</span> Mar - Sáb: 10:00 - 20:00</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-primary/5 text-center text-slate-400 text-sm">
        &copy; 2025 Loli Nails. Todos los derechos reservados.
      </div>
    </footer>
  )
}
