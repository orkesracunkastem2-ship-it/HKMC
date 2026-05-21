'use client';

import { MessageCircle, Phone, MapPin } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Machines', href: '#machines' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const waLink =
    'https://wa.me/6281234567890?text=Halo%20HK%20Motorworks,%20saya%20ingin%20konsultasi%20tentang%20build%20motor%20custom';

  return (
    <footer
      id="contact"
      className="relative bg-obsidian border-t border-white/[0.055] pt-14 pb-6"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Top — brand + info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-white/[0.03]">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex h-8 w-8 rounded bg-amber items-center justify-center font-display font-extrabold text-xs text-obsidian tracking-tight">
                HK
              </span>
              <span className="font-display font-extrabold text-white text-[1rem] tracking-[0.01em] uppercase">
                Motorworks
              </span>
            </div>
            <p className="text-sm text-steel-dim leading-relaxed max-w-[260px]">
              Classic custom motorcycles built by hand in Cikampek, Karawang —
              West Java.
            </p>
          </div>

          {/* Nav col */}
          <div>
            <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-amber font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 list-none">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-steel-dim no-underline transition-colors hover:text-amber focus:text-amber outline-none"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-amber font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 list-none">
              <li>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-steel-dim no-underline transition-colors hover:text-amber focus:text-amber outline-none"
                >
                  <MessageCircle size={13} strokeWidth={1.8} className="text-amber/70" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="tel:+6281234567890"
                  className="inline-flex items-center gap-2 text-sm text-steel-dim no-underline transition-colors hover:text-amber focus:text-amber outline-none"
                >
                  <Phone size={13} strokeWidth={1.8} className="text-amber/70" />
                  +62 812-3456-7890
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-steel-dim">
                  <MapPin size={13} strokeWidth={1.8} className="text-amber/70 flex-shrink-0" />
                  Cikampek, Karawang, West Java
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-[0.7rem] font-mono uppercase tracking-wider text-text-muted">
            © {new Date().getFullYear()} HK Motorworks · Cikampek, Karawang
          </p>
          <p className="text-[0.7rem] font-mono uppercase tracking-wider text-text-muted">
            Built with iron & intent ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
