'use client';

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className='relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#050505] pt-20 transition-colors duration-300'>
      {/* Top Navigation / Meta Info */}
      <div className='absolute top-0 w-full p-8 justify-between items-start z-20 hidden md:flex'>
        <div className='flex flex-col'>
          <span className='font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-500 mb-1'>
            Project
          </span>
          <span className='text-black dark:text-white font-display text-lg uppercase tracking-tighter transition-colors duration-300'>
            Ethereal v.01
          </span>
        </div>
        <div className='flex flex-col items-end text-right'>
          <span className='font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-1'>
            Location
          </span>
          <span className='text-black dark:text-white font-display text-lg uppercase tracking-tighter transition-colors duration-300'>
            Digital Void
          </span>
        </div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='relative flex flex-col items-center'>
            <motion.span
              initial={{ opacity: 0, scale: 2, filter: 'blur(40px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className='text-black/80 dark:text-white block font-display text-[22vw] leading-[0.75] uppercase tracking-[-0.05em] transition-colors duration-300'
            >
              Pure
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100, skewY: 10 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              // Added transition classes for the stroke and color
              className='block font-display text-[22vw] leading-[0.75] uppercase tracking-[-0.05em] text-transparent transition-all duration-1000'
              style={{
                // We use a CSS variable that we define in our globals.css or via a utility
                WebkitTextStroke: '1px var(--hero-stroke)',
              }}
            >
              Void
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='mt-12 flex flex-col items-center'
          >
            <p className='max-w-md text-sm font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300'>
              An exploration of negative space and the beauty of the unseen.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className='absolute inset-0 z-0 pointer-events-none overflow-hidden'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-emerald-500/5 dark:bg-emerald-500/5 rounded-full blur-[150px] transition-colors duration-300' />

        {/* Vertical Grid Lines */}
        <div className='absolute inset-0 flex justify-between px-8 opacity-10'>
          <div className='w-px h-full bg-black dark:bg-white transition-colors duration-300' />
          <div className='w-px h-full bg-black dark:bg-white hidden md:block transition-colors duration-300' />
          <div className='w-px h-full bg-black dark:bg-white hidden md:block transition-colors duration-300' />
          <div className='w-px h-full bg-black dark:bg-white transition-colors duration-300' />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className='absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4'
      >
        <span className='font-mono text-[9px] uppercase tracking-[0.5em] text-zinc-600 dark:text-zinc-400 transition-colors duration-300'>
          Scroll to Enter
        </span>
        <div className='w-px h-16 bg-gradient-to-b from-emerald-500 to-transparent' />
      </motion.div>
    </section>
  );
}
