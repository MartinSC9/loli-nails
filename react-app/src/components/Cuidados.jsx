const tips = [
  { icon: 'cancel', type: 'cross', text: 'No llevarse los dedos a la boca' },
  { icon: 'check_circle', type: 'check', text: 'Usar guantes al utilizar productos químicos, no solo para que dure el esmalte sino para cuidar tu piel' },
  { icon: 'cancel', type: 'cross', text: 'Tratar de no golpearse las uñas, el esmalte puede saltarse' },
  { icon: 'cancel', type: 'cross', text: 'No usar agua muy caliente, esto también puede llevar a que el esmalte se salte' },
  { icon: 'cancel', type: 'cross', text: 'No arrancarse el producto. Al arrancarte podés llegar a sacar capas de la uña, por eso se vuelve "finita". Esto no pasa si se retira correctamente' },
  { icon: 'check_circle', type: 'check', text: 'Volver al service entre 15 o 20 días' },
  { icon: 'check_circle', type: 'check', text: 'Pueden colocarse aceite de almendras en las cutículas y masajearse para estimular el crecimiento de sus uñas' },
]

export default function Cuidados() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background-light border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Post service</span>
          <h2 className="text-3xl md:text-4xl font-black"><span className="font-script text-primary">Cuidados</span> para tus uñas</h2>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {tips.map((t, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 flex items-start gap-4">
              <span className={`material-symbols-outlined text-2xl fill-1 shrink-0 mt-0.5 ${t.type === 'check' ? 'text-green-500' : 'text-red-400'}`}>{t.icon}</span>
              <p className="text-slate-700 font-medium">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
