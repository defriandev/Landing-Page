import React from 'react';
import { PenTool, Smartphone, MessageSquareText, BarChart3, Check, ArrowRight, Sparkles } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../config/whatsapp';
import { handleWhatsAppClick } from '../utils/pixel';

export default function Solution() {
  const solutions = [
    {
      id: 1,
      icon: PenTool,
      badge: "Bebas Pusing Nulis",
      title: "Copywriting Dituliskan Lengkap oleh Tim",
      description: "Bingung merangkai kata promosi? Tim kami yang menyusun kalimat jualan yang to the point, menggugah selera pembeli, dan terbukti memicu orang menekan tombol pesan."
    },
    {
      id: 2,
      icon: Smartphone,
      badge: "Cepat Dibuka di 4G",
      title: "Loading Kilat (Di Bawah 3 Detik di HP)",
      description: "Lebih dari 90% pembeli online membuka lewat HP dengan kuota data. Halaman kami dijamin super ringan, bebas lag, dan tidak bikin pengunjung kabur karena lemot."
    },
    {
      id: 3,
      icon: MessageSquareText,
      badge: "Kasir Tinggal Konfirmasi",
      title: "Otomatis Format Order Masuk ke WhatsApp",
      description: "Saat pembeli memilih produk, tombol pemesanan langsung membuka chat WA Anda dengan format nama, pilihan menu/barang, dan alamat yang sudah terisi rapi."
    },
    {
      id: 4,
      icon: BarChart3,
      badge: "Siap Pasang Iklan",
      title: "Pemasangan Pixel Meta (FB/IG) & TikTok",
      description: "Sudah dilengkapi pelacak data pengunjung agar iklan berbayar Anda tidak boncos dan bisa ditargetkan kembali (retargeting) ke orang yang sudah mampir."
    }
  ];

  const solutionWaUrl = getWhatsAppLink(WA_MESSAGES.HERO);

  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Cara Kerja yang Masuk Akal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">
            Solusi Bikin Pembeli Langsung Siap Transfer, Bukan Sekadar Nanya-Nanya
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Landing page bukan sekadar website pajangan, melainkan asisten jualan otomatis yang memandu calon pembeli dari sekadar lewat di media sosial sampai mantap mentransfer uang.
          </p>
        </div>

        {/* 4 Kartu Solusi Bermakna (Tanpa Nomor 01 02 Abu-abu Khas Template AI) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Badge Manfaat Nyata */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-100 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-2.5 group-hover:text-[#2563EB] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#16A34A] gap-1.5">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>Garansi berfungsi optimal</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Konsultasi Praktis */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#0F172A]">
              Punya menu atau katalog foto yang masih berantakan di HP?
            </h4>
            <p className="text-sm text-[#475569]">
              Kirimkan saja file fotonya ke WhatsApp kami. Tim kami yang akan merapikan dan memilihkan layout terbaiknya.
            </p>
          </div>
          <a
            href={solutionWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleWhatsAppClick(e, 'Callout Rekomendasi Solusi', solutionWaUrl)}
            className="inline-flex items-center justify-center gap-2 px-6 min-h-[52px] rounded-lg bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm shrink-0 transition-colors shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <span>Tanya Rekomendasi Gratis</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
