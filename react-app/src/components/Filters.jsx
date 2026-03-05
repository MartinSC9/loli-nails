import { useEffect, useRef, useState } from 'react'

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
  const [showFade, setShowFade] = useState(true)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let cancelled = false
    const bounce = (delay) => setTimeout(() => {
      if (cancelled) return
      el.scrollTo({ left: 80, behavior: 'smooth' })
      setTimeout(() => { if (!cancelled) el.scrollTo({ left: 0, behavior: 'smooth' }) }, 500)
    }, delay)
    const t1 = bounce(800)
    const t2 = bounce(2200)
    return () => { cancelled = true; clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const handleScroll = () => {
      setShowFade(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
    }
    el.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex items-center gap-2 p-1 overflow-x-auto no-scrollbar touch-pan-x"
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
      {showFade && (
        <div className="absolute right-0 top-0 bottom-0 w-10 pointer-events-none bg-gradient-to-l from-white/90 to-transparent" />
      )}
    </div>
  )
}
