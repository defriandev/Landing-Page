import { WA_MESSAGES } from '../config/whatsapp';

export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Paket Starter',
    subtitle: 'Cocok untuk UMKM Baru',
    popular: false,
    originalNormalPrice: 'Rp 499.000',
    discountedPrice: 'Rp 249.500',
    discountLabel: 'Diskon 50%',
    description: 'Solusi hemat untuk mulai memiliki identitas website profesional dan menerima pesanan WhatsApp otomatis.',
    features: [
      'Maksimal 5 bagian halaman (Section)',
      'Desain rapi & estetik dari materi klien',
      'Gratis domain .my.id selama 1 tahun',
      'Tombol order langsung ke WhatsApp admin',
      'Pengerjaan cepat 3 hari kerja',
      '1x kuota revisi minor'
    ],
    ctaText: 'Ambil Promo Diskon 50% (Rp 249.500)',
    waMessage: WA_MESSAGES.STARTER,
    badgeText: null
  },
  {
    id: 'bisnis',
    name: 'Paket Bisnis',
    subtitle: 'Fokus Kejar Omzet & Iklan',
    popular: true,
    originalNormalPrice: 'Rp 999.000',
    discountedPrice: 'Rp 499.500',
    discountLabel: 'Diskon 50%',
    description: 'Pilihan paling ideal untuk mendongkrak penjualan online, siap pasang iklan, dan bebas pusing menyusun teks promosi.',
    features: [
      '7–10 bagian halaman lengkap & persuasif',
      'GRATIS dibuatkan kalimat promosi (Copywriting)',
      'Gratis domain populer .com selama 1 tahun',
      'Pemasangan Meta (FB/IG) & TikTok Pixel',
      'Pengerjaan profesional 5 hari kerja',
      '2x kuota revisi desain'
    ],
    ctaText: 'Klaim Promo Diskon 50% (Rp 499.500)',
    waMessage: WA_MESSAGES.BISNIS,
    badgeText: 'PALING LARIS'
  },
  {
    id: 'pro',
    name: 'Paket Kustom / Pro',
    subtitle: 'Skala Perusahaan & Agensi',
    popular: false,
    originalNormalPrice: 'Mulai Rp 1.999.000',
    discountedPrice: 'Mulai Rp 999.500',
    discountLabel: 'Diskon 50%',
    description: 'Dirancang khusus untuk skala bisnis menengah, brand berkembang, atau kebutuhan fitur dan animasi eksklusif.',
    features: [
      'Panjang halaman bebas sesuai kebutuhan',
      'Riset kompetitor mendalam & copywriting premium',
      'Desain eksklusif dengan animasi interaktif modern',
      'Integrasi sistem kustom (Katalog/API/Form lanjutan)',
      'Pengerjaan intensif 7–10 hari kerja',
      '3x kuota revisi menyeluruh'
    ],
    ctaText: 'Klaim Promo Diskon 50% Paket Pro',
    waMessage: WA_MESSAGES.PRO,
    badgeText: 'Solusi Lengkap'
  }
];
