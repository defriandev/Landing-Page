/**
 * ============================================================================
 * META PIXEL (FACEBOOK PIXEL) CONFIGURATION & GROWTH TRACKING ENGINE
 * ============================================================================
 * 
 * PANDUAN PENGGUNAAN:
 * Ganti nilai 'YOUR_PIXEL_ID_HERE' di bawah ini dengan nomor Pixel ID asli 
 * yang Anda dapatkan dari Meta Events Manager (misal: '123456789012345').
 */
export const META_PIXEL_ID = 'YOUR_PIXEL_ID_HERE'; // <-- MASUKKAN NOMOR META PIXEL ID ANDA DI SINI

/**
 * Pengecekan aman apakah fungsi fbq tersedia di browser
 * (Melindungi dari crash jika user memasang AdBlocker / Brave Shields)
 */
export const isFbqAvailable = () => {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
};

/**
 * Eksekusi pengiriman event ke Meta Pixel secara aman
 * @param {string} eventName - Nama event standar atau kustom (e.g. 'ViewContent', 'Lead', 'PageView')
 * @param {object} params - Parameter data tambahan
 */
export const trackPixelEvent = (eventName, params = {}) => {
  if (isFbqAvailable()) {
    try {
      window.fbq('track', eventName, params);
      console.log(`[Meta Pixel] Event '${eventName}' sent:`, params);
    } catch (err) {
      console.warn(`[Meta Pixel] Error sending event '${eventName}':`, err);
    }
  } else {
    // Log development/fallback saat adblocker aktif atau script belum siap
    console.debug(`[Meta Pixel AdBlock/Inactive] Event '${eventName}' skipped:`, params);
  }
};

/**
 * Helper untuk melacak Event ViewContent
 * @param {string} contentName - Deskripsi konten yang dilihat (e.g. 'Landing Page UMKM', 'Pricing Section')
 * @param {object} extraParams - Parameter opsional
 */
export const trackViewContent = (contentName = 'Landing Page UMKM', extraParams = {}) => {
  trackPixelEvent('ViewContent', {
    content_name: contentName,
    content_type: 'product_group',
    currency: 'IDR',
    ...extraParams,
  });
};

/**
 * Handler Khusus Klik Tombol WhatsApp (Event: Lead)
 * 
 * Menjamin event terkirim ke Meta Pixel dengan aman sebelum pengguna 
 * dialihkan atau membuka aplikasi WhatsApp (aman dari pemotongan koneksi di mobile).
 * 
 * @param {React.MouseEvent|Event} e - Event click
 * @param {string} sectionOrPlanName - Nama bagian atau paket (e.g. 'Paket Bisnis', 'Hero Section')
 * @param {string} destinationUrl - Tautan https://wa.me/...
 */
export const handleWhatsAppClick = (e, sectionOrPlanName, destinationUrl) => {
  // Cegah aksi default sejenak agar data event pixel sempat terkirim (200ms delay aman)
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  // Format pesan event sesuai instruksi spesifikasi:
  // fbq('track', 'Lead', { content_name: 'Klik Tombol WhatsApp - [Nama Paket/Section]' });
  const eventPayload = {
    content_name: `Klik Tombol WhatsApp - ${sectionOrPlanName}`,
    lead_type: 'WhatsApp Chat',
    value: 0,
    currency: 'IDR',
  };

  trackPixelEvent('Lead', eventPayload);

  // Berikan jeda waktu singkat (200ms) untuk memastikan browser menyelesaikan
  // request beacon/XHR Meta Pixel sebelum user membuka tab atau aplikasi WhatsApp
  setTimeout(() => {
    if (destinationUrl) {
      window.open(destinationUrl, '_blank', 'noopener,noreferrer');
    }
  }, 200);
};

