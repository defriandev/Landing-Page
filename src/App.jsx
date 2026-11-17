import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Portfolio from './components/Portfolio';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import ContactBriefForm from './components/ContactBriefForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import { trackViewContent } from './utils/pixel';

export default function App() {
  // Tracking Otomatis: ViewContent saat Halaman Selesai Dimuat
  useEffect(() => {
    trackViewContent('Halaman Utama Landing Page UMKM', {
      page_title: document.title,
      page_path: window.location.pathname,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col font-body selection:bg-[#2563EB] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <Hero />

        {/* Section 2: Pain Points */}
        <PainPoints />

        {/* Section 3: Solution & Value Proposition */}
        <Solution />

        {/* Section 4: Portofolio / Niche Showcase */}
        <Portfolio />

        {/* Section 5: Alur Pemesanan */}
        <Workflow />

        {/* Section 6: Pilihan Paket Harga (dengan ViewContent saat scroll) */}
        <Pricing />

        {/* Section Khusus: Formulir Brief Cepat (Honeypot Anti-Spam Protected) */}
        <ContactBriefForm />

        {/* Section 7: FAQ Accordion */}
        <FAQ />

        {/* Section 8: Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button: WhatsApp (Fixed bottom-6 right-6 z-50) */}

      <FloatingWA />
    </div>
  );
}
