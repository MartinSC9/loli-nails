export default function MobileMenu({ open, onClose }) {
  return (
    <>
      <div className={`mobile-overlay fixed inset-0 bg-black/50 z-[60] ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`mobile-menu fixed top-0 right-0 h-full w-72 bg-white z-[70] p-8 flex flex-col gap-6 shadow-2xl ${open ? 'open' : ''}`}>
        <button onClick={onClose} className="self-end">
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
        <a onClick={onClose} className="text-lg font-semibold hover:text-primary transition-colors" href="#galeria">Galería</a>
        <a onClick={onClose} className="text-lg font-semibold hover:text-primary transition-colors" href="#servicios">Servicios</a>
        <a onClick={onClose} className="text-lg font-semibold hover:text-primary transition-colors" href="#sobre-mi">Sobre Mí</a>
        <a onClick={onClose} className="text-lg font-semibold hover:text-primary transition-colors" href="#contacto">Contacto</a>
        <a href="https://wa.me/5493513818087?text=Hola!%20Quiero%20reservar%20un%20turno%20%F0%9F%92%85" target="_blank" rel="noopener" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-3 font-bold shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-lg">calendar_month</span>
          Reservar Turno
        </a>
      </div>
    </>
  )
}
