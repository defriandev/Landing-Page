import React, { useState } from 'react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../data/portfolioData';
import { MessageCircle, Check, Sparkles } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../config/whatsapp';
import { handleWhatsAppClick } from '../utils/pixel';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portofolio" className="py-16 md:py-24 bg-[#F8FAFC] border-y border-slate-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Niche Showcase & Studi Kasus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Cocok untuk Berbagai Jenis Usaha dan UMKM
          </h2>
          <p className="mt-3 text-base text-[#475569]">
            Lihat contoh implementasi tata letak landing page yang telah terbukti meningkatkan rasio konversi chat calon pembeli.
          </p>
        </div>

        {/* Tab Filter Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-2xl mx-auto">
          {PORTFOLIO_CATEGORIES.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-white text-[#475569] hover:bg-slate-100 hover:text-[#0F172A] border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const waUrl = getWhatsAppLink(WA_MESSAGES.PORTFOLIO(item.title));

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Image Preview with Overlay & Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 text-[#0F172A] backdrop-blur-sm shadow-xs">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Highlight Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#16A34A] text-white shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Rating / Metrik di Atas Gradient */}
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                    {item.rating}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Feature Checklist */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Fitur Utama Halaman:
                      </span>
                      {item.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button Pesan Serupa dengan Meta Pixel Tracking */}
                  <div className="pt-2">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleWhatsAppClick(e, `Portofolio: ${item.title}`, waUrl)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-50 hover:bg-[#16A34A] hover:text-white text-[#0F172A] font-bold text-xs sm:text-sm border border-slate-200 transition-colors group/btn cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#16A34A] group-hover/btn:text-white transition-colors" />
                      <span>Mau Dibuatkan Seperti Ini</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
