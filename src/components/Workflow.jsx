import React from 'react';
import { MessageSquare, FileText, Code2, Rocket, ArrowRight } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      step: '01',
      title: 'Pilih Paket & Konsultasi',
      description: 'Diskusikan kebutuhan usaha Anda via WhatsApp dan pilih paket promo yang paling pas.',
      icon: MessageSquare,
      time: 'Hari ke-1',
      link: '#harga',
      linkText: 'Lihat Paket'
    },
    {
      step: '02',
      title: 'Isi Form Data Usaha',
      description: 'Kirimkan foto produk/jasa, daftar harga, dan nomor WhatsApp melalui formulir singkat kami.',
      icon: FileText,
      time: 'Hari ke-1',
      link: '#form-brief',
      linkText: 'Isi Form Singkat'
    },
    {
      step: '03',
      title: 'Proses Pengerjaan (3–5 Hari)',
      description: 'Tim kami merancang tulisan promosi, desain visual, dan pengaturan teknis halaman Anda.',
      icon: Code2,
      time: 'Hari 2–4',
      link: null
    },
    {
      step: '04',
      title: 'Review & Siap Jualan',
      description: 'Anda cek hasilnya, kami revisi jika ada yang kurang pas, dan landing page siap menghasilkan orderan!',
      icon: Rocket,
      time: 'Hari ke-5',
      link: null
    }
  ];

  return (
    <section id="cara-kerja" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold tracking-wide uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>Alur Praktis Tanpa Ribet</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Terima Beres dalam 4 Langkah Mudah
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569]">
            Anda tidak perlu repot teknis apa pun. Cukup siapkan informasi usaha, biar tim kami yang kerjakan sisanya.
          </p>
        </div>

        {/* 4 Langkah Grid Horizontal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-dashed border-t-2 border-dashed border-blue-200 -translate-y-8 z-0" />

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative z-10 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Step Header: Circle badge & Time Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-[#475569]">
                      {item.time}
                    </span>
                  </div>

                  {/* Icon Mini */}
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                  <span>Langkah {idx + 1} dari 4</span>
                  {item.link && (
                    <a href={item.link} className="text-[#2563EB] hover:underline flex items-center gap-0.5">
                      <span>{item.linkText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
