export default function StatsBar() {
  return (
    <section className="border-y border-primary/10 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-3 gap-8">
        <div className="text-center">
          <p className="text-3xl font-black text-primary">+500</p>
          <p className="text-sm text-slate-500 font-medium mt-1">Diseños Realizados</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-black text-primary">+5</p>
          <p className="text-sm text-slate-500 font-medium mt-1">Años de Experiencia</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-black text-primary">100%</p>
          <p className="text-sm text-slate-500 font-medium mt-1">Productos Premium</p>
        </div>
      </div>
    </section>
  )
}
