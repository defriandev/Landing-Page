import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles, ChevronRight } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../config/whatsapp';
import { handleWhatsAppClick } from '../utils/pixel';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Cara Kerja', href: '#cara-kerja' },
    { name: 'Paket Harga', href: '#harga' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navbarWaUrl = getWhatsAppLink(WA_MESSAGES.NAVBAR);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0F172A] flex items-center">
                UMKM<span className="text-[#2563EB]">Digital</span>
              </span>
              <span className="text-[10px] text-[#475569] font-medium tracking-wide -mt-1 uppercase">
                Landing Page Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#475569] hover:text-[#2563EB] font-medium text-sm transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action / CTA (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={navbarWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleWhatsAppClick(e, 'Sticky Navbar Desktop', navbarWaUrl)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] transition-all shadow-md shadow-green-600/20 text-sm h-[44px] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Konsultasi WA</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={navbarWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleWhatsAppClick(e, 'Mobile Navbar Icon', navbarWaUrl)}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-[#16A34A] text-white hover:bg-[#15803D]"
              aria-label="Chat WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#0F172A] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden border-b border-slate-200 bg-white shadow-xl ${
          isOpen ? 'max-h-[420px] opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col space-y-3 pt-2 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="flex items-center justify-between text-base font-semibold text-[#0F172A] hover:text-[#2563EB] py-2 border-b border-slate-100 transition-colors"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
          <div className="pt-2">
            <a
              href={navbarWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                handleLinkClick();
                handleWhatsAppClick(e, 'Mobile Drawer Menu', navbarWaUrl);
              }}
              className="w-full flex items-center justify-center gap-2.5 min-h-[52px] rounded-lg font-bold text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] transition-all shadow-md shadow-green-600/20 text-base cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Konsultasi WA Gratis Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
