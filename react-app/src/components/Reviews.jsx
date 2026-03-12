import useInView from '../hooks/useInView'

const reviews = [
  { initials: 'MS', name: 'Martina Suárez', since: 'Cliente desde 2022', text: '"Loli es una artista. Mis uñas nunca se vieron tan naturales y elegantes. El detalle en el Nail Art es impecable."' },
  { initials: 'VC', name: 'Valentina Costa', since: 'Cliente frecuente', text: '"La técnica de Kapping cambió mi vida, mis uñas ya no se quiebran. El ambiente del estudio es súper relax."' },
  { initials: 'LR', name: 'Lucía Ramírez', since: 'Cliente desde 2023', text: '"Siempre me sorprende con diseños nuevos. Es la única persona a la que le confío mis uñas hace 5 años."' },
]

export default function Reviews() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="bg-gradient-to-b from-primary/5 to-background-light border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Testimonios</span>
          <h2 className="text-3xl md:text-4xl font-black">Lo que dicen nuestras clientas</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <div
              key={r.initials}
              className={`glass-card p-8 rounded-2xl relative overflow-hidden transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: inView ? `${300 + i * 150}ms` : '0ms' }}
            >
              <div className="absolute -top-3 -left-3 text-primary/10">
                <span className="material-symbols-outlined text-[60px]">format_quote</span>
              </div>
              <div className="relative z-10">
                <div className="flex gap-0.5 text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm fill-1">star</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">{r.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">{r.initials}</div>
                  <div>
                    <p className="font-bold text-sm">{r.name}</p>
                    <p className="text-xs text-slate-500">{r.since}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
