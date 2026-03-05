const considerations = [
  { icon: 'schedule', type: 'info', text: 'Cada servicio tiene una duración desde 2hs a 3hs aprox dependiendo del diseño.' },
  { icon: 'clean_hands', type: 'check', text: 'Venir al turno con las uñas limpias y sin esmalte tradicional.' },
  { icon: 'do_not_touch', type: 'cross', text: 'No colocarse aceites ni cremas antes de venir al servicio, ya que puede afectar la durabilidad.' },
  { icon: 'payments', type: 'info', text: 'Si tiene servicio de otro lugar se cobra retiro: Semi $500 · Kapping $700 · Soft Gel $800.' },
]

const serviceInfo = [
  { name: 'Semipermanente', desc: 'Capa de esmalte en gel que se aplica sobre la uña natural.', duration: '15 a 20 días' },
  { name: 'Kapping Gel', desc: 'Capa de gel de construcción o base rubber para endurecer la uña natural. Ideal para uñas débiles o para hacer crecer las naturales.', duration: '20 días aprox.' },
  { name: 'Soft Gel', desc: 'Tips en gel que se pegan sobre la uña con base coat, base rubber o gel sólido. Es una extensión de cualquier largo.', duration: '21 días aprox.' },
]

const turnos = [
  { icon: 'paid', type: 'info', text: 'Para asegurar el turno se debe abonar una seña de $1.500 sin excepción.' },
  { icon: 'event_busy', type: 'cross', text: 'En caso de cancelar, avisar 48hs antes para devolución. No se devuelve si avisan después o el mismo día.' },
  { icon: 'timer', type: 'info', text: 'Tiempo de tolerancia a la tardanza: 15 minutos.' },
  { icon: 'verified', type: 'check', text: 'Cada servicio tiene garantía de 5 días (si se salta o rompe una uña, no si se las arrancan).' },
]

const tips = [
  { icon: 'cancel', type: 'cross', text: 'No llevarse los dedos a la boca.' },
  { icon: 'check_circle', type: 'check', text: 'Usar guantes con productos químicos.' },
  { icon: 'cancel', type: 'cross', text: 'No golpearse las uñas, el esmalte puede saltarse.' },
  { icon: 'cancel', type: 'cross', text: 'No usar agua muy caliente.' },
  { icon: 'cancel', type: 'cross', text: 'No arrancarse el producto, retirarlo correctamente.' },
  { icon: 'check_circle', type: 'check', text: 'Volver al service entre 15 o 20 días.' },
  { icon: 'check_circle', type: 'check', text: 'Aceite de almendras en cutículas para estimular el crecimiento.' },
]

function Item({ icon, type, text }) {
  const color = type === 'check' ? 'text-green-500' : type === 'cross' ? 'text-red-400' : 'text-primary'
  return (
    <div className="flex items-start gap-3 py-2">
      <span className={`material-symbols-outlined text-lg fill-1 shrink-0 mt-0.5 ${color}`}>{icon}</span>
      <p className="text-slate-600 text-sm">{text}</p>
    </div>
  )
}

export default function InfoSection() {
  return (
    <section id="info" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Importante</span>
        <h2 className="text-3xl md:text-5xl font-black"><span className="font-script text-primary">Info</span> que necesitás saber</h2>
      </div>

      {/* Servicios - Qué es cada uno */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {serviceInfo.map(s => (
          <div key={s.name} className="glass-card rounded-2xl p-6 text-center">
            <h4 className="text-lg font-black text-slate-900 mb-2">{s.name}</h4>
            <p className="text-slate-500 text-sm mb-3">{s.desc}</p>
            <div className="inline-flex items-center gap-1.5 text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-sm">schedule</span>
              {s.duration}
            </div>
          </div>
        ))}
      </div>

      {/* Consideraciones, Turnos, Cuidados */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-black mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary fill-1">info</span>
            Consideraciones
          </h3>
          <div className="flex flex-col divide-y divide-primary/10">
            {considerations.map((r, i) => <Item key={i} {...r} />)}
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-black mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary fill-1">calendar_month</span>
            Turnos
          </h3>
          <div className="flex flex-col divide-y divide-primary/10">
            {turnos.map((t, i) => <Item key={i} {...t} />)}
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6 md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-black mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary fill-1">spa</span>
            Cuidados post service
          </h3>
          <div className="flex flex-col divide-y divide-primary/10">
            {tips.map((t, i) => <Item key={i} {...t} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
