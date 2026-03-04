const colors = [
  { value: 'all', style: { background: 'conic-gradient(#f3e5d8 0% 20%, #E91E90 20% 40%, #fff 40% 60%, #4ade80 60% 80%, #1a1a1a 80% 100%)' }, ring: true },
  { value: 'nude', style: { backgroundColor: '#f3e5d8' } },
  { value: 'red', style: { backgroundColor: '#e8304c' } },
  { value: 'white', style: { backgroundColor: '#ffffff' }, ring: true },
  { value: 'green', style: { backgroundColor: '#4ade80' } },
  { value: 'black', style: { backgroundColor: '#1a1a1a' } },
]

const categories = [
  { value: 'all', label: 'Todos' },
  { value: 'nudes', label: 'Nudes' },
  { value: 'rojos', label: 'Rojos' },
  { value: 'french', label: 'French' },
  { value: 'glazed', label: 'Glazed' },
  { value: 'neon', label: 'Neon' },
  { value: 'dark', label: 'Dark' },
]

const shapes = [
  { value: 'all', label: 'Todos' },
  { value: 'almendra', label: 'Almendra' },
  { value: 'coffin', label: 'Coffin' },
  { value: 'cuadrada', label: 'Cuadrada' },
  { value: 'stiletto', label: 'Stiletto' },
]

export default function Filters({ activeColor, activeCategory, activeShape, onColorChange, onCategoryChange, onShapeChange }) {
  return (
    <div className="flex flex-col gap-6 mb-10">
      <div className="flex flex-wrap items-center gap-6 p-1">
        <div className="flex items-center gap-3 pr-6 border-r border-primary/10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Colores</span>
          <div className="flex gap-3">
            {colors.map(c => (
              <button
                key={c.value}
                className={`color-dot size-8 rounded-full cursor-pointer transition-all hover:scale-110 ${activeColor === c.value ? 'active' : ''} ${c.ring ? 'ring-1 ring-slate-200' : ''}`}
                style={c.style}
                onClick={() => onColorChange(c.value)}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                activeCategory === cat.value
                  ? 'bg-primary text-white'
                  : 'bg-primary/5 text-slate-600 hover:bg-primary/10'
              }`}
              onClick={() => onCategoryChange(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-8 border-b border-primary/10">
        {shapes.map(s => (
          <button
            key={s.value}
            className={`shape-tab pb-4 text-sm font-bold tracking-wide uppercase transition-colors ${
              activeShape === s.value
                ? 'active'
                : 'text-slate-400 hover:text-slate-600'
            }`}
            onClick={() => onShapeChange(s.value)}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}
