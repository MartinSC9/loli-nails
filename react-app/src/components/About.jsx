import meImg from '../assets/me.png'

const features = ['Higiene Clínica', 'Marcas Premium', 'Atención Personal', 'Diseños Exclusivos']

export default function About() {
  return (
    <section id="sobre-mi" className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-2/5 relative">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
            <img className="w-full h-full object-cover" alt="Loli - Artista de Uñas" src={meImg} />
          </div>
          <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-2xl shadow-xl flex items-center gap-3">
            <div className="bg-primary text-white p-2.5 rounded-xl">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-lg">+5 Años</p>
              <p className="text-xs text-slate-500">Experiencia Certificada</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">La Artista</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6"><span className="font-script text-primary">Pasión</span> por los detalles</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Hola, soy Loli. Mi misión es elevar tu confianza a través de la belleza de tus manos. Cada uña es un lienzo único que merece dedicación y el más alto estándar de higiene y técnica.
          </p>
          <div className="grid grid-cols-2 gap-5 mb-10">
            {features.map(f => (
              <div key={f} className="flex items-center gap-3 bg-primary/5 p-3 rounded-xl">
                <span className="material-symbols-outlined text-primary fill-1">check_circle</span>
                <span className="font-semibold text-sm">{f}</span>
              </div>
            ))}
          </div>
          <a href="https://wa.me/5493513818087?text=Hola!%20Te%20hablo%20desde%20la%20p%C3%A1gina%20de%20Loli%20Nails%20Quiero%20consultar%20por%20un%20turno" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all">
            Contactame para tu próximo turno
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
