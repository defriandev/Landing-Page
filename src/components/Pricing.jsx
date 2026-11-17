import React, { useEffect, useRef } from 'react';
import { PRICING_PLANS } from '../data/pricingData';
import { Check, MessageCircle, Sparkles, Shield, Flame, Clock } from 'lucide-react';
import { getWhatsAppLink } from '../config/whatsapp';
import { handleWhatsAppClick, trackViewContent } from '../utils/pixel';

export default function Pricing() {
  const pricingSectionRef = useRef(null);
  const hasTriggeredViewContent = useRef(false);

  // Tracking Otomatis: ViewContent saat pengguna scroll ke area bagian harga (Pricing Section)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggeredViewContent.current) {
          hasTriggeredViewContent.current = true;
          trackViewContent('Bagian Pilihan Paket Harga UMKM (Promo 50%)', {
            section: 'Pricing Section',
            content_category: 'Pricing Table Promo',
            promo: 'Diskon 50% Khusus 3 Pembeli Pertama',
          });
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (pricingSectionRef.current) {
      observer.observe(pricingSectionRef.current);
    }

    return () => {
      if (pricingSectionRef.current) {
        observer.unobserve(pricingSectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="harga"
      ref={pricingSectionRef}
      className="py-16 md:py-24 bg-[#F8FAFC] border-y border-slate-200/60 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* BANNER NOTIFIKASI PROMO DISKON 50% (RESPONSIF)          */}
        {/* ======================================================== */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 p-0.5 sm:p-1 shadow-md shadow-orange-500/15">
            <div className="bg-white rounded-[14px] px-4 py-3 sm:px-6 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 fill-red-600 animate-bounce" />
                </div>
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-red-600 text-white">
                      HOT PROMO
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-orange-500" /> Sisa 1 Slot Kuota
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-extrabold text-[#0F172A] mt-1 sm:mt-0.5">
                    🔥 PROMO KHUSUS 3 PEMBELI PERTAMA: <span className="text-red-600 underline decoration-red-400">Diskon 50% Setengah Harga!</span>
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                Klaim Sekarang
              </span>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Biaya Transparan & Sekali Bayar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">
            Sekali Bayar, Bebas Biaya Langganan Bulanan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
            Tidak ada potongan komisi per transaksi seperti di aplikasi marketplace. Uang hasil penjualan masuk <strong className="text-slate-900 font-semibold">100% utuh langsung ke rekening bank Anda</strong>.
          </p>
        </div>

        {/* 3 Kolom Kartu Paket Harga (Jarak Bersih & Spacing Presisi) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isHighlight = plan.popular;
            const waUrl = getWhatsAppLink(plan.waMessage);

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'border-2 border-[#2563EB] shadow-xl lg:-translate-y-2 z-20 ring-4 ring-blue-500/10'
                    : 'border border-slate-200 shadow-xs hover:shadow-md z-10'
                }`}
              >
                {/* Highlight Badge "PALING LARIS" (Posisi Bersih Tanpa Ketimpa Judul) */}
                {isHighlight && (
                  <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 z-30">
                    <span className="inline-flex items-center gap-1.5 bg-[#2563EB] text-white text-[11px] sm:text-xs uppercase tracking-wider font-extrabold py-1 px-4 rounded-full shadow-md shadow-blue-500/30 whitespace-nowrap">
                      <Sparkles className="w-3 h-3 text-yellow-300" />
                      {plan.badgeText}
                    </span>
                  </div>
                )}

                {/* Card Top: Header & Price */}
                <div className={`p-6 sm:p-7 ${isHighlight ? 'pt-8 sm:pt-9' : ''}`}>
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-[#0F172A]">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-[#475569] font-medium mt-0.5">
                        {plan.subtitle}
                      </p>
                    </div>
                    {plan.discountLabel && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-red-100 text-red-600 border border-red-200 shrink-0">
                        {plan.discountLabel}
                      </span>
                    )}
                  </div>

                  {/* Pricing Display */}
                  <div className="mt-5 pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs sm:text-sm text-slate-400 line-through font-semibold">
                        {plan.originalNormalPrice}
                      </span>
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
                        HEMAT 50%
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-[#16A34A] tracking-tight">
                        {plan.discountedPrice}
                      </span>
                    </div>
                    <p className="text-xs text-[#475569] mt-2 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-5 space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Semua yang Sudah Termasuk:
                    </span>
                    {plan.features.map((feature, idx) => {
                      const isBoldCopy = feature.includes('Copywriting');
                      return (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isHighlight ? 'bg-blue-100 text-[#2563EB]' : 'bg-green-100 text-[#16A34A]'
                          }`}>
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className={isBoldCopy ? 'font-bold text-[#0F172A] bg-blue-50 px-1 py-0.5 rounded' : ''}>
                            {feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Bottom: Button CTA */}
                <div className="p-6 sm:p-7 pt-0">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleWhatsAppClick(e, `${plan.name} (Promo 50%)`, waUrl)}
                    className={`w-full inline-flex items-center justify-center gap-2 min-h-[50px] rounded-lg font-bold text-xs sm:text-sm active:scale-[0.98] transition-all shadow-md cursor-pointer ${
                      isHighlight
                        ? 'bg-[#16A34A] hover:bg-[#15803D] text-white shadow-green-600/25 ring-2 ring-green-600/30'
                        : 'bg-[#2563EB] hover:bg-blue-700 text-white shadow-blue-500/20'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span className="text-center">{plan.ctaText}</span>
                  </a>
                  <p className="text-center text-[10px] sm:text-[11px] text-slate-400 font-medium mt-2.5">
                    Promo Terbatas • Chat WhatsApp Langsung
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Garansi Kepuasan & Dukungan Teknis */}
        <div className="mt-10 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2.5 text-xs sm:text-sm text-[#475569] font-medium bg-white py-3.5 px-6 rounded-2xl border border-slate-200/90 shadow-2xs">
          <Shield className="w-4 h-4 text-[#16A34A] shrink-0" />
          <span><strong>Garansi Serah Terima:</strong> Kami berikan tutorial video panduan ganti harga & foto sendiri secara mandiri tanpa harus bayar biaya admin bulanan.</span>
        </div>

      </div>
    </section>
  );
}
