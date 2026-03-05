const colors = [
  { value: 'all', label: 'Todos', style: { background: 'conic-gradient(#f472b6 0% 15%, #e8304c 15% 30%, #fff 30% 45%, #1a1a1a 45% 55%, #3b82f6 55% 65%, #f97316 65% 75%, #a78bfa 75% 85%, #facc15 85% 100%)' }, ring: true },
  { value: 'pink', label: 'Rosa', style: { backgroundColor: '#f472b6' } },
  { value: 'red', label: 'Rojo', style: { backgroundColor: '#e8304c' } },
  { value: 'white', label: 'Blanco', style: { backgroundColor: '#ffffff' }, ring: true },
  { value: 'black', label: 'Negro', style: { backgroundColor: '#1a1a1a' } },
  { value: 'subtle', label: 'Nude', style: { backgroundColor: '#f3e5d8' } },
  { value: 'creative', label: 'Creativo', style: { background: 'linear-gradient(135deg, #f472b6, #a78bfa, #3b82f6)' } },
  { value: 'blue', label: 'Azul', style: { backgroundColor: '#3b82f6' } },
  { value: 'orange', label: 'Naranja', style: { backgroundColor: '#f97316' } },
  { value: 'violet', label: 'Violeta', style: { backgroundColor: '#a78bfa' } },
  { value: 'yellow', label: 'Amarillo', style: { backgroundColor: '#facc15' } },
]

export default function Filters({ activeColor, onColorChange }) {
  return (
    <div className="flex flex-col gap-6 mb-10">
      <div className="flex flex-wrap items-center gap-4 p-1">
        {colors.map(c => (
          <button
            key={c.value}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
              activeColor === c.value
                ? 'bg-primary/10 ring-2 ring-primary scale-105'
                : 'bg-slate-50 hover:bg-slate-100'
            }`}
            onClick={() => onColorChange(c.value)}
          >
            <span
              className={`size-5 rounded-full shrink-0 ${c.ring ? 'ring-1 ring-slate-200' : ''}`}
              style={c.style}
            />
            <span className={activeColor === c.value ? 'text-primary' : 'text-slate-600'}>{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
