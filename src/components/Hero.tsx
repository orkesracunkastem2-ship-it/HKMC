'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Play, ArrowRight, Wrench } from 'lucide-react';

const motorcycleImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
  'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=1200&q=80',
  'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&q=80',
  'https://images.unsplash.com/photo-1568772585407-9a1775487c08?w=1200&q=80',
];

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const waLink =
    'https://wa.me/6281234567890?text=Halo%20HK%20Motorworks,%20saya%20ingin%20mulai%20build%20motor%20custom';

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* ── Background Layers ─────────────────────── */}
      {/* mesh gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-amber/[0.04] via-transparent to-obsidian" />
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-amber/[0.025] blur-[160px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-amber/[0.015] blur-[120px]" />
      </div>

      {/* dark overlay via grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Content ───────────────────────────────── */}
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-10 sm:pt-16 pb-24 w-full">
        {/* top metadata line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2.5 mb-10 sm:mb-14"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-amber animate-pulse" />
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-amber font-semibold">
            Cikampek, Karawang · West Java
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-text-primary tracking-[-0.025em] leading-[0.95]"
          style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
        >
          Crafting
          <br />
          Timeless{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-bright">
            Iron.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 max-w-[560px] text-[1.05rem] sm:text-[1.2rem] font-light text-steel-mid italic leading-relaxed"
        >
          Built by hand in{' '}
          <span className="font-semibold text-steel-bright">Cikampek</span>.
          {' '}We transform vintage souls into modern asphalt beasts —
          <span className="text-steel-bright font-medium">
            {' '}Cafe Racers, Choppers, Bobbers & Brat Styles
          </span>.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-14 flex flex-wrap items-center gap-4"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber text-obsidian font-display font-bold text-[0.9rem] sm:text-[0.95rem] px-6 sm:px-8 py-3 sm:py-3.5 rounded no-underline transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_0_36px_rgba(255,107,0,0.55)] hover:bg-amber-bright"
          >
            <MessageCircle size={16} strokeWidth={2} />
            Start Your Build
          </a>
          <a
            href="#machines"
            className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.09] text-steel-bright font-display font-semibold text-[0.9rem] px-6 py-3 rounded no-underline transition-all duration-200 hover:border-amber/20 hover:text-amber hover:bg-amber/[0.04]"
          >
            View Gallery
            <ArrowRight size={15} strokeWidth={2} />
          </a>
        </motion.div>

        {/* Stats pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 flex flex-wrap gap-2.5"
        >
          {[
            { icon: <Wrench size={12} />, label: 'Full Custom Builds' },
            { icon: <Play size={12} />, label: 'Resto-Mod' },
            { icon: <ArrowRight size={12} />, label: 'Fabrication & Welding' },
            { icon: <Wrench size={12} />, label: 'Premium Paintwork' },
          ].map((stat, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.07, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 bg-amber/[0.07] border border-amber/15 text-amber-bright font-mono text-[0.7rem] tracking-wide px-3.5 py-1.5 rounded-full"
            >
              {stat.icon}
              {stat.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* scrolling highlight rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/25 to-transparent" />
    </section>
  );
}
