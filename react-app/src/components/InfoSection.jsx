const rules = [
  { icon: 'check_circle', type: 'check', text: 'Pedir turno con anticipación' },
  { icon: 'check_circle', type: 'check', text: 'En caso de no poder asistir, avisar hasta 24hs antes' },
  { icon: 'check_circle', type: 'check', text: 'Asistir al turno con barbijo, sin esmalte tradicional' },
  { icon: 'cancel', type: 'cross', text: 'No colocarse cremas ni aceites por 24hs antes del turno' },
  { icon: 'cancel', type: 'cross', text: 'No voy a domicilio' },
]

const tips = [
  { icon: 'cancel', type: 'cross', text: 'No llevarse los dedos a la boca' },
  { icon: 'check_circle', type: 'check', text: 'Usar guantes con productos químicos' },
  { icon: 'cancel', type: 'cross', text: 'No golpearse las uñas, el esmalte puede saltarse' },
  { icon: 'cancel', type: 'cross', text: 'No usar agua muy caliente' },
  { icon: 'cancel', type: 'cross', text: 'No arrancarse el producto, retirarlo correctamente' },
  { icon: 'check_circle', type: 'check', text: 'Volver al service entre 15 o 20 días' },
  { icon: 'check_circle', type: 'check', text: 'Aceite de almendras en cutículas para estimular el crecimiento' },
]

function Item({ icon, type, text }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className={`material-symbols-outlined text-lg fill-1 shrink-0 mt-0.5 ${type === 'check' ? 'text-green-500' : 'text-red-400'}`}>{icon}</span>
      <p className="text-slate-600 text-sm">{text}</p>
    </div>
  )
}

export default function InfoSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-black mb-4">Info a tener en cuenta</h3>
          <div className="flex flex-col divide-y divide-primary/10">
            {rules.map((r, i) => <Item key={i} {...r} />)}
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-black mb-4">Cuidados post service</h3>
          <div className="flex flex-col divide-y divide-primary/10">
            {tips.map((t, i) => <Item key={i} {...t} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
