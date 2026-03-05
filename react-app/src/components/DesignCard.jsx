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
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-extrabold text-sm uppercase tracking-wide text-slate-900">{design.name}</h3>
            {design.shape && (
              <span className="shrink-0 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                {design.shape}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400 mt-1">{design.subtitle}</p>
        </div>
      </div>
    </div>
  )
}
