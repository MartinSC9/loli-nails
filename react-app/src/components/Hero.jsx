export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background-light to-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Turnos disponibles esta semana
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Encontrá tu próximo <span className="text-primary">diseño</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-lg font-medium mb-8">
            Catálogo premium de nail art para la estética moderna. Filtrá por tu estilo favorito y reservá tu turno.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#galeria" className="px-8 py-3.5 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
              <span className="material-symbols-outlined">palette</span>
              Ver Diseños
            </a>
            <a href="#servicios" className="px-8 py-3.5 rounded-full border-2 border-primary/20 font-bold hover:bg-primary/5 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">spa</span>
              Servicios
            </a>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4 max-w-md">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
              <img className="w-full h-full object-cover" alt="Diseño destacado" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl2FsTHNYtBKL_HqwKU52b6-UcE_V6iZ2isUuwmF_oNYGfAVx-41SjRz-fd4hQDKOoSAFYT17W1kBkB5X1qJhAUOwLxHLkv3NDwdUdA01cJ_PlnuX2dewRnAqbb_knr2VQGyl1JKsFFuhx5ZnqPEOJLtxVMKuJJaOiMRP9xCBq6zD81yiDhCzZX42_ovnmeE2_3RK1Gt31gN4OwTwG5mzpW3lvQWb3M1g77c-GnWnOXol1GVAH9NIt4OESka4uVMYV4oc6fimG" />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
              <img className="w-full h-full object-cover" alt="Diseño destacado 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjbBVEaO2Rp6P5qfQjgaXwk_OQzIAZbWWOrXSnX9digzO88I9EiHulMggx5RECLhRh6ZCuPGX3Yq6S35o3cweHacbU8xjyba9BCiFkhgQMpp9U65AGkrx1jxzeZdLFmBT89cfdc68_WxwuQDeg2VnCk94flcPburK4jcxZhayy30RoYxX2mgo7N8KsS9iien0Zu6co70VTwmT6gxPRxnjqJuB9j7HZAj6ss-KkS7Mnpi6FT7k7XAaVoqGKOIRIWeDQ4HP3L40f" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
