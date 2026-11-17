import React from 'react';
import { MessageCircle, CheckCircle2, ShieldCheck, Zap, QrCode } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../config/whatsapp';
import { handleWhatsAppClick } from '../utils/pixel';

export default function Hero() {
  const heroWaUrl = getWhatsAppLink(WA_MESSAGES.HERO);

  return (
    <section className="relative pt-24 pb-14 md:pt-36 md:pb-24 bg-white overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 -left-32 w-80 sm:w-96 h-80 sm:h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-green-100/35 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Copywriting & CTA */}
          <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6">
            
            {/* Badge Kontekstual Lokal */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#2563EB] animate-ping" />
              <span>🇮🇩 Solusi Khusus Pedagang Kuliner, Olshop & Jasa Lokal</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[45px] font-black text-[#0F172A] tracking-tight leading-[1.2]">
              Capek Balas Chat Tapi Ujungnya Cuma{' '}
              <span className="text-red-500 underline decoration-red-300 decoration-wavy underline-offset-4">
                di-Read Doang?
              </span>{' '}
              Bikin Halaman Jualan Rapi yang Langsung Kirim Format Order ke WhatsApp!
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
              Biar calon pembeli tidak nanya harga, menu, dan varian yang sama berulang-ulang. Kami buatkan landing page katalog praktis, <strong className="text-[#0F172A] font-semibold">terima beres dalam 3 hari</strong>, pembeli tinggal klik dan pesan langsung masuk rapi ke nomor WA kasir/admin Anda.
            </p>

            {/* CTA Utama & Micro-copy */}
            <div className="space-y-3.5 pt-1">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={heroWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleWhatsAppClick(e, 'Hero Section', heroWaUrl)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 min-h-[52px] rounded-lg font-bold text-sm sm:text-base text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] shadow-lg shadow-green-600/25 transition-all cursor-pointer group"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                  <span>Konsultasi Gratis via WhatsApp Sekarang</span>
                </a>
              </div>

              {/* Micro-copy Lokal & Relevan */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3.5 text-xs sm:text-sm text-[#475569] font-medium pt-1">
                <span className="inline-flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  Gratis Domain & Hosting
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  Ringan di HP (Di Bawah 3 Detik)
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  Siap Pasang Iklan Meta / TikTok
                </span>
              </div>
            </div>

            {/* Sinyal Kepercayaan Lokal */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 w-fit">
                <QrCode className="w-4 h-4 text-[#2563EB]" />
                <span>Support QRIS & Transfer Bank BCA/Mandiri/BRI</span>
              </div>
              <p className="text-xs text-slate-500">
                ⚡ Sudah membantu <strong className="text-slate-800 font-semibold">180+ UMKM di 24 kota</strong> jualan online lebih tertata.
              </p>
            </div>

          </div>

          {/* Kolom Kanan: Optimasi Posisi & Visual Mockup WhatsApp */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center mt-6 lg:mt-0">
            
            {/* Frame Smartphone dengan Kedalaman Visual Halus */}
            <div className="relative w-full max-w-[330px] sm:max-w-[380px] bg-slate-900 rounded-[30px] sm:rounded-[34px] p-2.5 sm:p-3 shadow-2xl shadow-slate-900/15 border-4 border-slate-800 ring-4 sm:ring-8 ring-slate-100/90 transition-transform hover:scale-[1.01] duration-300">
              
              {/* Speaker Notch */}
              <div className="w-16 sm:w-20 h-3 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-900" />
              </div>

              {/* Tampilan Layar HP: Chat WhatsApp Masuk Otomatis */}
              <div className="bg-[#EFEAE2] rounded-[22px] sm:rounded-[26px] overflow-hidden border border-slate-200 flex flex-col h-[380px] sm:h-[430px]">
                
                {/* Header WA Bar */}
                <div className="bg-[#075E54] text-white p-2.5 sm:p-3 flex items-center gap-2.5 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-inner">
                    KR
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold leading-tight truncate">Kedai Rasa Nusantara</p>
                    <p className="text-[10px] text-emerald-200">Online • Auto-Order Aktif</p>
                  </div>
                  <span className="text-[10px] bg-emerald-700/80 px-2 py-0.5 rounded text-emerald-100 font-semibold shrink-0">
                    Admin
                  </span>
                </div>

                {/* Area Isi Percakapan Nyata */}
                <div className="flex-1 p-2.5 sm:p-3 space-y-2.5 overflow-y-auto text-xs">
                  
                  {/* Timestamp */}
                  <div className="text-center">
                    <span className="bg-white/90 text-slate-500 text-[10px] px-2.5 py-0.5 rounded-full shadow-2xs font-medium">
                      Hari ini, 12:40 WIB
                    </span>
                  </div>

                  {/* Bubble 1: Format Order Masuk dari Tombol Landing Page */}
                  <div className="bg-white rounded-lg rounded-tl-none p-2.5 sm:p-3 shadow-xs max-w-[92%] border border-slate-100 space-y-1">
                    <p className="font-bold text-[#075E54] text-[10px] sm:text-[11px] flex items-center gap-1">
                      🛍️ PESANAN BARU DARI WEBSITE
                    </p>
                    <div className="bg-slate-50 p-2 rounded border border-slate-100 text-[10px] sm:text-[11px] text-slate-700 space-y-0.5 font-mono">
                      <p><strong>Paket:</strong> Nasi Liwet Komplit (3x)</p>
                      <p><strong>Total:</strong> Rp 105.000</p>
                      <p><strong>Nama:</strong> Bu Rina S.</p>
                      <p><strong>Alamat:</strong> Jl. Melati No. 14, Jakarta</p>
                      <p><strong>Metode:</strong> Transfer BCA</p>
                    </div>
                    <div className="flex items-center justify-between text-[9px] text-slate-400 pt-0.5">
                      <span>Dikirim via Tombol Web</span>
                      <span>12:40 ✓✓</span>
                    </div>
                  </div>

                  {/* Bubble 2: Balasan Cepat Kasir */}
                  <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none p-2.5 shadow-xs max-w-[88%] ml-auto text-slate-800 space-y-1">
                    <p className="text-[10px] sm:text-[11px] leading-relaxed">
                      Halo Bu Rina! Pembayaran Rp 105.000 via BCA sudah kami terima. Pesanan sedang disiapkan dapur ya! 🙏
                    </p>
                    <div className="text-right text-[9px] text-slate-400">
                      12:41 ✓✓
                    </div>
                  </div>

                  {/* Status Card Otomatis */}
                  <div className="bg-amber-50 border border-amber-200/80 rounded-lg p-2 text-center text-[10px] text-amber-800 font-semibold shadow-2xs">
                    ⚡ Format order langsung terisi rapi, kasir tinggal konfirmasi transfer!
                  </div>

                </div>

                {/* Footer Input Bar WA */}
                <div className="bg-[#F0F2F5] p-2 flex items-center gap-2 border-t border-slate-200">
                  <div className="flex-1 bg-white h-7 rounded-full px-3 text-[10px] text-slate-400 flex items-center">
                    Ketik pesan...
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center text-white shrink-0">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>

            </div>

            {/* Floating Trust Pill: Terletak Presisi Tanpa Menutupi Konten */}
            <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:absolute sm:-bottom-4 sm:-left-3 bg-white p-2.5 sm:p-3 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs shrink-0">
                100%
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900 leading-tight">Anti Chat 'Ghosting'</p>
                <p className="text-[10px] text-slate-500">Hanya pembeli serius yang masuk ke chat WA</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
