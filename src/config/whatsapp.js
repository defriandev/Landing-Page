// Konfigurasi WhatsApp Terpusat
// Ubah nomor telepon WhatsApp di bawah ini sesuai kebutuhan Anda (format internasional tanpa tanda +)
export const WA_PHONE_NUMBER = "6281234567890";

export const WA_MESSAGES = {
  HERO: "Halo Admin, saya ingin konsultasi gratis pembuatan Landing Page untuk usaha saya.",
  NAVBAR: "Halo Admin, saya ingin konsultasi gratis pembuatan Landing Page untuk usaha saya.",
  FINAL_CTA: "Halo Admin, saya ingin konsultasi gratis pembuatan Landing Page untuk usaha saya.",
  FLOATING: "Halo Admin, saya ingin konsultasi gratis pembuatan Landing Page untuk usaha saya.",
  
  // Pesan WhatsApp otomatis dengan klaim Promo Diskon 50%
  STARTER: "Halo Admin, saya mau ambil promo diskon 50% untuk Paket Starter (Rp 249.500) untuk usaha saya. Masih ada slotnya?",
  BISNIS: "Halo Admin, saya mau ambil promo diskon 50% untuk Paket Bisnis (Rp 499.500). Usaha saya bergerak di bidang...",
  PRO: "Halo Admin, saya mau ambil promo diskon 50% untuk Paket Kustom / Pro untuk bisnis saya. Boleh info detailnya?",
  
  PORTFOLIO: (nama) => `Halo Admin, saya tertarik dengan konsep landing page seperti *${nama}*. Boleh konsultasi lebih lanjut?`,
};

/**
 * Menghasilkan link WhatsApp dinamis dengan pesan ter-encode
 * @param {string} message - Pesan yang akan dikirim
 * @returns {string} URL WhatsApp lengkap
 */
export const getWhatsAppLink = (message) => {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${WA_PHONE_NUMBER}?text=${encodedText}`;
};
