'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gauge, Clock, Zap, Cog, MapPin, Phone } from 'lucide-react';

interface Bike {
  title: string;
  tag: string;
  engine: string;
  frame: string;
  hours: string;
  badge: string;
  img: string;
  tall?: boolean;
}

const bikes: Bike[] = [
  {
    title: 'CAFE RACER',
    tag: 'Timeless Speed',
    engine: '650cc Parallel-Twin',
    frame: 'Tube Steel Chassis',
    hours: '420 hrs build',
    badge: 'Signature Style',
    img: '/images/bike-cafe-1.jpg',
  },
  {
    title: 'SCRAMBLER',
    tag: 'Rough & Ready',
    engine: '500cc Single',
    frame: 'Hardtail Steel Twin',
    hours: '380 hrs build',
    badge: 'Off-Road Born',
    img: '/images/bike-scrambler-1.jpg',
  },
  {
    title: 'BOBBER',
    tag: 'Raw Minimal',
    engine: '1200cc V-Twin',
    frame: 'Drop-Frame Hardtail',
    hours: '550 hrs build',
    badge: 'Stripped & Rebored',
    img: '/images/bike-bobber-1.jpg',
    tall: true,
  },
  {
    title: 'BRAT STYLE',
    tag: 'Retro Wanderer',
    engine: '750cc Air-Cooled',
    frame: 'UJM Diamond',
    hours: '320 hrs build',
    badge: 'Street Legal',
    img: '/images/bike-brat-1.jpg',
  },
  {
    title: 'CHOPPER',
    tag: 'Long & Low',
    engine: '1600cc Big Twin',
    frame: 'Hardtail Extended',
    hours: '680 hrs build',
    badge: 'Full Scale Work',
    img: '/images/bike-chopper-1.jpg',
    tall: true,
  },
];

export default function Machines() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="machines"
      ref={ref}
      className="relative bg-surface-1 section-pad"
    >
      {/* subtle top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          <span className="section-label">The Machines</span>
          <h2 className="section-title text-white">
            Every bike is a
            <br />
            blank canvas.
          </h2>
          <p className="section-sub mt-4">
            Four disciplines. One obsession — turning iron into emotion.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bikes.map((bike, i) => (
            <motion.article
              key={bike.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.75,
                ease: [0.22, 1, 0.43, 1],
              }}
              className={`group relative overflow-hidden rounded-xl bg-surface-2 border border-white/[0.055] cursor-pointer transition-all duration-400 hover:border-amber/25 hover:translate-y-[-5px] hover:shadow-[0_18px_56px_rgba(0,0,0,0.5),0_0_20px_rgba(255,107,0,0.08)] focus-within:ring-2 focus-within:ring-amber/30 focus:outline-none ${
                bike.tall ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              {/* image wrapper */}
              <div className="relative w-full h-full aspect-[4/3] sm:aspect-auto overflow-hidden">
                {/* fixed ratio container */}
                <div
                  className={`relative ${
                    bike.tall ? 'h-[480px] sm:h-full' : 'h-[260px]'
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${bike.img})` }}
                  />

                  {/* inner shadow at bottom */}
                  <div className="absolute inset-0 pointer-events-none" />

                  {/* amber tint on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent group-hover:via-amber/5 transition-colors duration-500" />
                </div>

                {/* category badge (top-left) */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-obsidian/[0.75] backdrop-blur-md border border-amber/15 px-2.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-amber-bright">
                    {bike.badge}
                  </span>
                </div>

                {/* specs overlay (slides up on hover) */}
                <motion.div
                  initial={false}
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-obsidian/97 via-obsidian/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-amber font-semibold">
                        {bike.tag}
                      </span>
                      <h3 className="font-display font-extrabold text-white text-xl leading-tight mt-0.5">
                        {bike.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-steel-dim">
                      <Gauge size={13} />
                      <span className="font-mono text-[0.68rem] uppercase tracking-wide">
                        {bike.hours}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div>
                      <span className="font-mono text-[0.57rem] uppercase tracking-wider text-text-muted block mb-1">
                        Engine
                      </span>
                      <span className="font-mono text-[0.78rem] text-steel-bright">
                        {bike.engine}
                      </span>
                    </div>
                    <div>
                      <span className="font-mono text-[0.57rem] uppercase tracking-wider text-text-muted block mb-1">
                        Frame
                      </span>
                      <span className="font-mono text-[0.78rem] text-steel-bright">
                        {bike.frame}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
