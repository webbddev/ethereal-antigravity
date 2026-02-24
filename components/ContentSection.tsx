'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'High Performance',
    description:
      'Optimized animations using hardware-accelerated transforms for buttery smooth transitions.',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description:
      'Built with modern security standards to ensure your data remains private and protected.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Deploy your experiences worldwide with edge-optimized delivery and low latency.',
  },
];

const editorialItems = [
  {
    label: '01 / Concept',
    title: 'The Vision',
    href: '/01-concept',
  },
  {
    label: '02 / Design',
    title: 'The Method',
    href: '/02-design',
  },
  {
    label: '03 / Tech',
    title: 'The Stack',
    href: '/03-the-stack',
  },
  {
    label: '04 / Result',
    title: 'The Impact',
    href: '/04-the-impact',
  },
];

export default function ContentSection() {
  return (
    <section className='relative bg-white dark:bg-black text-black dark:text-white overflow-hidden border-t border-black dark:border-white'>
      {/* Editorial Grid Header */}
      <div className='grid grid-cols-1 md:grid-cols-4 border-b border-black dark:border-white'>
        {editorialItems.map((item, index) => (
          <Link
            href={item.href}
            key={item.title}
            className={`p-8 flex flex-col justify-between h-64 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors ${
              index < 3 ? 'border-b md:border-b-0 md:border-r' : ''
            } border-black dark:border-white`}
          >
            <span className='font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500'>
              {item.label}
            </span>
            <h4 className='font-display text-2xl uppercase tracking-tighter'>
              {item.title}
            </h4>
          </Link>
        ))}
      </div>

      <div className='container mx-auto px-6 py-32'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className='inline-block px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-mono uppercase tracking-widest mb-6'>
                Manifesto
              </span>
              <h2 className='text-6xl md:text-8xl font-display uppercase tracking-[-0.05em] leading-[0.85] mb-8'>
                Crafting <br />
                <span className='text-zinc-300 dark:text-zinc-700'>
                  Digital
                </span>{' '}
                <br />
                Poetry
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-md leading-relaxed'
            >
              We don&apos;t just build websites. We create digital artifacts
              that resonate with the human spirit through motion and light.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='group flex items-center gap-3 bg-black text-white dark:bg-white dark:text-black px-10 py-5 rounded-full font-medium transition-all hover:shadow-2xl'
            >
              Start the Journey
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </motion.button>
          </div>

          <div className='grid grid-cols-1 gap-12'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='group p-8 border border-zinc-100 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-colors'
              >
                <div className='flex items-start gap-6'>
                  <div className='w-12 h-12 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors'>
                    <feature.icon className='w-5 h-5' />
                  </div>
                  <div>
                    <h3 className='text-xl font-display uppercase tracking-tighter mb-2'>
                      {feature.title}
                    </h3>
                    <p className='text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Side Label */}
      <div className='absolute left-0 top-1/2 -translate-y-1/2 h-full flex items-center pointer-events-none'>
        <span
          className='rotate-180 font-mono text-[10px] uppercase tracking-[1em] text-zinc-100 dark:text-zinc-800 whitespace-nowrap'
          style={{ writingMode: 'vertical-rl' }}
        >
          Ethereal Moments / 2026 Edition
        </span>
      </div>
    </section>
  );
}
