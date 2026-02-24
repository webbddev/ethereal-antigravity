import Image from 'next/image';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&q=80',
    alt: 'A designer sketching UI/UX flows on a tablet',
  },
  {
    src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&q=80',
    alt: 'A vibrant color palette selection for the project',
  },
  {
    src: 'https://images.unsplash.com/photo-1516131206008-dd041a9764fd?w=800&h=600&fit=crop&q=80',
    alt: 'Typography choices and font pairings for the website',
  },
];

export default function DesignPage() {
  return (
    <main className='relative bg-white dark:bg-black text-black dark:text-white'>
      <section className='py-40'>
        <div className='container mx-auto px-6'>
          <h1 className='text-6xl md:text-8xl font-display uppercase tracking-[-0.05em] leading-[0.85] mb-8'>
            02 / Design
          </h1>
          <p className='text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-24'>
            This page delves into the design principles and aesthetic choices
            that shaped the immersive scroll experience. It covers UI/UX
            considerations, visual language, and the overall artistic direction.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {galleryImages.map((image, index) => (
              <div key={index} className='relative h-96 overflow-hidden group'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors' />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <a
              href='#'
              className='hover:text-black dark:hover:text-white transition-colors'
            >
              Contact
            </a>
          </div>
          <div className='text-zinc-400 dark:text-zinc-600 text-xs'>
            © 2026 Ethereal Moments. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
