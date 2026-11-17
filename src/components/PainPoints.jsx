import React from 'react';
import { XCircle, MessageSquareOff, HelpCircle, Flame, Users } from 'lucide-react';

export default function PainPoints() {
  const painPoints = [
    {
      id: 1,
      icon: MessageSquareOff,
      title: "Sindrom 'CLBK' (Chat Lama, Beli Kagak)",
      description: "Lagi repot goreng pesanan atau bungkus paket, ada chat masuk nanya harga, varian, dan lokasi. Pas dibalas lengkap panjang kali lebar, ujung-ujungnya cuma di-'Read' lalu hilang tanpa kabar."
    },
    {
      id: 2,
      icon: HelpCircle,
      title: "Calon Pembeli Malas Ubrak-Abrik Medsos",
      description: "Orang mau beli cepat, tapi foto menu, katalog harga, dan nomor rekening tercerai-berai di ratusan postingan Instagram atau video TikTok. Akhirnya mereka batal beli karena malas nyari."
    },
    {
      id: 3,
      icon: Flame,
      title: "Iklan Medsos Boncos Tanpa Arah",
      description: "Sudah keluar ratusan ribu buat boost post atau pasang iklan TikTok, tapi calon pembeli bingung cara ordernya karena cuma diarahkan ke bio link seadanya yang lambat dibuka."
    },
    {
      id: 4,
      icon: Users,
      title: "Kalah Bersaing sama Toko Sebelah yang Lebih Rapi",
      description: "Kompetitor punya halaman web bersih dengan foto jelas, daftar harga transparan, dan tombol pesan satu klik. Sementara usaha Anda masih kirim foto brosur manual satu per satu."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100/70 border border-red-200 text-[#EF4444] text-xs font-bold tracking-wide uppercase mb-4">
            <XCircle className="w-3.5 h-3.5" />
            <span>Realita Jualan Online Saat Ini</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">
            Apakah Usaha Anda Masih Mengalami Hal Ini Setiap Hari?
          </h2>
          <p className="mt-3 text-base text-[#475569]">
            Waktu Anda terlalu berharga untuk dihabiskan menjawab pertanyaan yang sama berulang kali. Ini masalah yang dialami 9 dari 10 pedagang:
          </p>
        </div>

        {/* Grid 2x2 Kartu Masalah Nyata */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-red-200 transition-all group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Accent red corner bar */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#EF4444]" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EF4444] flex items-center justify-center shrink-0 border border-red-100 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs text-red-500 font-semibold gap-1">
                  <span>Akibat: Konversi penjualan terbuang sia-sia</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
