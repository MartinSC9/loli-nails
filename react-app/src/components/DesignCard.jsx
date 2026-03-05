export default function DesignCard({ design, onClick }) {
  return (
    <div className="animate-card group cursor-pointer" onClick={() => onClick(design)}>
      <div className="glass-card rounded-2xl overflow-hidden hover-zoom">
        <div className="aspect-[3/4] overflow-hidden bg-slate-100">
          <img
            className="w-full h-full object-cover transition-transform duration-500 block"
            src={design.image}
            alt={design.name}
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-slate-900">{design.name}</h3>
            <span className="text-primary font-bold">{design.price}</span>
          </div>
          <p className="text-sm text-slate-500 mt-1">{design.subtitle}</p>
          <button className="mt-4 w-full flex items-center justify-center gap-2 bg-primary text-white text-sm font-bold py-2.5 rounded-full hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-base">favorite</span>
            Quiero este!
          </button>
        </div>
      </div>
    </div>
  )
}
