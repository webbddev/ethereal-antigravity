'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  motion,
  AnimatePresence,
  easeOut,
  easeIn,
  cubicBezier,
} from 'framer-motion';
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
      transition: {
        duration: 0.4,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: easeIn,
        when: 'afterChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 py-4'>
      <div className='container mx-auto px-6 flex justify-between items-center'>
        <Link
          href='/'
          // UPDATED: Theme-aware logo color with 1s transition
          className='font-display text-2xl uppercase tracking-tighter text-black/75 dark:text-white/75 transition-colors duration-1000'
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
                    'inline-block text-zinc-500 text-sm uppercase tracking-widest transition-all duration-1000 ease-in-out',
                    'hover:text-black dark:hover:text-white hover:scale-105',
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            // UPDATED: Theme-aware icon color
            className='text-black dark:text-white transition-colors duration-1000 z-50 relative'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode='wait'>
        {isOpen && (
          <motion.div
            className='fixed inset-0 bg-white/90 dark:bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden'
            variants={menuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <motion.ul
              className='flex flex-col gap-8 text-center'
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
                exit: {
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.li key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      'relative inline-block text-zinc-500 text-2xl uppercase tracking-widest transition-all duration-1000 ease-in-out',
                      'hover:text-black dark:hover:text-white hover:scale-110',
                      'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-1000 hover:after:w-full',
                      {
                        'text-black dark:text-white after:w-full':
                          pathname === item.href,
                      },
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
