'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle, Gauge, Cog, Wrench, Paintbrush, Hand, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { href: '#machines', label: 'Machines' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [open]);

  const waLink =
    'https://wa.me/6281234567890?text=Halo%20HK%20Motorworks,%20saya%20ingin%20konsultasi%20tentang%20build%20motor%20custom';

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.43, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-400 ${
          scrolled
            ? 'bg-obsidian/[0.94] backdrop-blur-xl border-b border-white/[0.055]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1200px] flex items-center justify-between px-4 sm:px-6 py-3.5">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 no-underline group"
          >
            <img 
              src="/images/logo-white.png" 
              alt="HK Motorworks Logo" 
              className="h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-display font-extrabold text-white text-[0.95rem] sm:text-[1rem] tracking-[0.01em] uppercase">
              Motorworks
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-9">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-[0.9rem] font-medium text-steel-dim no-underline py-1 transition-colors duration-200 hover:text-text-primary focus:text-amber"
              >
                {n.label}
                <span className="absolute -bottom-0 left-0 h-0.5 w-0 bg-amber transition-all duration-300 ease-out hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-amber text-obsidian text-[0.8rem] font-semibold px-4 py-2 rounded font-display tracking-tight no-underline transition-all hover:-translate-y-0.5 hover:bg-amber-bright hover:shadow-[0_0_30px_rgba(255,107,0,0.5)]"
            >
              <MessageCircle size={13} strokeWidth={2.2} />
              Consult via WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.035] text-steel-dim transition-colors hover:text-amber hover:border-amber/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/30"
            aria-label="Open menu"
          >
            <Menu size={18} strokeWidth={1.8} />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-obsidian/97 backdrop-blur-2xl flex flex-col"
          >
            {/* Close */}
            <div className="mx-auto max-w-[1200px] flex items-center justify-end px-4 py-4">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.035] text-steel-dim transition-colors hover:text-amber hover:border-amber/20"
                aria-label="Close menu"
              >
                <X size={18} strokeWidth={1.8} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-5 px-6">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.43, 1] }}
                  className="font-display font-extrabold text-[2.2rem] sm:text-[3rem] text-white no-underline tracking-tight hover:text-amber transition-colors"
                >
                  {n.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mx-auto max-w-[1200px] w-full px-4 pb-10 space-y-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-amber text-obsidian text-base font-bold py-3.5 rounded font-display no-underline no-underline hover:bg-amber-bright transition-colors"
              >
                <MessageCircle size={18} strokeWidth={2} />
                Consult via WhatsApp
              </a>
              <a
                href="tel:+6281234567890"
                className="flex items-center justify-center gap-2 bg-white/[0.05] text-steel-bright text-sm font-medium py-3 rounded border border-white/[0.07] no-underline hover:bg-white/[0.09] transition-colors"
              >
                <Phone size={15} strokeWidth={1.8} />
                +62 812-3456-7890
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
