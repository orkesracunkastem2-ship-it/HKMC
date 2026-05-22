'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Hammer, Hand, Truck, Award } from 'lucide-react';

const facts = [
  {
    icon: <Hammer size={16} strokeWidth={1.7} />,
    label: 'Est. Cikampek',
    value: 'Garage-built since day one',
  },
  {
    icon: <Hand size={16} strokeWidth={1.7} />,
    label: 'Hand-Built',
    value: 'Zero CNC shortcuts',
  },
  {
    icon: <Truck size={16} strokeWidth={1.7} />,
    label: 'Nation-wide',
    value: 'Delivered across Indonesia',
  },
  {
    icon: <Award size={16} strokeWidth={1.7} />,
    label: 'Scopes Beyond',
    value: 'Works to all OEM standards',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-surface-1 section-pad overflow-hidden"
    >
      {/* top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* TXT */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Philosophy</span>
            <h2 className="section-title text-white mt-2 mb-5">
              Raw steel.{' '}
              <span className="text-amber">Precision tuning.</span>
            </h2>
            <p className="text-base sm:text-lg text-steel-mid leading-[1.9] mb-6">
              In a corner of{' '}
              <span className="font-semibold text-white">
                Cikampek, Karawang
              </span>
              , we don&apos;t cut corners — we cut metal. Every frame is
              measured. Every weld is scored. We build for the rider who
              feels each mile before it happens.
            </p>
            <p className="text-base sm:text-lg text-steel-mid leading-[1.9] mb-8">
              From{' '}
              <span className="text-amber font-semibold">Cafe Racers</span> to
              brutal{' '}
              <span className="text-amber font-semibold">Bobbers</span> — we
              respect the vintage soul while giving it modern horsepower.
              No template. No assembly line. Just craft.
            </p>

            {/* facts strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {facts.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.08,
                    duration: 0.5,
                  }}
                  className="flex items-start gap-2.5 rounded-lg bg-surface-2 border border-white/[0.055] p-3.5 transition-colors hover:border-amber/15"
                >
                  <span className="text-amber mt-0.5 flex-shrink-0">{f.icon}</span>
                  <div>
                    <span className="font-mono text-[0.57rem] uppercase tracking-[0.14em] text-text-muted block mb-0.5">
                      {f.label}
                    </span>
                    <span className="text-xs text-steel-bright leading-snug block">
                      {f.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.43, 1] }}
            className="relative rounded-2xl overflow-hidden border border-white/[0.07] group"
          >
            {/* Workshop photo frame */}
            <div
              className="w-full aspect-[4/5] rounded-2xl bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              style={{
                backgroundImage:
                  'url(/images/workshop-2.jpg)',
              }}
            />

            {/* top glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber/5 via-transparent to-obsidian/80" />

            {/* floating location badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2.5 bg-obsidian/[0.82] backdrop-blur-xl border border-amber/10 rounded-full px-4 py-2.5">
              <MapPin size={13} strokeWidth={1.9} className="text-amber" />
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-steel-bright">
                Cikampek, Karawang, Jabar
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
