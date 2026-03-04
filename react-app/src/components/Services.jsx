const services = [
  { icon: 'shield', name: 'Kapping', price: '$3.500', desc: 'Fortalecimiento de uña natural con una capa protectora de gel o acrílico. Ideal para uñas largas y fuertes.', time: '45 min aprox.', featured: false },
  { icon: 'diamond', name: 'Esculpidas', price: '$5.500', desc: 'Extensiones artesanales para longitud y forma perfecta. Personalizadas según tu mano.', time: '1h 30min aprox.', featured: false },
  { icon: 'palette', name: 'Semipermanente', price: '$2.800', desc: 'Esmaltado de larga duración con limpieza profunda de cutículas. Brillo impecable 15+ días.', time: '40 min aprox.', featured: false },
  { icon: 'auto_awesome', name: 'Nail Art', price: 'Desde $1.500', desc: 'Diseños exclusivos: mano alzada, pedrería, efectos mirror y minimalismo conceptual.', time: 'Según diseño', featured: true },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-white border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Nuestros servicios</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">Menú de Servicios</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">Cada tratamiento es una experiencia personalizada de cuidado y arte para tus manos.</p>
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
