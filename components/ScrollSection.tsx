'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function ScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  /**
   * SNAPPY CONFIGURATION
   * Container height reduced to 200vh for 50% less scrolling.
   */

  // 1. Expansion Phase (0% to 35%)
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.7, 1]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.35],
    ['40px', '0px'],
  );
  const imageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.35], [0, 1, 1]);

  // 2. Title Text (Phase 01)
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.35],
    [0, 1, 0],
  );
  const titleY = useTransform(scrollYProgress, [0.1, 0.35], [50, -50]);

  // 3. Subtitle Text (Phase 02)
  const subOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.6, 0.85, 0.95],
    [0, 1, 1, 0],
  );
  const subScale = useTransform(scrollYProgress, [0.45, 0.95], [0.95, 1.05]);

  return (
    <div
      ref={containerRef}
      className='relative h-[200vh] bg-white dark:bg-[#050505] transition-colors duration-1000'
    >
      <div className='sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden'>
        <motion.div
          style={{
            scale,
            borderRadius,
            opacity: imageOpacity,
          }}
          className='relative w-full h-full overflow-hidden shadow-2xl transition-all duration-1000'
        >
          <Image
            src='https://images.pexels.com/photos/764880/pexels-photo-764880.jpeg'
            alt='Immersive Background'
            fill
            className='object-cover'
            priority
            referrerPolicy='no-referrer'
          />

          {/* Dark Vignette Overlay */}
          <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60' />

          {/* Expansion Phase Text */}
          <motion.div
            style={{
              opacity: titleOpacity,
              y: titleY,
            }}
            className='absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-6'
          >
            <span className='font-mono text-[10px] uppercase tracking-[0.6em] text-emerald-400 mb-4 transition-colors duration-1000'>
              Phase 01
            </span>
            <h2 className='text-white font-display text-[15vw] uppercase tracking-[-0.05em] leading-none text-center'>
              Immersion
            </h2>
          </motion.div>

          {/* Full Screen Phase Text */}
          <motion.div
            style={{
              opacity: subOpacity,
              scale: subScale,
            }}
            className='absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-6'
          >
            <h3 className='text-white font-display text-4xl md:text-7xl uppercase tracking-tighter text-center max-w-4xl leading-tight transition-colors duration-1000'>
              The boundary between <br />
              <span className='text-emerald-500 italic'>physical</span> and{' '}
              <span className='text-zinc-400'>digital</span> <br />
              is fading.
            </h3>
          </motion.div>
        </motion.div>

        {/* Side Progress Indicator */}
        <div className='absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20'>
          {[0, 1, 2, 3].map((i) => (
            <ProgressItem key={i} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgressItem({ index, progress }: { index: number; progress: any }) {
  const height = useTransform(
    progress,
    [index * 0.25, (index + 1) * 0.25],
    ['0%', '100%'],
  );

  return (
    <motion.div className='w-1 h-8 bg-black/20 dark:bg-white/10 rounded-full overflow-hidden transition-colors duration-1000'>
      <motion.div style={{ height }} className='w-full bg-emerald-500' />
    </motion.div>
  );
}
