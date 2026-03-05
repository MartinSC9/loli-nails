import { useEffect, useRef } from 'react'

const colors = [
  { value: 'all', label: 'Todos', style: { background: 'conic-gradient(#f472b6 0% 15%, #e8304c 15% 30%, #fff 30% 45%, #1a1a1a 45% 55%, #3b82f6 55% 65%, #f97316 65% 75%, #a78bfa 75% 85%, #facc15 85% 100%)' }, ring: true },
  { value: 'creative', label: 'Creativo', icon: 'auto_awesome' },
  { value: 'subtle', label: 'Nude', icon: 'spa' },
  { value: 'pink', label: 'Rosa', style: { backgroundColor: '#f472b6' } },
  { value: 'red', label: 'Rojo', style: { backgroundColor: '#e8304c' } },
  { value: 'white', label: 'Blanco', style: { backgroundColor: '#ffffff' }, ring: true },
  { value: 'black', label: 'Negro', style: { backgroundColor: '#1a1a1a' } },
  { value: 'blue', label: 'Azul', style: { backgroundColor: '#3b82f6' } },
  { value: 'orange', label: 'Naranja', style: { backgroundColor: '#f97316' } },
  { value: 'violet', label: 'Violeta', style: { backgroundColor: '#a78bfa' } },
  { value: 'yellow', label: 'Amarillo', style: { backgroundColor: '#facc15' } },
]

export default function Filters({ activeColor, onColorChange, backLink }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const timer = setTimeout(() => {
      el.scrollTo({ left: 60, behavior: 'smooth' })
      setTimeout(() => el.scrollTo({ left: 0, behavior: 'smooth' }), 400)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col gap-1">
      <div
        ref={scrollRef}
        className="flex items-center gap-2 p-1 overflow-x-auto no-scrollbar"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {backLink && (
          <a
            href="/"
            className="size-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-slate-600 text-lg">arrow_back</span>
          </a>
        )}
        {colors.map(c => (
          <button
            key={c.value}
            className={`size-9 shrink-0 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
              activeColor === c.value
                ? 'ring-2 ring-primary scale-110'
                : 'hover:scale-105'
            }`}
            onClick={() => onColorChange(c.value)}
            title={c.label}
          >
            {c.icon ? (
              <span className={`material-symbols-outlined text-lg ${activeColor === c.value ? 'text-primary' : 'text-slate-400'}`}>
                {c.icon}
              </span>
            ) : (
              <span
                className={`size-7 rounded-full ${c.ring ? 'ring-1 ring-slate-200' : ''}`}
                style={c.style}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
