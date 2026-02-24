import Image from 'next/image';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=600&fit=crop&q=80',
    alt: 'Abstract wireframe of a digital interface',
  },
  {
    src: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop&q=80',
    alt: 'Early-stage design sketches on a whiteboard',
  },
  {
    src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&q=80',
    alt: 'A mood board with various design inspirations',
  },
];

export default function ConceptPage() {
  return (
    <main className='relative bg-white dark:bg-black text-black dark:text-white h-screen'>
      <section className='py-40'>
        <div className='container mx-auto px-6'>
          <h1 className='text-6xl md:text-8xl font-display uppercase tracking-[-0.05em] leading-[0.85] mb-8'>
            01 / Concept
          </h1>
          <p className='text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-24'>
            This page details the core concept behind the immersive scroll
            experience. It covers the initial ideas, the problem it aims to
            solve, and the unique approach taken to engage users through
            cinematic storytelling.
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
