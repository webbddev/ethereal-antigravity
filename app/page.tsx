import Hero from '@/components/Hero';
import ScrollSection from '@/components/ScrollSection';
import ContentSection from '@/components/ContentSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='relative'>
      <Hero />
      <ScrollSection />
      <ContentSection />
      <Footer /> 
    </main>
  );
}
