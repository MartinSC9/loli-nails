export default function WhatsAppFAB() {
  return (
    <a className="fixed bottom-8 right-8 z-[100] group" href="https://wa.me/5493513818087?text=Hola!%20%F0%9F%91%8B" target="_blank" rel="noopener">
      <div className="flex items-center gap-3">
        <span className="hidden group-hover:block bg-white shadow-xl px-4 py-2 rounded-full text-sm font-bold text-primary">¿Hablamos por WhatsApp?</span>
        <div className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined text-2xl">chat</span>
        </div>
      </div>
    </a>
  )
}
