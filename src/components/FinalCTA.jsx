import React from 'react';
import { MessageCircle, CheckCircle2, Flame } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../config/whatsapp';
import { handleWhatsAppClick } from '../utils/pixel';

export default function FinalCTA() {
  const finalWaUrl = getWhatsAppLink(WA_MESSAGES.FINAL_CTA);

  return (
    <section className="py-16 md:py-24 bg-[#2563EB] text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-blue-700/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Scarcity / Urgency Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-yellow-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
          <Flame className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse" />
          <span>Slot Terbatas Minggu Ini</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
          Jangan Biarkan Calon Pembeli Pindah ke Kompetitor Hanya Karena Usaha Anda Sulit Dihubungi!
        </h2>

        {/* Sub-headline */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Ambil slot pengerjaan minggu ini. Kuota dibatasi hanya untuk 5 UMKM per minggu agar kualitas desain dan tulisan tetap maksimal.
        </p>

        {/* CTA Button Besar dengan Meta Pixel Lead Tracking */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={finalWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleWhatsAppClick(e, 'Final CTA Banner', finalWaUrl)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 min-h-[56px] rounded-lg font-extrabold text-base sm:text-lg text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] shadow-2xl shadow-green-950/40 transition-all cursor-pointer group"
          >
            <MessageCircle className="w-6 h-6 fill-white/20 group-hover:scale-110 transition-transform" />
            <span>Pesan Landing Page Saya Sekarang (Chat WhatsApp)</span>
          </a>
        </div>

        {/* Feature Checkpoints Bawah CTA */}
        <div className="mt-8 pt-6 border-t border-blue-400/30 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-blue-100 font-medium">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-300" />
            Pengerjaan Cepat 3-5 Hari
          </span>
          <span className="hidden sm:inline opacity-40">•</span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-300" />
            Domain & Hosting Aktif 1 Tahun
          </span>
          <span className="hidden sm:inline opacity-40">•</span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-300" />
            Garansi Revisi Sampai Cocok
          </span>
        </div>

      </div>
    </section>
  );
}
