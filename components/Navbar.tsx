'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, easeOut, easeIn } from 'framer-motion';
import clsx from 'clsx';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: '01 Concept', href: '/01-concept' },
    { name: '02 Design', href: '/02-design' },
    { name: '03 The Stack', href: '/03-the-stack' },
    { name: '04 The Impact', href: '/04-the-impact' },
    { name: '05 Contact', href: '/05-contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: '0%',
      transition: { duration: 0.3, ease: easeOut },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: easeIn },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 py-4'>
      <div className='container mx-auto px-6 flex justify-between items-center'>
        <Link
          href='/'
          className='font-display text-2xl uppercase tracking-tighter text-white/75 '
        >
          Ethereal
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-8'>
          <ul className='flex gap-8'>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={clsx(
                    'inline-block text-zinc-500 text-sm uppercase tracking-widest transition-all duration-1000',
                    'hover:text-white/75 hover:scale-105 dark:hover:text-white/75',
                    {
                      'text-black dark:text-white': pathname === item.href,
                    },
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden flex items-center gap-4'>
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 bg-white/80 dark:bg-black/50 backdrop-blur-xl flex flex-col items-center justify-center md:hidden'
            variants={menuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <button
              className='absolute top-4 right-6'
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            <motion.ul
              className='flex flex-col gap-8 text-center'
              initial='hidden'
              animate='visible'
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={clsx(
                      'relative inline-block text-zinc-500 text-sm uppercase tracking-widest transition-all duration-300',
                      'hover:text-black/75 hover:scale-105 dark:hover:text-white/75',
                      'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full',
                      {
                        'text-black dark:text-white after:w-full':
                          pathname === item.href,
                      },
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
