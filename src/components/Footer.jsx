import React from 'react';
import { Sparkles, MessageCircle, MapPin, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../config/whatsapp';
import { handleWhatsAppClick } from '../utils/pixel';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerWaUrl = getWhatsAppLink(WA_MESSAGES.HERO);

  return (
    <footer className="bg-[#0F172A] text-slate-400 py-12 md:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Kolom 1: Brand & Kredibilitas Nyata */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-yellow-300" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                UMKM<span className="text-[#2563EB]">Digital</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Studio kreatif & teknis spesialis pembuatan halaman penjualan (landing page) berkecepatan tinggi untuk pemilik bisnis kuliner, ritel, fashion, dan jasa lokal di seluruh Indonesia.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Workshop Tim: Jakarta Selatan & Bandung, Indonesia</span>
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan</a>
              <a href="#portofolio" className="hover:text-white transition-colors">Portofolio</a>
              <a href="#cara-kerja" className="hover:text-white transition-colors">Cara Kerja</a>
              <a href="#harga" className="hover:text-white transition-colors">Paket Promo 50%</a>
              <a href="#faq" className="hover:text-white transition-colors">Tanya Jawab (FAQ)</a>
            </div>
          </div>

          {/* Kolom 3: Kontak WhatsApp Langsung */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Konsultasi Langsung
            </h4>
            <p className="text-xs text-slate-400">
              Konsultasi santai via WhatsApp tanpa dipungut biaya:
            </p>
            <a
              href={footerWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleWhatsAppClick(e, 'Footer WhatsApp Link', footerWaUrl)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-green-900/30 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Chat WhatsApp Admin</span>
            </a>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Bisa Bayar via Rekening Bank Resmi & QRIS</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} UMKMDigital Indonesia. Seluruh hak cipta dilindungi undang-undang.</p>
          <p className="flex items-center gap-1">
            Bantu Usaha Lokal Naik Kelas Tanpa Beban Teknis
          </p>
        </div>

      </div>
    </footer>
  );
}
