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
          <h3 className="font-bold text-lg text-slate-900">{design.name}</h3>
          <p className="text-sm text-slate-500 mt-1">{design.subtitle}</p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold capitalize">{design.category}</span>
            <span className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full font-semibold capitalize">{design.shape}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
