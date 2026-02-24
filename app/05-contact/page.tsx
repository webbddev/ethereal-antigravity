'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { useState } from 'react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@ethereal.studio',
    href: 'mailto:hello@ethereal.studio',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (212) 555-0147',
    href: 'tel:+12125550147',
  },
  {
    icon: MapPin,
    label: 'Studio',
    value: '120 Digital Void, New York, NY 10001',
    href: '#',
  },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter / X', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

const team = [
  { name: 'Elara Voss', role: 'Creative Director' },
  { name: 'Marcus Hale', role: 'Lead Engineer' },
  { name: 'Sora Kim', role: 'Motion Designer' },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className='relative bg-white dark:bg-[#050505] text-black dark:text-white min-h-screen'>
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className='relative h-[60vh] min-h-[400px] flex items-end overflow-hidden bg-[#050505]'>
        {/* Background grid lines */}
        <div className='absolute inset-0 flex justify-between px-8 opacity-10 pointer-events-none'>
          <div className='w-px h-full bg-white' />
          <div className='w-px h-full bg-white hidden md:block' />
          <div className='w-px h-full bg-white hidden md:block' />
          <div className='w-px h-full bg-white' />
        </div>

        {/* Ambient glow */}
        <div className='absolute inset-0 z-0 pointer-events-none'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-emerald-500/5 rounded-full blur-[150px]' />
        </div>

        {/* Portrait image */}
        <div className='absolute inset-0 z-10'>
          <Image
            src='/contact-portrait.png'
            alt='Elara Voss – Creative Director'
            fill
            className='object-cover object-top opacity-30'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent' />
        </div>

        {/* Meta labels */}
        <div className='absolute top-8 left-8 z-20 hidden md:flex flex-col'>
          <span className='font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-500 mb-1'>
            Contact
          </span>
          <span className='font-display text-lg uppercase tracking-tighter text-white'>
            Ethereal Studio
          </span>
        </div>

        <div className='relative z-20 container mx-auto px-6 pb-16'>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className='font-display text-[14vw] md:text-[10vw] leading-[0.85] uppercase tracking-[-0.05em] text-white'
          >
            Let&apos;s
            <br />
            <span
              className='text-transparent'
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
            >
              Connect
            </span>
          </motion.h1>
        </div>
      </section>

      {/* ── Main Content ────────────────────────────────────────── */}
      <section className='container mx-auto px-6 py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32'>
          {/* Left – Portrait + Info */}
          <div>
            {/* Portrait card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className='relative mb-16 overflow-hidden'
            >
              <div className='relative h-[520px] overflow-hidden group'>
                <Image
                  src='/contact-portrait.png'
                  alt='Elara Voss – Creative Director at Ethereal Studio'
                  fill
                  className='object-cover object-top group-hover:scale-105 transition-transform duration-700'
                />
                {/* Corner label */}
                <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent'>
                  <p className='font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-500 mb-1'>
                    Creative Director
                  </p>
                  <p className='font-display text-2xl uppercase tracking-tighter text-white'>
                    Elara Voss
                  </p>
                </div>
                {/* Border overlay */}
                <div className='absolute inset-0 border border-white/10 group-hover:border-white/20 transition-colors' />
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='space-y-0 border-t border-zinc-100 dark:border-zinc-900'
            >
              {contactDetails.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className='group flex items-start gap-6 py-6 border-b border-zinc-100 dark:border-zinc-900 hover:border-black dark:hover:border-white transition-colors'
                >
                  <div className='w-10 h-10 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-black dark:group-hover:border-white group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all shrink-0'>
                    <item.icon className='w-4 h-4' />
                  </div>
                  <div>
                    <p className='font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-1'>
                      {item.label}
                    </p>
                    <p className='text-base font-display uppercase tracking-tight'>
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className='mt-12 flex gap-4'
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className='w-12 h-12 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all'
                >
                  <s.icon className='w-4 h-4' />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right – Form + Team */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className='inline-block px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-mono uppercase tracking-widest mb-8'>
                Send a message
              </span>
              <h2 className='font-display text-5xl md:text-6xl uppercase tracking-[-0.05em] leading-[0.85] mb-12'>
                Start a{' '}
                <span className='text-zinc-300 dark:text-zinc-700'>
                  project
                </span>{' '}
                <br />
                with us
              </h2>
            </motion.div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className='border border-emerald-500/40 bg-emerald-500/5 p-10 text-center'
              >
                <div className='w-12 h-12 mx-auto flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 mb-6'>
                  <ArrowRight className='w-5 h-5 text-emerald-500' />
                </div>
                <p className='font-display text-2xl uppercase tracking-tight mb-2'>
                  Message received
                </p>
                <p className='text-zinc-500 text-sm font-mono uppercase tracking-widest'>
                  We&apos;ll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className='space-y-0 border-t border-zinc-100 dark:border-zinc-900'
              >
                {/* Name */}
                <div className='py-6 border-b border-zinc-100 dark:border-zinc-900'>
                  <label className='block font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-3'>
                    Your Name
                  </label>
                  <input
                    required
                    type='text'
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder='e.g. Jordan Blake'
                    className='w-full bg-transparent border-0 outline-none font-display text-2xl uppercase tracking-tight placeholder:text-zinc-300 dark:placeholder:text-zinc-700 focus:ring-0'
                  />
                </div>

                {/* Email */}
                <div className='py-6 border-b border-zinc-100 dark:border-zinc-900'>
                  <label className='block font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-3'>
                    Email Address
                  </label>
                  <input
                    required
                    type='email'
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder='you@domain.com'
                    className='w-full bg-transparent border-0 outline-none font-display text-2xl uppercase tracking-tight placeholder:text-zinc-300 dark:placeholder:text-zinc-700 focus:ring-0'
                  />
                </div>

                {/* Message */}
                <div className='py-6 border-b border-zinc-100 dark:border-zinc-900'>
                  <label className='block font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-3'>
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder='Tell us about your project...'
                    className='w-full bg-transparent border-0 outline-none font-display text-2xl uppercase tracking-tight placeholder:text-zinc-300 dark:placeholder:text-zinc-700 focus:ring-0 resize-none'
                  />
                </div>

                <div className='pt-8'>
                  <motion.button
                    type='submit'
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className='group w-full flex items-center justify-between bg-black text-white dark:bg-white dark:text-black px-10 py-6 font-mono text-[11px] uppercase tracking-[0.3em] hover:shadow-2xl transition-shadow'
                  >
                    <span>Send message</span>
                    <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </motion.button>
                </div>
              </motion.form>
            )}

            {/* Team roster */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='mt-20 pt-12 border-t border-zinc-100 dark:border-zinc-900'
            >
              <span className='font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400'>
                The Team
              </span>
              <div className='mt-8 grid grid-cols-3 gap-4'>
                {team.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className='border border-zinc-100 dark:border-zinc-900 p-4 hover:border-black dark:hover:border-white transition-colors'
                  >
                    <div className='w-8 h-8 bg-zinc-100 dark:bg-zinc-900 mb-3' />
                    <p className='font-display text-sm uppercase tracking-tight leading-tight mb-1'>
                      {member.name}
                    </p>
                    <p className='font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400'>
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className='py-20 bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-white/10'>
        <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='font-display text-2xl uppercase tracking-tighter'>
            Ethereal
          </div>
          <div className='flex gap-8 text-zinc-500 text-sm uppercase tracking-widest'>
            <a
              href='#'
              className='hover:text-black dark:hover:text-white transition-colors'
            >
              Twitter
            </a>
            <a
              href='#'
              className='hover:text-black dark:hover:text-white transition-colors'
            >
              Instagram
            </a>
            <Link
              href='/05-contact/'
              className='hover:text-black dark:hover:text-white transition-colors'
            >
              Contact
            </Link>
          </div>
          <div className='text-zinc-400 dark:text-zinc-600 text-xs'>
            © 2026 Ethereal Moments. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
