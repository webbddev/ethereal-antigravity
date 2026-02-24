import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import PageTransition from '@/components/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Immersive Scroll Experience',
  description:
    'A cinematic web experience featuring scroll-triggered image expansion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body
        className='bg-white   dark:text-white antialiased'
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScroll>
            <Navbar />
            <PageTransition>{children}</PageTransition>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
