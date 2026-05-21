'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench, Cog, Hammer, Paintbrush } from 'lucide-react';

const services = [
  {
    icon: <Wrench size={22} strokeWidth={1.6} />,
    title: 'Full Custom Build',
    desc: 'From concept to delivery. We blueprint, fab, and hand-build every bike from the ground up — track-ready or street-legal.',
    bullets: ['Custom blueprint', 'Powertrain engineering', 'Street register ready'],
  },
  {
    icon: <Cog size={22} strokeWidth={1.6} />,
    title: 'Engine Resto-Mod',
    desc: 'Blend original soul with modern performance. Precision boring, porting, and tuning without stripping heritage.',
    bullets: ['Cylinder re-boring', 'Cam/profiling', 'Ignition mapping'],
  },
  {
    icon: <Hammer size={22} strokeWidth={1.6} />,
    title: 'Fabrication & Welding',
    desc: 'Bespoke frames, hardtails, clip-ons, and custom exhaust headers — TIG welded to aerospace tolerances.',
    bullets: ['Custom frame', 'Hardtail conversion', 'TIG precision welds'],
  },
  {
    icon: <Paintbrush size={22} strokeWidth={1.6} />,
    title: 'Premium Paintwork',
    desc: 'Show-grade finishes: candy metallics, matte racers, vintage cream. Our booth handles silhouettes and panel-level texturing.',
    bullets: ['Candy metallics', 'Kandy pearl', 'Clear coat hardness'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-obsidian section-pad overflow-hidden"
    >
      {/* decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] rounded-full bg-amber/[0.02] blur-[200px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          <span className="section-label">Services</span>
          <h2 className="section-title text-white">
            Steel, sweat & discipline.
          </h2>
          <p className="section-sub mt-4">
            Four core services. No shortcuts. Every job earned on the bench.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => (
            <motion.article
              key={svc.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.43, 1],
              }}
              className="group relative bg-surface-2 border border-white/[0.055] rounded-xl p-6 transition-all duration-300 hover:border-amber/20 hover:translate-y-[-3px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              {/* top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* icon */}
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-amber/8 border border-amber/12 text-amber mb-5 group-hover:bg-amber/15 group-hover:border-amber/25 transition-colors duration-300">
                {svc.icon}
              </div>

              <h3 className="font-display font-bold text-white text-[1.05rem] leading-tight mb-2.5">
                {svc.title}
              </h3>
              <p className="text-sm text-steel-dim leading-relaxed mb-5">
                {svc.desc}
              </p>

              <ul className="space-y-1.5">
                {svc.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-[0.72rem] font-mono text-steel-dim"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber/45 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
