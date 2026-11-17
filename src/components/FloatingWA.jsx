import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../config/whatsapp';
import { handleWhatsAppClick } from '../utils/pixel';

export default function FloatingWA() {
  const [showBubble, setShowBubble] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatingWaUrl = getWhatsAppLink(WA_MESSAGES.FLOATING);

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-end sm:items-center gap-2.5 transition-all duration-300 ease-out select-none ${
        hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-95 translate-y-0'
      }`}
    >
      {/* Label Teks Interaktif (Smart Responsive Bubble) */}
      {showBubble && (
        <div className="relative flex items-center bg-white text-slate-800 text-xs sm:text-[13px] font-semibold py-1.5 pl-3 pr-1.5 sm:py-2 sm:pl-3.5 sm:pr-2 rounded-2xl shadow-xl shadow-slate-900/15 border border-slate-200/90 animate-fade-in group hover:border-green-300 transition-all max-w-[200px] sm:max-w-none">
          
          {/* Teks Bubble yang Dapat Diklik Langsung */}
          <a
            href={floatingWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleWhatsAppClick(e, 'Floating WhatsApp Text Bubble', floatingWaUrl)}
            className="flex items-center gap-1.5 cursor-pointer hover:text-[#16A34A] transition-colors"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
            </span>
            <span className="truncate sm:whitespace-nowrap">Konsultasi Gratis 💬</span>
          </a>

          {/* Tombol Tutup Mini (X) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowBubble(false);
            }}
            aria-label="Tutup pesan mengambang"
            className="ml-1 sm:ml-2 p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-3 h-3" />
          </button>

          {/* Panah Segitiga (Caret) Mengarah ke Tombol WA di Desktop */}
          <div className="hidden sm:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-t border-r border-slate-200/90 pointer-events-none" />
        </div>
      )}

      {/* Tombol Utama Melingkar (Ukuran Ergonomis w-14 h-14 / 56px) */}
      <div className="relative flex items-center justify-center shrink-0">
        
        {/* Lingkaran Gelombang Radar Halus (Subtle Radar Pulse) */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping [animation-duration:3s] pointer-events-none" />
        <span className="absolute -inset-1.5 rounded-full bg-[#16A34A] opacity-15 blur-xs pointer-events-none" />

        {/* Tombol Hijau WhatsApp Resmi */}
        <a
          href={floatingWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi kami melalui WhatsApp"
          onClick={(e) => handleWhatsAppClick(e, 'Floating WhatsApp Button', floatingWaUrl)}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-lg shadow-green-600/35 hover:shadow-xl hover:shadow-green-600/45 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group ring-2 ring-white/80"
        >
          {/* Ikon Vektor Resmi WhatsApp */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 fill-white transition-transform duration-200 group-hover:scale-110"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
          </svg>
        </a>

      </div>
    </aside>
  );
}
