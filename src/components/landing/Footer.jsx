export default function Footer() {
  return (
    <footer className="bg-[#1E2A38] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2E4A78] grid place-items-center text-white">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="6" width="18" height="12" rx="3" />
                <path d="M12 2v4" />
              </svg>
            </div>
            <span className="text-white/90 font-semibold">JG Informática</span>
          </div>

          <nav className="flex items-center gap-5 text-sm text-[#D9D9D9]">
            <a href="#solucion" className="hover:text-white transition">Servicios</a>
            <a href="#casos" className="hover:text-white transition">Casos</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#contacto" className="hover:text-white transition">Contacto</a>
          </nav>

          <div className="text-xs text-[#D9D9D9] text-center md:text-right">
            <div>Bolívar 1313 · Villa María</div>
            <div>WhatsApp: 353 4275476</div>
            <div>© {new Date().getFullYear()} JG Informática — Todos los derechos reservados.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
