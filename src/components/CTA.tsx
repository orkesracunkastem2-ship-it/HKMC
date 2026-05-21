'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const waLink =
    'https://wa.me/6281234567890?text=Halo%20HK%20Motorworks,%20saya%20ingin%20konsultasi%20build%20motor%20custom%20saya';

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-amber/3 to-obsidian pointer-events-none" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-amber/[0.04] blur-[200px] pointer-events-none" />

      {/* top / bottom rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />

      <div className="relative mx-auto max-w-[860px] px-4 sm:px-6 text-center">
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-amber font-semibold">
            Ready to Build
          </span>
        </motion.div>

        {/* headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-white tracking-[-0.025em] leading-[0.92]"
          style={{ fontSize: 'clamp(2.2rem, 7vw, 5rem)' }}
        >
          Your build starts
          <br />
          with a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-bright">
            message.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="mt-5 text-[1rem] sm:text-[1.1rem] text-steel-mid leading-relaxed max-w-[520px] mx-auto"
        >
          Skip the form. No inbox black holes.
          <br />
          Tap WhatsApp — we respond within hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-amber text-obsidian font-display font-bold text-base sm:text-lg px-8 sm:px-10 py-4 rounded no-underline transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_0_44px_rgba(255,107,0,0.55)] hover:bg-amber-bright w-full sm:w-auto"
          >
            <MessageCircle size={19} strokeWidth={2.2} />
            Kickstart Your Project via WhatsApp
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a
            href="tel:+6281234567890"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.04] border border-white/[0.08] text-steel-bright text-[0.9rem] font-medium px-6 py-4 rounded no-underline transition-all hover:border-amber/20 hover:text-amber hover:bg-amber/[0.04] w-full sm:w-auto"
          >
            Or call us — +62 812-3456-7890
          </a>
        </motion.div>

        {/* trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-text-muted"
        >
          No binding quotes until we meet your bike · Free consultation message
        </motion.p>
      </div>
    </section>
  );
}
