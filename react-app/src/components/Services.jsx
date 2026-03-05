const services = [
  { icon: 'palette', name: 'Esmaltado Semipermanente', price: '$15.000', desc: 'Esmaltado en gel sobre uña natural. Productos aprobados por ANMAT.', time: '1h 10min aprox.', featured: false },
  { icon: 'shield', name: 'Kapping Gel de Construcción', price: '$19.500', desc: 'Capa de gel sobre la uña natural, brinda mayor dureza a las uñas. Recomendable en uñas largas.', time: '2hs aprox.', featured: false },
  { icon: 'diamond', name: 'Kapping Base Rubber', price: '$18.000', desc: 'Capa de rubber gel sobre la uña natural, brinda fortalecimiento. Recomendable en uñas cortas/medianas.', time: '2hs aprox.', featured: false },
  { icon: 'auto_awesome', name: 'Soft Gel + Semi', price: '$32.000', desc: 'Tips adherido con base coat + esmaltado. Extensión perfecta con acabado natural.', time: '2hs aprox.', featured: true },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-white border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-6">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Nuestros servicios</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">Lista de <span className="font-script text-primary">Precios</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Todos los servicios incluyen manicuria combinada con torno (pulido de cutículas perfecto) y utilización de productos de calidad aprobados por ANMAT.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(s => s.featured ? (
            <div key={s.name} className="service-card rounded-2xl p-7 bg-primary text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-white text-2xl fill-1">{s.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{s.name}</h3>
                <p className="text-2xl font-extrabold mb-3">{s.price}</p>
                <p className="text-white/80 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  {s.time}
                </div>
              </div>
            </div>
          ) : (
            <div key={s.name} className="service-card glass-card rounded-2xl p-7">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-primary text-2xl fill-1">{s.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{s.name}</h3>
              <p className="text-2xl font-extrabold text-primary mb-3">{s.price}</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {s.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
