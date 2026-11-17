import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faqData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../config/whatsapp';
import { handleWhatsAppClick } from '../utils/pixel';

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const faqWaUrl = getWhatsAppLink(WA_MESSAGES.HERO);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold tracking-wide uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Pertanyaan yang Sering Diajukan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Masih Ragu? Cek Jawaban Berikut
          </h2>
          <p className="mt-3 text-base text-[#475569]">
            Punya pertanyaan seputar layanan kami? Temukan jawaban langsungnya di bawah ini.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#2563EB]/40 bg-blue-50/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-[#2563EB]' : 'text-[#0F172A]'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <div
                  className={`transition-all duration-300 ease-in-out px-6 ${
                    isOpen ? 'max-h-72 opacity-100 pb-5' : 'max-h-0 opacity-0 pb-0 overflow-hidden'
                  }`}
                >
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed pt-1 border-t border-slate-100">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bantuan Tambahan dengan Meta Pixel Lead Tracking */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-sm sm:text-base text-[#0F172A]">
              Punya pertanyaan lain yang belum terjawab di sini?
            </h4>
            <p className="text-xs sm:text-sm text-[#475569]">
              Tim kami siap melayani dan menjelaskan detail teknis maupun non-teknis.
            </p>
          </div>
          <a
            href={faqWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleWhatsAppClick(e, 'FAQ Section Bantuan', faqWaUrl)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-[#0F172A] hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A] text-xs sm:text-sm font-bold transition-colors shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#16A34A]" />
            <span>Tanya Langsung ke Tim</span>
          </a>
        </div>

      </div>
    </section>
  );
}
