import Hero from '@/components/Hero';
import ScrollSection from '@/components/ScrollSection';
import ContentSection from '@/components/ContentSection';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ScrollSection />
      <ContentSection />
      
      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display text-2xl uppercase tracking-tighter">
            Ethereal
          </div>
          <div className="flex gap-8 text-zinc-500 text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-zinc-600 text-xs">
            © 2026 Ethereal Moments. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
