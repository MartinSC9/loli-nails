export default function CTA() {
  return (
    <section className="bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-12 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-8 right-16 w-48 h-48 border border-white rounded-full"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 md:py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-black mb-4">¿Lista para tu próximo diseño?</h2>
        <p className="text-white/80 text-lg mb-8">Reservá tu turno por WhatsApp y elegí el diseño que más te represente.</p>
        <a href="https://wa.me/5493513818087" target="_blank" rel="noopener" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
          <span className="material-symbols-outlined text-2xl">chat</span>
          Reservar por WhatsApp
        </a>
      </div>
    </section>
  )
}
