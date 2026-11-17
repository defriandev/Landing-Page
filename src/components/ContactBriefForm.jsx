import React, { useState } from 'react';
import { Send, ShieldCheck, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../config/whatsapp';
import { handleWhatsAppClick } from '../utils/pixel';

export default function ContactBriefForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    category: 'Kuliner & Katering',
    packageInterest: 'Paket Bisnis (Paling Laris - Promo 50% Rp 499.500)',
    notes: '',
    hp_check: '', // Honeypot field (wajib kosong untuk manusia)
  });

  const [status, setStatus] = useState({
    submitted: false,
    isBot: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ========================================================
    // HONEYPOT ANTI-SPAM SECURITY CHECK
    // ========================================================
    // Jika kolom hp_check terisi (biasanya bot yang otomatis mengisi semua input form),
    // maka form diblokir seketika tanpa CAPTCHA yang merepotkan manusia.
    if (formData.hp_check && formData.hp_check.trim() !== '') {
      console.warn('[Security Honeypot] Spam bot terdeteksi mengisi kolom tersembunyi. Pengiriman diblokir.');
      setStatus({
        submitted: true,
        isBot: true,
        message: 'Aktivitas otomatis mencurigakan terdeteksi. Pengiriman dibatalkan.',
      });
      return;
    }

    // Validasi input minimal untuk pengguna manusia asli
    if (!formData.name.trim() || !formData.businessName.trim()) {
      setStatus({
        submitted: false,
        isBot: false,
        message: 'Mohon lengkapi Nama Anda dan Nama Usaha terlebih dahulu.',
      });
      return;
    }

    // Format teks pesan WhatsApp dari brief yang terverifikasi aman
    const formattedMessage = `Halo Admin, saya ingin kirim brief awal pembuatan Landing Page:
• *Nama Pemilik:* ${formData.name}
• *Nama Usaha:* ${formData.businessName} (${formData.category})
• *Paket Diminati:* ${formData.packageInterest}
• *Kebutuhan/Catatan:* ${formData.notes ? formData.notes : 'Konsultasi konsep & tata letak'}`;

    const waDestinationUrl = getWhatsAppLink(formattedMessage);

    // Kirim event Meta Pixel 'Lead' dan arahkan ke WhatsApp
    handleWhatsAppClick(e, 'Formulir Brief Usaha (Honeypot Protected)', waDestinationUrl);

    setStatus({
      submitted: true,
      isBot: false,
      message: 'Brief berhasil disusun! Anda sedang diarahkan ke WhatsApp admin...',
    });
  };

  return (
    <section id="form-brief" className="py-16 md:py-24 bg-white border-t border-slate-200/60 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Formulir Brief Cepat</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">
            Ceritakan Usaha Anda, Kami yang Siapkan Desainnya
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569]">
            Isi formulir singkat di bawah ini untuk konsultasi awal. Data Anda langsung terhubung aman ke WhatsApp admin kami tanpa ribet isi CAPTCHA.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm relative">
          
          {/* Honeypot Security Badge Indicator */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/80 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Dilindungi Honeypot Anti-Spam (Bebas Bot & Bebas CAPTCHA)
            </span>
            <span className="hidden sm:inline text-slate-400">Respon Cepat 1x24 Jam</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* ======================================================== */}
            {/* HIDDEN HONEYPOT FIELD (WAJIB KOSONG UNTUK MANUSIA)       */}
            {/* ======================================================== */}
            <div
              className="hidden"
              aria-hidden="true"
              style={{ display: 'none', position: 'absolute', left: '-9999px', opacity: 0 }}
            >
              <label htmlFor="hp_check">Jangan isi bidang ini:</label>
              <input
                type="text"
                id="hp_check"
                name="hp_check"
                value={formData.hp_check}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Grid 2 Kolom: Nama & Nama Usaha */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Nama Anda <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 bg-white text-sm text-slate-800 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Nama Bisnis / Toko <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  placeholder="Contoh: Dapur Sambal Mak Rina"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 bg-white text-sm text-slate-800 transition-all outline-none"
                />
              </div>
            </div>

            {/* Grid 2 Kolom: Kategori & Pilihan Paket */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="category" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Kategori Usaha
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 bg-white text-sm text-slate-800 transition-all outline-none cursor-pointer"
                >
                  <option value="Kuliner & Katering">Kuliner, Cafe & Katering</option>
                  <option value="Jasa Lokal">Jasa Lokal (Klinik, Salon, Bengkel, Kursus)</option>
                  <option value="Produk Fisik & Fashion">Produk Fisik, Skincare & Fashion</option>
                  <option value="Retail & Toko Kelontong">Retail & Toko Offline</option>
                  <option value="Lainnya">Lainnya / Konsultasi Dulu</option>
                </select>
              </div>

              <div>
                <label htmlFor="packageInterest" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Paket yang Diminati
                </label>
                <select
                  id="packageInterest"
                  name="packageInterest"
                  value={formData.packageInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 bg-white text-sm text-slate-800 transition-all outline-none cursor-pointer"
                >
                  <option value="Paket Starter (Promo 50% Rp 249.500)">Paket Starter (Diskon 50% - Rp 249.500)</option>
                  <option value="Paket Bisnis (Paling Laris - Promo 50% Rp 499.500)">Paket Bisnis (Paling Laris - Rp 499.500)</option>
                  <option value="Paket Kustom / Pro (Promo 50% Mulai Rp 999.500)">Paket Kustom / Pro (Diskon 50% - Mulai Rp 999.500)</option>
                  <option value="Belum Yakin (Ingin Diskusi Dulu)">Belum Yakin (Mau Diskusi Dulu)</option>
                </select>
              </div>
            </div>

            {/* Catatan / Kebutuhan Tambahan */}
            <div>
              <label htmlFor="notes" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                Ceritakan Singkat Produk atau Masalah Jualan Anda (Opsional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                placeholder="Contoh: Kami mau jualan paket tumpeng mini untuk area Bandung, butuh tombol kirim alamat dan rekening BCA."
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 bg-white text-sm text-slate-800 transition-all outline-none resize-none"
              />
            </div>

            {/* Pesan Feedback / Status Validasi */}
            {status.message && (
              <div
                className={`p-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 ${
                  status.isBot
                    ? 'bg-red-100 text-red-800 border border-red-200'
                    : status.submitted
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}
              >
                {status.isBot ? (
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                ) : status.submitted ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-green-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            {/* Tombol Submit Brief ke WhatsApp */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 min-h-[52px] rounded-xl font-bold text-sm sm:text-base text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.99] transition-all shadow-md shadow-green-600/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Brief & Mulai Konsultasi via WhatsApp</span>
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2.5">
                🔒 Informasi usaha Anda aman dan hanya digunakan untuk keperluan konsultasi pembuatan landing page.
              </p>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}

