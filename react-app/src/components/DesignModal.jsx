import { useEffect } from 'react'

export default function DesignModal({ design, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!design) return null

  const designUrl = `${window.location.origin}/#diseño/${design.id}`
  const waMessage = encodeURIComponent(`Hola! Te hablo desde la página de Loli Nails. Me interesa el diseño *${design.name}*\n${designUrl}`)
  const waUrl = `https://wa.me/5493513818087?text=${waMessage}`

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative glass-card rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
        style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img className="w-full h-full object-cover block" src={design.image} alt={design.name} />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-black text-slate-900 mb-1">{design.name}</h3>
          <p className="text-sm text-slate-500 mb-2">{design.subtitle}</p>
          <p className="text-primary font-bold text-xl mb-3">{design.price}</p>
          <p className="text-slate-600 mb-4">{design.description}</p>
          <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-6">
            <span className="material-symbols-outlined text-base">schedule</span>
            {design.duration}
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener"
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            <span className="material-symbols-outlined text-2xl">chat</span>
            Quiero este!
          </a>
        </div>
      </div>
    </div>
  )
}
